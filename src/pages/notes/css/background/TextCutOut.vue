<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const notes = ref([
  {
    code: 'background-clip: text;',
    desc: '背景裁剪，只覆盖文字区域。\n2个 div 使用相同的背景图片，一个用蒙版遮盖，另一个进行背景裁剪。',
    lang: 'css'
  },
  {
    code: '-webkit-text-stroke: 1px #fff;',
    desc: '文字描边',
    lang: 'css'
  }
])

const imageUrl = `url(${getPublicImage('/images/10.jpg')})`
</script>

<template>
  <KeyPoint :notes="notes"></KeyPoint>

  <div class="container">
    <div class="text text-background">LONDON</div>
  </div>
</template>

<style lang="less" scoped>
@bgImage: v-bind('imageUrl');

.container {
  background-image: @bgImage;
  background-size: cover;
  background-position: center center;

  height: 400px;
  position: relative;

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, .5);

    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
  }
}

.text {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0px;

  font-size: 12vw;
  line-height: 1.5em;
  text-align: center;
}

.text-background {
  /** 使用相同的背景图片 */
  background-image: @bgImage;
  background-size: cover;
  background-position: center center;

  /** 文字镂空 */
  background-clip: text; /** 背景裁剪，只覆盖文字区域 */
  -webkit-text-stroke: 1px #fff; /** 文字描边 */
  color: transparent;
}
</style>