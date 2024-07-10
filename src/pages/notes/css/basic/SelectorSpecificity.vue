<template>
  <div class="content">
    <p>
      计算权重：
    </p>
    <p>
      <ul>
        <li>
          <b>行内样式</b>，写在元素的 style 属性上，<span class="specificity">权重 大于 选择器</span>
        </li>
      </ul>

      <ul>
        <span class="specificity">Selector Specificity (a, b, c)</span>
        <li>
          <b>a: &nbsp;id 选择器</b>， &nbsp;如： #app， 权重为 <span class="specificity">(1, 0, 0)</span>
        </li>
        <li>
          <b>b: &nbsp;class选择器</b>，如： .logo，权重为 <span class="specificity">(0, 1, 0)</span><br>
          <b>&nbsp; &nbsp; 属性选择器</b>， 如： [type="text"]<br>
          <b>&nbsp; &nbsp; 伪类</b>， &nbsp; &nbsp; &nbsp; 如： :hover
        </li>
        <li>
          <b>c: &nbsp;标签选择器</b>， 如： div， &nbsp;权重为 <span class="specificity">(0, 0, 1)</span><br>
          <b>&nbsp; &nbsp; 伪元素</b>，&nbsp; &nbsp; &nbsp;如： ::before &nbsp;::root
        </li>
      </ul>

      <ul>
        <li>
          <b>!important</b>，加在样式属性值后，<span class="specificity">权重最大</span>
        </li>
      </ul>
    </p>
    <p>
      单个选择器的 Specificity 按照 <b>行内样式 > id选择器 > class选择器、属性选择器、伪类 > 元素选择器、伪元素</b> 的规律排序。<br>
      如果遇到组合选择器，则按其逻辑将其拆分为单个选择器后 <b class="specificity">相加</b> 再进行判断。<br>
      如果选择器里包含了 <b class="specificity">!important</b>，当选择器的权重 >= 其他选择器的权重时，会覆盖加了 !important 的属性<br>
      如果权重相等，则后面的样式会覆盖前面的样式
    </p>
    <p>
      组合选择器，如：子选择器（>）、相邻选择器（+）、兄弟选择器（~），及 通用选择器（*），权重为 0
    </p>

    <ul>
      参考文档
      <li>
        <a href="https://www.cnblogs.com/liujingjiu/p/14342387.html" target="_blank">https://www.cnblogs.com/liujingjiu/p/14342387.html</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.content {
  tab-size: 2;
  font-size: 17px;
  font-family: Consolas, 'Courier New', monospace;
}

.specificity {
  color: #409EFF;
}
</style>