<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue';

const cssNotes_common = ref([
  {
    title: '过渡动画 transition',
    notes: [
      {
        code: 'transition: 0.4s;',
        desc: '使用过渡动画的元素，需要设置过渡时间'
      },
    ]
  },
  {
    title: 'transform',
    notes: [
      { 
        code: 'transform: translate(0, -10px);', 
        desc: '位移 translate'
      },
      { 
        code: 'transform: scale(1.5);', 
        desc: '缩放 scale'
      },
      {
        code: 'transform: rotate(45deg);', 
        desc: '旋转 rotate'
      },
      { 
        code: 'transform: perspective(500px);', 
        desc: '3D 景深'
      },
    ]
  },
  {
    title: '图片',
    notes: [
      {
        code: 'object-fit: cover;',
        desc: '图片高度铺满，宽度等比例缩放，超出容器则裁剪'
      },
      {
        code: 'filter: grayscale(100%);',
        desc: '图片变灰白'
      },
      {
        code: 'mix-blend-mode: multiply;',
        desc: '图片白色背景变透明'
      }
    ]
  },
])

const cssNotes_senior= ref([
  {
    title: 'CSS 变量',
    notes: [
      {
        code: '--text-color: #fff;',
        desc: '定义变量： --text-color'
      },
      {
        code: 'color: var(--text-color);',
        desc: '使用变量： var(--text-color)'
      },
    ]
  },
  {
    title: 'CSS 变量 (在 js 里使用)',
    notes: [
      {
        code: "div.style.setProperty('--text-color', '#fff');",
        desc: '在 js 里定义 CSS 变量'
      },
    ]
  },
  {
    title: '其他',
    notes: [
      {
        code: 'aspect-ratio: 1;',
        desc: '设置宽高比，如：16 / 9 或 4 / 3'
      },
      {
        code: 'pointer-events: none;',
        desc: '鼠标穿透'
      },
      {
        code: 'width: fit-content;',
        desc: '宽度适应内容'
      },
    ]
  },
  {
    title: '文本溢出显示省略号 - 单行',
    notes: [
      {
        code: `.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}`,
        desc: ''
      }
    ]
  }
])
</script>

<template>
  <div>
    <div class="grid-container">
      <div>
        <div v-for="item of cssNotes_common" class="item">
          <KeyPoint :title="item.title" :notes="item.notes"></KeyPoint>
        </div>
      </div>

      <div>
        <div v-for="item of cssNotes_senior" class="item">
          <KeyPoint :title="item.title" :notes="item.notes"></KeyPoint>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.grid-container {
  display: grid;

  /** 每行重复 2 次，每次一个元素，且占用1份的空间 */
  grid-template-columns: repeat(2, 1fr);

  /** 行间距和列间距为10px */
  grid-gap: 12px;

  margin-top: 12px;
}

.item + .item {
  margin-top: 12px;
}
</style>