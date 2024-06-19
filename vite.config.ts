import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        alias(),
        visualizer({
            open: process.env.NODE_ENV !== "CI",
            filename: "./dist/stats.html",
        }),
    ],
    resolve: {
        alias: {
            "@widgets": path.resolve(__dirname, "src/widgets"),
            "@entities": path.resolve(__dirname, "src/entities"),
            "@features": path.resolve(__dirname, "src/features"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@i18n": path.resolve(__dirname, "src/i18n"),
            "@shared": path.resolve(__dirname, "src/shared"),
            "@themes": path.resolve(__dirname, "src/themes"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    define: {
        "process.env": process.env,
    },
    server: {
        port: 3000,
        open: true,
    },
    base: "./",
    esbuild: {
        keepNames: true,
    },
    build: {
        sourcemap: true,
    },
});
