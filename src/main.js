import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'


console.log("环境变量=>", import.meta.env)
const app = createApp(App)
// 使用ElementPlus组件库
app.use(ElementPlus, { szie: 'small' })


// 全局挂载变量 
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;

app.use(router).use(store).use(ElementPlus).mount('#app')