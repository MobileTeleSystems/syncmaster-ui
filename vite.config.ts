import react from "@vitejs/plugin-react";
import * as path from "path";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            src: path.resolve("src/"),
        },
    },
    plugins: [
        react(),
        visualizer({
            open: process.env.NODE_ENV !== "CI",
            filename: "./dist/stats.html",
        }),
    ],
    define: {
        "process.env": process.env,
    },
    server: {
        port: 8888,
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
