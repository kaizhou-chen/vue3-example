<script setup lang="ts">
import { getPublicImage } from '@/utils/commonUtils'
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const glassRef = ref()
const filter = ref()
const options = ref([
  {
    label: '磨砂玻璃效果',
    value: 'blur'
  },
  {
    label: '灰度效果',
    value: 'gray'
  }
])

let move;

onMounted(async () => {
  filter.value = options.value[0].value;

  await nextTick();
  move = useMove(glassRef.value)
  move.addListener();
})

onBeforeUnmount(() => {
  move.removeListener();
})

function useMove(el) {
  let isDown = false;
  let shiftX = 0;
  let shiftY = 0;

  const onMouseUp = function() {
    isDown = false;
  }

  const onMouseMove = function(event) {
    event.preventDefault();
    if (isDown) {
      const divOverlay = el;
      divOverlay.style.left = event.pageX - shiftX + 'px';
      divOverlay.style.top  = event.pageY - shiftY + 'px';
      divOverlay.style.position  = 'absolute';
      divOverlay.style.transform = 'none';
    }
  }

  function addListener() {
    const divOverlay = el;
    divOverlay.addEventListener('mousedown', function(e) {
      isDown = true;

      const parentRect = divOverlay.parentElement.getBoundingClientRect();
      const divRect = divOverlay.getBoundingClientRect();
      shiftX = e.clientX - divRect.left + parentRect.left;
      shiftY = e.clientY - divRect.top + parentRect.top;
    }, true);

    document.addEventListener('mouseup', onMouseUp, true);
    document.addEventListener('mousemove', onMouseMove, true);
  }

  function removeListener() {
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
  }

  return {
    addListener,
    removeListener
  }
}
</script>

<template>
  <KeyPoint :notes="[
    { 
      code: 'background-color: rgba(255, 255, 255, .1);', 
      desc: '使用透明的背景色',
      lang: 'css'
    },
    {
      code: 'backdrop-filter: blur(10px);',
      desc: 'backdrop-filter 是对元素后面的背景进行模糊，而不是模糊元素本身。与 filter 的属性值相同',
      lang: 'css'
    }
  ]"></KeyPoint>

  <div class="bg" :style="{'background-image': 'url(' + getPublicImage('/images/01.jpg') + ')'}">
    <div ref="glassRef" class="glass" :class="[filter]">
      <el-segmented v-model="filter" :options="options">
        <template #default="{ item }">
          <div>{{ item.label }}</div>
        </template>
      </el-segmented>
  </div>
  </div>
</template>

<style lang="less" scoped>
.bg {
  height: 580px;
  background-position: center;
  background-size: cover;
  position: relative;
}

.glass {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  border: 2px solid #333;
  padding-top: 12px;
  text-align: center;
  user-select: none;
  cursor: grab;
}
.blur {
  background-color: rgba(255, 255, 255, .1);
  backdrop-filter: blur(10px);
}
.gray {
  backdrop-filter: grayscale(100);
}
</style>