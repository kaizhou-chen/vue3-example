<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'
</script>

<template>
  <KeyPoint :notes="[{
    code: 'clip-path',
    desc: '使用 clip-path 裁剪出六边形',
    lang: 'css'
  }]"></KeyPoint>

  <div class="container">
    <div v-for="(item, rowIndex) in 5" class="row">
      <div v-for="(item, index) in 10" class="item" :class="['item_' + rowIndex + '-' + index]">
        <div class="path"></div>
      </div>
    </div>
  </div>

  <ul>
    参考文档
    <li>
      <el-link href="https://www.bilibili.com/video/BV1qt42177SZ/" target="_blank">https://www.bilibili.com/video/BV1qt42177SZ/</el-link>
    </li>
    <li>
      <el-link href="https://tools.jb51.net/code/css3path" target="_blank">clip path 生成工具</el-link>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@n: 10; /** 单元格数量 */
@width: 800px;
@size: calc(@width / @n); /** 每个单元格的尺寸，宽高相同 */

.container {
  width: @width;
  margin-top: 20px;
}

.row {
  display: flex;
  margin-top: calc(@size / -6); /** 动态计算顶部边距 */

  &:nth-child(even) {
    margin-left: calc(@size / -2); /** 偶数行，向左偏移 0.5 个单元格的宽度 */
  }

  &:first-child {
    margin-top: 0;
  }
}

.item {
  width: @size; /** 单元格尺寸 */
  height: @size;

  .path {
    height: 100%;
    background-color: #CDD0D6;
    transition: .5s;

    /** 使用 clip-path 剪贴路径  */
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }

  &:hover .path {
    transform: translateY(10px) scale(1.5);
    background-color: #79bbff;
    position: relative;
    z-index: 10;
  }
}
</style>