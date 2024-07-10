<script setup lang="ts">
import { ElNotification } from 'element-plus'

import StepItem1 from './steps/StepItem1.vue'
import StepItem2 from './steps/StepItem2.vue'
import StepItem3 from './steps/StepItem3.vue'
import StepItem4 from './steps/StepItem4.vue'

const formRef: any = ref()

const maxStep = ref(4)
const active = ref(0)

const doCheck = ref(true)

const activeName = computed(() => {
  const list = [ StepItem1, StepItem2, StepItem3, StepItem4 ]
  return list[active.value]
})

const isDemo = computed(() => import.meta.env.VITE_DEMO === 'true');

onMounted(() => {
  if (isDemo.value) {
    maxStep.value = 2;
  }
})

async function next() {
  if (!doCheck.value) {
    active.value++
    return;
  }

  const valid = await formRef.value.validate()
  if (valid) {
    active.value++
  } else {
    ElNotification.error({
      message: '校验未通过！',
    })
  }
}

function prev() {
  active.value--
}

async function submit() {
  if (!doCheck.value) {
    return;
  }

  const valid = await formRef.value.validate()
  if (!valid) {
    ElNotification.error({
      message: '校验未通过！',
    })
    return;
  }

  ElNotification.success({
    message: '操作成功！'
  })
}
</script>

<template>
  <el-steps :active="active" align-center>
    <el-step title="动态表单" description="自定义校验、动态创建表单项" />
    <el-step title="各种选择框" description="联想输入、级联选择，穿梭框" />
    <el-step v-if="!isDemo" title="文件上传" description="校验文件类型、数量、大小" />
    <el-step v-if="!isDemo" title="大文件上传/下载" description="文件切片上传、进度条" />
  </el-steps>

  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <keep-alive>
      <component ref="formRef" :is="activeName" />
    </keep-alive>
  </div>

  <div style="margin-top: 12px; display: flex; justify-content: center;">
    <el-button v-if="active > 0" @click="prev">上一步</el-button>
    <el-button v-if="active < maxStep - 1" @click="next" type="primary">下一步</el-button>
    <el-button v-if="active == maxStep - 1" @click="submit" type="primary">提交</el-button>

    <el-checkbox v-model="doCheck" style="margin-left: 20px;">
      <span>{{ doCheck ? '开启' : '关闭' }}校验</span>
    </el-checkbox>
  </div>
</template>

<style scoped lang="less">
  
</style>