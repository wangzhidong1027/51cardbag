<template>
  <div class="goodsitem">
    <div class="goods-item vux-1px-b">
      <div class="goodimg">
        <span style="font-size:20px;"><spinner type="ios"></spinner></span>
        <x-img :src="src" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" container="#card-index"></x-img>
      </div>
      <div class="good-text">
        <p><b>了空喊口号离开ID防守</b></p>
        <div class="recommend">
          法轮大法看见了看电得了副科级连接就了骷髅精
        </div>
        <div class="price">
          <i>￥</i><b>9000.00</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XImg, Spinner } from 'vux'
export default {
  name: 'goodsItem',
  components: {
    XImg,
    Spinner
  },
  propos: {
    goods: Object
  },
  data () {
    return {
      src: 'http://image.yifuka.com/CommonImg/20180424/152456337890209.jpeg'
    }
  },
  methods: {
    success (src, ele) {
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  }
}
</script>

<style lang="less">
.goodsitem{
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.15rem;
}
.goods-item{
  width: 100%;
  overflow: hidden;
  font-size: 0.16rem;
  padding: 0.15rem 0rem;
  display: flex;
  background: #fff;
  box-sizing: border-box;
  .goodimg{
    width: 0.8rem;
    height: 0.8rem;
    overflow: hidden;
    .ximg-demo {
      width: 100%;
      height: auto;
    }
    .ximg-error {
      background-color: yellow;
    }
    .ximg-error:after {
      content: '加载失败';
      color: #999;
    }
  }
  .good-text{
    flex: 1;
    padding-left: 0.15rem;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    p{
      font-size: 0.13rem;
      color: #333333;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 0.2rem;
    }
    .recommend{
      flex: 1;
      font-size: 0.12rem;
      color: #999999;
      overflow: hidden;
      line-height: 0.13rem;
    }
    .price{
      color: #ff3636;
      i{
        font-style: normal;
        font-size: 0.14rem;
      }
      b{
        font-size: 0.17rem;
      }
    }
  }
}
</style>
