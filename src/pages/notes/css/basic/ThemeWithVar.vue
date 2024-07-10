<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const theme = ref()
const options = ref([
  {
    label: '浅色主题',
    value: 'light'
  },
  {
    label: '深色主题',
    value: 'dark'
  }
])

const themeName = computed(() => {
  const item = options.value.find(x => x.value === theme.value)
  if (item) {
    return item.label
  }

  return ''
})

onMounted(() => {
  theme.value = options.value[0].value;
})

function handleChange(value) {
  const root: any = document.querySelector('html')
  if (value === 'dark') {
    root.dataset.theme = 'dark'
  } else {
    delete root.dataset.theme
  }
}
</script>

<template>
  <KeyPoint title="定义变量" :notes="[{
    code: `/** --变量名 */
--text-color: #fff;`,
    desc: 'CSS 变量是可以继承的，把变量定义在 :root 或 html 上，则页面内所有的元素都可以使用这些变量',
    lang: 'css'
  }]"></KeyPoint>

  <KeyPoint title="使用变量" :notes="[{
    code: `/** 使用 var 函数 */
color: var(--text-color);`,
    desc: ''
  }]"></KeyPoint>

  <div style="margin-top: 20px;">
    <el-segmented v-model="theme" :options="options" @change="handleChange">
      <template #default="{ item }">
        <div>{{ item.label }}</div>
      </template>
    </el-segmented>
  </div>
  
  <div class="container">
    <div class="bg1">
      <div class="text">{{ themeName }}</div>
    </div>
    <div class="bg2">
      <div class="text">{{ themeName }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px;
}
.bg1 {
  background-color: var(--bg1);
  padding: 20px;
}
.bg2 {
  background-color: var(--bg2);
  padding: 20px;
}
.text {
  color: var(--text-color);
  font-weight: bold;
}
</style>

<!-- 定义 CSS 变量-->
<style lang="less">
/**
 * 权重：属性选择器 > 伪元素选择器
 * 所以：如果 html 标签，设置了 data-theme 属性，就会优先使用对应主题里的变量
 */

/** 暗色主题 */
html[data-theme='dark'] {
  --text-color: #fff;
  --bg1: #102128;
  --bg2: #2d5567;
}

/** 默认亮色主题 */
:root {
  --text-color: #333;
  --bg1: #c7ffdd;
  --bg2: #fbd988;
}
</style>