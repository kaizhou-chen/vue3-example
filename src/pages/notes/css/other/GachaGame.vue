<script setup lang="ts">

</script>

<template>
  <div class="container">
    <!--
      --i 是定义的 CSS 变量
    -->
    <div class="card" style="--i: -4;">1</div>
    <div class="card" style="--i: -3;">2</div>
    <div class="card" style="--i: -2;">3</div>
    <div class="card" style="--i: -1;">4</div>
    <div class="card" style="--i: 0;">5</div>
    <div class="card" style="--i: 1;">6</div>
    <div class="card" style="--i: 2;">7</div>
    <div class="card" style="--i: 3;">8</div>
    <div class="card" style="--i: 4;">9</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.container .card {
  position: absolute;
  width: 240px;
  height: 360px;
  background-color: #5e5cfc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0);
  font-size: 8em;
  font-weight: 700;
  border: 10px solid rgba(0, 0, 0, .1);

  transition: .5S;
  transform-origin: 50% 100%;

  /** 色调旋转，调整颜色 */ 
  filter: hue-rotate(calc(var(--i) * 60deg));

  box-shadow: 0 15px 50px rgba(0, 0, 0, .1);
}

/** 鼠标悬浮时，卡片旋转 + 位移，使用 CSS 变量 */
.container:hover .card {
  transform: rotate(calc(var(--i) * 5deg))
             translate(calc(var(--i) * 120px), -50px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, .25);
  color: rgba(0, 0, 0, .25);
  cursor: pointer;
}

/** 激活状态的卡片 :active （鼠标在元素上按下，还没有松开）*/
.container .card:active {
  translate: calc(var(--i) * 20px) -50px;
  z-index: 999;
}

/** 
 * 1. 当某张卡片处于激活状态，则容器也为激活状态 :active
 * 2. 没有被激活的卡片 :not(:active)
 */
.container:active .card:not(:active) {
  background-color: #333;
}
</style>