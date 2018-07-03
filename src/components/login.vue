<template>
  <div id="login">
    <div class="logo_box">
      <img src="../assets/images/new_logo.png" alt="" />
    </div>
    <group :gutter="'0'">
      <div class="inpub_box">
        <x-input  placeholder="请输入手机号" type="tel" is-type="china-mobile" v-model="loginForm.phonenum" :max="13" mask="999 9999 9999" required  ref="phonenum"></x-input>
      </div>
      <div class="inpub_box">
        <x-input  placeholder="请输入密码" type="password"  v-model="loginForm.password" required ref="password" :min="6"></x-input>
      </div>
    </group>
    <div class="button-box">
      <x-button :gradients="['#f0c37b', '#e3b150']" @click.native="keyDown">登录</x-button>
    </div>
    <div class="go-register">
        <router-link class="settle" to='settle'>商户入驻</router-link>
        <router-link class="set-password" to='settle'>忘记密码</router-link>
    </div>
  </div>
</template>

<script>
import { XInput, XButton, Spinner } from 'vux'
export default{
  name: 'login',
  components: {
    XInput,
    XButton,
    Spinner
  },
  data () {
    return {
      loginForm: {
        phonenum: '',
        password: ''
      },
      rules: {
        phonenum: {message: '请输入正确的手机号'},
        password: {message: '请输入密码'}
      },
      show: true
    }
  },
  computed: {

  },
  methods: {
    keyDown () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      for (var i in this.loginForm) {
        if (!this.$refs[i].valid) {
          this.$vux.alert.show({
            title: '提示',
            content: this.rules[i].message
          })
          return
        }
        this.$vux.loading.show({
          text: '登录中'
        })
        this.$axios.post(this.$GLOBAL.commonBackLoginApi, this.$qs.stringify({
          username: this.$base64.encode(this.loginForm.phonenum),
          password: this.$base64.encode(this.loginForm.password)
        })).then(res => {
          console.log(res)
        })
      }
    },
    login () {

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
  @import '~vux/src/styles/reset.less';
#login{
  padding: 0 0.15rem;
  background: #fff;
  height: 100%;
  overflow: hidden;
  .logo_box{
    padding: 0.6rem;
    img{
      display: block;
      margin: 0 auto;
    }
  }
  .weui-cells:before{
    display: none;
  }
  .weui-cells:after{
    display: none;
  }
  .weui-label{
    color: #333;
    font-size: 0.13rem;
  }
  .weui-cell__bd input {
    font-size: 0.13rem;
  }
  .inpub_box{
    border-radius: 8px;
    background: #f1f5f9;
    margin-bottom: 0.2rem;
  }
  .button-box{
    .button{
      height: 0.42rem;
    }
  }
  .go-register{
    display: flex;
    justify-content: center;
    a{
      margin: 0.2rem;
      font-size: 0.13rem;
      color: #666;
    }
  }
}

</style>
