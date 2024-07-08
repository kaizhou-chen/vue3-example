<script setup lang="ts">
  import useContextMenu from './useContextMenu';
  import useViewport from './useViewport';
  import vSizeOb from '../../directives/VSizeOb';

  const props = withDefaults(defineProps<{
    menu: Array<any>
  }>(), {
    menu: [] as any
  });
  
  const emit = defineEmits(['select']);

  const containerRef = ref(null);
  const { x, y, showMenu } = useContextMenu(containerRef);
  const { vw, vh } = useViewport()

  const menuWidth = ref(0)
  const menuHeight = ref(0)

  const menuPosition = computed(() => {
    let left = x.value;
    let top = y.value;

    if (x.value > vw.value - menuWidth.value) {
      left = x.value - menuWidth.value
    }
    if (y.value > vh.value - menuHeight.value) {
      top = vh.value - menuHeight.value
    }

    return {
      left,
      top
    }
  })

  function handleSizeChange(e) {
    menuWidth.value = e.width;
    menuHeight.value = e.height;
  }

  function handleClick(item) {
    showMenu.value = false;
    emit('select', item);
  }
</script>

<template>
  <div ref="containerRef">
    <!-- 内容显示在插槽里 -->
    <slot></slot>

    <!-- 通过 Teleport 将菜单传送到 body 中  -->
    <Teleport to="body">
      <div v-if="showMenu" class="context-menu"
        v-size-ob="handleSizeChange" 
        :style="{ 
          left: menuPosition.left + 'px', 
          top: menuPosition.top + 'px' 
        }"
      >
        <div v-for="(item, i) in menu" class="menu-item"
          :key="item.label" 
          @click="handleClick(item)"
        >{{ item.label }}</div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="less" scoped>
.context-menu {
  position: fixed;
  z-index: 9999;

  background: rgb(230, 232, 235);
  border-radius: 4px;
  padding: 2px;
}

.menu-item {
  padding: 8px;
  min-width: 100px;

  &:hover {
    background-color: #CDD0D6;
    cursor: pointer;
  }
}
</style>