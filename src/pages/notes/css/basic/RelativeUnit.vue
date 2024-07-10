<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'
</script>

<template>
  <div class="container">
    <KeyPoint title="em" :notes="[{
      code: `/** 按就近原则，找到设置过字体大小的节点，作为相对节点 */
.parent {
  font-size: 16px;     /** 找到相对节点的字体大小 */
  line-height: 1.5em;  /** 实际行高为：1.5 * 16px，即：24px */
 
  .child {
    font-size: 2em;     /** 实际字体大小为：2 * 16px，即：32px */
  }
}`,
      desc: '',
      lang: 'css'
    }]"></KeyPoint>

<KeyPoint title="rem" :notes="[{
      code: `/** 以根节点，即 html 节点，作为相对节点 */
html {
  font-size: 16px;  /** 根节点的字体大小 */
}

.child {
  font-size: 2rem;  /** 实际字体大小为：2 * 16px，即：32px */
}`,
      desc: '',
      lang: 'css'
    }]"></KeyPoint>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}
</style>