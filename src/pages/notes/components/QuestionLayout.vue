<script setup lang="ts">
import { isArray } from 'lodash-es'
import MonacoEditor from '@/components/MonacoEditor/MonacoEditor.vue'

const props = withDefaults(defineProps<{
  question?: string,
  answer?: string,

  showResult?: boolean,
}>(), {
  question: '',
  showResult: true
})

const emit = defineEmits<{
  change: [any]
}>()

const code = ref('')
const result = ref('')
const logList = ref([])

let worker: Worker;
let blobURL: string;

onMounted(() => {
  if (props.answer) {
    code.value = props.answer
  }
})

watch(
  () => props.answer,
  (val) => {
    code.value = val || ''
  }
)

function run() {
  const worker = inlineWorker();

  worker.postMessage(['run']);
  worker.onmessage = (e) => {
    result.value = e.data.result;
    logList.value = e.data.logList.map(x => {
      if (isArray(x)) {
        return x.join(' , ')
      }

      return x;
    });
    
    emit('change', e.data.result)
  }
}

function inlineWorker() {
  // 将字符串，转换为 Blob 对象
  const script = getWorkerScript();
  const blob = new Blob(
    [ script ],
    { type: 'application/javascript' }
  )

  // 将 Blob 对象，转换为 url
  blobURL = URL.createObjectURL(blob);
  worker = new Worker(blobURL);
  return worker;
}

function getWorkerScript() {
  const script = `// 收到消息
self.onmessage = async (e) => {
  let result = '';
  const logList = []
  const oldLog = console.log;

  // 修改 console.log
  console.log = function () {
    oldLog.apply(console, arguments);

    if (arguments.length === 1) {
      logList.push(arguments[0])
    } else {
      logList.push([...arguments])
    }
  };

  // 执行代码
  const executor = async () => {
    ${ getQuestionCode() }
    ${ code.value }
  }
  await executor();

  setTimeout(() => {
    // 还原 console.log
    console.log = oldLog

    // 发送消息，将打印结果传递回去
    self.postMessage({result, logList})
  }, 500)
}`
  return script
}

// 调用函数的代码，必须写在最后一行
function getQuestionCode() {
  if (!props.question) {
    return ''
  }

  const lines = props.question.split('\n')
  if (lines.length === 1) {
    return 'result = ' + props.question
  } else {
    const len = lines.length - 1
    const list = lines.map((x, index) => {
      if (index < len) {
        return x
      } else {
        return 'result = ' + x
      }
    })

    return list.join('\n')
  }
}
</script>

<template>
  <div class="container">
    <div>
      <slot></slot>

      <div v-if="showResult && (result !== '' || logList.length > 0)">
        <el-divider />
        <el-card>
          <div v-if="result !== ''">
            <div style="line-height: 32px;">运行结果：</div>
            <div>{{ result }}</div>
          </div>

          <div v-if="logList.length > 0">
            <el-divider />
            <div class="result">
              <div v-for="item of logList">{{ item }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>

    <div>
      <div style="display: flex; margin: 0 0 12px 70px;">
        <el-button type="primary" @click="run">运行</el-button>
        <el-text type="info" style="margin-left: 8px;">代码会在 Web Worker 里运行</el-text>
      </div>

      <div class="editor">
        <MonacoEditor v-model="code" height="100%"></MonacoEditor>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

.editor {
  height: calc(100vh - 240px) !important;
}

.result {
  .code-font();
  white-space: pre-wrap;
}
</style>