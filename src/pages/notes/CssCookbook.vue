<template>
  <CookbookLayout :menu="menu">
    <div>
      <h3>CSS 笔记</h3>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="layout" label="布局" width="180" />
        <el-table-column prop="animation" label="动画" width="180" />
        <el-table-column prop="other" label="其他" />
      </el-table>
    </div>
  </CookbookLayout>
</template>

<script setup lang="ts">
import CookbookLayout from '@/pages/notes/components/CookbookLayout.vue'
import { addMenuItem } from '@/utils/menuUtil'
import MenuItem from './MenuItem'

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

const menu = ref<Array<MenuItem>>([
  {
    label: 'CSS 权重',
    value: 'SelectorSpecificity'
  },
  {
    label: '布局',
    value: 'layout',
    children: [
      {
        label: '弹性布局',
        value: 'FlexLayout'
      },
      {
        label: '网格布局 - 基础',
        value: 'GridLayoutBasic'
      },
      {
        label: '网格布局 - 区域',
        value: 'GridLayoutArea'
      },
      {
        label: '蜂巢布局',
        value: 'HoneycombLayout'
      },
    ]
  },
  {
    label: '动画',
    value: 'animation',
    children: [
      {
        label: '过渡动画 transition',
        value: 'CssTransition'
      },
      {
        label: '关键帧 @keyframes',
        value: 'CssKeyframes'
      },
    ]
  },
  {
    label: '背景',
    value: 'background',
    children: [
      {
        label: '滚动视差',
        value: 'ParallaxScrolling'
      },
      {
        label: '镂空文字',
        value: 'TextCutOut'
      },
      {
        label: '文字视差背景',
        value: 'TextParallax'
      },
      {
        label: '磨砂玻璃效果',
        value: 'BackdropFilter'
      },
      {
        label: '重复渐变的边框',
        value: 'GradientBorder',
        tag: '线性渐变, 径向渐变, 锥形渐变, linear-gradient'
      },
      {
        label: 'clip-path',
        value: 'ClipPath'
      }
    ]
  },
  {
    label: '基础',
    value: 'other',
    children: [
      {
        label: 'CSS 变量',
        value: 'ThemeWithVar'
      },
      {
        label: '阴影',
        value: 'BoxShadow'
      },
      {
        label: '滚动条',
        value: 'ScrollBar'
      },
      {
        label: 'Less 语法',
        value: 'Less'
      },
    ]
  },
])

onMounted(() => {
  addMenuItem(menu.value, 'css-cookbook')
})
</script>

<style lang="less" scoped>

</style>