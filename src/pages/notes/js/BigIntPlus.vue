<template>
  <QuestionLayout :question="question" :answer="answer">
    <div style="min-height: 32px; margin-bottom: 12px;">
      实现 sum 函数，计算 2 个字符串格式的大整数相加的结果。
    </div>
    <TextareaEditor v-model="question" :rows="1"></TextareaEditor>

    <el-divider />
    <ul>
      解题思路
      <li>数字对齐，在左侧补零</li>
      <li>从最后一位数开始，从后往前计算</li>
      <li>a[i] + b[i] + 进位，为每位数的计算结果，只保留个位数</li>
    </ul>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'
import TextareaEditor from '@/pages/notes/components/TextareaEditor.vue'

const question = ref("sum('1234567', '3482752370238420');")
const answer = ref(`function sum(a, b) {
  // 对齐数字
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  // 从最后一位数开始计算
  let carry = 0; // 进位
  let result = [];
  for (let i = len - 1; i >= 0; i--) {
    // 第 i 位数相加，并加上进位
    const total = Number(a[i]) + Number(b[i]) + carry;
    carry = Math.floor(total / 10); // 计算进位

     // 计算结果，只取个位数【去掉进位】
    const digit = total % 10;
    // @ts-ignore
    result.unshift(digit) // 添加到首位，每次计算都进一位
  }

  if (carry > 0) {
    // @ts-ignore
    result.unshift(carry)
  }

  // 打印过程
  const prefix = (carry > 0 ? ' ' : '')
  const sep = new Array(len).fill('-').join('')
  console.log(prefix + a);
	console.log(prefix + b);
	console.log(prefix + sep);

  return result.join('')
}`)

function sum(a, b) {
  // 对齐数字
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  // 从最后一位数开始计算
  let carry = 0; // 进位
  let result = [];
  for (let i = len - 1; i >= 0; i--) {
    // 第 i 位数相加，并加上进位
    const total = Number(a[i]) + Number(b[i]) + carry;
    carry = Math.floor(total / 10); // 计算进位

     // 计算结果，只取个位数【去掉进位】
    const digit = total % 10;
    // @ts-ignore
    result.unshift(digit) // 添加到首位，每次计算都进一位
  }

  if (carry > 0) {
    // @ts-ignore
    result.unshift(carry)
  }

  // 打印过程
  const prefix = (carry > 0 ? ' ' : '')
  const sep = new Array(len).fill('-').join('')
  console.log(prefix + a);
	console.log(prefix + b);
	console.log(prefix + sep);

  return result.join('')
}
</script>

<style lang="less" scoped>

</style>