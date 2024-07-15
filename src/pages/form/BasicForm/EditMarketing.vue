<template>
  <MarketingForm 
    ref="formRef" 
    :data="data"
    :cancelText="cancelText"
    @submit="handleSubmit"
    @cancel="close"
  ></MarketingForm>
</template>

<script setup lang="ts">
import MarketingForm from './MarketingForm.vue'
import { ElNotification } from 'element-plus'

import bus from '@/utils/bus';
import { sendRequest } from '@/utils/httpUtil';
import { updateMarketing } from '@/api/apiFactory';
import { parseData } from './marketingUtil';

const props = defineProps<{
  isDialog: boolean
}>()
const emits = defineEmits<{
  close: []
}>()
const router = useRouter() // 使用路由

const formRef = ref()
const data = ref({})
const cancelText = computed(() => props.isDialog ? '取消' : '返回')

// 编辑页面，进行表单初始化
onMounted(() => {
  bus.on('updateUser', (user) => {
    data.value = parseData(user);
  })
})

onUnmounted(() => {
  bus.off('updateUser')
})

async function handleSubmit(data) {
  const resp: any = await sendRequest(updateMarketing(data));
  
  if (!resp.data.success) {
    return
  }

  // 重置表单
  formRef.value.reset()
  ElNotification.success({
    message: '操作成功',
  })

  // 返回
  close()
}

function close() {
  if(props.isDialog) {
    emits('close');
  } else {
    router.back()
  }
}
</script>

<style lang="less" scoped>

</style>