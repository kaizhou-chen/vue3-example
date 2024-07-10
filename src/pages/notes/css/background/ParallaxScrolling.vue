<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const notes = ref([
  { 
    code: 'background-attachment: fixed;', 
    desc: '背景相对于视口固定，不会随着元素的内容滚动。\n通过图文混合排布，实现滚动视差。'
  }
])

function getBackground(image) {
  return {
    'background-image': `url(${getPublicImage(image)})`
  }
}
</script>

<template>
  <KeyPoint :notes="notes"></KeyPoint>

  <div>
    <section>Header</section>
    <section class="fixed-img" :style="getBackground('/images/10.jpg')">IMG1</section>
    <section>Content1</section>
    <section class="fixed-img" :style="getBackground('/images/11.jpg')">IMG2</section>
    <section>Content2</section>
    <section class="fixed-img" :style="getBackground('/images/12.jpg')">IMG3</section>
    <section>Footer</section>
  </div>
</template>

<style lang="less" scoped>
section {
  height: 500px;
  line-height: 100%;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  text-align: center;
  font-size: 20vh;
}

.fixed-img {
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>