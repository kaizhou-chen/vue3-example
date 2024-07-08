<template>
  <el-menu :default-active="$route.path" :unique-opened="true" :collapse="collapse" router>
    <menu-item v-for="(item, index) in menu" :item="item" :key="index"></menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import menuList from '@/router/menu'

defineProps({
  collapse: Boolean
})

let menu = ref(menuList)
</script>

<style>
.el-menu {
  border-right: none !important;
}
</style>