import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { UserConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";

const config: UserConfig = {
  plugins: [
    react(),
    cjsInterop({
      dependencies: ["uniforms-unstyled", "uniforms-bridge-zod"],
    }),
    vike({ prerender: { partial: true } }),
  ],
};

export default config;
