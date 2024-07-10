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
  <div class="container">
    <el-card>
      <template #header>
        <div>RGB 与 HEX 颜色互相转换</div>
      </template>

      <el-input v-model="color" :placeholder="placeholder" @input="handleInput"></el-input>
      <div class="color-result">
        <div class="preview-color" :style="{'background-color': result}"></div>
        <div>{{ result }}</div>
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

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