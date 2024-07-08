<script setup lang="ts">
import { useStep4 } from './useStep4'

import { downloadFile } from '@/api/marketingApi'

const { fileInfo, uploadFile } = useStep4()

const fileInput = ref()
const downloadPercentage = ref(0)

const uploadPercentage = computed(() => {
  const { loaded, fileSize } = fileInfo.value
  return formatNumber(loaded, fileSize)
})

function chooseFile() {
  fileInput.value.click()
}

function handleFileChange(e) {
  const file = e.target.files[0]
  uploadFile(file)
}

function download() {
  downloadFile(fileInfo.value.filename, (loaded, total) => {
    downloadPercentage.value = formatNumber(loaded, total)
  })
}

function formatNumber(loaded: number, total: number) {
  let val = (loaded / total) * 100
  val = Math.min(val, 100)
  return parseInt(String(val))
}

function validate() {
  return new Promise((resolve, reject) => {
    resolve(true)
  })
}

/**
 * 每个步骤都向外暴露 validate 方法，用来确定当前的表单是否校验通过，是否可以到下一步
 */
defineExpose({
  validate
})
</script>

<template>
  <div style="width: 600px;">
    <div>
      <el-button type="primary" @click="chooseFile">上传文件</el-button>
      <input ref="fileInput" type="file" @change="handleFileChange" style="display: none" />

      <div v-if="fileInfo.filename !== ''">
        <h3>{{ fileInfo.filename }}</h3>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="uploadPercentage" />
      </div>
    </div>

    <div v-if="uploadPercentage >= 100" style="margin-top: 20px;">
      <el-button type="primary" @click="download">下载文件</el-button>
      <div>
        <el-progress type="dashboard" :percentage="downloadPercentage" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>