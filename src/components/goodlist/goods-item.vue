<template>
  <div class="goodsitem" >
    <div class="goods-item vux-1px-b">
      <div class="goodimg">
        <span style="font-size:20px;"><spinner type="ios"></spinner></span>
        <x-img :src="iteminfo.pdpicture" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" container="#card-index"></x-img>
      </div>
      <div class="good-text">
        <p><b>{{iteminfo.pname}}</b></p>
        <div class="recommend">
          {{iteminfo.pintro}}
        </div>
        <div class="price">
          ￥<i>{{iteminfo.pmoney | money}}</i><b>{{iteminfo.pmoney | fractional}}</b>
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
  props: {
    iteminfo: Object
  },
  data () {
    return {}
  },
  filters: {
    money: function (value) {
      var num = ''
      if (value.toString().indexOf('.') === -1) {
        num = value + '.'
      } else {
        num = value.toString().split('.')[0] + '.'
      }
      return num
    },
    fractional: function (value) {
      var num = ''
      if (value.toString().indexOf('.') === -1) {
        num = '00'
      } else {
        num = value.toString().split('.')[1]
      }
      return num
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
  },
  mounted () {
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
      font-size: 0.14rem;
      i{
        font-style: normal;
        font-weight: 700;
        font-size: 0.17rem;
      }
      b{

      }
    }
  }
}
</style>
