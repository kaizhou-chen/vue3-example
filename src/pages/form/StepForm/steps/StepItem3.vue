<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { serviceConfig } from '@/api/serviceConfig'
import { listFiles, removeFile } from '@/api/marketingApi'

// 模板引用
const uploadRef = ref();

const uploadUrl = ref(serviceConfig.api + "/marketing/upload")
const downloadUrl = ref(serviceConfig.api + "/marketing/download")

const accept = ref('.jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx')
const limit = ref(10)

const exceedError = ref('')
const acceptError = ref('')
const oversizeError = ref('')
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const fileList1 = ref<Array<any>>([])
const fileList2 = ref<Array<any>>([])

onMounted(async () => {
  const resp: any = await listFiles({});
  let { list } = resp.data;
  list = list.map((x) => {
    return {
      name: x,
      url: downloadUrl.value + '/' + x
    }
  })

  fileList1.value = [...list]
  fileList2.value = [...list]
})

function handleExceed(files, fileList) {
  clearError();

  let msg = `最多只能选择${limit.value}个文件`
  if (fileList.length > 0) {
    msg = `最多只能选择${limit.value - fileList.length}个文件 (已经上传过${fileList.length}个文件)`
  }
  exceedError.value = msg;

  ElNotification.warning({
    message: msg,
  })
}

function onChange1(file) {
  onChange(file, fileList1)
}

function onChange2(file) {
  onChange(file, fileList2)
}

function onChange(file, fileList?) {
  clearError();

  const maxSize = 10; // 10M
  const acceptTypes = accept.value.split(',');
  const type = file.name.substring(file.name.lastIndexOf('.'));
  const isAccept = acceptTypes.indexOf(type.toLowerCase()) > -1;
  const isOversize = (file.size / 1024 / 1024) > maxSize
  if (!isAccept) {
    const msg = accept.value.replace(/\./g, '').replace(',', ', ')
    acceptError.value = `上传文件只能是 ${msg} 类型`
    rejectChange(file, acceptError.value, fileList)
    return false;
  }
  if (isOversize) {
    oversizeError.value = `文件大小不能超过${maxSize}M`
    rejectChange(file, oversizeError.value, fileList)
    return false;
  }
  return true;
}

function clearError() {
  exceedError.value = '';
  acceptError.value = '';
  oversizeError.value = '';
}

function rejectChange(file, msg, fileList) {
  ElNotification.warning({
    message: msg,
  })

  // @ts-ignore
  const currIdx = fileList.value.indexOf(file)
  fileList.value.splice(currIdx, 1)
}

function submitUpload() {
  uploadRef.value!.submit()
}

function handlePreview(file) {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

function handleRemove(file, fileList) {
  console.log('handleRemove', file);
  removeFile({ filename: file.name });
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
  <div style="width: 600px">
    <el-divider content-position="left">手动上传</el-divider>
    <el-upload
      ref="uploadRef"
      v-model:file-list="fileList2"
      :action="uploadUrl"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      
      multiple
      :limit="limit"
      :on-exceed="handleExceed"

      :accept="accept"
      :auto-upload="false"
      :on-change="onChange2"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>

      <el-button class="ml-3" type="success" style="margin-left: 12px;" @click="submitUpload">点击上传</el-button>

      <template #tip>
        <div v-if="exceedError !== ''" class="el-upload__tip">{{ exceedError }}</div>
        <div v-if="acceptError !== ''" class="el-upload__tip">{{ acceptError }}</div>
        <div v-if="oversizeError !== ''" class="el-upload__tip">{{ oversizeError }}</div>
      </template>
    </el-upload>

    <el-divider content-position="left">自动上传</el-divider>
    <el-upload
      v-model:file-list="fileList1"
      :action="uploadUrl"
      list-type="picture-card"
      :on-preview="handlePreview"
      :on-remove="handleRemove"

      multiple
      :limit="limit"
      :on-exceed="handleExceed"

      :accept="accept"
      :before-upload="onChange1"
    >
      <el-icon><Plus /></el-icon>

      <template #tip>
        <div v-if="exceedError !== ''" class="el-upload__tip">{{ exceedError }}</div>
        <div v-if="acceptError !== ''" class="el-upload__tip">{{ acceptError }}</div>
        <div v-if="oversizeError !== ''" class="el-upload__tip">{{ oversizeError }}</div>
      </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" style="width: 100%; height: 100%;" />
    </el-dialog>

    <div style="height: 30px;"></div>
  </div>
</template>

<style scoped lang="less">
  
</style>