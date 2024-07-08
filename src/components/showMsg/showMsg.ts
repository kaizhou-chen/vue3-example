import { createApp } from 'vue'
import { ElCard, ElButton } from 'element-plus'

import MessageCard from './MessageCard.vue'

export default function showMsg(message, title?, clickHandler?: (close) => void) {
  // createApp 的第 2 个参数，向组件传递 props
  const app = createApp(MessageCard, {
    message,
    title,
    // MessageCard 组件用 emit('click') 触发事件
    // 在这里，用 onClick 监听事件
    onClick() {
      const close = () => {
        app.unmount();  // 销毁组件
        div.remove();   // 删除元素
      }

      if (clickHandler) {
        clickHandler(close)
      } else {
        close()
      }
    }
  })

  // 在body上添加元素
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 手动注册，在命令式组件里要用到的其他组件
  app.component('el-card', ElCard)
  app.component('el-button', ElButton)

  // 挂载组件
  app.mount(div)
}