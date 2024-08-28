<script setup lang="ts">
import LayoutMenu from './LayoutMenu.vue';
import LayoutBreadcrumb from './LayoutBreadcrumb.vue';

const route = useRoute()

const collapse = ref(false)
const wrap = ref('div');
const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})

const display = computed(() => {
  return (wrap.value === 'div') ? 'inline' : 'block'
})

function toggleMenu() {
  collapse.value = !collapse.value;
}

watch(
  () => route.path,
  (path) => {
    if (route.meta.plain) {
      wrap.value = 'div'
    } else {
      wrap.value = 'el-card'
    }
  },
  { immediate: true }
)

function gotoBlog() {
  window.open('https://kaizhou-chen.github.io/docsify-blog/')
}
</script>

<template>
  <el-container class="fixed-layout">
    <!-- 头部 -->
    <el-header class="ux-head">
      <div style="display: flex;">
        <div style="display: inline-flex">
          <img src="../assets/letter-v.svg" style="width: 45px; height: 45px;" />
          <div v-if="!collapse" class="logo-text">Vue 3 Example</div>
        </div>

        <!-- 面包屑栏 -->
        <el-container>
          <el-header style="height: auto; padding: 20px;">
            <layout-breadcrumb></layout-breadcrumb>
          </el-header>
        </el-container>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside class="ux-side">
        <transition name="fade" mode="out-in" appear>
          <el-scrollbar>
            <layout-menu class="ux-menu" :collapse="collapse"></layout-menu>
          </el-scrollbar>
        </transition>

        <div class="toggle-button" @click="toggleMenu">
          <el-icon>
            <ArrowLeftBold v-if="!collapse" />
            <ArrowRightBold v-if="collapse" />
          </el-icon>
        </div>
      </el-aside>

      <el-container class="ux-center">
        <div v-if="$slots.error" class="ux-main" style="width: 100%;">
          <slot name="error" />
        </div>

        <!-- 路由出口 router-view -->
        <el-main v-else class="ux-main">
          <component :is="wrap" style="min-height: calc(100% - 2px);" :style="{'display': display}">
            <router-view></router-view>
          </component>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.ux-head {
  z-index: 5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .logo-text {
    font-weight: bold; 
    display: inline-block; 
    line-height: 45px;
    margin-left: 12px;
    width: 145px;
  }
}

.ux-side {
  width: auto;
  text-align: left;

  overflow: visible;
  position: relative;
}

.ux-center {
  background-color: #f9f9f9;
}
.ux-main {
  min-height: calc(100vh - 60px);
  overflow: auto;
  text-align: left;
}

.ux-menu:not(.el-menu--collapse) {
  width: 220px;
}
.toggle-button {
  position: absolute;
  width: 18px;
  height: 40px;
  top: calc(~"(100vh - 40px) / 2");
  right: -18px;
  z-index: 5;
  border: 1px solid var(--el-border-color);
  /** box-shadow: var(--el-box-shadow); */
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
}


/**
 * 头部和左侧导航栏固定时，使用的样式
 */
.fixed-layout {
  .ux-head {
    position: sticky;
    top: 0px;
    padding-top: 10px;
    background-color: #fff;
  }

  .ux-side {
    position: fixed;
    top: 60px;
    height: calc(100vh - 60px);
    background-color: #fff;
  }

  .ux-center {
    padding-left: 220px;
  }

  .toggle-button {
    display: none;
  }
}
</style>

<style>
body {
  margin-top: 0px;
}
</style>