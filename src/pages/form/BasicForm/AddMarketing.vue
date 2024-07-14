<template>
  <MarketingForm 
    ref="formRef" 
    :cancelText="cancelText"
    @submit="handleSubmit"
    @cancel="close"
  ></MarketingForm>
</template>

<script setup lang="ts">
import MarketingForm from './MarketingForm.vue'
import { ElNotification } from 'element-plus'

import { sendRequest } from '@/utils/httpUtil';
import { createMarketing } from '@/api/apiFactory';

const props = defineProps<{
  isDialog: boolean
}>()
const emits = defineEmits<{
  close: []
}>()
const router = useRouter() // 使用路由
const route = useRoute()

const formRef = ref()
const isBasic = ref(false)

const cancelText = computed(() => {
  if (isBasic.value) {
    return null
  } else {
    return props.isDialog ? '取消' : '返回'
  }
})

onMounted(() => {
  if (route.name === 'basicForm') {
    isBasic.value = true
  }
})

async function handleSubmit(data) {
  const resp: any = await sendRequest(createMarketing(data));
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
  if(isBasic.value) {
    router.push({ path: '/table/pinia' })
    return;
  }

  if(props.isDialog) {
    emits('close');
  } else {
    router.back()
  }
}
</script>

<style lang="less" scoped>

</style>