<template>
  <p>clip-path 内容裁剪，只有裁剪的区域可见</p>
  <p>裁剪成圆形，circle：<b>{半径} at 圆心{x y}</b></p>

  <KeyPoint title="跟随鼠标移动" :notes="[
    {
      code: `clip-path: circle(80px at 0px 0px);`,
      desc: '修改圆心的坐标',
      lang: 'css'
    },
    {
      code: 'clip-path: circle(80px at 20px 30px);',
      desc: '',
      lang: 'css'
    }
  ]"></KeyPoint>

  <KeyPoint title="滚动切换文字" :notes="[
    {
      code: 'clip-path: circle(0px at left center)',
      desc: '修改圆的半径',
      lang: 'css'
    },
    {
      code: 'clip-path: circle(500px at left center)',
      desc: '',
      lang: 'css'
    }
  ]"></KeyPoint>

  <div class="container">
    <el-card class="show-case-card">
      <template #header>
        <div>裁剪圆形</div>
      </template>

      <div class="show-case">
        <div class="sample" :style="{
          '--image': 'url(' + getPublicImage(`/images/06.jpg`) + ')'
        }"></div>

        <div class="how-to">
          <div class="layer" :style="{
            'background-image': 'url(' + getPublicImage(`/images/06.jpg`) + ')',
            '--y': '130px',
            '--scale': '0.7'
          }"></div>
          <div class="layer" :style="{
            'background-color': 'rgba(0, 0, 0, 0.5)',
            '--y': '75px',
            '--scale': '0.8'
          }"></div>
          <div class="layer" :style="{
            'background-image': 'url(' + getPublicImage(`/images/06.jpg`) + ')',
            '--y': '0',
            '--scale': '1'
          }"></div>
        </div>
      </div>

      <p>裁剪区域设置背景，放在顶部，z-index 最大</p>
      <p>通过 clip-path 控制裁剪内容的大小，达到动画效果</p>
    </el-card>
    
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
        <div>滚动切换文字</div>
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
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const cityList = ['London', 'Paris', 'New York', 'Rome']

const sectionRef = ref()
const level_1 = ref(false)

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
 * 裁剪圆形
 */
.show-case {
  display: flex;

  /** 样例 */
  .sample {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-image: var(--image);

    &::after {
      background-size: cover;
      background-image: var(--image);

      z-index: 2;
      transition: 1s;
      clip-path: circle(0px at center center);
    }

    &:hover::after {
      clip-path: circle(200px at center center);
    }

    &::before {
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  /** 原理 */
  .how-to {
    width: 150px;
    height: 150px;
    margin-left: 50px;
    perspective: 500px; /** 增加景深 */

    &:hover .layer {
      transform: rotateX(45deg) 
                 translateY(var(--y)) 
                 scale(var(--scale));

      &:last-child {
        animation: open 3s linear infinite;
      }
    }
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
  }

  @keyframes open {
    from {
      clip-path: circle(0px at center center);
    }
    to {
      clip-path: circle(200px at center center);
    }
  }
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