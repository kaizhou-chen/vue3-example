<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'

const imageList = ref<any>([])
const cartRef = ref()

onMounted(() => {
  for (let index = 0; index < 6; index++) {
    const path = getPublicImage(`/images/0${index + 1}.jpg`)
    imageList.value.push(path)
  }
})

function handleClick(e) {
  const imageEl = e.target
  const cartEl = cartRef.value
  moveToCart(imageEl, cartEl, e.clientY, e.clientX)
}

function moveToCart(imageEl, cartEl, top, left) {
  const rect = cartEl.getBoundingClientRect();

  const div = document.createElement('div')
  div.classList.add('move-to-cart')
  div.style.top = top + 'px'
  div.style.left = left + 'px'
  div.style.setProperty('--x', (rect.left - left) + 'px');

  const item = document.createElement('div')
  item.classList.add('item')
  item.style.setProperty('--y', (rect.top - top) + 'px');

  const img = imageEl.cloneNode();
  item.appendChild(img);
  div.appendChild(item);

  document.body.appendChild(div)

  requestAnimationFrame(() => {
    setTimeout(() => {
      div.remove();
    }, 1500)
  })
}
</script>

<template>
  <el-card style="position: relative;">
    <template #header>
      <div>
        购物车 - 
        <el-text size="small">点击图片，添加到购物车</el-text>
      </div>
    </template>

    <div class="container">
      <div v-for="item in imageList" class="card" @click="handleClick">
        <img :src="item" />
      </div>
    </div>

    <div ref="cartRef" class="shopping-card">
      <el-icon><ShoppingCart /></el-icon>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

.card {
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
  }
}

.shopping-card {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 20;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F56C6C;

  text-align: center;
  font-size: 36px;
  line-height: 3.7rem;
  color: #fff;
}
</style>

<!-- 动画效果，全局样式 -->
<style lang="less">
.move-to-cart {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  /** 父元素向右移动，带着子元素一起向右移动 */
  animation: moveX 1s linear forwards;

  .item {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px solid #fff;
    overflow: hidden;

    /** 子元素做抛物线运动，模拟添加到购物车的动画 */
    animation: moveY 1s cubic-bezier(0.55, 0, 0.85, 0.36) forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@keyframes moveX {
  to {
    transform: translateX(var(--x)); /** 用变量来控制位移量 */
  }
}

@keyframes moveY {
  to {
    transform: translateY(var(--y));
  }
}
</style>