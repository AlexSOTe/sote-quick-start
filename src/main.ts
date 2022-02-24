import { createApp } from 'vue';
import App from './App.vue';
import NoToken from './components/shared/NoToken.vue';
import router from './router/router';
import { store } from './store';
import 'vant/lib/index.css';
import './assets/style/global.scss';
import './assets/style/vant.cover.scss';
import { CheckHasToken } from './utils/tools';

let EntryComponent = CheckHasToken() ? App : NoToken;
const app = createApp(EntryComponent);
app.use(router);
app.use(store);
app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);

