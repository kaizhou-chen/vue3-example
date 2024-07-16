<script setup lang="ts">
import RuleEngineItem from './RuleEngineItem.vue'
import { searchTreeList } from '@/utils/commonUtils'
import bus from '@/utils/bus'

import { SVG } from '@svgdotjs/svg.js'

const formRef = ref()
const open = ref(false);
const form = ref({
  parent: '',
  condition: 'or',
  left: 'A',
  operator: '=',
  right: 'B'
})

const data = ref<any[]>([])

let draw;

onMounted(() => {
  const id = 'svg-container'
  initContainer(id);

  draw = SVG().addTo('#' + id).size('100%', '100%')

  // 向后代组件，提供 draw
  provide('draw', draw);
})

onBeforeUnmount(() => {
  draw.clear();
})

function initContainer(id) {
  const el = document.getElementById(id)
  if (el) {
    document.body.removeChild(el);
  }

  const div = document.createElement('div')
  div.id = id;
  document.body.appendChild(div);
}

function openDialog() {
  open.value = true
}

function handleClose() {
  formRef.value.resetFields();
}

function onSubmit(formEl) {
  formEl.validate(async (valid: Boolean) => {
    if(!valid) {
      console.log('error submit!!');
      return false;
    }

    addActive();
    handleClose();
    open.value = false;

    // 等待组件更新后，更新svg
    await nextTick();
    requestAnimationFrame(() => {
      draw.clear();
      bus.emit('update-svg')
    })
  });
}

function addActive() {
  const seed = new Date().getTime();
  const item: any = {
    id: seed,
    value: seed 
  }
  Object.assign(item, form.value)
  item.label = item.left + ' ' + item.operator + ' ' + item.right;

  if (data.value.length === 0) {
    data.value.push(item)
    return;
  }

  const node = searchTreeList(data.value, form.value.parent)
  if (!node.children) {
    node.children = []
  }
  node.children.push(item)
}
</script>

<template>
  <el-button type="primary" @click="openDialog" style="margin-bottom: 20px;">添加活动</el-button>

  <RuleEngineItem v-if="data.length > 0" :data="data[0]"></RuleEngineItem>

  <el-dialog v-model="open" title="添加活动" width="500" @close="handleClose">
    <el-form style="max-width: 600px"
      ref="formRef" 
      :model="form" 
      label-width="auto" 
    >
      <el-form-item v-if="data.length > 0" label="父节点" prop="parent" required>
        <el-tree-select
          v-model="form.parent"
          :data="data"
          :render-after-expand="false"
          :check-strictly="true"
        />
      </el-form-item>
      
      <el-form-item label="判断条件" prop="condition" required>
        <el-select v-model="form.condition" placeholder="请选择">
          <el-option label="或者" value="or" />
          <el-option label="并且" value="and" />
        </el-select>
      </el-form-item>

      <el-form-item label="值1" prop="left" required>
        <el-input v-model="form.left"></el-input>
      </el-form-item>

      <el-form-item label="比较条件" prop="operator" required>
        <el-select v-model="form.operator" placeholder="请选择">
          <el-option label="大于" value=">" />
          <el-option label="等于" value="=" />
          <el-option label="小于" value="<" />
        </el-select>
      </el-form-item>

      <el-form-item label="值2" prop="right" required>
        <el-input v-model="form.right"></el-input>
      </el-form-item>
    </el-form>

    <div style="text-align: center;">
      <el-button type="primary" @click="onSubmit(formRef)">确定</el-button>
    </div>
  </el-dialog>
</template>

<style lang="less" scoped>

</style>

<style lang="less">
#svg-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;

  pointer-events: none;
}
</style>