<script setup lang="ts">
const props = defineProps<{
  columnKey: string,
  filters: any
}>()

const emit = defineEmits<{
  filterChange: [param: any]
}>()

const popoverRef = ref()
const checkList = ref([])
const visible = ref(false)

function hide() {
  popoverRef?.value.hide()
}

function handleReset() {
  checkList.value = []
  
  const filter = {
    [props.columnKey]: []
  }
  emit('filterChange', filter)
  hide()
}

function handleSubmit() {
  const filter = {
    [props.columnKey]: checkList.value
  }
  emit('filterChange', filter)
  hide()
}
</script>

<template>
  <el-popover ref="popoverRef" :width="160" effect="light" placement="bottom" trigger="click" @show="visible = true" @hide="visible = false">
    <template #reference>
      <span style="display: inline-block; cursor: pointer;">
        <el-icon>
          <ArrowUp v-if="visible" />
          <ArrowDown v-else />
        </el-icon>
      </span>
    </template>

    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="item in props.filters" :label="item.text" :value="item.value" style="display: flex;"/>
      </el-checkbox-group>

      <el-divider style="margin: 8px 0;"/>
      <div style="text-align: center;">
        <el-button size="small" @click="handleReset">重置</el-button>
        <el-button size="small" type="primary" @click="handleSubmit">确定</el-button>
      </div>
    </div>
  </el-popover>
</template>

<style lang="less" scoped>

</style>