<template>
  <div id="login">
    <div class="logo_box">
      <img src="../assets/images/new_logo.png" alt="" />
    </div>
    <group :gutter="'0'">
      <div class="inpub_box">
        <x-input  placeholder="请输入手机号" type="tel" is-type="china-mobile" v-model="loginForm.username" :max="13"  required  ref="username"></x-input>
      </div>
      <div class="inpub_box">
        <x-input  placeholder="请输入密码" type="password"  v-model="loginForm.password" required ref="password" :min="6" :max="15"></x-input>
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
        username: '',
        password: ''
      },
      rules: {
        username: {message: '请输入正确的手机号'},
        password: {message: '请输入正确密码'}
      },
      show: true
    }
  },
  computed: {

  },
  methods: {
    keyDown () {
      for (var i in this.loginForm) {
        if (!this.$refs[i].valid) {
          this.$vux.alert.show({
            title: '提示',
            content: this.rules[i].message
          })
          return
        }
      }
      this.loading.show({text: '登陆中'})
      this.$axios.post(this.$GLOBAL.commonLoginApi, this.$qs.stringify({
        data: this.$base64.encode(JSON.stringify(this.loginForm))
      })).then(res => {
        this.loading.hide()
        var reslut = JSON.parse(this.$base64.decode(res.data))
        if (reslut.code === '10000') {
          localStorage.setItem('apiAuth', reslut.data)
          this.$router.replace({
            path: '/index'
          })
        } else {
          this.$vux.alert.show({
            title: '提示',
            content: reslut.info
          })
        }
      }).catch(error => {
        console.log('登录' + error)
      })
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
#login{
  padding: 0 0.15rem;
  background: #fff;
  height: 100%;
  overflow: scroll;
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
    width: 100%;
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
