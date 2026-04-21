import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        base: mode === 'production' ? env.VITE_BASE_PATH || '/el/' : '/',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [react(), svgr()],
        css: {
            postcss: './postcss.config.js',
        },
        server: {
            port: 3000,
        },
    }
})
