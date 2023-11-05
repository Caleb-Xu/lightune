import { piniaPlugin } from './stores'
import { routerPlugin } from './routes'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(routerPlugin).use(piniaPlugin).mount('#app')
