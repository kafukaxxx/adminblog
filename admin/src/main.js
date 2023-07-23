import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/antiui'
import './plugin/http'

createApp(App).use(router).mount('#app')
