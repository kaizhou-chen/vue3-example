<script setup lang="ts">
import { ClickOutside as vClickOutside } from 'element-plus'

const emit = defineEmits<{
  onAfterEdit: [value: any]
}>()

const model = defineModel()

const formRef = ref();

const form = reactive({ 
  name: model.value 
})

const rules = reactive({
  name: [
    { required: true, message: '必填', trigger: 'blur' },
  ]
})

watch(
  () => form.name,
  (newVal) => {
    model.value = newVal
  }
)

function onClickOutside(e) {
  formRef.value.validate((valid) => {
    emit('onAfterEdit', valid)
  })
}
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules">
    <el-form-item prop="name">
      <el-input-number v-model="form.name" v-click-outside="onClickOutside" size="small"></el-input-number>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 0px;

  :deep(.el-form-item__content) {
    line-height: 20px;
  }
}
</style>