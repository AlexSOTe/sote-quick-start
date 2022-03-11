import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';
import 'ant-design-vue/dist/antd.css';
import './assets/style/global.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);

