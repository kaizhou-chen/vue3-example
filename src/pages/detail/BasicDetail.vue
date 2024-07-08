<script setup lang="ts">
import { formatDate } from '@/utils/dateUtils'
import bus from '@/utils/bus';

const props = defineProps<{
  data?: any
}>()

const router = useRouter()
const data: any = ref({
  name: 'test',
  region: 'shanghai',
  endDate: formatDate(new Date()),
  jit: 0,
  desc: '关于活动的说明'
})

onMounted(() => {
  if (props.data) {
    data.value = props.data
    return
  }

  bus.on('viewUser', (row) => {
    data.value = row
  })
})

onUnmounted(() => {
  if (props.data) {
    data.value = props.data
    return
  }

  bus.off('viewUser')
})

function back() {
  router.back()
}

function regionRender(value) {
  const nameMap: any = {
    "shanghai": "区域一",
    "beijing": "区域二"
  }

  return nameMap[value];
}

function jitRender(value) {
  const nameMap: any = {
    "0": "否",
    "1": "是"
  }

  return nameMap[value];
}

function resourceRender(value) {
  const nameMap: any = {
    "1": "线上品牌商赞助",
    "2": "线下场地免费"
  }

  return nameMap[value];
}
</script>

<template>
  <div>
    <el-descriptions
      border
      :column="3"
      title="活动详情"
    >
      <el-descriptions-item label="活动名称">{{ data?.name }}</el-descriptions-item>
      <el-descriptions-item label="活动区域">{{ regionRender(data?.region) }}</el-descriptions-item>
      <el-descriptions-item label="活动时间">
        <span>{{ formatDate(data?.beginDate, 'YYYY-MM-DD') }}</span>
        <span v-if="data?.beginDate !== undefined"> 至 </span>
        <span>{{ formatDate(data?.endDate, 'YYYY-MM-DD') }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="即时配送">{{ jitRender(data?.jit) }}</el-descriptions-item>
      <el-descriptions-item label="活动形式">{{ data?.desc }}</el-descriptions-item>
    </el-descriptions>

    <div v-if="!props.data" style="display: flex; justify-content: center; margin-top: 20px;">
      <el-button type="primary" @click="back">返回</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>