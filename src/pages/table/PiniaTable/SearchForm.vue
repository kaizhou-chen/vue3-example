<script setup lang="ts">
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
import MultiSelect from '@/components/MultiSelect.vue'
import { useTableStore } from './useTableStore'

const { getTableData } = useTableStore()
const { form } = storeToRefs(useTableStore())

const formRef = ref();
const collapseForm = ref(true)

function resetForm(formEl) {
  formEl.resetFields();
  getTableData()
}
</script>

<template>
  <el-card>
    <el-form
      ref="formRef" 
      :model="form" 
      :inline="true"
      label-width="auto" 
    >
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model.trim="form.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="开始时间" prop="beginDate">
            <el-date-picker 
              placeholder="开始时间" 
              v-model="form.beginDate" 
              type="date" 
              value-format="YYYY-MM-DD"
              style="width: 100%">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="结束时间" prop="endDate">
            <el-date-picker 
              placeholder="结束时间" 
              v-model="form.endDate" 
              type="date" 
              value-format="YYYY-MM-DD"
              style="width: 100%">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="6" v-show="!collapseForm">
          <el-form-item label="活动区域" prop="region">
            <MultiSelect v-model="form.region" placeholder="请选择活动区域" :options="[
              { label: '区域一', value: 'shanghai' },
              { label: '区域二', value: 'beijing' },
            ]"></MultiSelect>
          </el-form-item>
        </el-col>

        <el-col :span="6" v-show="!collapseForm">
          <el-form-item label="即时配送" prop="region">
            <MultiSelect v-model="form.jit" placeholder="请选择配送方式" :options="[
              { label: '是', value: 1 },
              { label: '否', value: 0 },
            ]"></MultiSelect>
          </el-form-item>
        </el-col>

        <el-col :span="6" style="margin-left: auto; margin-bottom: 0px;">
          <el-form-item label="">
            <div style="display: flex; width: 100%;">
              <div style="flex: 1;"></div>
              <el-button @click="resetForm(formRef)">重置</el-button>
              <el-button type="primary" @click="getTableData">查询</el-button>
              <el-link type="primary" :underline="false" @click="collapseForm = !collapseForm" style="margin-left: 12px;">
                <span>{{ collapseForm ? '展开' : '收起' }}</span>
                <el-icon style="margin-left: 8px;">
                  <component :is="collapseForm ? ArrowDownBold : ArrowUpBold"></component>
                </el-icon>
              </el-link>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
.el-row {
  /** 第4列的元素，设置 margin-bottom，用来换行*/
  div:nth-child(4n) {
    margin-bottom: 20px;
  }
}

.el-form-item {
  width: 100%;
  margin-bottom: 0px;

  .el-input {
    width: 100%;
  }
}
</style>