<template>
  <div id="card-index">
    <header>
      <div class="userinfo">
        <div class="merchant-img">
          <img :src="merchInfo.logo" alt="">
        </div>
        <div class="merchant-data">
          <div class="merchant-text">
            <p class="name"><b>{{merchInfo.companyname}}</b></p>
            <p class="address">{{merchInfo.province_cn}}{{merchInfo.city_cn}}</p>
          </div>
          <div class="issue">
            <button><a>发布商品</a></button>
          </div>
        </div>
      </div>
    </header>
    <div id="goods-box">
      <flexbox orient="vertical">
        <flexbox-item>
          <group gutter="0">
            <div class="item">
              <swipeout>
                <swipeout-item>
                  <div slot="content" class="demo-content vux-1px-t">
                    <goods-item :goods="goods"></goods-item>
                  </div>
                  <div slot="right-menu">
                    <swipeout-button  type="default" @click.native="deleteGood">删除</swipeout-button>
                  </div>
                </swipeout-item>
              </swipeout>
              <div class="btnbox">
                <!--<div class="link-box"><x-button type="primary" :gradients="['#1D62F0', '#19D5FD']"><b class="shou">微信收款</b></x-button></div>-->
                <div class="link-box"><x-button type="primary" :gradients="['#FF2719', '#ff7700']"><b class="shou">分期收款</b></x-button></div>
                <button class="vux-1px del" @click="deleteGood">删</button>
              </div>
            </div>
          </group>
        </flexbox-item>
      </flexbox>
      <divider v-if="goods.length"><p style="font-size: 0.12rem">没有更多商品了</p></divider>
      <divider v-else><p style="font-size: 0.12rem">您还未发布商品</p></divider>
    </div>
    <mytabbar state='index'></mytabbar>
  </div>
</template>

<script>
import { Divider, XButton, Flexbox, FlexboxItem, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import GoodsItem from './goodlist/goods-item'
import Mytabbar from './main-components/tabbar/tabbar'

export default{
  name: 'index',
  components: {
    Mytabbar,
    Divider,
    GoodsItem,
    XButton,
    Flexbox,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    FlexboxItem
  },
  data () {
    return {
      merchInfo: {},
      goods: []
    }
  },
  created () {
    // 获取商户信息
    this.$axios.post(
      this.$GLOBAL.commonGetMerchApi,
      this.$qs.stringify({})
    ).then(res => {
      var reslut = JSON.parse(this.$base64.decode(res.data))
      if (reslut.code === '10000') {
        this.merchInfo = reslut.data
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: reslut.info
        })
      }
    }).catch(error => {
      console.log('商品列表' + error)
    })
    // 获取商品列表
    this.$axios.post(
      this.$GLOBAL.commonGetGoodsApi,
      this.$qs.stringify({})
    ).then(res => {
      var reslut = JSON.parse(this.$base64.decode(res.data))
      if (reslut.code === '10000') {
        this.goods = reslut.data
      } else if (reslut.code === '20010') {
        this.goods = {}
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: reslut.info
        })
      }
    }).catch(error => {
      console.log('商品列表' + error)
    })
  },
  computed: {

  },
  methods: {
    deleteGood (id) {
      this.$axios.post(
        this.$GLOBAL.commonDelGoodsApi,
        this.$qs.stringify({id})
      ).then(res => {
        console.log(res)
      }).catch(error => {
        console.log('删除商品' + error)
      })
    }
  },
  mounted () {
  },
  updated () {
  },
  activated () {
  }
}
</script>

<style lang="less">
#card-index{
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #f3f3f3;
  .demo-content:before{
    z-index: 998;
  }
  header{
    height: 1.39rem;
    box-sizing: border-box;
    background: linear-gradient(90deg, rgb(240, 195, 123), rgb(227, 177, 80));
    position: relative;
    padding: 0.15rem;
    .userinfo{
      margin-top: .4rem ;
      width: 100%;
      height: 1.15rem;
      border-radius: 8px;
      background: #fff;
      position: relative;
      .merchant-img {
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        top: -0.3rem;
        left: 0.2rem;
        img {
          display: block;
          width: 100%;
          border-radius: 8px;
        }
      }
      .merchant-data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .merchant-text {
          padding-top: 0.5rem;
          padding-left: 0.2rem;
          .name {
            color: #333;
            font-size: 0.14rem;
            line-height: .2rem;
          }
          .address {
            color: #bfbfbf;
            font-size: .12rem;
          }
        }
        .issue {
          display: flex;
          align-items: center;
          padding-right: .2rem;
          a{
            display: inline-block;
            line-height: 0.3rem;
          }
          button {
            height: 0.3rem;
            width: .86rem;
            background: #ffdb49;
            border: none;
            color: #333;
            font-size: 0.13rem;
            text-align: center;
            border-radius: 0.15rem;
            background: linear-gradient(90deg, rgb(255, 219, 78), rgb(253, 218, 72));
            box-shadow: 0px 3px 15px rgba(255, 219, 73, 0.5);
          }
        }
      }
    }
  }
  #goods-box{
    margin-top: .5rem;
    background: #f5f5f5;
    .vux-divider:before{
      background-position: right .1rem top 50%;
    }
    .vux-divider:after{
      background-position: left .1rem top 50%;
    }
    .item{
      background: #fff;
      .btnbox{
        width: 100%;
        box-sizing: border-box;
        text-align: right;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding:  0 0.15rem;
        .link-box{
          width: .8rem;
          height: 0.3rem;
          margin-right: 0.1rem;
          .weui-btn{
            line-height: 0.28rem;
          }
          .shou{
            font-size: 0.13rem;
            color: #fff;
            line-height: 0.3rem;
            font-weight: normal;
          }
        }
        .del{
          width: .3rem;
          height: .3rem;
          border: none;
          background: #fff;
          display: inline-block;
          /*background: url(../../assets/images/travel/lese.png) no-repeat center;*/
          background-size: 70%;
        }
      }
    }
  }
}
</style>
