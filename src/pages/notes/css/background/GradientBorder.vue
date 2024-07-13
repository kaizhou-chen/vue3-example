<template>
  <div class="container">
    <el-card>
      <template #header>
        <div style="display: flex; align-items: center;">
          <div>重复渐变的边框</div>
          <div style="margin-left: auto;">
            <span style="margin-right: 8px; font-size: 0.8em;">显示背景</span>
            <el-switch v-model="bg_1" />
          </div>
        </div>
      </template>

      <div class="card">
        <div class="content" :class="{'hide': bg_1}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div style="display: flex; align-items: center;">
          <div>旋转的边框</div>
          <div style="margin-left: auto;">
            <span style="margin-right: 8px; font-size: 0.8em;">显示背景</span>
            <el-switch v-model="bg_2" />
          </div>
        </div>
      </template>

      <div class="btn" :class="{'hide': bg_2}">
        <div>边框按钮</div>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div style="display: flex; align-items: center;">
          <div>渐变背景</div>
          <div style="margin-left: auto;">
            <el-select v-model="value" clearable style="width: 150px">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-option-group>
            </el-select>
          </div>
        </div>
      </template>

      <el-popover
        :visible="showCode"
        placement="bottom"
        :width="700"
      >
        <template #reference>
          <div style="display: flex; flex-direction: column; height: calc(100% - 105px); position: relative;">
            <div style="flex: 1;" :style="{
              'background': value || '#fff',
              'border-radius': (value?.indexOf('linear-gradient') < 0 ? '50%' : '0')
            }"></div>
      
            <div style="display: flex;">
              <el-link href="https://blog.csdn.net/cuclife/article/details/137686122" target="_blank">参考文档</el-link>
              <div style="margin-left: auto;">
                <span style="margin-right: 8px; font-size: 0.8em;">显示代码</span>
                <el-switch v-model="showCode" />
              </div>
            </div>
          </div>
        </template>

        <HighlightCode v-if="value" :code="'background: ' + value + ';'" lang="css"></HighlightCode>
      </el-popover>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import HighlightCode from '@/pages/notes/components/HighlightCode.vue'

const bg_1 = ref(false)
const bg_2 = ref(false)
const showCode = ref(false)
const value = ref('')

const options = [
  {
    label: '线性渐变（Linear Gradients）',
    options: [
      {
        label: '从上到下',
        value: 'linear-gradient(red, blue)',
        
      },
      {
        label: '左上角到右下角',
        value: 'linear-gradient(to bottom right, red, yellow, green)',
      },
      {
        label: '45度倾斜',
        value: 'linear-gradient(45deg, red, yellow, green)',
      },
    ],
  },
  {
    label: '重复线性渐变（Repeat Linear Gradients）',
    options: [
      {
        label: '-45度倾斜 (重复)',
        value: `repeating-linear-gradient(
    -45deg,
    #e8544d 0px 10px,
    #fff 10px 20px,
    #75adf8 20px 30px,
    #fff 30px 40px
  )`,
      },
    ],
  },
  {
    label: '径向渐变（Radial Gradients）',
    options: [
      {
        label: '从内到外扩散',
        value: 'radial-gradient(circle, red, blue)',
      },
      {
        label: '从外到内收缩',
        value: 'radial-gradient(circle at center, green, rgba(0, 255, 0, 0))',
      },
      {
        label: '45度倾斜',
        value: 'radial-gradient(ellipse at left top, red, blue)',
      },
    ],
  },
  {
    label: '锥形渐变（Conic Gradients）',
    options: [
      {
        label: '旋转渐变',
        value: 'conic-gradient(red, blue)',
      },
      {
        label: '底部开始旋转',
        value: 'conic-gradient(from 180deg at center, yellow, green, blue)',
      },
      {
        label: '指定角度',
        value: 'conic-gradient(red 45deg, lime 90deg, blue 135deg, red 180deg)',
      },
    ],
  },
]
</script>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 350px);
}

:deep(.el-card__body) {
  height: 100%;

  > div:first-child {
    margin: 0 auto;
  }
}

/**
 * 1、重复渐变的边框
 */
.card {
  width: 300px;
  padding: 5px;
  border-radius: 5px;

  /** 
   * repeating-linear-gradient 重复的渐变背景色 
   * -45deg  倾斜 45 度
   */
  background: repeating-linear-gradient(
    -45deg,
    #e8544d 0px 10px,
    #fff 10px 20px,
    #75adf8 20px 30px,
    #fff 30px 40px
  );
  background-position: -20px -20px;
  background-size: 200% 200%;
  transition: .5s;
}

.card:hover {
  background-position: 0px 0px;
}

.content {
  background-color: #fff;
  padding: 12px;

  &.hide {
    background-color: transparent;
  }
}

/**
 * 2、旋转的边框
 */
.btn {
  width: fit-content;
  font-size: 32px;
  padding: 20px;
  border-radius: 12px;

  position: relative;
  overflow: hidden;
  opacity: 0.99; /** 要设置透明度 */
}

.btn::after {
  content: '';
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  left: 5px;
  top: 5px;
  
  background-color: #fff; /** 按钮的颜色 */
  z-index: -1;
}

.btn.hide {
  &::after {
    background-color: transparent;
  }
}

.btn::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;             /** 定位到按钮的中心 */
  transform-origin: 0 0; /** 将旋转的原点设定在左上角 */
  background: #409EFF; /** 边框的颜色 */

  z-index: -2;
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  to {
    transform: rotate(1turn); /** 1turn 代表旋转 1 圈 */
  }
}
</style>