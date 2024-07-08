<template>
  <el-card shadow="hover">
    <Chart :option="option" style="height: 405px;"></Chart>
  </el-card>
</template>

<script setup lang="ts">
import Chart from './chart/Chart.vue'

const option = ref()

onMounted(() => {
  option.value = getOption();
})

function getOption() {
  let option = {
    title: {
      text: '销售额'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {    // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
      },
      // 自定义悬浮提示
      formatter: (params) => {
        const list: any[] = [];
        list.push(`<div>${ params[0].name }</div>`)
        params.forEach((item, index) => {
          let suffix = (index === 2) ? '%' : ''; // 在利润率上添加百分号

          list.push(`<div class="ux-chart-tooltip" style="min-width: 120px;">
            <div class="dot" style="background-color: ${ item.color }"></div>
            <div>${ item.seriesName }</div>
            <div style="flex: 1; text-align: right;">${ item.data + suffix }</div>
          </div>`)
        })

        return list.join('')
      }
    },
    legend: {
      top: '9%',
      data: ['销售额', '净利润', '利润率']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: [ // 使用双Y轴，左侧为金额，右侧为百分比
      {
        type: 'value'
      },
      {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value}%' // 右侧Y轴添加百分号
        }
      }
    ],
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    series: [
      {
        name: '销售额',
        type: 'bar',
        label: {
          show: true,
          position: 'insideRight'
        },
        yAxisIndex: 0,
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: '净利润',
        type: 'bar',
        label: {
          show: true,
          position: 'insideRight'
        },
        yAxisIndex: 0,
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '利润率',
        type: 'line',
        label: {
          show: true,
          position: 'insideRight',
          formatter: '{c}%'
        },
        yAxisIndex: 1,
        data: [45, 52, 63, 58, 41, 53, 58]
      }
    ]
  };

  return option
}
</script>

<style lang="less">
.ux-chart-tooltip {
  display: flex;
  align-items: center;
  line-height: 24px;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 8px;
  }
}
</style>