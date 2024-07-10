<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'
</script>

<template>
  <div class="panel">
    <div>
      <KeyPoint title="1、固定列数" :notes="[{
        code: 'grid-template-columns: repeat(5, 1fr);',
        desc: '每行 5 列，宽度自适应'
      },{
        code: 'grid-template-rows: 100px;',
        desc: '定义了一行的高度'
      },{
        code: '显式单元格',
        desc: '定义了一行 5 列，前 5 个单元格，为显式单元格'
      },{
        code: '隐式单元格  grid-auto-rows: 100px;',
        desc: '不在布局中的，为隐式单元格 \n【超过了布局定义的单元格数量】'
      }]"></KeyPoint>

      <div class="repeat-by-item">
        <div class="item center">
          <div>显式单元格</div>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item center">
          <div>隐式单元格</div>
        </div>
        <div class="item"></div>
      </div>
    </div>

    <div>
      <KeyPoint title="2、固定宽度" :notes="[{
        code: 'grid-template-columns: repeat(auto-fill, 250px);',
        desc: ''
      }, {
        code: '单元格宽度为250px，单元格的数量不确定，随容器宽度自动填充',
        desc: ''
      }]"></KeyPoint>

      <div class="repeat-by-width">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>

    <div>
      <KeyPoint title="3、合并单元格" :notes="[{
        code: 'grid-column: 1 / 3;',
        desc: '从第 1 根轴线开始，到第 3 根轴线结束 \n【是轴线，不是单元格】',
        lang: 'css'
      }]"></KeyPoint>

      <div class="container">
        <div class="item by-axis">
          <div class="axis">❷</div>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    
    <div>
      <KeyPoint title="合并单元格 span" :notes="[{
        code: 'grid-column: 1 / span 2;',
        desc: '从第 1 列开始，占据 2 个单元格\n ',
        lang: 'css'
      }]"></KeyPoint>

      <div class="container">
        <div class="item by-span"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>

  <ul>
    参考文档
    <li>
      <el-link href="https://blog.csdn.net/hzw2017/article/details/131670319" target="_blank">https://blog.csdn.net/hzw2017/article/details/131670319</el-link>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.panel {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);

  > div:nth-child(1) {
    grid-column: 1 / 3;
  }
  > div:nth-child(2) {
    grid-column: 1 / 3;
  }
}

.repeat-by-item {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px;

  /** 隐式单元格布局 */
  grid-auto-flow: row;
  grid-auto-rows: 100px;

  margin-top: 8px;
}

.repeat-by-width {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 250px));
  grid-template-rows: 100px;

  /** 隐式单元格布局 */
  grid-auto-flow: row;
  grid-auto-rows: 100px;

  margin-top: 8px;
}

.center {
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.item {
  background-color: rgb(244, 244, 245);
  border-radius: 4px;
  border: 1px solid #ccc;
}

.container {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 100px);

  margin-top: 8px;
}

.by-axis {
  /** 合并单元格，根据轴线 */
  grid-column: 1 / 3; /** 从第 1 根轴线开始，到第 3 根轴线结束 【是轴线，不是单元格】 */
  grid-row: 1 / 3;

  overflow: visible;
  position: relative;
}

.by-span {
  /** 合并单元格，用 span 代表占有单元格的个数 */
  grid-column: 1 / span 2; /** 从第 1 列开始，占据 2 个单元格 */
  grid-row: 1 / span 2;    /** 从第 1 行开始，占据 2 行 */
}

.by-axis {
  &::before, &::after, .axis {
    position: absolute;
    top: 0px;
    height: 70%;
    z-index: 1;
    font-size: 24px;

    background-image: linear-gradient(to bottom, transparent 50%, red 50%);
    background-size: 2px 12px;
    background-repeat: repeat-y;
  }

  &::before {
    content: '❶';
    left: 5px;
    background-position-x: 2px;
  }

  .axis {
    left: 50%;
    background-position-x: 2px;
  }

  &::after {
    content: '❸';
    right: 5px;
    background-position-x: 15px;
  }
}
</style>