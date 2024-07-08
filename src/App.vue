<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

import MainLayout from './layout/MainLayout.vue';

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <!-- 国际化 -->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="less">
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;

  /*
  display: flex;
  place-items: center;
  */
}
</style>