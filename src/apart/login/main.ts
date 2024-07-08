import { createApp } from 'vue'
import App from './App.vue'

// 导入 ElementPlus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入 所有图标，并命名为 Icons
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App);

// 通过遍历的方式注册所有svg组件，会牺牲一点点性能
for (let i in Icons) {
  // @ts-ignore
  app.component(i, Icons[i])
}

/** 安装插件 */
app.use(ElementPlus)   // ElementPlus
  .mount('#app')
