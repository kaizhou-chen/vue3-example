<script setup lang="ts">
import { colorConvert } from '@/utils/commonUtils';

const color = ref('');
const result = ref('');
const placeholder = ref('请输入颜色，如：#FFFFFF、rgb(0, 0, 0)')

function handleInput(val) {
  result.value = colorConvert(val)
}
</script>

<template>
  <el-card style="width: 425px;">
    <template #header>
      <div>RGB 与 HEX 颜色互相转换</div>
    </template>

    <el-input v-model="color" :placeholder="placeholder" @input="handleInput"></el-input>
    <div class="color-result">
      <div class="preview-color" :style="{'background-color': result}"></div>
      <div>{{ result }}</div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.color-result {
  display: flex; 
  align-items: center; 
  margin-top: 12px;
}

.preview-color {
  width: 20px;
  height: 20px;

  margin-right: 8px;
}
</style>