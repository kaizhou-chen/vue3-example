<script setup lang="ts">
import CellEditTable from './tables/CellEditTable.vue';
import RowEditTable from './tables/RowEditTable.vue';
import DynamicTable from './tables/DynamicTable.vue';
import DynamicColumns from './tables/DynamicColumns.vue'
</script>

<template>
  <el-tabs>
    <el-tab-pane label="可编辑单元格">
      <CellEditTable></CellEditTable>
    </el-tab-pane>
    <el-tab-pane label="可编辑行">
      <RowEditTable></RowEditTable>
    </el-tab-pane>
    <el-tab-pane label="动态表格 + 拖拽排序">
      <DynamicTable></DynamicTable>
    </el-tab-pane>
    <!--
    <el-tab-pane label="动态列 + 列拖拽">
      <DynamicColumns></DynamicColumns>
    </el-tab-pane>
    -->
  </el-tabs>
</template>

<style scoped lang="less">
  
</style>