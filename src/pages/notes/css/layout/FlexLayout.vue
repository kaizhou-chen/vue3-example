<script setup lang="ts">
import KeyPoint from '@/pages/notes/KeyPoint.vue'

const note_2 = ref([{
  code: 'position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%,-50%);',
  desc: ''
}])

const note_1_1 = ref([{
  code: 'display: flex;\njustify-content: center;\nalign-items: center;',
  desc: '',
}])

const note_1_2 = ref([{
  code: `.container {
  display: flex;

  > div:last-child {
    /* 最后一个元素，右对齐 */
    margin-left: auto;
  }
}`,
  desc: ''
}])

const note_1_3 = ref([{
  code: `.container {
  display: flex;
  
  > div:last-child {
    /* 最后一个元素，填满剩余空间 */
    flex: 1;
  }
}`,
  desc: ''
}])

const note_1_4 = ref([{
  code: `.container {
  display: flex;
  
  > div {
    /* 所有子元素，平分宽度 */
    flex: 1;
  }
}`,
  desc: ''
}])
</script>

<template>
  <div class="container">
    <el-card>
      <template #header>
        <div>flex 布局 - 左右分区</div>
      </template>

      <div class="card-body">
        <div class="box box-1-2">
          <div style="background-color: #409EFF;"></div>
          <div style="background-color: #67C23A;"></div>
          <div style="background-color: #E6A23C;"></div>
        </div>
        <KeyPoint :notes="note_1_2" class="note"></KeyPoint>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div>flex 布局 - 填满剩余空间</div>
      </template>

      <div class="card-body">
        <div class="box box-1-3">
          <div style="background-color: #409EFF;"></div>
          <div style="background-color: #67C23A;"></div>
        </div>
        <KeyPoint :notes="note_1_3" class="note"></KeyPoint>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div>flex 布局 - 多栏</div>
      </template>

      <div class="card-body">
        <div class="box box-1-4">
          <div style="background-color: #409EFF;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          <div style="background-color: #67C23A;"></div>
          <div style="background-color: #E6A23C;"></div>
        </div>
        <KeyPoint :notes="note_1_4" class="note"></KeyPoint>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div>flex 布局 - 居中对齐</div>
      </template>

      <div class="card-body">
        <div class="box box-1-1">
          <span>居中对齐</span>
        </div>
        <KeyPoint :notes="note_1_1" class="note"></KeyPoint>
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div>绝对定位 - 居中对齐</div>
      </template>

      <div class="card-body">
        <div class="box box-2">
          <div>居中对齐</div>
        </div>
        <KeyPoint :notes="note_2" class="note"></KeyPoint>
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: 350px;
  grid-auto-rows: 350px;
}

.box {
  height: 250px;
}

/** 卡片 */
.card-body {
  position: relative;
  min-height: 100%;
}

.note {
  transition: .5S;

  position: absolute;
  top: calc(100% + 20px);
  z-index: 1;
}

.card-body:hover .note {
  top: 50px;
}

/** demo */
.box-2 {
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.box-1-1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-1-2 {
  display: flex;

  > div {
    width: 50px;
    height: 50px;

    &:last-child {
      margin-left: auto;
    }
  }
}

.box-1-3 {
  display: flex;

  > div {
    width: 50px;
    height: 50px;

    &:last-child {
      flex: 1;
    }
  }
}

.box-1-4 {
  display: flex;

  > div {
    flex: 1; /** 子元素平分宽度 */
  }
}
</style>