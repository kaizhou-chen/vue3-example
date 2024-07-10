<template>
  <KeyPoint title="阴影 box-shadow" :notes="notes"></KeyPoint>
  <KeyPoint title="滤镜 drop-shadow" :notes="notes2" style="margin-top: 20px;"></KeyPoint>
</template>

<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue';

const notes = ref([
  {
    code: `/* offset-x | offset-y | blur-radius | color */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 2px 2px gold;

/* 多个阴影，用逗号分隔 */
box-shadow: 0 -2px 10px gray, 2px 0 10px gray;`,
    desc: `• inset: 默认阴影在边框外。使用 inset 后，阴影在边框内

• <b>offset-x</b>: 设置水平偏移量，正数则阴影位于元素右边，负数则阴影位于元素左边
• <b>offset-y</b>: 设置垂直偏移量，正数则阴影位于元素下面，负数则阴影位于元素上面
• <b>blur-radius</b>: 阴影模糊面积。值越大，模糊面积越大，阴影就越大越淡
• spread-radius: 阴影扩散。正数则阴影扩大，负数则阴影收缩
• <b>color</b>: 阴影颜色

如果 4 边都需要阴影，可以用逗号分隔，在 4 个方向分别设置阴影`
  },
  
])

const notes2 = ref([
  {
    code: `filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.05));`,
    desc: '也可以实现阴影效果'
  }
])
</script>

<style lang="less" scoped>

</style>