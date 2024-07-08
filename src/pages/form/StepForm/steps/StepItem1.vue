<script setup lang="ts">
import { useStep1 } from './useStep1';

const formRef = ref()

const key = ref(Symbol('domain').toString())
const { form, rules, fieldValidating, formValidating } = storeToRefs(useStep1())

function addDomain() {
  form.value.domains.push({
    value: ''
  });
}

function removeDomain(item) {
  if (form.value.domains.length === 1) {
    return
  }

  var index = form.value.domains.indexOf(item)
  if (index > -1) {
    form.value.domains.splice(index, 1)
  }
}

function validate() {
  return new Promise((resolve, reject) => {
    formValidating.value = true
    formRef.value.validate((valid: Boolean) => {
      formValidating.value = false
      resolve(valid)
    })
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
  <el-form style="width: 600px"
    ref="formRef" 
    :model="form"
    :rules="rules"
    label-width="auto" 
  >
    <el-form-item label="邮箱" prop="email">
      <el-popover
        :width="300"
        effect="dark"
        placement="right"
        trigger="click"
        title="自定义校验"
        content="输入 gmail 邮箱，会提示不支持"
      >
        <template #reference>
          <el-input v-model="form.email"></el-input>
        </template>
      </el-popover>
    </el-form-item>

    <el-form-item label="别名" prop="alias">
      <el-popover
        :width="300"
        effect="dark"
        placement="right"
        trigger="click"
        title="异步校验"
      >
        <template #reference>
          <el-input v-model="form.alias">
            <template #suffix>
              <el-icon v-if="fieldValidating" class="is-loading" style="font-size: 16px; color: #000;">
                <Loading />
              </el-icon>
            </template>
          </el-input>
        </template>

        <template #default>
          <ul style="padding-inline-start: 20px;">
            <li>失去焦点后，开始校验</li>
            <li>输入 test，会在2秒后提示别名已被使用</li>
          </ul>
        </template>
      </el-popover>
    </el-form-item>

    <!-- 注意：动态表单项的 prop 必须用如下的写法，才能和表单的值绑定，正确的显示表单校验信息 -->
    <el-form-item
      v-for="(domain, index) in form.domains"
      :label="'域名' + (index + 1)"
      :key="key + index"
      :prop="'domains.' + index + '.value'"
      :rules="[
        { required: true, message: '域名不能为空', trigger: 'blur' }
      ]"
    >
      <div style="display: flex; width: 100%;">
        <el-input v-model="domain.value" style="flex: 1; margin-right: 12px;"></el-input>
        <el-button @click="addDomain">
          <el-icon><Plus /></el-icon>
        </el-button>
        <el-button @click.prevent="removeDomain(domain)">
          <el-icon><Minus /></el-icon>
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>

</style>