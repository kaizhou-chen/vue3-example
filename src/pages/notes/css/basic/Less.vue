<template>
  <KeyPoint title="each 循环" :notes="notes"></KeyPoint>
</template>

<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue';

const notes = ref([
  {
    code: `@area-list: A, B, C, D, E;
each(@area-list, {
  .item:nth-child(@{index}) {
    grid-area: @value;
  }
})`,
    desc: '',
  }
])
</script>

<style lang="less" scoped>

</style>