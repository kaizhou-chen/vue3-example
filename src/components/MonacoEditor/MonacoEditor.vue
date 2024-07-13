<!-- vite.config.ts 里要配置 monacoEditorPlugin -->
<template>
  <div ref="monacoEditorRef" :style="monacoEditorStyle"></div>
</template>

<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useMonacoEditor } from './useMonacoEditor.hook'
 
const props = withDefaults(defineProps<{
  width?: string | number,
  height?: string | number,
  language?: string,
  editorOption?: Object,
}>(), {
  width: '100%',
  height: '500px',
  language: 'javascript',
  editorOption: () => ({}),
})
 
const emits = defineEmits<{
  (e: 'blur'): void,
}>()

const model = defineModel({
  default: ''
})
 
const monacoEditorStyle = computed(() => {
  return { 
    width: typeof props.width === 'string' ? props.width : props.width + 'px', 
    height: typeof props.height === 'string' ? props.height : props.height + 'px'
  }
})
 
const { monacoEditorRef, createEditor, updateVal, updateOptions, getEditor } = useMonacoEditor(props.language)
 
onMounted(() => {
  const monacoEditor = createEditor(props.editorOption)
  updateMonacoVal(model.value)
  monacoEditor?.onDidChangeModelContent(() => {
    model.value = monacoEditor!.getValue()
  })
  monacoEditor?.onDidBlurEditorText(() => {
    emits('blur')
  })
})
 
watch(
  () => model.value, 
  () => {
    updateMonacoVal(model.value)
  }
)
 
function updateMonacoVal(val: string) {
  if(val !== getEditor()?.getValue()) {
    updateVal(val)
  }
}
 
defineExpose({ updateOptions })
</script>