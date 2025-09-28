import { createApp } from 'vue'
import TDesign from 'tdesign-mobile-vue';
import App from './App.vue';
import 'tdesign-mobile-vue/es/style/index.css';

const app = createApp(App);
app.use(TDesign);
app.mount('#app')
