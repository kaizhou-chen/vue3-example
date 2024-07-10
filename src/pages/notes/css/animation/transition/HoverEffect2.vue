<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'

const list = ref([
  {
    src: getPublicImage('/images/10.jpg'),
    title: '火车',
  },
  {
    src: getPublicImage('images/12.jpg'),
    title: '自然',
  },
])
</script>

<template>
  <el-card>
    <template #header>
      <div style="display: flex; align-items: center;">
        <div>鼠标悬停</div>
        <div style="margin-left: auto;">文章导读</div>
      </div>
    </template>

    <div class="container">
      <div v-for="item in list" :key="item.title" class="card">
        <img :src="item.src" />
        <div class="info">
          <h1>{{ item.title }}</h1>
          <p>CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。</p>
          <button>查看详情</button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 312px;
}
.card {
  border-radius: 15px;
  background: white;
  position: relative;
  padding: 1.5rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgba(black, 0.5);

  transition: 0.4s ease-out;

  &:hover {
    transform: translateY(20px);

    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    opacity: 0;

    transition: 0.5s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;

    h1 {
      margin: 0px
    }

    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }

    button {
      padding: 0.6rem;
      outline: none;
      border: none;
      border-radius: 3px;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;

      &:hover {
        background: dodgerblue;
        color: white;
      }
    }
  }
}
</style>