<script setup lang="ts">
import { ElTree } from 'element-plus'

const props = withDefaults(defineProps<{
  menu: Array<any>,
  placeholder?: string,
  showTooltip?: boolean,
  filterMethod?: (text, data) => boolean,
  selectNode?: (data, node) => boolean,
}>(), {
  menu: [] as any,
  placeholder: '搜索'
})

const emit = defineEmits<{
  tabChange: [any]
}>()

const slots = useSlots();
const hasNodeSlot = !!slots.node;

const treeRef = ref<InstanceType<typeof ElTree>>()

const editableTabs = ref<Array<any>>([])
const filterText = ref('')
const activeTab = ref('')

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

watch(activeTab, (val) => {
  // tab页与树节点同步
  treeRef.value?.setCurrentKey(val)

  // 找出树节点对应的数据
  const node = searchTreeList(props.menu, val, 'value')
  emit('tabChange', node)
})

function searchTreeList(list, value, field?) {
  for (const item of list) {
    let result = searchTree(item, value, field);
    if (result) {
      return result
    }
  }
  return null;
}

function searchTree(element, value, field?) {
	if (element[field || 'id'] == value) {
		return element;
	} else if (element.children != null) {
		let result = null;
		for(let i = 0; result == null && i < element.children.length; i++) {
			result = searchTree(element.children[i], value, field);
		}
		return result;
	}
	return null;
}

function filterNode(text, data) {
  if (!text) return true;

  if (props.filterMethod) {
    return props.filterMethod(text, data)
  } else {
    return data.label.includes(text)
  }
}

function handleChange(data, node) {
  if (!node.isLeaf) {
    return;
  }

  if (props.selectNode) {
    const result = props.selectNode(data, node);
    if (!result) {
      return;
    }
  }

  const tab = editableTabs.value.find((x) => x.name === data.value)
  if (!tab) {
    editableTabs.value.push({
      name: data.value,
      title: data.label
    })
  }

  if (activeTab.value !== data.value) {
    activeTab.value = data.value
  }
}

function removeTab(targetName) {
  const tabs = editableTabs.value
  let activeName = activeTab.value

  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  activeTab.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<template>
  <div style="display: flex; min-height: 100%; max-width: 100%;">
    <el-card class="tree-card">
      <el-input class="tree-filter"
        v-model="filterText"
        :placeholder="placeholder"
      />

      <div style="max-height: calc(100vh - 175px);">
        <el-tree class="filter-tree" style="max-width: 600px;"
          ref="treeRef"
          node-key="value"
          default-expand-all
          :data="menu"
          :props="defaultProps"
          :highlight-current="true"
          :filter-node-method="filterNode"
          @current-change="handleChange"
        >
          <template #default="{ node, data }">
            <div>
              <slot v-if="hasNodeSlot" name="node" :data="data"></slot>
              <span v-else>{{ node.label }}</span>
            </div>
          </template>
        </el-tree>
      </div>
    </el-card>

    <div style="flex: 1; margin-left: 20px; max-width: calc(100% - 300px);">
      <el-tabs type="card" class="demo-tabs"
        v-model="activeTab"
        :closable="editableTabs.length > 1"
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <template #label>
            <el-tooltip :content="item.name" :disabled="!showTooltip" placement="bottom">
              <div>{{ item.title }}</div>
            </el-tooltip>
          </template>
        </el-tab-pane>
      </el-tabs>

      <el-card style="min-height: calc(100% - 42px);">
        <slot></slot>
      </el-card>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

:deep(.el-tabs__header) {
  margin-bottom: 0px;
}

:deep(.el-tabs__item) {
  background-color: #fff;
}

:deep(.el-tabs__nav) {
  max-width: 100%;
  overflow: auto;

  .custom-scrollbar();
}

.tree-card {
  width: 280px; 
  min-width: 280px; 
  min-height: 100%; 
  overflow: auto;

  :deep(&.el-card) {
    .custom-scrollbar();
  }
}

.tree-filter {
  width: 240px; 
  position: sticky; 
  top: 20px; 
  z-index: 5; 
  box-shadow: 0px -20px #fff;
}
</style>