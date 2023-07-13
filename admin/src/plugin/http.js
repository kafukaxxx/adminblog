import Vue from 'vue'
import axios from 'axios'

let url = 'http://127.0.0.1:8000/api/v1'
axios.defaults.baseURL = url
axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
    return config
  })
  
  Vue.prototype.$http = axios
  
  export { Url }