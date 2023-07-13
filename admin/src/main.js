import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/antiui'

createApp(App).use(router).mount('#app')
