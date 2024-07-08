<script setup lang="ts">
const props = defineProps<{
  options: Array<any>
}>()

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

function onBlur(visible) {
  // 下拉框隐藏时执行
  if (!visible) {
    formRef.value.validate((valid) => {
      emit('onAfterEdit', valid)
    })
  }
}
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules">
    <el-form-item prop="name">
      <el-select v-model="form.name" :filterable="true" @visible-change="onBlur" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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