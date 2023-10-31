import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig((_configEnv) => {
    return {
        main: {
            plugins: [externalizeDepsPlugin(), bytecodePlugin()]
        },
        preload: {
            plugins: [externalizeDepsPlugin()]
        },
        renderer: {
            resolve: {
                alias: {
                    '@renderer': resolve('src/renderer/src')
                }
            },
            plugins: [vue()]
        }
    }
})
