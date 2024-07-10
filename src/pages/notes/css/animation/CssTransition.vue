<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'

import HoverEffect1 from './transition/HoverEffect1.vue'
import HoverEffect2 from './transition/HoverEffect2.vue'
import AutoHeight from './transition/AutoHeight.vue'

const notes = ref([
  {
    code: 'transition: 0.4s;',
    desc: '使用过渡动画的元素，需要设置过渡时间'
  },
  {
    code: 'object-fit: cover;',
    desc: '图片的高度铺满，宽度等比例缩放，超出容器则裁剪'
  }
])
</script>

<template>
  <div>
    <KeyPoint :notes="notes"></KeyPoint>

    <!-- 鼠标悬停 -->
    <div class="container">
      <HoverEffect1></HoverEffect1>
      <HoverEffect2></HoverEffect2>
      <AutoHeight></AutoHeight>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 12px;
}
</style>