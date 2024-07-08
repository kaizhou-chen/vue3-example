<script setup lang="ts">
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

function onBlur() {
  formRef.value.validate((valid) => {
    emit('onAfterEdit', valid)
  })
}
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules">
    <el-form-item prop="name">
      <el-input v-model="form.name" @blur="onBlur" size="small"></el-input>
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