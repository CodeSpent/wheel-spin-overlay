import { createApp } from 'vue';
import App from './App.vue';

// ElementPlus UI Framework
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Vue-Router
import router from './router';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
