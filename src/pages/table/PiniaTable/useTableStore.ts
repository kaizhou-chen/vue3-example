import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import { listMarketing } from '@/api/apiFactory';

export const useTableStore = defineStore('marketingTable', () => {
  const tableData = ref([])

  const total = ref(0)
  const pageSize = ref(10)
  const currentPage = ref(1)

  const orderBy = ref()
  const filters = ref({})
  
  const form = ref({
    name: '',
    beginDate: '',
    endDate: '',
    region: [],
    jit: [],
  })
  
  async function getTableData() {
    const params = getSearchParams()
    const resp = await listMarketing(params)
    const { list, pageInfo } = resp.data
    tableData.value = list;
    total.value = pageInfo.total
  }

  function getSearchParams() {
    const params: any = {}

    // 分页
    params.pageSize = pageSize.value
    params.pageNumber = currentPage.value

    // 排序
    if (orderBy.value) {
      params.orderBy = orderBy.value
    }

    // 搜索表单
    const fields = ['name', 'beginDate', 'endDate', 'jit', 'region']
    fields.forEach(field => {
      // @ts-ignore
      const value = form.value[field]
      if (value !== '') {
        params[field] = value
      }
    })

    // 过滤
    if (filters.value) {
      Object.assign(params, filters.value)
    }

    return params
  }

  return { tableData, total, form, pageSize, currentPage, orderBy, filters, getTableData }
})