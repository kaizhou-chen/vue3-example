import { onMounted, onUnmounted, ref } from "vue";

export default function (containerRef) {
  const showMenu = ref(false);
  const x = ref(0);
  const y = ref(0);

  onMounted(() => {
    const div = containerRef.value;
    div.addEventListener("contextmenu", handleContextMenu);

    // 第三个参数设置为 true 表示事件句柄在捕获阶段执行
    window.addEventListener("click", closeMenu, true);
    // 处理 window 的 contextmenu 事件，用来关闭之前打开的菜单
    window.addEventListener("contextmenu", closeMenu, true);
  });

  onBeforeUnmount(() => {
    const div = containerRef.value;
    div.removeEventListener("contextmenu", handleContextMenu);
    window.removeEventListener("click", closeMenu, true);
    window.removeEventListener("contextmenu", closeMenu, true);
  });

  function closeMenu() {
    showMenu.value = false;
  }

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    showMenu.value = true;
    x.value = e.clientX;
    y.value = e.clientY;
  };

  return {
    showMenu,
    x,
    y,
  };
}