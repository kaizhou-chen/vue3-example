<script setup lang="ts">
import TreeLayout from '@/layout/TreeLayout.vue'
import DynamicComponent from '@/components/DynamicComponent.vue'

const props = withDefaults(defineProps<{
  menu: Array<any>,
}>(), {
  menu: [] as any
})

const layoutRef = ref()
const activeNode = ref()

function handleTabChange(node) {
  activeNode.value = node
}

function filterMethod(text, data) {
  if (data.label.includes(text) || (data.tag ?? '').includes(text)) {
    return true;
  }

  return false;
}

function selectNode(data, node) {
  if (data.url) {
    window.open(data.url, '_blank');
    return false;
  }

  return true;
}

const route = useRoute()
onMounted(() => {
  const { q } = route.query;
  if (q) {
    layoutRef.value?.setActiveNode(q);
  }
})
</script>

<template>
  <TreeLayout ref="layoutRef"
    :menu="menu"
    :show-tooltip="true"
    :select-node="selectNode"
    :filter-method="filterMethod"
    @tab-change="handleTabChange"
  >
    <!-- 左侧菜单栏，未完成的标识 -->
    <template #node="scope">
      <el-tooltip effect="dark" placement="top"
        :disabled="!scope.data.tooltip"
      >
        <template #content>
          <div style="white-space: pre-wrap;">{{ scope.data.tooltip }}</div>
        </template>

        <span :class="{
          'primary-node': scope.data.primary,
          'link-node': scope.data.url
        }">{{ scope.data.label }}</span>
      </el-tooltip>

      <span v-if="scope.data.todo" style="margin-left: 8px; color: #E6A23C;">
        <el-icon><Flag></Flag></el-icon>
      </span>
    </template>

    <!-- tab 里展示的组件-->
    <div>
      <DynamicComponent v-if="activeNode" :name="activeNode.value"></DynamicComponent>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </TreeLayout>
</template>

<style lang="less" scoped>
.primary-node {
  color: #409EFF;
  font-weight: bold;
}
.link-node {
  text-decoration: underline;
}
</style>