<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const notes = ref([
  {
    code: `grid-template-areas: 
  'A A B'
  'C D B'
  'C E E';`,
    desc: '定义区域'
  },
  {
    code: 'grid-area: A;',
    desc: '单元格指定自己所在的区域'
  }
])

const rotate = ref(false)
const buttonText = ref('开始动画')
const containerRef = ref()

function toggle() {
  rotate.value = !rotate.value;
  buttonText.value = rotate.value ? '停止动画' : '开始动画'

  const containerEl = containerRef.value
  if (rotate.value) {
    containerEl.classList.add('rotate')
  } else {
    containerEl.classList.remove('rotate')
  }
}
</script>

<template>
  <div style="height: 700px; display: flex; align-items: center; position: relative;">
    <div style="position: absolute; top: 0px; left: 0; width: 100%;">
      <KeyPoint :notes="notes"></KeyPoint>
      <el-button type="primary" @click="toggle" style="margin-top: 8px;">{{ buttonText }}</el-button>
    </div>

    <div ref="containerRef" class="grid-container">
      <div class="item">
        <img :src="getPublicImage(`/images/01.jpg`)">
      </div>
      <div class="item">
        <img :src="getPublicImage(`/images/02.jpg`)">
      </div>
      <div class="item">
        <img :src="getPublicImage(`/images/03.jpg`)">
      </div>
      <div class="item">
        <img :src="getPublicImage(`/images/04.jpg`)">
      </div>
      <div class="item">
        <img :src="getPublicImage(`/images/05.jpg`)">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.grid-container {
  width: 450px;
  aspect-ratio: 1;
  margin: 0 auto;

  /** 网格布局 */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 
    'A A B'
    'C D B'
    'C E E';

  --deg: 360deg; /** 定义变量，容器正向旋转 */
}

.item {
  overflow: hidden;
  border: 2px solid #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  width: 260%;
  height: 260%;
  object-fit: cover;

  --deg: -360deg; /** 定义变量，图片反向旋转 */
}

.grid-container.rotate, 
.grid-container.rotate .item img {
  animation: rotation 10s infinite linear;
}

@keyframes rotation {
  to {
    transform: rotate(var(--deg));
  }
}

/** 
 * 定义数组，用逗号分隔
 * 使用 each 循环
 * @{index} 为下标
 * @value   为值 
 */
@area-list: A, B, C, D, E;
each(@area-list, {
  .item:nth-child(@{index}) {
    grid-area: @value;
  }
})

/** 编译后的代码为 */
/**
.item:nth-child(1) {
  grid-area: A;
}
.item:nth-child(2) {
  grid-area: B;
}
.item:nth-child(3) {
  grid-area: C;
}
.item:nth-child(4) {
  grid-area: D;
}
.item:nth-child(5) {
  grid-area: E;
}
*/
</style>