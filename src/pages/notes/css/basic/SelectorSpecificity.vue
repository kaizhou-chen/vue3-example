<template>
  <el-card>
    <div>计算权重</div>
    <p>
      <ul>
        <li>
          <b>行内样式</b>，写在元素的 style 属性上，<span class="note">权重 大于 选择器</span>
        </li>
      </ul>

      <ul>
        <span class="note code">Selector Specificity (a, b, c)</span>
        <li>
          <table>
            <tr>
              <td>
                <b>a: &nbsp;id 选择器</b>
              </td>
              <td>
                如： #app，权重为 <span class="note code">(1, 0, 0)</span>
              </td>
            </tr>
          </table>
        </li>

        <li>
          <table>
            <tr>
              <td>
                <b>b: class选择器</b>
              </td>
              <td>
                如： .logo，权重为 <span class="note code">(0, 1, 0)</span><br>
              </td>
            </tr>
            <tr>
              <td>
                <div style="float: right; padding-right: 10px;">
                  <b>属性选择器</b>
                </div>
              </td>
              <td>
                如： [type="text"]<br>
              </td>
            </tr>
            <tr>
              <td>
                <div style="float: right; padding-right: 10px;">
                  <b>伪类</b>
                </div>
              </td>
              <td>
                如： :hover
              </td>
            </tr>
          </table>
        </li>

        <li>
          <table>
            <tr>
              <td>
                <b>c: &nbsp;标签选择器</b>
              </td>
              <td>
                如： div， &nbsp; &nbsp;权重为 <span class="note code">(0, 0, 1)</span>
              </td>
            </tr>
            <tr>
              <td>
                <div style="float: right; padding-right: 12px;">
                  <b>伪元素</b>
                </div>
              </td>
              <td>
                如： ::before &nbsp;::root
              </td>
            </tr>
          </table>
        </li>
      </ul>

      <ul>
        <li>
          <b>!important</b>，加在样式属性值后，<span class="note">权重最大</span>
        </li>
      </ul>
    </p>
    <p>
      单个选择器的 Specificity 按照 <b>行内样式 > id选择器 > class选择器、属性选择器、伪类 > 元素选择器、伪元素</b> 的规律排序。<br>
      如果遇到组合选择器，则按其逻辑将其拆分为单个选择器后 <b class="note">相加</b> 再进行判断。<br>
      如果选择器里包含了 <b class="note code">!important</b>，当选择器的权重 >= 其他选择器的权重时，会覆盖加了 !important 的属性<br>
      如果权重相等，则后面的样式会覆盖前面的样式
    </p>
    <p>
      组合选择器，如：子选择器（>）、相邻选择器（+）、兄弟选择器（~），及 通用选择器（*），权重为 0
    </p>
  </el-card>

  <ul>
    参考文档
    <li>
      <el-link href="https://www.cnblogs.com/liujingjiu/p/14342387.html" target="_blank">
        https://www.cnblogs.com/liujingjiu/p/14342387.html
      </el-link>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.code-font {
  tab-size: 2;
  font-size: 17px;
  font-family: Consolas, 'Courier New', monospace, '微软雅黑';
}

.note, .code {
  color: #409EFF;
}

.code {
  .code-font();
}

table {
  td:first-child {
    width: 115px;
  }
}
</style>