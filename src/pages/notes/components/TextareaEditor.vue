<script setup lang="ts">
import vCodeHighlight from '@/directives/VCodeHighlight';

const props = withDefaults(defineProps<{
  rows?: number
}>(), {
  rows: 2
})

const model = defineModel({ default: ''})

const inputEl = ref()
const highlightEl = ref()
const translate = ref('translate(0px, 0px)')

let highlight: any;

onMounted(() => {
  handleInput();
})

function getHighlight(fn) {
  highlight = fn;
}

function handleInput() {
  requestAnimationFrame(() => {
    if (highlight) {
      highlight(model.value);
    }
  })
}

function onScroll(e) {
  requestAnimationFrame(() => {
    const textarea = inputEl.value.textarea
    highlightEl.value.height = textarea.clientHeight + 'px'
    translate.value = `translate(0px, -${textarea.scrollTop}px)`
  })
}

/**
 * textarea 支持用 tab 键进行缩进
 */
 function handleTab(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    const textarea = e.target;
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    textarea.value = textarea.value.substring(0, start) +
      "\t" + textarea.value.substring(end);

    // put caret at right position again
    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
}
</script>

<template>
  <div class="editor">
    <el-input ref="inputEl"
      v-model="model" 
      type="textarea" 
      :rows="rows"
      spellcheck="false"
      placeholder="请输入代码" 
      @input="handleInput"
      @scroll="onScroll"
      @keydown="handleTab"
    ></el-input>

    <div ref="highlightEl" 
      class="code"
      v-code-highlight="getHighlight"
      :style="{ transform: translate }"
    >
      <!-- 在 pre 标签上，设置语言 -->
      <pre class="javascript"><code>{{ model }}</code></pre>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

/** 与 textarea 的样式保持一致 */
.textarea-like {
  line-height: 1.5;
  padding: 5px 15px 5px 11px;
  width: calc(100% - 28px);

  overflow-wrap: break-word;
  white-space: pre-wrap;
}

.editor {
  position: relative; 
  overflow: hidden;

  :deep(.el-textarea) {
    height: 100%;

    textarea {
      .code-font();
      height: 100%;
    }
  }
}

.code {
  /** 与 textarea 的样式保持一致 */
  .textarea-like();
  .highlight-pre();

  /** 定位 */
  position: absolute; 
  top: 0px; 
  left: 0px; 
  height: 100%; 

  z-index: 1;
  background-color: transparent;
  pointer-events: none; /** 鼠标穿透 */

  :deep(span) {
    text-wrap: wrap !important;
  }
}
</style>