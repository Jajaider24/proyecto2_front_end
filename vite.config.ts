// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@models": fileURLToPath(new URL("./src/models", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
  server: {
    host: true, // Permite que sea accesible desde otros dispositivos en tu red
    port: 3000, // Puedes cambiar el puerto si deseas
    open: true, // Abre automáticamente el navegador
  },
});
