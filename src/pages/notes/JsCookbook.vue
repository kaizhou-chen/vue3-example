<template>
  <CookbookLayout :menu="menu"></CookbookLayout>
</template>

<script setup lang="ts">
import CookbookLayout from '@/pages/notes/components/CookbookLayout.vue'
import { addMenuItem } from '@/utils/menuUtil'
import MenuItem from './MenuItem'

const menu = ref<Array<MenuItem>>([
  {
    label: '面试题',
    value: 'questions',
    children: [
      // 语法
      {
        label: '语法',
        value: 'syntax',
        children: [
          {
            label: '解构',
            value: 'Deconstruction'
          },
          {
            label: '字符串比较',
            value: 'StringCompare'
          },
        ]
      },

      // 算法
      {
        label: '算法',
        value: 'algorithm',
        children: [
          {
            label: '大整数相加',
            value: 'BigIntPlus'
          },
          {
            label: '漩涡型数组',
            value: 'Vortex'
          },
          {
            label: '循环转递归',
            value: 'LoopToRecursion'
          },
        ]
      },

      // Promise
      {
        label: 'Promise',
        value: 'promise',
        children: [

        ]
      },
      
      // 异步任务
      {
        label: '异步任务',
        value: 'async',
        children: [
          {
            label: '给 fetch 添加超时功能',
            value: 'FetchWithTimeout'
          },
        ]
      }
    ]
  },
])

onMounted(() => {
  addMenuItem(menu.value, 'js-cookbook')
})
</script>

<style lang="less" scoped>

</style>