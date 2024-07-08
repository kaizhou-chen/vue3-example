<template>
  <TreeLayout :menu="menu" @tab-change="handleTabChange">
    <!-- tab 里展示的动态组件-->
    <component :is="componentName"></component>
  </TreeLayout>
</template>

<script setup lang="ts">
import TreeLayout from '@/layout/TreeLayout.vue'

const menu = ref([
  {
    label: '动态加载组件',
    value: 'dynamic',
    children: [
      {
        label: '表单页',
        value: 'form',
        children: [
          {
            label: '基础表单',
            value: 'BasicForm', // value 为组件的名称
          },
          {
            label: '多步骤表单',
            value: 'StepForm',
          },
        ],
      },
      {
        label: '表格页',
        value: 'table',
        children: [
          {
            label: '表格 + pinia',
            value: 'PiniaTable',
          },
          {
            label: '可编辑表格',
            value: 'EditableTable',
          },
        ],
      },
    ],
  },
])

const activeNode = ref()

const componentName = computed(() => {
  const node = activeNode.value;
  if (!node) {
    return
  }
  
  // 动态加载组件
  return loadComponent(node.value)
})

// 动态加载组件
const modules = import.meta.glob('@/pages/**/*.vue');

function loadComponent(name){
  const keys = Object.keys(modules)
  const path = keys.find(x => x.indexOf(name + '.vue') >= 0)

  if (path) {
    // @ts-ignore
    return defineAsyncComponent(modules[path])
  } else {
    return name
  }
}

function handleTabChange(node) {
  activeNode.value = node
}
</script>

<style lang="less" scoped>

</style>