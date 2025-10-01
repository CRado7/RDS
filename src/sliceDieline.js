import * as THREE from "three";

export async function sliceDieline(src) {
  const img = await new Promise((resolve) => {
    const i = new Image();
    i.src = src;
    i.onload = () => resolve(i);
  });

  function crop(x, y, w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
    return new THREE.CanvasTexture(canvas);
  }

  // Each panel ~285 px wide, main height ~468 px
  const front  = crop(285, 150, 285, 468);
  const back   = crop(855, 150, 285, 468);
  const left   = crop(0,   150, 285, 468);
  const right  = crop(570, 150, 285, 468);
  const top    = crop(285, 0,   285, 150);
  const bottom = crop(285, 618, 285, 150);

  return { front, back, left, right, top, bottom };
}
