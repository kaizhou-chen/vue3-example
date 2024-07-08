<script setup lang="ts">
import Sortable from 'sortablejs';

const tableData = reactive([
  {
    id:1,
    name:'李四',
    gender:'男',
    age:20,
  },
  {
    id:2,
    name:'王五',
    gender:'未知',
    age:18,
  },
  {
    id:3,
    name:'张三',
    gender:'男',
    age:22,
  },
])

const state = reactive<{
  oldList: any[];
  newList: any[];
}>({
  oldList: [],
  newList: [],
})

const columns = [
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '性别',
    prop: 'gender',
  },
  {
    label: '年龄',
    prop: 'age',
  },
]

// 列拖拽
const columnDrop = function() {
  const wrapperTr: any = document.querySelector('.dynamic-column .el-table__header-wrapper tr');
  Sortable.create(wrapperTr, {
    animation: 180,
    delay: 0,
    draggable: ".dynamic-column .el-table__cell",
    onEnd(e: any) {
      const {newIndex, oldIndex} = e
      const oldItem = state.newList[oldIndex];
      state.newList.splice(oldIndex, 1);
      state.newList.splice(newIndex, 0, oldItem);
    }
  });
}

onMounted(()=> {
  state.oldList = [ ...columns ]
  state.newList = [ ...columns ]
  columnDrop()
})
</script>

<template>
  <div class="dynamic-column" style="padding: 20px">
    <el-table
      row-key="id"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item,index) in state.oldList"
        :key="`col_${index}`"
        :prop="state.newList[index].prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
