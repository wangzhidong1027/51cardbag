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

<style lang="scss">
  @import '../static/style/reset.scss';
html,body{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
}

</style>
