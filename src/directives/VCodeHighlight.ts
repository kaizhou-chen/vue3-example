import hljs from 'highlight.js'
import 'highlight.js/styles/arduino-light.css';

export default {
  beforeMount(el, binding) {
    let blocks = el.querySelectorAll('pre code');
    
    const highlight = (text?) => {
      blocks.forEach((code) => {
        // 删除高亮
        if (text !== null && text !== undefined) {
          code.innerHTML = text;
          delete code.dataset.highlighted
        }

        // 重新高亮
        hljs.highlightElement(code)
      })
    }
    highlight()

    const callback = binding.value
    if (callback) {
      callback(highlight)
    }
  }
};