<template>
  <div ref="itemRef" class="item">
    <el-select v-model="data.condition" style="width: 75px;">
      <el-option label="或者" value="or" />
      <el-option label="并且" value="and" />
    </el-select>

    <div v-if="data.children" class="children">
      <RuleEngineItem 
        v-for="(item, index) of data.children" 
        :key="index" 
        :data="item"
        :parent="data"
        :index="index"
      ></RuleEngineItem>
    </div>

    <div v-else class="label">{{ data.label }}</div>
  </div>
</template>

<script setup lang="ts">
import bus from '@/utils/bus'

const props = defineProps<{
  data: any,
  parent?: any,
  index?: number
}>()

// 注入祖先组件提供的 draw
const draw: any = inject('draw')

const itemRef = ref()

onMounted(() => {
  itemRef.value.dataset.id = props.data.id;

  bus.on('update-svg', () => {
    // 叶子节点，连接 label
    if (!props.data.children) {
      const from = getFromPosition(itemRef.value.querySelector('.el-select'), true)
      const to = getToPosition(itemRef.value.querySelector('.label'))

      drawPath(from, to, true)
    }

    // 根节点，不连线
    if (!props.parent) {
      return
    }

    // 连接子节点和父节点
    const first = props.index === 0;
    const from = getFromPosition(
      document.querySelector(`[data-id="${props.parent.id}"] .el-select`),
      first
    );
    const to = getToPosition(itemRef.value);

    drawPath(from, to, first);
  })
})

onBeforeUnmount(() => {
  bus.off('update-svg')
})

function drawPath(from, to, first) {
  if (first) {
    const path = draw.path(`M${from.x} ${from.y} L${to.x} ${to.y}`)
    path.stroke({ color: '#ccc', width: 2, linecap: 'round', linejoin: 'round' })
  } else {
    const moveTo = `M${from.x} ${from.y}`;
    const verticalLineTo = `v${to.y - from.y - 20}`;
    const curveTo = `Q${from.x + 5} ${to.y - 5} ${to.x - 20} ${to.y}`;
    const lineTo = `L${to.x} ${to.y}`

    const path = draw.path(`${moveTo} ${verticalLineTo} ${curveTo} ${lineTo}`)
    path.stroke({ color: '#ccc', width: 2, linecap: 'round', linejoin: 'round' })
    path.fill('none')
  }
}

function getFromPosition(el, first) {
  const rect: any = el.getBoundingClientRect()
  if (first) {
    return {
      x: rect.left + rect.width,
      y: rect.top + 16
    }
  } else {
    return {
      x: rect.left + 60,
      y: rect.top + 32
    }
  }
}

function getToPosition(el) {
  const rect: any = el.getBoundingClientRect()
  return {
    x: rect.left,
    y: rect.top + 16
  }
}
</script>

<style lang="less" scoped>
.item {
  width: fit-content; 
  display: flex; 
  margin-bottom: 20px;
}
.children, .label {
  display: inline-block;
  margin-left: 40px;;
}
.label {
  line-height: 32px;
}
</style>