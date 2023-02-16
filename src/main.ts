import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import '@/styles/tailwind.css'
import '@/styles/index.css'

//导入pinia
import { createPinia } from 'pinia'

//创建pinia实例
const pinia = createPinia()

const app = createApp(App)

//创建并挂载根实例
app.use(router)

//挂载pinia
app.use(pinia)
app.mount('#app')
