<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "../static/style/reset.less";
  @import '~vux/src/styles/1px.less';
html,body{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
.weui-cells,.vux-no-group-title{
  margin-top: 0;
}
#app{
  width: 100%;
  height: 100%;
}
button{
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  -webkit-appearance: none;
}
a{
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  -webkit-appearance: none;
}
</style>
