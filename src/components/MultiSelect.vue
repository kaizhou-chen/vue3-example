<script setup lang="ts">
const model = defineModel<any[]>({
  default: []
})

const props = defineProps<{
  options: any[],
  placeholder?: string
}>()

const selectAll = ref(false)
const items = ref<any[]>([])

function handleSelectAll(selectAll) {
  let list: any = []
  if (selectAll) {
    list = props.options.map(x => x.value)
  }

  model.value = [...list]
  items.value = [...list]
}

async function onSelectChange() {
  items.value = [...model.value]

  await nextTick()
  selectAll.value = (model.value.length === props.options.length)
}
</script>

<template>
  <el-select multiple v-model="model" :placeholder="placeholder" @change="onSelectChange">
    <el-checkbox label="全选" v-model="selectAll" @change="handleSelectAll" style="padding-left: 20px; width: calc(100% - 20px);"></el-checkbox>

    <el-checkbox-group v-model="items">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <el-checkbox :value="item.value" style="width: 100%;">
          <el-text truncated>{{ item.label }}</el-text>
        </el-checkbox>
      </el-option>
    </el-checkbox-group>
  </el-select>
</template>

<style lang="less" scoped>

</style>