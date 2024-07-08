<template>
  <!-- 使用 is 可以动态修改组件的类型 -->
  <component :is="type" :index="index">
    <template #title>
      <el-icon v-if="item.icon">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.text }}</span>
    </template>

    <template v-for="(obj, index) in item.children" :key="index">
      <!-- 递归组件，使用自己 -->
      <menu-item :item="obj"></menu-item>
    </template>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  item: Object
});

let type = ref('');
let index = ref('');

// 有子菜单就用 el-submenu，没有就用 el-menu-item
let item: any = props.item;
type.value = item.children ? 'el-sub-menu' : 'el-menu-item';
index.value = item.url ? item.url : item.text;
</script>