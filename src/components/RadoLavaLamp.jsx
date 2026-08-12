import React, { useEffect, useRef } from "react";
import "../styles/RadoLavaLamp.css";

// ── Goo threshold — WebGL2 GLSL (PixiJS v8 uses WebGL2 by default) ──────────
// Mirrors SVG feColorMatrix: A_out = clamp(18*A − 8, 0, 1)
const GOO_FRAG = `
  in vec2 vTextureCoord;
  out vec4 finalColor;
  uniform sampler2D uTexture;

  void main() {
    vec4 c = texture(uTexture, vTextureCoord);
    float a = c.a;
    if (a < 0.001) { finalColor = vec4(0.0); return; }
    vec3 rgb = c.rgb / a;
    a = clamp(a * 18.0 - 8.0, 0.0, 1.0);
    finalColor = vec4(rgb * a, a);
  }
`;

// Passthrough vertex for the custom filter
const GOO_VERT = `
  in vec2 aPosition;
  out vec2 vTextureCoord;
  uniform vec4 uInputSize;
  uniform vec4 uOutputFrame;
  uniform vec4 uOutputTexture;

  vec4 filterVertexPosition(void) {
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0 / uOutputTexture.y) - 1.0;
    return vec4(position, 0.0, 1.0);
  }

  vec2 filterTextureCoord(void) {
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
  }

  void main() {
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
  }
`;

const BLOB_DEFS = [
  // Row 1 moved up (cy 100→72) so blobs reach the tops of the letterforms
  { cx: 100, cy: 80, r: 72, color: 0xE8FF3A, row: 1 },
  { cx: 240, cy: 90, r: 66, color: 0xF0EDEA, row: 1 },
  { cx: 380, cy: 85, r: 74, color: 0xC9FE58, row: 1 },
  { cx: 520, cy: 90, r: 68, color: 0xE8FF3A, row: 1 },
  { cx: 660, cy: 80, r: 72, color: 0xF0EDEA, row: 1 },
  { cx: 800, cy: 90, r: 66, color: 0xE8FF3A, row: 1 },
  { cx: 170, cy: 170, r: 66, color: 0xC9C4BC, row: 2 },
  { cx: 310, cy: 190, r: 70, color: 0xF0EDEA, row: 2 },
  { cx: 450, cy: 195, r: 64, color: 0xE8FF3A, row: 2 },
  { cx: 590, cy: 190, r: 68, color: 0x9FE000, row: 2 },
  { cx: 730, cy: 195, r: 66, color: 0xC9C4BC, row: 2 },
  { cx: 860, cy: 190, r: 60, color: 0xE8FF3A, row: 2 },
];

const DURATIONS = [7, 9, 8, 10, 7.5, 8.5, 6.5, 9.5, 7,   8,   9,   7.2];
const DELAYS    = [0,-1.5,-3,-4.5,-2, -5, -1,-3.5,-6,-2.5,-4, -0.5];

const KF_A = [
  { x:  0, y: 18, s: 1    }, { x:  7, y: -8, s: 1.1  },
  { x: -6, y:-30, s: 0.94 }, { x: -8, y:-10, s: 1.06 },
];
const KF_B = [
  { x:  0, y:-14, s: 1    }, { x: -7, y:  5, s: 0.96 },
  { x:  5, y: 18, s: 1.1  }, { x:  7, y:  2, s: 1    },
];

const smooth = t => t * t * (3 - 2 * t);

function sampleKF(kf, t) {
  const t4 = ((t % 1 + 1) % 1) * 4;
  const i  = Math.floor(t4) % 4;
  const n  = (i + 1) % 4;
  const lt = smooth(t4 - Math.floor(t4));
  return {
    x: kf[i].x + (kf[n].x - kf[i].x) * lt,
    y: kf[i].y + (kf[n].y - kf[i].y) * lt,
    s: kf[i].s + (kf[n].s - kf[i].s) * lt,
  };
}

