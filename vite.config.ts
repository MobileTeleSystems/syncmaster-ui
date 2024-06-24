import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        webfontDownload([
            "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700;900&display=swap",
            "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700&display=swap",
        ]),
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
