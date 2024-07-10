<script setup lang="ts">
import { debounce } from 'lodash-es'

const formRef = ref()

const form = ref({
  handler: '',
  city: '',
  state: []
})

const rules = ref({
  handler: [
    { required: true, message: '请选择联系人' },
  ],
  city: [
    { required: true, message: '请选择城市' },
  ],
  state: [
    { required: true, message: '请选择数据' },
  ],
})

const selectRef = ref()

const loading = ref(false)
const options: any = ref()

const list1 = [
  { 'label': 'abc123456 张三 （部门一）', value: 'abc123456' },
  { 'label': 'abc345678 李四 （部门二）', value: 'abc345678' },
]

const list2 = [
  {
    value: 'south',
    label: '华南',
    children: [
      {
        value: 'guangdong',
        label: '广东',
        children: [
          {
            value: 'shenzhen',
            label: '深圳',
          },
          {
            value: 'guangzhou',
            label: '广州',
          },
        ],
      },
    ],
  },
]

const citys = [
  'California',
  'Illinois',
  'Maryland',
  'Texas',
  'Florida',
  'Colorado',
  'Connecticut ',
]
const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
const list3 = citys.map((city, index) => {
  return {
    label: city,
    key: index,
    initial: initials[index],
  }
})

function filterMethod(query, item) {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}

const remoteMethod = debounce((query) => {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list1.filter(x => x.value.toLowerCase().indexOf(query) > -1)

      // 更新了 options 之后，等待 DOM 更新完毕，执行自己的回调
      nextTick(function() {
        if(options.value.length == 1) {
          const el = selectRef.value.$refs.menuRef.$el.querySelector('.el-select-dropdown__item')
          el.click();
        }
      })
    });
  } else {
    options.value = [];
  }
}, 1000)

function validate() {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid: Boolean) => {
      resolve(valid)
    })
  })
}

/**
 * 每个步骤都向外暴露 validate 方法，用来确定当前的表单是否校验通过，是否可以到下一步
 */
defineExpose({
  validate
})
</script>

<template>
  <el-form style="width: 650px"
    ref="formRef" 
    :model="form"
    :rules="rules"
    label-width="auto" 
  >
    <el-form-item label="联系人" prop="handler">
      <el-popover
        :width="350"
        effect="dark"
        placement="right"
        trigger="click"
        title="人员联想"
      >
        <template #reference>
          <el-select
            ref="selectRef"
            v-model="form.handler"
            :remote-method="remoteMethod"
            :loading="loading"
            remote
            filterable
            reserve-keyword
            placeholder="请输入联系人"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>

        <template #default>
          <ul style="padding-inline-start: 20px;">
            <li>输入工号，比如：abc123456</li>
            <li>如果能精确匹配，即只有一个选项，则默认选中</li>
          </ul>
        </template>
      </el-popover>
    </el-form-item>

    <el-form-item label="城市" prop="city">
      <el-cascader v-model="form.city" :options="list2" style="width: 100%;" />
    </el-form-item>

    <el-form-item label="穿梭框" prop="state">
      <el-transfer
        v-model="form.state"
        filterable
        :titles="['Source', 'Target']"
        :filter-method="filterMethod"
        :data="list3"
      />
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>

</style>