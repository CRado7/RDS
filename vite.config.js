import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(), 
    viteImagemin({
      webp: {
        quality: 80, // adjust quality (0-100)
      },
      gifsicle: false,
      optipng: false,
      mozjpeg: false,
      svgo: false,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "_redirects", // file in your project root
          dest: ""           // copy to root of dist
        }
      ]
    })
  ],
});
