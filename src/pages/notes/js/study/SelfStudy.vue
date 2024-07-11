<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { code } from './lessons/bilibili'

import duyi from './lessons/duyi'
import codereasy from './lessons/codereasy'
import vueLesson from './lessons/vueLesson';
import reactLesson from './lessons/reactLesson';
import labuladong from './lessons/labuladong'

const activeOption = 0;
const activeLesson = '倾斜按钮'

const lessonMap: any = {
  duyi: duyi,
  codereasy,
  vueLesson,
  reactLesson,
  labuladong,
}

const lesson = ref()
const lessonList = ref([])
const activeIndex = ref(-1)

const options = ref([
  {
    label: '合集·前端必修课精选',
    value: 'duyi',
    url: 'https://space.bilibili.com/3494367522195464/channel/collectiondetail?sid=1673875&ctype=0'
  },
  {
    label: '合集·前端面试',
    value: 'codereasy',
    url: 'https://space.bilibili.com/4416409/channel/collectiondetail?sid=1321883&ctype=0'
  },
  {
    label: '2023年最新Vue面试题剖析原理级讲解',
    value: 'vueLesson',
    url: 'https://www.bilibili.com/video/BV1YM411w7Zc/'
  },
  {
    label: 'React入门到实战(2022全网最新）',
    value: 'reactLesson',
    url: 'https://www.bilibili.com/video/BV1Z44y1K7Fj/'
  },
  {
    label: '合集·【labuladong】核心算法框架合集',
    value: 'labuladong',
    url: 'https://space.bilibili.com/14089380/channel/collectiondetail?sid=536106&ctype=0'
  }
])

onMounted(() => {
  const defaultLesson = options.value[activeOption]
  lesson.value = defaultLesson
  handleChange(defaultLesson)
})

async function handleChange(data) {
  lessonList.value = lessonMap[data.value];
  activeIndex.value = lessonList.value.findIndex((x: any) => x.title.indexOf(activeLesson) >= 0)

  await nextTick()
  requestAnimationFrame(() => {
    let rowIndex = activeIndex.value
    if (rowIndex < 0) {
      rowIndex = 1;
    }

    const tr = document.querySelector(`.el-table__body tbody tr:nth-child(${rowIndex})`)
    tr?.scrollIntoView()
  })
}

function indexMethod(index) {
  return index + 1;
}

function cellClassName(data) {
  const {row, column, rowIndex, columnIndex} = data
  if (rowIndex <= activeIndex.value && column.property === 'title') {
    return 'green'
  }
}

function handleCopy() {
  navigator.clipboard.writeText(code).then(() => {
    ElMessage('代码复制成功');
  })
}
</script>

<template>
  <el-card>
    <template #header>
      <div style="display: flex; align-items: center;">
        <el-select placeholder="请选择课程" style="width: 300px" 
          v-model="lesson" 
          value-key="value" 
          @change="handleChange"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item"
          />
        </el-select>

        <div style="margin-left: 20px;">
          <div style="display: flex;">
            <div>
              已完成：<b>{{ activeIndex + 1 }} / {{ lessonList.length }}</b>
            </div>
            <div style="margin-left: 20px;">
              还剩：<b>{{ lessonList.length - (activeIndex + 1) }}</b>
            </div>
            <div style="margin-left: 20px;">
              目标：每天看 <b>35</b> 个视频 （每小时5个）
            </div>
          </div>

          <el-link :href="lesson?.url" target="_blank" type="primary">{{ lesson?.url }}</el-link>
        </div>

        <div style="margin-left: auto;">
          <el-dropdown>
            <el-text type="primary">
              其他
              <el-icon>
                <arrow-down />
              </el-icon>
            </el-text>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item divided @click="handleCopy">B站，获取播放列表</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
    
    <div>
      <el-table :data="lessonList" height="500" :cell-class-name="cellClassName">
        <el-table-column type="index" :index="indexMethod" width="50"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.el-table :deep(.green),
.el-table :deep(.green) td {
  background-color: #95d475 !important;
}
</style>