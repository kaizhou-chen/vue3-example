<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <!-- 国际化 -->
  <el-config-provider :locale="locale">
    <div>这是登录页面</div>
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