<script setup lang="ts">
import Sortable from 'sortablejs';

const tableData = ref<any[]>([])
const result = ref()

const open = ref(false)
const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

// 拖拽排序，要在 el-table 上设置 row-key，作为唯一标识
// <el-table row-key="" >
onMounted(()=> {
  tableData.value = list
  rowDraggable()
})

// 行拖拽
function rowDraggable() {
  // 要拖拽元素的父容器
  const tbody: any = document.querySelector('.dynamic-table .el-table__body-wrapper tbody');
  Sortable.create(tbody, {
    // 可被拖拽的子元素
    draggable: ".dynamic-table .el-table__row",
    handle: ".ux-drag",       // 只有 handle 才会触发拖拽事件
    chosenClass: "ux-chosen", // dragover 时的样式
    onEnd(e: any) {
      const {newIndex, oldIndex} = e;
      const list = JSON.parse(JSON.stringify(tableData.value))
      const currRow = list.splice(oldIndex, 1)[0];
      list.splice(newIndex, 0, currRow);

      tableData.value = list
    }
  });
}

const list = [
  {
    id: 1,
    date: '2023-05-02',
    name: '王小虎',
    age: 30,
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 2,
    date: '2023-05-03',
    name: '王小虎',
    age: 31,
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    id: 3,
    date: '2023-05-04',
    name: '王小虎',
    age: 32,
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    id: 4,
    date: '2023-05-05',
    name: '王小虎',
    age: 33,
    address: '上海市普陀区金沙江路 1519 弄'
  }
]

function addRow() {
  tableData.value.push({
    id: new Date().getTime(),
    date: '',
    name: '',
    age: null,
    address: '',
  })
}

function removeRow(rowIndex) {
  const list = [ ...tableData.value ]
  list.splice(rowIndex, 1);

  tableData.value = list
}

function showTour() {
  open.value = true
}

function submit() {
  result.value = JSON.stringify(tableData.value, null, 2)
  console.log('result', tableData.value);
}
</script>

<template>
  <div class="dynamic-table">
    <!-- 注意：el-table 要设置 row-key -->
    <el-table
      row-key="id" 
      :data="tableData" 
      style="width: 100%"
    >
      <el-table-column width="40">
        <div ref="ref2" class="ux-drag" style="cursor: move;">
          <el-icon><Rank /></el-icon>
        </div>
      </el-table-column>
      
      <el-table-column prop="date" label="日期" width="180">
        <template #default="scope">
          <el-input v-model="scope.row.date" />
        </template>
      </el-table-column>

      <el-table-column prop="name" label="姓名" width="180">
        <template #default="scope">
          <el-input v-model="scope.row.name" />
        </template>
      </el-table-column>

      <el-table-column prop="age" label="年龄" width="180">
        <template #default="scope">
          <el-input v-model="scope.row.age" />
        </template>
      </el-table-column>

      <el-table-column prop="address" label="地址">
        <template #default="scope">
          <el-input v-model="scope.row.address" />
        </template>
      </el-table-column>

      <el-table-column width="75">
        <template #default="scope">
          <el-link ref="ref3" :underline="false" @click="removeRow(scope.$index)">
            <el-icon><Delete /></el-icon>
            <span style="margin-left: 6px;">删除</span>
          </el-link>
        </template>
      </el-table-column>
    </el-table>

    <el-button ref="ref1" @click="addRow" style="width: 100%; border-style: dashed; margin-top: 20px;">
      <el-icon><Plus /></el-icon>
      <span>新增</span>
    </el-button>
  </div>

  <!-- 导航 -->
  <el-alert type="info" show-icon :closable="false" style="margin-top: 20px;">
    <el-button type="primary" text @click="showTour">功能介绍</el-button>
    <el-divider direction="vertical" />
    <el-button type="primary" text @click="submit">查看数据</el-button>
  </el-alert>

  <div class="preview" style="white-space: pre;">
    {{result && `content: ${result}`}}
  </div>
  
  <el-tour v-model="open">
    <el-tour-step :target="ref1?.$el" title="新增按钮" description="点击新增按钮，增加一条数据" />
    <el-tour-step :target="ref2" title="拖动排序" description="拖动排序图标，进行排序" />
    <el-tour-step :target="ref3?.$el" title="删除按钮" description="点击删除按钮，删除这条数据" />
  </el-tour>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

.preview {
  .code-font();
}
</style>

<style lang="less">
/** 用背景图片，模拟边框 */
.ux-chosen {
  background-image: linear-gradient(to right, transparent 50%, red 50%);
  background-size: 12px 2px;
  background-repeat: repeat-x;
}
</style>