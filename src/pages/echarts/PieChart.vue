<template>
  <el-card shadow="hover">
    <Chart :option="option" style="height: 405px;"></Chart>
  </el-card>
</template>

<script setup lang="ts">
import Chart from './chart/Chart.vue'

const option = ref()

onMounted(() => {
  option.value = getOption()
})

function getOption() {
  let option = {
    title: {
      text: '按地区划分的销量'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      top: '9%',
      data: ['华东', '华南', '华中', '华北', '华西']
    },
    series: [
      {
        name: '销售额',
        type: 'pie',
        radius: '50%',
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        data: [
          {value: 800, name: '华东'},
          {value: 310, name: '华西'},
          {value: 234, name: '华中'},
          {value: 135, name: '华北'},
          {value: 1548, name: '华南'}
        ]
      }
    ]
  };

  return option;
}
</script>
