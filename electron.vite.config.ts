import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig((_configEnv) => {
    return {
        main: {
            resolve: {
                alias: {
                    '@constant': resolve('src/constant')
                }
            },
            plugins: [externalizeDepsPlugin(), bytecodePlugin()]
        },
        preload: {
            resolve: {
                alias: {
                    '@constant': resolve('src/constant')
                }
            },
            plugins: [externalizeDepsPlugin()]
        },
        renderer: {
            resolve: {
                alias: {
                    '@renderer': resolve('src/renderer/src'),
                    '@constant': resolve('src/constant')
                }
            },
            plugins: [vue()]
        }
    }
})
