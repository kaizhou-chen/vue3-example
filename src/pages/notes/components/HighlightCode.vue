<template>
  <div v-code-highlight="setHighlight" class="code" :class="{'inline': inline}">
    <pre :class="[lang]"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import vCodeHighlight from '@/directives/VCodeHighlight';

let highlight;

const props = withDefaults(defineProps<{
  code: string,
  inline?: boolean,
  lang?: string
}>(), {
  lang: 'javascript'
})

watch(
  () => props.code,
  (val) => {
    requestAnimationFrame(() => {
      highlight(val)
    })
  }
)

function setHighlight(fn) {
  highlight = fn
}
</script>

<style lang="less" scoped>
@import url('@/assets/global.less');

.code {
  .highlight-pre();
}
.inline {
  display: inline-flex;
}
</style>