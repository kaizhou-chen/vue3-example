<script setup lang="ts">
import TextareaEditor from '@/pages/notes/components/TextareaEditor.vue'

const props = withDefaults(defineProps<{
  question?: string,
  answer?: string,

  runImmediate?: boolean,
  showResult?: boolean,
}>(), {
  question: '',
  showResult: true
})

const emit = defineEmits<{
  change: [any]
}>()

const code = defineModel()
const resultList = ref([])

let worker: Worker;
let blobURL: string;

onMounted(() => {
  if (props.answer) {
    code.value = props.answer
  }

  if (props.runImmediate) {
    run();
  }
})

function run() {
  const worker = inlineWorker();

  worker.postMessage(['run']);
  worker.onmessage = (e) => {
    resultList.value = e.data;

    emit('change', e.data[0])
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
    const result = ${props.question ? props.question : '"";'}
    console.log(result)

    ${code.value}
  }
  await executor();

  setTimeout(() => {
    // 还原 console.log
    console.log = oldLog

    // 发送消息，将打印结果传递回去
    self.postMessage(logList)
  }, 500)
}`
  return script
}
</script>

<template>
  <div class="container">
    <div>
      <slot></slot>

      <div v-if="showResult && resultList.length > 0">
        <el-divider />
        <el-card>
          <div style="line-height: 32px;">运行结果：</div>
          <div class="result">
            <div v-for="item of resultList">{{ item }}</div>
          </div>
        </el-card>
      </div>
    </div>

    <div>
      <div style="display: flex; margin-bottom: 12px;">
        <el-button type="primary" @click="run">运行</el-button>
        <el-text type="info" style="margin-left: 8px;">代码会在 Web Worker 里运行</el-text>
      </div>
      
      <TextareaEditor v-model="code" class="editor"></TextareaEditor>
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