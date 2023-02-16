import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/styles/tailwind.css'
import '@/styles/index.less'

const app = createApp(App)
//创建并挂载根实例
app.use(router)
app.mount('#app')
