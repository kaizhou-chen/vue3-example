<template>
  <QuestionLayout :question="question" :answer="answer">
    <HighlightCode :code="desc"></HighlightCode>
    <el-divider />
    <TextareaEditor v-model="question" :rows="1"></TextareaEditor>
    <el-divider />
    <ul>
      解题思路
      <li>创建生成器函数 <HighlightCode code="function* / yield" inline></HighlightCode></li>
      <li>调用 <HighlightCode code="next()" inline></HighlightCode>，依次获取字符串中的数字，进行比较</li>
    </ul>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'
import TextareaEditor from '@/pages/notes/components/TextareaEditor.vue'
import HighlightCode from '@/pages/notes/components/HighlightCode.vue'

const question = ref("compare('1-2-3', '1-2-4')")
const answer = ref(compare.toString())

const desc = ref(`/**
 * 比较两个字符串的大小
 * 两个字符串都是用 - 连接的数字，比如1-2-33-4-5
 * 比较方式是从左到右，依次比较每个数字的大小
 * 遇到相等的数字继续往后比较，遇到不同的数字直接得到比较结果
 * s1 > s2 return 1
 * s1 < s2 return -1
 * s1 === s2 return 0
 */
function compare(s1, s2) {}`)

function compare(s1, s2) {
  const iter1 = walk(s1);
  const iter2 = walk(s2);

  while(1) {
    const n1 = iter1.next();
    const n2 = iter2.next();

    // 打印每次比较的数字
    console.log(n1.value, n2.value)

    if (n1.value > n2.value) {
      return 1
    } else if (n1.value < n2.value) {
      return -1
    } else if (n1.done && n2.done) {
      return 0
    } else if (n1.done) {
      return -1
    } else if (n2.done) {
      return 1
    }
  }

  /**
   * 生成器函数
   */
  function* walk(str) {
    let part = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '-') {
        part += str[i]
      } else {
        yield Number(part)
        part = ''
      }
    }

    if (part) {
      yield Number(part)
    }
  }
}

onMounted(() => {
  compare('1-2-3', '1-2-4')
})
</script>

<style lang="less" scoped>

</style>