<script setup lang="ts">
import CellEditor from '../editors/CellEditor.vue';

const tableData = ref([]);

const options = [{
  value: 'bj',
  label: '北京'
}, {
  value: 'sh',
  label: '上海'
}, {
  value: 'gz',
  label: '广州'
}, {
  value: 'sz',
  label: '深圳'
}]

onMounted(() => {
  const list: any = [{
    date: '2024-05-03',
    name: '张三',
    age: 33,
    area: 'bj',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2024-05-04',
    name: '李四',
    age: 34,
    area: 'sh',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2024-05-05',
    name: '王五',
    age: 35,
    area: 'gz',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2024-05-06',
    name: '赵六',
    age: 36,
    area: 'sz',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  tableData.value = list;
})

function getLabel(scope) {
  const op: any = options.find(x => x.value == scope.row.area)
  return op.label
}

function onBeforeEdit(row, column, cell, event?) {
  const { property } = column;
  row.editing = property

  nextTick(() => {
    cell.querySelector('.el-input input').focus();
  })
}

// @ts-ignore
function onAfterEdit({field, rowIndex, changed, valid}) {
  if (!valid) {
    console.log('校验未通过')
  } else {
    const row: any = tableData.value[rowIndex]
    delete row.editing;
    
    console.log('changed', changed ? '值发生了变化' : '值没有变化')
  }
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%" @cell-click="onBeforeEdit">
    <el-table-column prop="date" label="日期" width="180">
      <template #default="scope">
        <div v-if="scope.row.editing === 'date'">
          <CellEditor type="date" v-model="scope.row.date" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    
    <el-table-column prop="name" label="姓名" width="180">
      <template #header>
        <span style="margin-right: 10px;">姓名</span>
        <el-icon><EditPen /></el-icon>
      </template>

      <template #default="scope">
        <div v-if="scope.row.editing === 'name'">
          <CellEditor type="text" v-model="scope.row.name" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="age" label="年龄">
      <template #default="scope">
        <div v-if="scope.row.editing === 'age'">
          <CellEditor type="number" v-model="scope.row.age" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.age }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="area" label="地区">
      <template #default="scope">
        <div v-if="scope.row.editing === 'area'">
          <CellEditor type="select" v-model="scope.row.area" :scope="scope" :options="options" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ getLabel(scope) }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>

  <el-alert type="info" show-icon :closable="false" style="margin-top: 20px;">
    <p>点击单元格，编辑数据</p>
  </el-alert>
</template>

<style scoped lang="less">
.el-table__cell {
  position: relative;
}

.ux-change {
  &::after {
    content: ' ';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0px;
    height: 0px;
    border-left: 5px solid red;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    transform: rotate(-45deg);
  }
}
</style>