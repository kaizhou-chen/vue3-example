<script setup lang="ts">
import vCodeHighlight from '@/directives/VCodeHighlight';
import TextareaHighlight from '@/pages/notes/components/TextareaHighlight.vue' 

import { repeat, meta, group, lookahead } from './regexSyntax'

const text = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.

abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789 _+-.,!@#$%^&*();/|<>"'
12345 -98.7 3.141 .6180 9,000 +42
555.123.4567	+1-(800)-555-2468
foo@demo.net	bar.ba@test.co.uk
www.demo.com	http://foo.co.uk/
https://marketplace.visualstudio.com/items?itemName=chrmarti.regex
https://github.com/chrmarti/vscode-regex
`);

const code = ref('')
const flags = ref()
const activeNames = ref('1')

const caseSensitive = computed(() => {
  return flags.value !== 'i'
})

const searchWords = computed<string[]>(() => {
  let list: string[] = []

  let text = ''
  try {
    const regex = new RegExp(code.value, 'g' + (flags.value ? 'i' : ''));
    if (code.value !== '') {
      text = regex.toString()
      if (highlight) {
        highlight('const regex = ' + text.replace(/</g, '&lt;'));
      }
    } else {
      highlight('')
    }
    
    list = [code.value]
  } catch(e) {
    if (highlight) {
      highlight('');
    }

    list = ['']
  }

  return list;
})

let highlight: any;

function getHighlight(fn) {
  highlight = fn;
}

function preview(val) {
  code.value = val;
}
</script>

<template>
  <div class="regex-tool" style="display: flex;">
    <div style="flex: 1; margin-right: 50px;">
      <el-input class="code"
        v-model="code"
        placeholder="请输入表达式" 
      >
        <template #append>
          <el-select v-model="flags" clearable placeholder="flags" style="width: 115px">
            <el-option label="忽略大小写" value="i" />
          </el-select>
        </template>
      </el-input>

      <div v-code-highlight="getHighlight" class="regex-code">
        <pre class="javascript"><code></code></pre>
      </div>

      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="• 重复匹配 {}" name="1">
          <el-table :data="repeat" style="width: 100%">
            <el-table-column prop="greedy" label="贪婪模式" width="180" />
            <el-table-column prop="lazy" label="懒惰模式 ?" width="180" />
            <el-table-column prop="desc" label="" />
          </el-table>
          <ul>
            <li>
              贪婪模式：尽可能多地匹配字符
              <el-link type="primary" style="margin-left: 12px;" @click="preview('^.*t')">^.*t</el-link>
            </li>
            <li>
              懒惰模式：尽可能少地匹配字符
              <el-link type="primary" style="margin-left: 12px;" @click="preview('^.*?t')">^.*?t</el-link>
            </li>
          </ul>
        </el-collapse-item>

        <el-collapse-item title="• 元字符 []" name="2">
          <el-table :data="meta" style="width: 100%">
            <el-table-column prop="char" label="元字符" width="180" />
            <el-table-column prop="range" label="字符范围" width="180" />
            <el-table-column prop="desc" label="" />
          </el-table>
        </el-collapse-item>

        <el-collapse-item title="• 捕获分组、非捕获分组 ()" name="3">
          <el-table :data="group" style="width: 100%">
            <el-table-column prop="type" label="类型" width="180" />
            <el-table-column prop="code" label="" width="180">
              <template #default="scope">
                <div class="tip" v-html="scope.row.code"></div>
              </template>
            </el-table-column>
            <el-table-column prop="desc" label="" />
          </el-table>
        </el-collapse-item>

        <el-collapse-item title="• 前瞻断言 ()" name="4">
          <el-table :data="lookahead" style="width: 100%">
            <el-table-column prop="type" label="类型" width="180" />
            <el-table-column prop="code" label="" width="180">
              <template #default="scope">
                <div class="tip" v-html="scope.row.code"></div>
              </template>
            </el-table-column>
            <el-table-column prop="desc" label="" />
          </el-table>

          <ul>
            <li>
              <el-link type="primary" @click="preview('.*(?=\\.com)')">.*(?=\.com)</el-link>
              <span style="margin-left: 12px;">后面紧跟着 .com，且匹配结果里不包含 .com</span>
            </li>
            <li>前瞻断言只是一个测试，括号 (?=...) 中的内容不包含在匹配结果中</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div style="flex: 1;">
      <TextareaHighlight 
        v-model="text" 
        :searchWords="searchWords"
        :caseSensitive="caseSensitive"
      ></TextareaHighlight>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/global.less');

.regex-tool {
  :deep(.el-textarea) textarea {
    height: calc(100vh - 145px) !important;
    .code-font();
  }

  :deep(.ux-highlight) {
    .code-font();
  }
}

.tip {
  .code-font();
}

.regex-code {
  margin: 12px 0;

  .highlight-pre();
}
</style>