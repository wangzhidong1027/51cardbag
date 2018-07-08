<template>
  <div id="tabber">
    <tabbar>
      <tabbar-item :class=" state==='index'? 'weui-bar__item_on' : ''">
        <img slot="icon" src="../../../assets/images/goodmu.png">
        <span slot="label">商品</span>
      </tabbar-item>
      <tabbar-item :class=" state==='main'? 'weui-bar__item_on' : ''">
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
</style>
