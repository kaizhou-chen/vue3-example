import { createApp } from 'vue'
import App from './App.vue'

// 导入 路由
import router from './router/router';

// 导入 pinia
import { createPinia } from 'pinia'

// 导入 ElementPlus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入 Virtual Scroller
// @ts-ignore
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App);

// 导入 所有图标，并命名为 Icons
import * as Icons from '@element-plus/icons-vue'

// 通过遍历的方式注册所有svg组件，会牺牲一点点性能
for (let i in Icons) {
  // @ts-ignore
  app.component(i, Icons[i])
}  

/** 安装插件 */
app.use(router)         // 路由
  .use(createPinia())   // pinia
  .use(ElementPlus)     // ElementPlus
  .use(VueVirtualScroller)
  .mount('#app');
