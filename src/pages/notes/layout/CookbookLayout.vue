<script setup lang="ts">
import TreeLayout from '@/layout/TreeLayout.vue'

const props = withDefaults(defineProps<{
  menu: Array<any>,
}>(), {
  menu: [] as any
})

const tableData = ref([
  {
    layout: '弹性布局 flex',
    animation: '过渡动画 transition',
    other: '权重 specificity'
  },
  {
    layout: '网格布局 grid',
    animation: '关键帧 @keyframes',
    other: '变形 transform'
  }
])

const activeNode = ref()

const componentName = computed(() => {
  const node = activeNode.value;
  if (!node) {
    return
  }
  
  // 动态加载组件
  return loadComponent(node.value)
})

// 动态加载组件
const modules = import.meta.glob('@/pages/notes/**/*.vue');

function loadComponent(name){
  const keys = Object.keys(modules)
  const path = keys.find(x => x.indexOf(name + '.vue') >= 0)

  if (path) {
    // @ts-ignore
    return defineAsyncComponent(modules[path])
  } else {
    return name
  }
}

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
</script>

<template>
  <TreeLayout
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
      <component v-if="componentName" :is="componentName"></component>
      <div v-else>
        <h3>CSS 笔记</h3>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="layout" label="布局" width="180" />
          <el-table-column prop="animation" label="动画" width="180" />
          <el-table-column prop="other" label="其他" />
        </el-table>
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