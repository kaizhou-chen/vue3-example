<script setup lang="ts">
import { ElNotification } from 'element-plus'

import bus from '@/utils/bus';
import { sendRequest } from '@/utils/httpUtil';
import { createMarketing, updateMarketing } from '@/api/apiFactory';
import { formatData, parseData } from './formatUtil';

// 自定义属性、自定义事件
const props = defineProps({
  isDialog: Boolean,
  isUpdate: Boolean
})
const emits = defineEmits(['close'])

// 使用路由
const router = useRouter()
const route = useRoute()

// 模板引用的变量
const formRef = ref();

const form = reactive({
  name: '',
  region: '',
  beginDate: '',
  endDate: '',
  jit: 0,
  type: [],
  resource: null,
  desc: '',
})

const rules: any = reactive({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  beginDate: [
    { type: 'string', required: true, message: '请选择开始时间', trigger: 'change' }
  ],
  endDate: [
    { type: 'string', required: true, message: '请选择结束时间', trigger: 'change' }
  ],
  type: [
    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
  ],
  resource: [
    { required: true, message: '请选择活动资源', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '请填写活动形式', trigger: 'blur' }
  ]
})

/** 其他变量 */
const loading = ref(false)
const okBtn = ref('确定')
const showBackBtn = ref(true)

// 如果是编辑页面，则进行表单初始化
onMounted(() => {
  bus.on('updateUser', (data) => {
    const origin = parseData(data);
    
    // 更新时，初始化表单数据，使用 Object.assign 赋值
    Object.assign(form, origin);
  })

  const route = useRoute()
  if (route.name === 'basicForm') {
    showBackBtn.value = false
  }
})

onUnmounted(() => {
  bus.off('updateUser')
})

watch(
  () => props.isUpdate,
  (isUpdate) => {
    if (isUpdate) {
      okBtn.value = '提交'
    }
  },
  { immediate: true }
)

function onCancel(formEl) {
  goBack()
}

function onSubmit(formEl) {
  formEl.validate((valid: Boolean) => {
    if(!valid) {
      console.log('error submit!!');
      return false;
    }

    if (props.isUpdate) {
      doUpdate();
    } else {
      doCreate();
    }
  });
}

async function doCreate() {
  const data = formatData(form);
  const resp = await sendRequest(createMarketing(data));
  backToList(resp)
}

async function doUpdate() {
  const data = formatData(form);
  const resp = await sendRequest(updateMarketing(data));
  backToList(resp)
}

function backToList(resp) {
  if (resp.data.success) {
    ElNotification.success({
      message: '操作成功',
    })
    
    goBack()
  }
}

function goBack() {
  formRef.value.resetFields();

  if (route.name === 'basicForm') { 
    router.push({name: 'basicTable'})
    return
  }

  if(props.isDialog) {
    emits('close');
    return;
  }
  
  router.back()
}
</script>

<template>
  <div style="display: flex; justify-content: center;">
    <el-form style="max-width: 600px"
      ref="formRef" 
      :model="form" 
      :rules="rules"
      label-width="auto" 
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="活动区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="beginDate">
            <el-date-picker 
              placeholder="开始时间" 
              v-model="form.beginDate" 
              type="date" 
              value-format="YYYY-MM-DD"
              style="width: 100%">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2" style="text-align: center;">-</el-col>
        <el-col :span="11">
          <el-form-item prop="endDate">
            <el-date-picker 
              placeholder="结束时间" 
              v-model="form.endDate" 
              type="date" 
              value-format="YYYY-MM-DD"
              style="width: 100%">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="即时配送">
        <el-switch 
          v-model="form.jit"
          :active-value="1"
          :inactive-value="0">
        </el-switch>
      </el-form-item>

      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox :value="1" name="type">美食/餐厅线上活动</el-checkbox>
          <el-checkbox :value="2" name="type">地推活动</el-checkbox>
          <el-checkbox :value="3" name="type">线下主题活动</el-checkbox>
          <el-checkbox :value="4" name="type">单纯品牌曝光</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="form.resource">
          <el-radio :value="1">线上品牌商赞助</el-radio>
          <el-radio :value="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc" :rows="5"></el-input>
      </el-form-item>

      <el-form-item>
        <div style="display: flex; justify-content: center; width: 100%;">
          <el-button v-if="showBackBtn" @click="onCancel(formRef)">{{ isDialog ? "取消" : "返回" }}</el-button>
          <el-button type="primary" @click="onSubmit(formRef)">{{ okBtn }}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>