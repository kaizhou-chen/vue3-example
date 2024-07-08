<script setup lang="ts">
const props = defineProps({
  content: String,
  width: {
    type: Number,
    default: 300
  }
})

const spanRef = ref()

const disabled = ref(true)

function onMouseOver() {
  const el = spanRef.value
  const parentWidth = el.parentNode.offsetWidth
  const contentWidth = el.offsetWidth
  disabled.value = contentWidth <= parentWidth
}
</script>

<template>
  <el-popover
    :content="props.content"
    :disabled="disabled"
    :width="props.width"
    
    effect="dark"
    placement="top"
    trigger="hover"
  >
    <template #reference>
      <div class="ellipsis" @mouseover="onMouseOver">
        <span ref="spanRef">{{ props.content }}</span>
      </div>
    </template>
  </el-popover>
</template>

<style lang="less" scoped>
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>