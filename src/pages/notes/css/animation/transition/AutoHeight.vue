<script setup lang="ts">

</script>

<template>
  <el-card>
    <template #header>
      <div>高度自动的过渡</div>
    </template>

    <div style="height: 300px;">
      <div class="item">
        <el-button type="primary">查看详情 - scaleY</el-button>
        <el-card class="detail detail-scale">
          高度会压缩<br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </el-card>
      </div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.item {
  position: relative;
  overflow: visible;

  display: inline-block;
  margin-right: 20px;
}

.detail {
  position: absolute;
  top: 100%;
  z-index: 1;
  width: 200px;
}

.detail-scale {
  transition: .5s;
  
  transform-origin: center top;
  transform: scaleY(0);
}

.item:hover {
  .detail-scale {
    transform: scaleY(1);
  }
}
</style>