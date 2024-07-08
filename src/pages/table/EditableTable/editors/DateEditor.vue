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
      <el-date-picker v-model="form.name" type="date" value-format="YYYY-MM-DD" @blur="onBlur" size="small"></el-date-picker>
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

.el-date-editor {
  :deep(input) {
    width: calc(~"100% - 50px")
  }
}
</style>