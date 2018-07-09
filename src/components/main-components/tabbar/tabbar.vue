<template>
  <div id="tabber">
    <tabbar>
      <tabbar-item :selected=" state == 'index'" link="/index">
        <img slot="icon" src="../../../assets/images/goodmu.png">
        <span slot="label">商品</span>
      </tabbar-item>
      <tabbar-item :selected="state == 'main'" link="/main">
        <img slot="icon" src="../../../assets/images/main.png">
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
    state: String
  },
  mounted () {
  }
}
</script>

<style lang="less">
.weui-bar__item_on{
  .weui-tabbar__label{
    span{
      color: #333;
    }
  }
}
#tabber .weui-tabbar{
  background-color: #fff;
}
</style>
