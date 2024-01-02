import { createApp } from 'vue'
import router from './router'
// import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App).use(router).use(ArcoVue)
app.mount('#app')
