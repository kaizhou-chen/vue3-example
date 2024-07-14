<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'

// 模板引用
const containerRef = ref()

const text = ref('')
const style = ref<any>({
  fontSize: '50px',
  fontWeight: 'bold',
  paintOrder: 'stroke',
  strokeLinejoin: 'round',
  strokeWidth: '1px',
  stroke: 'black',
  fill: 'none',
})

const color = ref('')
const strokeWidth = ref(1)
const strokeColor = ref('rgba(0,0,0,1)')

onMounted(() => {
  svgToCanvas()
})

watchEffect(async () => {
  const str = text.value;
  style.value.fill = color.value || 'none'
  style.value.stroke = strokeColor.value || 'none'
  style.value.strokeWidth = strokeWidth.value + 'px'

  await nextTick()
  svgToCanvas()
})

function svgToCanvas() {
  const img = containerRef.value.querySelector('img');
  const ctx = containerRef.value.querySelector('canvas').getContext('2d');

  const { width, height } = getTextSize()
  const xml = getSvgXml()

  // data URL
  const svg64 = btoa(unescape(encodeURIComponent(xml)));
  const image64 = 'data:image/svg+xml;base64,' + svg64; // 将 xml 转换成base64编码后，拼接 data URL
  img.addEventListener('load', (e: any) => {
    // update canvas size
    ctx.canvas.width = width
    ctx.canvas.height = height

    // draw image
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(e.target, 0, 0);
  });
  img.src = image64;
}

function getTextSize() {
  const el = containerRef.value.querySelector('.text');
  return {
    width: el.clientWidth,
    height: el.clientHeight
  }
}

function getSvgXml() {
  const { width, height } = getTextSize()
  const svg = containerRef.value.querySelector('.svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);

  const xml = new XMLSerializer().serializeToString(svg); // 将 svg 元素，读取成xml
  return xml;
}

function download() {
  const canvas = containerRef.value.querySelector('canvas')
  const url = canvas.toDataURL('image/png') // 将 canvas 的内容，保存为png图片

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', text.value + '.png');

  document.body.appendChild(link);
  link.click();

  // clean up
  document.body.removeChild(link);
}
</script>

<template>
  <el-card style="width: 425px;">
    <template #header>
      <div style="display: flex;">
        <div>文字转图片</div>
        <el-tooltip effect="dark" placement="top" content="下载图片">
          <el-button type="info" :icon="Download" circle size="small" @click="download" style="margin-left: auto;"></el-button>
        </el-tooltip>
      </div>
    </template>

    <div ref="containerRef">
      <div style="margin-bottom: 20px; display: flex">
        <div style="display: flex;">
          <el-input v-model="text" placeholder="请输入文字" :maxlength="5" show-word-limit ></el-input>
          <el-tooltip effect="dark" placement="top" content="文字颜色">
            <div>
              <el-color-picker v-model="color" show-alpha />
            </div>
          </el-tooltip>
        </div>
        <el-divider direction="vertical" style="height: 30px;" />
        <div style="display: flex;">
          <el-tooltip effect="dark" placement="top" content="描边宽度">
            <el-input-number v-model="strokeWidth" :min="0" :max="5" />
          </el-tooltip>
          <el-tooltip effect="dark" placement="top" content="描边颜色">
            <div>
              <el-color-picker v-model="strokeColor" show-alpha />
            </div>
          </el-tooltip>
        </div>
      </div>

      <div class="text">{{ text }}</div>
      <div style="display: flex; justify-content: center; ">
        <svg class="svg"> 
          <text x="50%" y="86%" text-anchor="middle" :style="style">{{ text }}</text> 
        </svg>
      </div>

      <div class="helper">
        <canvas></canvas>
        <img />
      </div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.text {
  font-size: 50px; 
  font-weight: bold; 
  display: inline-block; 
  line-height: 50px;

  position: absolute;
  z-index: -10;
}

.helper {
  display: none;
}
</style>