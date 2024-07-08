<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in cards">
            <el-card>
              <div>{{ item.title }}</div>
              <div style="font-size: 24px; font-weight: bold; padding: 5px;">{{ item.amount }}</div>
              
              <el-divider />
              <div>
                <span>{{ item.footer }}</span>
                <span>{{ item.daily }}&nbsp;</span>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <pie-chart></pie-chart>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="16">
        <map-chart></map-chart>
      </el-col>
    </el-row>
    
    <el-row :gutter="20">
      <el-col :span="12">
        <bar-chart></bar-chart>
      </el-col>
      <el-col :span="12">
        <RelationChart></RelationChart>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import PieChart from '@/pages/echarts/PieChart.vue'
import BarChart from '@/pages/echarts/BarChart.vue';
import MapChart from '@/pages/echarts/MapChart.vue';
import RelationChart from '@/pages/echarts/RelationChart.vue'

const cards = ref([
  {
    title: '总销售额',
    footer: '日销售额：',
    amount: 1000,
    daily: 100
  },
  {
    title: '净利润',
    footer: '日利润：',
    amount: 500,
    daily: 40
  },
  {
    title: '利润率',
    footer: '',
    amount: '50%',
    daily: ''
  }
])
</script>

<style scoped lang="less">
.el-row + .el-row {
  margin-top: 20px;
}
</style>