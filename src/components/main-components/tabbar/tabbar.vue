<template>
  <div id="tabber">
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="">
        <span slot="label">商品</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  name: 'Mytabbar',
  props: {

  }
}
</script>

<style lang="less">

</style>
