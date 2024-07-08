<!--
  参考文档：https://jingyan.baidu.com/article/fedf0737088ceb75ad897730.html
-->
<template>
  <el-breadcrumb separator="/">
    <!--
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    -->

    <el-breadcrumb-item v-for="(item) in breadList" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
let breadList = ref<any>([]);

watch(
  route, 
  (oldRoute, newRoute) => {
    getBreadcrumb();
  }, 
  { immediate: true }
)

function getBreadcrumb() {
  let matched = route.matched.filter(
    item => item.meta && item.meta.title
  );
  breadList.value = matched;
}
</script>