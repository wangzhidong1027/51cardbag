<template>
  <div id="main">
     <ul>
      <li><a><span><i class="recode"></i>收款记录</span><b class="iconfont icon-jiantou-copy"></b></a></li>
    </ul>
    <div class="out_box">
      <button @click="loginout">退出登录</button>
    </div>
  </div>
</template>

<script>
export default{
  name: 'main',
  data () {
    return {

    }
  },
  methods: {
    loginout () {

    }
  }
}
</script>

<style lang='less'>
#main {
    width: 100%;
    height: 100%;
    position: relative;
    ul {
      a {
        padding: 0 0.15rem;
        font-size: 0.15rem;
        color: #333;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        background: #fff;
        height: .5rem;
        line-height: .5rem;
        span {
          display: flex;
          height: 100%;
          align-items: center;
        }
        i {
          width: .2rem;
          height: 100%;
          display: flex;
          display: inline-block;
          margin-right: 0.15rem;
        }
        .recode {
          background-image: url("../assets/images/collectionrecord.png");
          -webkit-background-size: 100%;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        b {
          color: #dedede;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .out_box {
      position: absolute;
      bottom: .1rem;
      left: 0;
      padding: 0.15rem .15rem;
      width: 100%;
      button {
        width: 100%;
        /*background: #ebbd6d;*/
        line-height: .5rem;
        border: none;
        color: #fff;
        font-size: 0.16rem;
        background: linear-gradient(#f0c47d, #e3b151);
        background: -moz-linear-gradient(#f0c47d, #e3b151);
        background: -webkit-linear-gradient(#f0c47d, #e3b151); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#f0c47d, #e3b151); /* Opera 11.1 - 12.0 */
        outline: none;
      }
    }
  }
</style>
