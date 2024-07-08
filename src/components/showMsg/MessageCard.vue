<script setup lang="ts">
defineProps<{
  message?: string
  title?: string
}>()

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <el-card class="message-card">
    <template #header v-if="title">
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    
    <div style="min-height: 120px;">{{ message }}</div>

    <template #footer>
      <div style="display: flex;">
        <el-button @click="handleClick" style="margin-left: auto;">关闭</el-button>
      </div>
    </template>
    
  </el-card>
</template>

<style lang="less" scoped>
.message-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;

  min-width: 450px;
}
</style>