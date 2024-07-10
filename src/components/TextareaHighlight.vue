<script setup lang="ts">
import Highlighter from 'vue-highlight-words'

const model = defineModel({ default: '' })
const props = defineProps<{
  searchWords?: string[],
  placeholder?: string,
  rows?: number
}>()
const emits = defineEmits<{
  input: [any]
}>()

const inputEl = ref()
const highlightEl = ref()

const translate = ref('translate(0px, 0px)')

function onInput(e) {
  emits('input', e)
}

function onScroll(e) {
  requestAnimationFrame(() => {
    const textarea = inputEl.value.textarea
    highlightEl.value.height = textarea.clientHeight + 'px'
    translate.value = `translate(0px, -${textarea.scrollTop}px)`
  })
}
</script>

<template>
  <div class="ux-textarea">
    <el-input ref="inputEl"
      v-model="model" 
      type="textarea" 
      :placeholder="placeholder"
      :rows="props.rows ? props.rows : 2"
      @input="onInput"
      @scroll="onScroll"
    ></el-input>

    <div ref="highlightEl" class="ux-highlight" :style="{ transform: translate}">
      <!-- 高亮关键字 -->
      <Highlighter
        :searchWords="searchWords" 
        :textToHighlight="model"
        highlightClassName="highlight" 
      ></Highlighter>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

.textarea-like {
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  padding: 5px 15px 5px 11px;
  width: calc(100% - 20px);
}

.ux-textarea {
  position: relative;

  :deep(.el-textarea) {
    position: relative; 
    z-index: 1;

    textarea {
      background-color: transparent;
    }
  }

  :deep(.ux-highlight) {
    span {
      display: block;
    }
    mark {
      color: transparent;
    }
  }

  .ux-highlight {
    /** 定位 */
    position: absolute; 
    top: 0px; 
    left: 0px; 
    height: 100%; 
    width: 100%;

    /** 与 textarea 的样式保持一致 */
    .textarea-like();
    
    color: transparent;
  }
}
</style>