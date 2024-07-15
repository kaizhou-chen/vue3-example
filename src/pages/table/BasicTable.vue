<script setup lang="ts">
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'

import bus from '@/utils/bus';
import { formatDate } from '@/utils/dateUtils'
import { listMarketing } from '@/api/apiFactory';

import AddMarketing from '@/pages/form/BasicForm/AddMarketing.vue'
import EditMarketing from '@/pages/form/BasicForm/EditMarketing.vue'
import BasicDetail from '@/pages/detail/BasicDetail.vue';
import AutoTooltip from '@/components/AutoTooltip.vue'
import MultiSelect from '@/components/MultiSelect.vue'

const props = defineProps({
  query: Object
})

const router = useRouter();

// 模板引用
const tableRef = ref();
const formRef = ref();

const tableData = ref([])
const pageSize = ref(10)
const currentPage = ref(1)
const total = ref(0)
const orderBy = ref()

const form = reactive({
  name: '',
  beginDate: '',
  endDate: '',
  region: [],
  jit: [],
})
const collapseForm = ref(true)

const dgTitle = ref('')
const dgOpen = ref(false)
const isUpdate = ref(false)

const dgType = ref(1)
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

onMounted(() => {
  getTableData()
})

async function getTableData() {
  const param = getSearchParam()
  const resp = await listMarketing(param)
  const { list, pageInfo } = resp.data
  console.log('list', list)
  tableData.value = list;
  total.value = pageInfo.total
}

function getSearchParam() {
  const param: any = {}
  param.pageSize = pageSize.value
  param.pageNumber = currentPage.value
  if (orderBy.value) {
    param.orderBy = orderBy.value
  }

  const fields = ['name', 'beginDate', 'endDate', 'jit', 'region']
  fields.forEach(field => {
    // @ts-ignore
    const value = form[field]
    if (value !== '') {
      param[field] = value
    }
  })

  return param
}

function handleSortChange(params) {
  const { prop, order } = params
  if (!order) {
    orderBy.value = null
  } else {
    const type = (order.indexOf('asc') === 0) ? 'asc' : 'desc'
    orderBy.value = prop + ',' + type
  }

  getTableData()
}

function resetForm(formEl) {
  formEl.resetFields();
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

function gotoCreate() {
  if (dgType.value === 1) {
    // 跳转到创建页面
    router.push({ path: '/form/create' })
  } else {
    // 打开创建弹出框
    dgTitle.value = '新建活动'
    isUpdate.value = false;
    dgOpen.value = true;
  }
}

async function doUpdate(data) {
  const val = JSON.parse(JSON.stringify(data));

  if (dgType.value === 1) {
    // 跳转到编辑页面
    router.push({ path: '/form/update' }).then(() => {
      bus.emit('updateUser', val) // 路由不能传递对象，使用EventBus，在页面跳转后发送消息
    })
  } else {
    // 打开编辑弹出框
    dgTitle.value = '编辑活动'
    isUpdate.value = true;
    dgOpen.value = true;

    await nextTick();
    bus.emit('updateUser', val)
  }
}

function viewDetail(data) {
  const val = JSON.parse(JSON.stringify(data));

  router.push({ 
    name: 'basicDetail', 
    params: {
      id: data.id
    } 
  }).then(() => {
    bus.emit('viewUser', val) // 路由不能传递对象，使用EventBus，在页面跳转后发送消息
  })
}

function close() {
  dgOpen.value = false;
  getTableData()
}
</script>

<template>
  <div>
    <el-card>
      <el-form
        ref="formRef" 
        :model="form" 
        :inline="true"
        label-width="auto" 
      >
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model.trim="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="开始时间" prop="beginDate">
              <el-date-picker 
                placeholder="开始时间" 
                v-model="form.beginDate" 
                type="date" 
                value-format="YYYY-MM-DD"
                style="width: 100%">
              </el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间" prop="endDate">
              <el-date-picker 
                placeholder="结束时间" 
                v-model="form.endDate" 
                type="date" 
                value-format="YYYY-MM-DD"
                style="width: 100%">
              </el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6" style="margin-left: auto; margin-bottom: 0px;">
            <el-form-item label="">
              <div style="display: flex; width: 100%;">
                <div style="flex: 1;"></div>
                <el-button @click="resetForm(formRef)">重置</el-button>
                <el-button type="primary" @click="getTableData">查询</el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card style="margin-top: 20px;">
      <div class="custom-style" style="margin-bottom: 12px; display: flex">
        <div>
          <el-button type="primary" @click="gotoCreate">
            <el-icon><Plus /></el-icon>
            <span>新建</span>
          </el-button>
        </div>
        <div style="flex: 1;"></div>
        <div>
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
        @sort-change="handleSortChange"
      >
        <el-table-column fixed type="expand">
          <template #default="scope">
            <BasicDetail :data="scope.row" style="margin: 8px 20px;" />
          </template>
        </el-table-column>
        <el-table-column fixed prop="name" label="活动名称" width="180"></el-table-column>
        <el-table-column prop="region" label="活动区域">
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

        <el-table-column prop="jit" label="即时配送">
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
      <component :is="isUpdate ? EditMarketing : AddMarketing" :is-dialog="true" @close="close"></component>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
.custom-style .el-segmented {
  --el-segmented-item-selected-color: var(--el-text-color-primary);
  --el-segmented-item-selected-bg-color: #ffd100;
  --el-border-radius-base: 16px;
}

.el-row {
  /** 第4列的元素，设置 margin-bottom，用来换行*/
  div:nth-child(4n) {
    margin-bottom: 20px;
  }
}

.el-form-item {
  width: 100%;
  margin-bottom: 0px;

  .el-input {
    width: 100%;
  }
}
</style>