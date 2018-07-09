<template>
  <div id='ymain'>
     <ul>
       <li><a><span><i class="recode"></i>收款记录</span><b class="iconfont icon-jiantou-copy"></b></a></li>
       <li><a href="#/bankcard"><span><i class="card"></i>对公账户</span><b class="iconfont icon-jiantou-copy"></b></a></li>
    </ul>
    <div class="out_box">
      <button @click="loginout">退出登录</button>
    </div>
     <mytabbar state='main'></mytabbar>
  </div>
</template>

<script>
import Mytabbar from './main-components/tabbar/tabbar'
export default{
  name: 'mainpage',
  components: {
    Mytabbar
  },
  data () {
    return {
    }
  },
  methods: {
    loginout () {
      this.$axios.post(
        this.$GLOBAL.commonLoginOutApi,
        this.$qs()
      ).then(res => {
        localStorage.clear()
        this.$router.push({
          path: './login'
        })
      }).catch(error => {
        console.log('用户退出' + error)
      })
    }
  }
}
</script>

<style lang='less'>
#ymain {
    width: 100%;
    height: 100%;
    overflow: scroll;
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
        .card{
          background-image: url("../assets/images/paytype6.png");
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
      padding: 0 0.15rem 0.3rem .15rem;
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
