<template>
  <component :is="loadComponent(name)"></component>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string,
}>()

// 动态加载组件
const modules = import.meta.glob('@/pages/notes/**/*.vue');

function loadComponent(name){
  const keys = Object.keys(modules)
  const path = keys.find(x => x.indexOf(name + '.vue') >= 0)

  if (path) {
    // @ts-ignore
    return defineAsyncComponent(modules[path])
  } else {
    return 'div'
  }
}
</script>

<style lang="less" scoped>

</style>