export default function RadoLavaLamp() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let app = null;
    let cancelled = false;

    const init = async () => {
      try {
        // Dynamic import — works whether pixi.js is v7 or v8,
        // and won't hard-crash the page if it's missing
        const PIXI = await import("pixi.js");

        if (cancelled) return;

        const W  = wrap.offsetWidth;
        const H  = Math.round(W * (280 / 1000));
        const sc = W / 1000;

        // ── PixiJS v8: init() is async ─────────────────────────────────
        app = new PIXI.Application();
        await app.init({
          width:           W,
          height:          H,
          background:      0x0A0A0A,
          resolution:      Math.min(window.devicePixelRatio || 1, 2),
          autoDensity:     true,
          antialias:       false,
          preference:      "webgl",
        });

        if (cancelled) { app.destroy(true); return; }

        // v8 uses app.canvas instead of app.view
        const canvas = app.canvas ?? app.view;
        canvas.style.cssText = "width:100%;height:auto;display:block;";
        wrap.appendChild(canvas);

        // ── Blob container ─────────────────────────────────────────────
        const blobCont = new PIXI.Container();
        app.stage.addChild(blobCont);

        // BlurFilter — v8 accepts object or positional args
        let blurFilter;
        try {
          blurFilter = new PIXI.BlurFilter({ strength: 11 * sc, quality: 6 });
        } catch {
          blurFilter = new PIXI.BlurFilter(11 * sc, 6);
        }

        // Custom goo filter — try v8 GlProgram API first, fall back to v7
        let gooFilter;
        try {
          const { GlProgram, Filter } = PIXI;
          const glProgram = new GlProgram({ vertex: GOO_VERT, fragment: GOO_FRAG });
          gooFilter = new Filter({ glProgram, resources: {} });
        } catch {
          // v7 fallback: null vertex uses the default passthrough
          gooFilter = new PIXI.Filter(null, GOO_FRAG.replace(/\bin vec2\b/g,'varying vec2').replace(/\bout vec4 finalColor/,'').replace(/finalColor/g,'gl_FragColor').replace(/texture\(/g,'texture2D('));
        }

        blobCont.filters = [blurFilter, gooFilter];

        // ── Blobs ──────────────────────────────────────────────────────
        const blobs = BLOB_DEFS.map(({ cx, cy, r, color, row }, i) => {
          const g = new PIXI.Graphics();
          // v8 API: g.circle().fill() — v7 API: beginFill/drawCircle/endFill
          try {
            g.circle(0, 0, r * sc).fill(color);
          } catch {
            g.beginFill(color, 1);
            g.drawCircle(0, 0, r * sc);
            g.endFill();
          }
          g.x = cx * sc;
          g.y = cy * sc;
          blobCont.addChild(g);
          return { g, cx, cy, row, dur: DURATIONS[i], del: DELAYS[i] };
        });

        // ── Frame sprite: black canvas with RADO punched out ───────────
        const makeFrame = () => {
          if (cancelled) return;
          const fc  = document.createElement("canvas");
          fc.width  = W;
          fc.height = H;
          const ctx = fc.getContext("2d");
          ctx.fillStyle = "#0A0A0A";
          ctx.fillRect(0, 0, W, H);
          ctx.globalCompositeOperation = "destination-out";
          ctx.font         = `${Math.round(230 * sc)}px Anton, "Arial Black", sans-serif`;
          ctx.textAlign    = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle    = "#000";
          ctx.fillText("RADO", W / 2, H * 0.54);

          const tex = PIXI.Texture.from(fc);
          const spr = new PIXI.Sprite(tex);
          spr.width  = W;
          spr.height = H;
          app.stage.addChild(spr);
        };

        document.fonts?.ready
          ? document.fonts.ready.then(makeFrame)
          : setTimeout(makeFrame, 400);

        // ── Ticker ─────────────────────────────────────────────────────
        const t0 = performance.now();
        app.ticker.add(() => {
          if (cancelled) return;
          const elapsed = (performance.now() - t0) / 1000;
          blobs.forEach(({ g, cx, cy, row, dur, del }) => {
            const p = sampleKF(row === 1 ? KF_A : KF_B, (elapsed - del) / dur);
            g.x = (cx + p.x) * sc;
            g.y = (cy + p.y) * sc;
            g.scale.set(p.s);
          });
        });

      } catch (err) {
        console.error("RadoLavaLamp: PixiJS failed to initialise", err);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (app) {
        try {
          app.ticker.stop();
          app.destroy(true, { children: true, texture: true, baseTexture: true });
        } catch (_) {}
      }
    };
  }, []);

  return <div ref={wrapRef} className="lava-wrap" />;
}
