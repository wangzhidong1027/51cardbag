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
  @import '~vux/src/styles/reset.less';
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

</style>
