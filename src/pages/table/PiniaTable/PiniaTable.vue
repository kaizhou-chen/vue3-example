<script setup lang="ts">
import { formatDate } from '@/utils/dateUtils'

import BasicForm from '@/pages/form/BasicForm/BasicForm.vue'
import AutoTooltip from '@/components/AutoTooltip.vue';
import SearchForm from './SearchForm.vue'
import CustomFilter from './CustomFilter.vue';

import { useTableStore } from './useTableStore'
import { useDialog } from './useDialog';
import { ElNotification } from 'element-plus';

import { sendRequest } from '@/utils/httpUtil';
import { removeMarketing } from '@/api/apiFactory'

const tableStore = useTableStore()
const { getTableData } = tableStore
const { tableData, pageSize, currentPage, total, orderBy, filters } = storeToRefs(tableStore)

const { dgTitle, dgOpen, isUpdate, dgType, gotoCreate, doUpdate, viewDetail, close } = useDialog()

const props = defineProps({
  query: Object
})

const options = [
  {
    label: '跳转到编辑页面',
    value: 1
  },
  {
    label: '打开编辑弹出框',
    value: 2
  }
]

const rowIndexRef = ref(null)
const columnIndexRef = ref(null)
const selectedRows = ref([])
const tableRef = ref()

onMounted(() => {
  getTableData()
})

function handleSortChange(sorter) {
  const { prop, order } = sorter
  if (!order) {
    orderBy.value = null
  } else {
    const type = (order.indexOf('asc') === 0) ? 'asc' : 'desc'
    orderBy.value = prop + ',' + type
  }

  getTableData()
}

function handleFilterChange(filter) {
  const newFilter = JSON.parse(JSON.stringify(filter))
  filters.value = Object.assign(filters.value, newFilter)

  getTableData()
}

function handleSelectionChange(rows) {
  selectedRows.value = rows
}

async function doRemove() {
  if (selectedRows.value.length === 0) {
    ElNotification.info({
      message: '请选择要删除的数据'
    })
    return;
  }

  const ids = selectedRows.value.map((x: any) => x.id)
  await sendRequest(removeMarketing(ids));

  ElNotification.success({
    message: '删除成功'
  })
  getTableData()
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

function changeClass(row, column) {
  rowIndexRef.value = row
  columnIndexRef.value = column
}

// @ts-ignore
function rowClass({row, rowIndex}) {
  if (rowIndex == rowIndexRef.value) {
    return "green"
  }
}

// @ts-ignore
function cellClass({row, column, rowIndex, columnIndex}) {
  if (columnIndex == columnIndexRef.value) {
    return "green"
  }
}

function selectFirstRow() {
  tableData.value.forEach((value, index) => {
    if (index === 0) {
      // toggleRowSelection 切换某一行的选中状态
      unref(tableRef).toggleRowSelection(value, true);
    }
  })
}
</script>

<template>
  <div>
    <SearchForm></SearchForm>

    <el-card style="margin-top: 20px;">
      <div class="custom-style" style="margin-bottom: 12px; display: flex">
        <div>
          <el-button type="primary" @click="gotoCreate">
            <el-icon><Plus /></el-icon>
            <span>新建</span>
          </el-button>
          <el-button type="primary" @click="doRemove">
            <el-icon><Delete /></el-icon>
            <span>删除</span>
          </el-button>
        </div>

        <div style="margin-left: auto;">
          <el-button type="primary" @click="selectFirstRow">选中第一行</el-button>

          <el-dropdown style="margin-left: 20px;">
            <el-button type="primary">
              设置背景色<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="changeClass(1, null)">高亮行</el-dropdown-item>
                <el-dropdown-item @click="changeClass(null, 3)">高亮列</el-dropdown-item>
                <el-dropdown-item @click="changeClass(null, null)">取消高亮</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-segmented v-model="dgType" :options="options" style="margin-left: 20px;">
            <template #default="{ item }">
              <div>{{ item.label }}</div>
            </template>
          </el-segmented>
        </div>
      </div>

      <el-table border stripe style="width: 100%;"
        ref="tableRef"
        :data="tableData"
        :row-class-name="rowClass"
        :cell-class-name="cellClass"
        @sort-change="handleSortChange"
        @filter-change="handleFilterChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column fixed type="selection" width="50"></el-table-column>
        <el-table-column fixed prop="name" label="活动名称" width="180"></el-table-column>
        <el-table-column prop="region">
          <template #header>
            <span style="display: inline-block;">活动区域</span>
            <CustomFilter
              column-key="region"
              :filters="[
                { text: '区域一', value: 'shanghai' },
                { text: '区域二', value: 'beijing' },
              ]"
              @filter-change="handleFilterChange"
            ></CustomFilter>
          </template>

          <template #default="scope">
            {{ regionRender(scope.row.region) }}
          </template>
        </el-table-column>

        <!-- 排序，设置属性 sortable="custom" -->
        <el-table-column prop="beginDate" label="开始时间" sortable="custom">
          <template #default="scope">
            {{ formatDate(scope.row.beginDate, 'YYYY-MM-DD') }}
          </template>
        </el-table-column>

        <el-table-column prop="endDate" label="结束时间">
          <template #default="scope">
            {{ formatDate(scope.row.endDate, 'YYYY-MM-DD') }}
          </template>
        </el-table-column>

        <el-table-column prop="jit" label="即时配送"
          column-key="jit"
          :filters="[
            { text: '是', value: 1 },
            { text: '否', value: 0 },
          ]"
        >
          <template #default="scope">
            {{ jitRender(scope.row.jit) }}
          </template>
        </el-table-column>
        <el-table-column prop="resource" label="特殊资源">
          <template #default="scope">
            {{ resourceRender(scope.row.resource) }}
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="活动形式">
          <template #default="scope">
            <AutoTooltip :content="scope.row.desc"></AutoTooltip>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="100">
          <template #default="scope">
            <el-link :underline="false" type="primary" @click="viewDetail(scope.row)">查看</el-link>
            <el-link :underline="false" type="primary" @click="doUpdate(scope.row)" style="margin-left: 10px;">编辑</el-link>
          </template>
        </el-table-column>
      </el-table>

      <div style="margin-top: 20px;">
        <el-pagination
          layout="total, prev, pager, next, sizes"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="total"
          @size-change="getTableData"
          @current-change="getTableData"
        >
        </el-pagination>
      </div>
    </el-card>

    <el-dialog
      v-model="dgOpen"
      :title="dgTitle"
      :close-on-click-modal="false"
      width="50%"
    >
      <basic-form :is-dialog="true" :is-open="dgOpen" :is-update="isUpdate" @close="close"></basic-form>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
.custom-style .el-segmented {
  --el-segmented-item-selected-color: var(--el-text-color-primary);
  --el-segmented-item-selected-bg-color: #ffd100;
  --el-border-radius-base: 16px;
}

.el-table :deep(.green),
.el-table :deep(.green) td {
  background-color: #95d475 !important;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>