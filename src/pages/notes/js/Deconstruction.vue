<template>
  <QuestionLayout :answer="answer">
    <div style="min-height: 32px; margin-bottom: 12px;">
      让下面的代码成立
    </div>
    <HighlightCode :code="question"></HighlightCode>

    <el-divider />
    <div>解题思路：</div>
    <p>数组的解构是基于 <b>迭代器</b>，为 Object 提供迭代器 <HighlightCode code="Symbol.iterator" inline></HighlightCode></p>
    <p>
      1、返回数组的迭代器
      <el-button :icon="Search" circle type="info" size="small" @click="test1" />
    </p>
    <HighlightCode :code="iterator"></HighlightCode>
    <p>
      2、返回生成器函数 
      <el-button :icon="Search" circle type="info" size="small" @click="test2" />
    </p>
    <HighlightCode :code="generator"></HighlightCode>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'
import HighlightCode from '@/pages/notes/components/HighlightCode.vue'
import { Search } from '@element-plus/icons-vue'

const question = ref('let [a, b] = {a: 1, b: 2}');
const answer = ref('')

const iterator = ref(`Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}`)

const generator = ref(`Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}`)

function test1() {
  answer.value = `Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`
}


function test2() {
  answer.value = `Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`
}
</script>

<style lang="less" scoped>

</style>