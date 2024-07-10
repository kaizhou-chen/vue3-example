<script setup lang="ts">
import ShoppingCart from './keyframes/ShoppingCart.vue'
</script>

<template>
  <div>
    <div class="container">
      <ShoppingCart></ShoppingCart>
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