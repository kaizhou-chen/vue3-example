<script setup lang="ts">
import vCodeHighlight from '@/directives/VCodeHighlight';

const props = withDefaults(defineProps<{
  title?: string,
  subTitle?: string,
  notes: any[]
}>(), {
  title: '实现方式'
})
</script>

<template>
  <el-alert :closable="false">
    <template #title>
      <el-text style="font-size: 20px;">{{ title }}</el-text>
      <el-text v-if="subTitle" tag="sub" style="margin-left: 20px; font-weight: bold;">{{ subTitle }}</el-text>
    </template>

    <template #default>
      <table>
        <tr v-for="item in notes">
          <td class="code">
            <!-- 代码高亮 -->
            <div v-code-highlight>
              <pre :class="[item.lang ? item.lang : '']"><code>{{ item.code }}</code></pre>
            </div>
          </td>
          <td class="desc">
            <div v-html="item.desc"></div>
          </td>
        </tr>
      </table>
    </template>
  </el-alert>
</template>

<style lang="less" scoped>
@import url('@/assets/global.less');

.code {
  white-space: nowrap;
  vertical-align: top;

  .highlight-pre();
}

.desc {
  white-space: pre-wrap;
  vertical-align: top;
  padding-left: 12px;
  font-size: 16px;
  line-height: 1.5em;

  :deep(b) {
    .code-font();

    color: #8A7B52;
  }
}
</style>