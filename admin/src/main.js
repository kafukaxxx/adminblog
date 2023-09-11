import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/antiui'
import './plugin/http'
import './assets/css/style.css'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue/es'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
