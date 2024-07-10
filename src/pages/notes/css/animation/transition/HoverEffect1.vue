<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'

const imageList = ref<any>([])
const effectList = ref([
  { label: '向上浮动', value: 'move-up' }, 
  { label: '放大', value: 'scale' }, 
  { label: '3D景深', value: 'rotate'},
])
const effect = ref('move-up')
const effectClass = ref(['move-up'])

onMounted(() => {
  for (let index = 0; index < 6; index++) {
    const path = getPublicImage(`/images/0${index + 1}.jpg`)
    imageList.value.push(path)
  }
})

watch(
  effect,
  (val) => {
    effectClass.value = [val]
  }
)
</script>

<template>
  <el-card>
    <template #header>
      <div style="display: flex; align-items: center; height: 21px;">
        <div>鼠标悬停</div>
        <div style="margin-left: auto;">
          <el-radio-group v-model="effect">
            <el-radio-button v-for="item in effectList" :key="item" :value="item.value">{{ item.label }}</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </template>

    <div class="container">
      <div v-for="item in imageList" class="card">
        <img :src="item" :class="effectClass" />
        <div class="text">图片名称</div>
      </div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
  .container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 160px;
    grid-auto-rows: 160px;
  }
  .card {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: 0.4s; /** 设置过渡时间 */
    }
  }

  .text {
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 0px;
    font-size: 28px;
    color: #000;
    background-color: rgba(white, .5);
    /*mix-blend-mode: screen;*/

    opacity: 0;
    transition: 0.4s; /** 设置过渡时间 */
  }
  
  .card:hover {
    .move-up {
      box-shadow: 0 8px 8px 0 grey; /** 设置盒子阴影 */
      transform: translate(0, -10px); /** 鼠标悬浮时box向上浮动的距离 */
    }

    .scale {
      box-shadow: 0 8px 8px 0 grey;
      transform: translate(0, -10px);
      transform: scale(1.2);          /** 悬停时放大 */
    }

    .rotate {
      box-shadow: 0 8px 8px 0 grey;
      transform: perspective(500px)   /** 设置景深，增加3d效果 */
                 rotateX(25deg);      /** 悬停时旋转 */
    }

    .rotate + .text {
      transform: translate3d(0, 0px, 50px); /** 使用 translate3d，增加景深 */
      opacity: 1;
    }
  }
</style>