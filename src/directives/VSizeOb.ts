import { debounce } from "lodash-es";

const map = new WeakMap();

// 通过 ResizeObserver 监听元素尺寸变化
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const el = entry.target;      // entry.target 就是被监听的元素
    const handler = map.get(el);  // 取出回调函数
    if (handler) {
      const box = entry.borderBoxSize[0]
      const size = {
        width: box.inlineSize,
        height: box.blockSize
      }
      
      handler(size); // 调用回调函数
    }
  }
});

export default {
  beforeMount(el, binding) {
    // 监听元素的尺寸变化
    ob.observe(el, { box: "border-box" });

    // binding.value 是通过指令传入的参数，这里我们通过指令传入回调函数
    // 并为回调函数添加防抖
    const handler = debounce(binding.value, 200)
    map.set(el, handler)
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};