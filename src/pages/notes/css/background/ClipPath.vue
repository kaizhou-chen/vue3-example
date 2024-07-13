<template>
  <div class="container">
    <div>

    </div>
    
    <el-card>
      <template #header>
        <div>跟随鼠标移动</div>
      </template>

      <div class="container list">
        <div v-for="item of 4" @mousemove="handleMouseMove" class="item" :style="{
            '--image': 'url(' + getPublicImage(`/images/0${item}.jpg`) + ')'
          }">
          <div class="content">{{ cityList[item - 1] }}</div>
        </div>
      </div>
    </el-card>
  </div>

  <div style="text-align: right; margin-top: 20px;">
    <el-text type="primary" style="font-size: 18px;">&#8595; 向下滚动，查看其他 demo &#8595;</el-text>
  </div>

  <!-- 为了使用 sticky 定位，将下面的内容传送到 body 元素里 -->
  <Teleport to="body">
    <el-card class="scroll-card">
      <template #header>
        <div>滚动放大</div>
      </template>

      <div class="section-box">
        <div class="title">Forest</div>
        <div class="section" ref="sectionRef">
          <div class="inner-title" :style="{
            'background-image': 'url(' + getPublicImage(`/images/04.jpg`) + ')'
          }">Forest</div>
        </div>
      </div>
    </el-card>

    <div style="height: 900px;"></div>
  </Teleport>
</template>

<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'

const sectionRef = ref()
const cityList = ['London', 'Paris', 'New York', 'Rome']

function handleMouseMove(e) {
  requestAnimationFrame(() => {
    const el = e.target;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--x', x + 'px')
    el.style.setProperty('--y', y + 'px')
  })
}

function handleScroll(e) {
  const y = window.scrollY - document.documentElement.clientHeight;
  let size = y * 2;
  size = size > 32 ? size : 0;
  sectionRef.value.style.clipPath = `circle(${size}px at left center)`;
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

/**
 * 跟随鼠标移动
 */
.list {
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
}
.item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #606266;
  overflow: hidden;

  .content {
    font-size: 3em;
    font-weight: bold;
    color: transparent;
    text-transform: uppercase;
    transform: rotate(-45deg);
    -webkit-text-stroke: 1px #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    z-index: 2;
    background-size: cover;
    background-image: var(--image);
    clip-path: circle(0px at 0 0);
  }

  &:hover::after {
    clip-path: circle(80px at var(--x) var(--y));
  }
}

/**
 * 滚动放大
 */
 .scroll-card {
  position: sticky;
  top: 0;
  z-index: 100;

  :deep(.el-card__body) {
    height: 100vh;
  }
 }
.section-box {
  position: relative;
  height: calc(100% - 105px);
  font-weight: bold;
  background-color: #606266;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #fff;
  clip-path: circle(0px at left center);
  z-index: 2;
}

.title, .inner-title {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  color: #409EFF;

  text-align: center;
  font-size: 20vw;
  z-index: 1;
}
.inner-title {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>