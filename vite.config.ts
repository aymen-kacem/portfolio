import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // On passe des options supplémentaires à Nitro pour forcer un build statique
  nitro: {
    preset: "static"
  }
});
