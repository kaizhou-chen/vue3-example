<script setup lang="ts">
  import ContextMenu from '@/components/ContextMenu/ContextMenu.vue';

  const choose1 = ref('')
  const choose2 = ref('')
  const choose3 = ref('')
</script>

<template>
  <div class="container">
    <ContextMenu class="block-1" 
      :menu="[
        { label: '添加' },
        { label: '编辑' },
        { label: '删除' },
        { label: '查看' },
        { label: '复制' },
      ]" 
      @select="choose1 = $event.label"
    >
      <h2>{{ choose1 }}</h2>
    </ContextMenu>

    <ContextMenu class="block-2" 
      :menu="[
        { label: '员工' },
        { label: '部门' },
        { label: '角色' },
        { label: '权限' },
        { label: '菜单' },
      ]" 
      @select="choose2 = $event.label"
    >
      <h2>{{ choose2 }}</h2>

      <ContextMenu class="block-3" 
        :menu="[
          { label: '菜单1' },
          { label: '菜单2' },
          { label: '菜单3' },
          { label: '菜单4' },
        ]" 
        @select="choose3 = $event.label"
      >
        <h2>{{ choose3 }}</h2>
      </ContextMenu>
    </ContextMenu>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: calc(100vh - 145px);
}

.block-1 {
  background-color: #a0cfff;
}
.block-2 {
  background-color: #b3e19d;
  position: relative;
}
.block-3 {
  background-color: #fab6b6;
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0px;
  z-index: 1;
}
</style>