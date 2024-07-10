<script setup lang="ts">
import JSON5 from 'json5'
import { ElNotification } from 'element-plus'

let code = ref('')
let result = ref('')

const isLargeData = ref(false)
const viewList = ref([])
const copyText = ref('')

function onInput() {
  try {
    const json5 = JSON5.parse(code.value);
    result.value = JSON.stringify(json5, null, '  ')
  } catch(e) { /** */ }
}

function onPaste(e) {
  const clipboardData = e.clipboardData;
  const text = clipboardData.getData('Text');

  // 小于 1万 个字符，则在编辑器里显示
  if (text.length < 10000) {
    code.value = text;
    onInput()
    return;
  }

  // 超过 1万 个字符
  // a) 清空输入框
  code.value = '';
  onInput()

  // b) 直接格式化后，复制到剪切板
  let str = ''
  try {
    const json5 = JSON5.parse(text);
    str = JSON.stringify(json5, null, '  ');

    copyText.value = str;
    viewList.value = str.split('\n').map((x, index) => ({
      id: index,
      code: x
    })) as any

    isLargeData.value = true;

    handleCopy()
  } catch(e) { 
    alert('JSON 格式化失败', e);
  }
}

function alert(type, msg) {
  ElNotification.info({
    message: type + '<br>' + msg,
    dangerouslyUseHTMLString: true,
  })
}

function handleBack() {
  isLargeData.value = false;
}

function handleCopy() {
  // 复制到剪切板
  navigator.clipboard.writeText(copyText.value).then(() => {
    alert('复制成功', 'JSON 已复制到剪贴板。');
  }, () => {
    alert('复制失败', '拒绝复制');
  })
}
</script>

<template>
  <div class="json-tool" style="position: relative;">
    <div style="display: flex;">
      <div style="flex: 1; margin-right: 50px;">
        <el-input
          v-model="code"
          type="textarea"
          spellcheck="false"
          placeholder="请输入需要格式化的json"
          @input="onInput"
          @paste.prevent="onPaste"
        ></el-input>
      </div>

      <div style="flex: 1;">
        <el-input
          v-model="result"
          type="textarea"
          spellcheck="false"
          class="result"
        ></el-input>
      </div>
    </div>
    
    <div class="view-large-data" :class="{'active': isLargeData}">
      <div style="display: flex; align-items: center;">
        <el-page-header @back="handleBack" style="white-space: nowrap;">
          <template #content>
            <el-button @click="handleCopy" type="primary">复制</el-button>
          </template>
        </el-page-header>
        <el-alert type="success" :closable="false">
          <el-text>格式化的 JSON 内容，已复制到剪贴板。可以粘贴到文本编辑器里查看。</el-text>
          <el-text type="danger" style="margin-left: 12px;">由于使用了虚拟滚动，所以不支持搜索。</el-text>
        </el-alert>
      </div>

      <RecycleScroller class="scroller"
        :items="viewList"
        :item-size="32"
        key-field="id"
      >
        <template #default="{ item }">
          <div class="code">
            {{ item.code }}
          </div>
        </template>
      </RecycleScroller>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/global.less');

.json-tool {
  :deep(.el-textarea) {
    textarea {
      height: calc(100vh - 145px) !important;

      .code-font();
    }
  }
}

.view-large-data {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #fff;
  transition: .5s;

  &.active {
    z-index: 1;
  }
}

.scroller {
  height: 100%;

  .code {
    .code-font();
    white-space: pre-wrap;
  }
}
</style>