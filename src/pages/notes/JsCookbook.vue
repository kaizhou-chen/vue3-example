<template>
  <CookbookLayout :menu="menu"></CookbookLayout>
</template>

<script setup lang="ts">
import CookbookLayout from '@/pages/notes/components/CookbookLayout.vue'
import MenuItem from './MenuItem'

const menu = ref<Array<MenuItem>>([
  {
    label: '面试题',
    value: 'questions',
    children: [
      {
        label: '大整数相加',
        value: 'BigIntPlus'
      },
      {
        label: '漩涡型数组',
        value: 'Vortex'
      },
    ]
  },
])

onMounted(() => {
  const basePath = import.meta.env.VITE_BASE_PATH;
  if (basePath === '/') {
    menu.value.push({
      label: '自学课程',
      value: 'SelfStudy'
    })
  }
})
</script>

<style lang="less" scoped>

</style>