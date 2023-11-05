import { Plugin } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: []
})

export const routerPlugin: Plugin = {
    install(app) {
        app.use(router)
    }
}
