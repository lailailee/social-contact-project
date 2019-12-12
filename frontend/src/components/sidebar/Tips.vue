<template>
  <div>
    <div class="fly-panel">
      <h3 class="fly-panel-title">温馨通道</h3>
      <div class="fly-panel-main layui-row">
        <ul class="layui-clear imooc-quick">
          <li class="layui-col-xs6">
            <a href target="_blank">lailailee</a>
          </li>
          <li class="layui-col-xs6">
            <a href target="_blank">lailailee</a>
          </li>
          <li class="layui-col-xs6">
            <a href target="_blank">lailailee</a>
          </li>
          <li class="layui-col-xs6">
            <a href target="_blank">lailailee</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips'
}
</script>

<style lang="scss" scoped>
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
  border-bottom: none;
  border-right: none;
}
.imooc-quick {
  border: 1px solid $border-color;
  .layui-col-xs6 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border: 1px solid $border-color;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-top: none;
    border-left: none;
    a {
      display: block;
    }
  }
}
</style>
