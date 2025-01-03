import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
    },
  };
});
