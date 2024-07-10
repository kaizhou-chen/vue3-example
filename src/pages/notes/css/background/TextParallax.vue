<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text">2024，万事可期</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 400px 0;
  text-align: center;
  font-size: 10em;
}

.text {
  /** 渐变背景色，从红色到透明 */
  background: linear-gradient(to bottom, #fe4e00 50%, #fff 50%);
  background-position: center center;
  background-size: 100vw 100vh;
  background-attachment: fixed; /** 背景相对视口固定 */
  background-clip: text;        /** 背景裁剪 */

  color: transparent;
  -webkit-text-stroke: 1px #fe4e00;
}
</style>