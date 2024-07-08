<script setup lang="ts">
import CellEditor from '../editors/CellEditor.vue';

const tableData = ref([])
const currentRow = ref(null)

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
}];

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

  list.forEach((item, index) => {
    item.isShow = true
  })

  tableData.value = list;
})

function getLabel(scope) {
  const op: any = options.find(x => x.value == scope.row.area)
  return op.label
}

function onBeforeEdit(row, rowIndex) {
  currentRow.value = JSON.parse(JSON.stringify(row))
  row.editing = rowIndex
}

function onAfterEdit(field, rowIndex?, changed?) {
  if(changed == 'error') {
    console.log('校验未通过')
  } else {
    if (changed) {
      console.log(`${field}的值发生了变化`)
    }
  }
}

function onCancel(rowIndex) {
  const list: any = tableData.value;
  list[rowIndex] = currentRow.value
}

function onSubmit(rowIndex) {
  tableData.value.forEach((row: any, index) => {
    if (rowIndex === index) {
      delete row.editing
    }
  })
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180">
      <template #default="scope">
        <div v-if="scope.row.editing === scope.$index">
          <CellEditor type="date" v-model="scope.row.date" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="name" label="姓名" width="180">
      <template #default="scope">
        <div v-if="scope.row.editing === scope.$index">
          <CellEditor type="text" v-model="scope.row.name" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="age" label="年龄">
      <template #default="scope">
        <div v-if="scope.row.editing === scope.$index">
          <CellEditor type="number" v-model="scope.row.age" :scope="scope" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ scope.row.age }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="area" label="地区">
      <template #default="scope">
        <div v-if="scope.row.editing === scope.$index">
          <CellEditor type="select" v-model="scope.row.area" :scope="scope" :options="options" @onAfterEdit="onAfterEdit($event)" />
        </div>
        <span v-else>{{ getLabel(scope) }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="address" label="地址">
    </el-table-column>

    <el-table-column label="操作" width="200">
      <template #default="scope">
        <span v-if="scope.row.editing === scope.$index">
          <el-button size="small" plain @click="onCancel(scope.$index)">
            <span>取消</span>
          </el-button>
          <el-button size="small" type="primary" plain @click="onSubmit(scope.$index)">
            <span>确定</span>
          </el-button>
        </span>
        
        <span v-else>
          <el-button size="small" type="primary" plain @click="onBeforeEdit(scope.row, scope.$index)">
            <span>编辑</span>
          </el-button>
        </span>
      </template>
    </el-table-column>
  </el-table>

  <el-alert type="info" show-icon :closable="false" style="margin-top: 20px;">
    <p>点击编辑按钮，编辑数据</p>
  </el-alert>
</template>

<style scoped lang="less">
  
</style>