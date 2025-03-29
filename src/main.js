// import { createApp } from 'vue'
// import App from './App.vue'
// import TDesign from 'tdesign-mobile-vue'
//
// // 必须引入的核心样式
// import 'tdesign-mobile-vue/es/style/index.css'
// // 可选的主题包（根据参考资料配置深色模式）
// import './assets/dark.css' // 新建文件包含资料中的 CSS 变量 [^2][^3]
//
//
//
//
// const app = createApp(App)
//
// // 注册 TDesign 组件
// app.use(TDesign, {
//   // 全局配置（可选）
//   globalConfig: {
//     classPrefix: 't' // 保持默认类名前缀
//   }
// })
//
// // 动态切换主题模式（可选）
// app.config.globalProperties.$setTheme = (mode) => {
//   document.documentElement.setAttribute('theme-mode', mode)
// }
//
// app.mount('#app')

import { createApp } from 'vue';
import TDesign from 'tdesign-mobile-vue';
import App from './app.vue';

// 引入组件库的少量全局样式变量
import 'tdesign-mobile-vue/es/style/index.css';
import '@/assets/theme.css'

const app = createApp(App);
app.use(TDesign);
app.mount('#app')