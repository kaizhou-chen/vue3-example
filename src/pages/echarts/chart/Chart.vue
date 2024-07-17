<template>
  <div ref="chartEl" v-size-ob="refresh"></div>
</template>

<script setup lang="ts">
import echarts from './echarts'

import vSizeOb from '@/directives/VSizeOb';

const props = defineProps<{
  option: Object | null | undefined,
  registerMap?: Function
}>()

const chartEl = ref()
let chart: any = null;
let opData = props.option

const refresh = () => {
  if (chart) {
    renderChart(opData)
  }
}

onMounted(() => {
  renderChart(props.option);
})

onBeforeUnmount(() => {
  dispose()
})

watch(
  () => props.option,
  (option) => {
    opData = option
    renderChart(option);
  }
)

function dispose() {
  if (chart) {
    chart.dispose()
    chart = null;
  }
}

async function renderChart(option) {
  if (!option) {
    return;
  }

  dispose()
  chart = echarts.init(chartEl.value);
  // 如果是地图，需要注册地图
  if (props.registerMap) {
    await props.registerMap(echarts)
  }
  chart.clear();
  chart.setOption(option);
}
</script>

<style scoped lang="less">
  
</style>