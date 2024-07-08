<script setup lang="ts">
import InputEditor from './InputEditor.vue'
import NumberEditor from './NumberEditor.vue'
import DateEditor from './DateEditor.vue'
import SelectEditor from './SelectEditor.vue'

const model = defineModel()

const props = defineProps<{
  type: any,
  scope: any,
  options?: any
}>()

const emit = defineEmits<{
  onAfterEdit: [param: any]
}>()

const oldVal = ref()
const newVal = ref()

const editorName = computed(() => {
  const nameMap: any = {
    'text': InputEditor,
    'number': NumberEditor,
    'date': DateEditor,
    'select': SelectEditor
  }

  return nameMap[props.type] || null;
})

onMounted(() => {
  oldVal.value = model.value;
  newVal.value = model.value;
})

watch(
  model,
  (val) => {
    newVal.value = val
  }
)

function onAfterEdit(valid) {
  const param: any = {}
  param.valid = valid;
  param.rowIndex = props.scope.$index;
  param.field = props.scope.column.property;
  param.changed = oldVal.value != newVal.value;

  emit('onAfterEdit', param)
}
</script>

<template>
  <component
    v-model="model"
    :is="editorName"
    :options="options"
    @onAfterEdit="onAfterEdit($event)"
  >
  </component>
</template>

<style scoped lang="less">
  
</style>