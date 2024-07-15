<template>
  <QuestionLayout :answer="answer">
    <div>给 fetch 添加超时功能</div>

    <el-divider />
    <ul>
      解题思路
      <li>创建一个高阶函数，返回一个有默认超时时间的函数</li>
      <li>返回一个 Promise，用 setTimeout 定时，如果超时则 reject</li>
      <li>调用 fetch，并使用 Promise 的 resolve 和 reject</li>
      <li>
        <p><b>Promise 的状态一旦确定，就不会再修改</b></p>
        <p>fetch 正常执行然后 resolve，<b> 状态已确定 </b>，到达超时时间调用 reject，被忽略</p>
        <p>请求超时调用 reject，<b> 状态已经确定 </b>，当 fetch 请求结束调用 resolve，被忽略</p>
        <p>所以，Promise 的状态和结果不受影响</p>
      </li>
    </ul>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'

const answer = ref(`function createRequestWithTimeout(timeout = 5000) {
  return function(url, options) {
    return new Promise((resolve, reject) => {
      // 发送请求
      fetch(url, options).then(resolve, reject)

      // 添加超时功能
      setTimeout(() => {
        reject(new Error('request timeout'))
      }, timeout)
    })
  }
}`)

function createRequestWithTimeout(timeout = 5000) {
  return function(url, options) {
    return new Promise((resolve, reject) => {
      // 发送请求
      fetch(url, options).then(resolve, reject)

      // 添加超时功能
      setTimeout(() => {
        reject(new Error('request timeout'))
      }, timeout)
    })
  }
}

function createRequestWithTimeoutV2(timeout = 5000) {
  return function(url, options) {
    return new Promise((resolve, reject) => {
      // 创建 abort 控制器
      const controller = new AbortController();
      options = options || {}
      if (options.signal) {
        const signal = options.signal;
        signal.addEventListener('abort', () => {
          controller.abort();
        })
      }
      options.signal = controller.signal

      // 发送请求
      fetch(url, options).then(resolve, reject)

      // 添加超时功能
      setTimeout(() => {
        reject(new Error('请求超时'))

        // 终止请求
        controller.abort();
      }, timeout)
    })
  }
}
</script>

<style lang="less" scoped>

</style>