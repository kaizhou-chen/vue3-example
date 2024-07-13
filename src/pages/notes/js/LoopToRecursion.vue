<template>
  <QuestionLayout :question="question" :answer="answer">
    <div style="min-height: 32px; margin-bottom: 12px;">
      对数组进行求和，不能使用循环，不能调用数组中的方法
    </div>
    <TextareaEditor v-model="question"></TextareaEditor>

    <el-divider />
    <ul>
      解题思路
      <li>将循环，转换为递归</li>
      <li>要设置递归的结束条件</li>
    </ul>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'
import TextareaEditor from '@/pages/notes/components/TextareaEditor.vue'

const question = ref(`const arr = [1, 2, 3, 4, 5];
sum(arr);`)
const answer = ref(sum.toString())

function sum(arr, i = 0) {
  if (i === arr.length) {
    return 0;
  }

  return arr[i] + sum(arr, i + 1)
}
</script>

<style lang="less" scoped>

</style>