<template>
  <QuestionLayout :exam-code="examCode">
    <p>完成 arrange 函数，执行结果如下</p>
    <div v-code-highlight class="question">
			<pre class="javascript"><code>{{ question }}</code></pre>
		</div>

    <KeyPoint style="margin-top: 12px;" :notes="[{
        code: `function arrange() {
  function wait(time) {
    return this; // 返回的是链式对象本身
  }

  function execute() {
    return this; // 返回的是链式对象本身
  }

  /** 返回的对象，它包含的所有函数的 this，都是这个对象本身 */
  return {
    wait,
    execute
  }
}`,
      desc: '',
      lang: 'javascript'
    }]"></KeyPoint>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/layout/QuestionLayout.vue'
import KeyPoint from '@/pages/notes/KeyPoint.vue'
import vCodeHighlight from '@/directives/VCodeHighlight';

const question = ref(`arrange('William')
  .wait(5)
	.do('commit')
	.waitFirst(3)
	.execute();

// 等待3秒
// > William is notified
// 等待5秒`)

const examCode = ``

function arrange(name) {
  const tasks: any[] = []

  tasks.push(() => {
    console.log(`${name} is notified`)
  })

  function wait(time) {
    tasks.push(() => new Promise((resolve) => {
      setTimeout(() => resolve, time * 1000)
    }))
    // @ts-ignore
    return this; // 返回的是链式对象本身
  }
  
  function doSomething(taskName) {
    tasks.push(() => {
      console.log(`Start to ${taskName}`)
    })
    // @ts-ignore
    return this; // 返回的是链式对象本身
  }

  function waitFirst(time) {
    tasks.unshift(() => new Promise((resolve) => {
      setTimeout(() => resolve, time * 1000)
    }))
    // @ts-ignore
    return this; // 返回的是链式对象本身
  }

  async function execute() {
    for (const t of tasks) {
      await t()
    }
    // @ts-ignore
    return this; // 返回的是链式对象本身
  }

  /** 返回的对象，它包含的所有函数的 this，都是这个对象本身 */
  return {
    wait,
    do: doSomething,
    waitFirst,
    execute
  }
}
</script>

<style lang="less" scoped>
.code-font {
  tab-size: 2;
  font-size: 17px;
  font-family: Consolas, 'Courier New', monospace;
}

.question {
  pre {
    margin: 0;

    .hljs {
      padding: 0;
      background-color: transparent;

      .code-font();
    }
  }
}
</style>