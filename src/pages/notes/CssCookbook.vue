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
        value: 'GradientBorder'
      },
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
      /*
      {
        label: 'CSS 笔记',
        value: 'CssNote'
      },
      {
        label: '相对单位 em/rem',
        value: 'RelativeUnit'
      },
      */
    ]
  },
  {
    label: '其他',
    value: 'other',
    children: [
      {
        label: '悬浮抽卡',
        value: 'GachaGame'
      },
      {
        label: '颜色转换',
        value: 'ColorTools'
      },
    ]
  }
])
</script>

<style lang="less" scoped>

</style>