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
  addMenuItem(menu.value, 'js-cookbook')
})
</script>

<style lang="less" scoped>

</style>