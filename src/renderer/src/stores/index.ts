import { Plugin } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export const piniaPlugin: Plugin = {
    install(app) {
        app.use(store)
    }
}
