<template>
  <QuestionLayout :question="question" :answer="answer" :show-result="false" @change="handleChange">
    <div style="min-height: 32px; margin-bottom: 12px;">
      创建一个 n 行 m 列的漩涡型数组
    </div>
    <TextareaEditor v-model="question" :rows="1"></TextareaEditor>

    <el-divider />
    <ul>
      解题思路
      <li>创建 n * m 的二维数组，用 0 填充</li>
      <li>开始一个无限循环，每次移动一格</li>
      <li>如果下一格的值是 0，则 count++ ，并赋值</li>
      <li>如果下一格的值不是 0，则调整移动方向</li>
      <li>如果每一格都不是 0，则结束循环</li>
    </ul>

    <el-divider v-if="list.length > 0" />
    <div v-if="list.length <= 10" ref="divRef">
      <div v-for="row of list" class="row">
        <div v-for="item of row" 
          :style="{'background-color': getColor(item)}"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div v-else>{{ list }}</div>
  </QuestionLayout>
</template>

<script setup lang="ts">
import QuestionLayout from '@/pages/notes/components/QuestionLayout.vue'
import TextareaEditor from '@/pages/notes/components/TextareaEditor.vue'

const question = ref("vortex(4, 4);")
const answer = ref(vortex.toString())

const divRef = ref()
const list = ref<any[]>([])

const listSize = computed(() => {
  if (list.value.length > 0) {
    return list.value.length * list.value[0].length
  }
  return 0;
})

onMounted(() => {
  const data = vortex(4, 4)
  handleChange(data)
})

function getColor(item) {
  const per = item / listSize.value;
  const color = `rgba(64, 158, 255, ${per})`
  return color;
}

async function handleChange(data) {
  list.value = data;

  await nextTick()
  if (data.length > 0) {
    divRef.value.style.setProperty('--size', data[0].length);
  }
}

function vortex(n, m) {
  // 创建二维数组，用 0 填充
  const nums = new Array(n).fill(0).map(() => {
    return new Array(m).fill(0)
  })

  let i = 0; // row index
  let j = 0; // column index
  let count = 1;

  let stepI = 0; // i 的变化，纵向移动
  let stepJ = 1; // j 的变化，横向移动

  // 如果下一格的数字不是 0，则表示到达边缘
  function _hasBlock() {
    return !nums[i + stepI] || nums[i + stepI][j + stepJ] !== 0;
  }

  while(1) {
    nums[i][j] = count++;
    if (_hasBlock()) {    // 到达边缘
      if (stepI === 0) {  // 如果是横向移动，则变为纵向移动
        stepI = stepJ
        stepJ = 0
      } else {            // 如果是纵向移动，则变为横向移动
        stepJ = -stepI
        stepI = 0
      }

      // 如果变换移动方向后，依然到达边缘，则表示所有数字都不是 0，则结束
      if (_hasBlock()) {
        break;
      }
    }

    i += stepI;
    j += stepJ;
  }

  return nums;
}
</script>

<style lang="less" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(var(--size), minmax(30px, 75px));

  div {
    aspect-ratio: 1;
    border: 1px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
      color: #fff;
      font-size: 18px;
      mix-blend-mode: difference;
    }
  }
}
</style>