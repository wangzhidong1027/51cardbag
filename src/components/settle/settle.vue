<template>
  <div class="settle">
    <h3>请填写商户信息</h3>
    <div class="formbox">
      <group :gutter="'0'">
        <x-input title="邮箱" placeholder="请输入邮箱" type="email" is-type="email"  v-model="ruleForm.email" ></x-input>
        <x-input title="企业名称" placeholder="请输入企业名称" type="text"  v-model="ruleForm.name" ></x-input>
        <x-address title="所在城市" placeholder="请选择地址" :list="addressData" :value-text-align="'text-align'" v-model="ruleForm.companycity" :hide-district="true" ></x-address>
        <x-input title="联系人" placeholder="请输入联系人姓名" type="text" is-type="china-name" v-model="ruleForm.username" ></x-input>
        <x-input title="联系人电话" placeholder="请输入联系人电话" type="tel" is-type="china-mobile" v-model="ruleForm.usemodel" ></x-input>
        <x-input title="营业执照号" placeholder="请输入营业执照号" type="email"  v-model="ruleForm.license" ></x-input>
        <x-input title="法人身份证号" placeholder="请输入法人身份证号" type="email"  v-model="ruleForm.idcardNo"></x-input>
      </group>
      <group title="请填写对公账户信息">
        <x-input title="对公账户" placeholder="请输入对公账户" type="number" is-type="number" v-model="ruleForm.bankNo"></x-input>
        <popup-picker title="银行名称" placeholder="请选择银行名称" popup-title="选择开户行名称" value-text-align="text-left" :data="bankslist" :show-name="true" :v-model="ruleForm.bankname" ></popup-picker>
        <x-address title="开户城市" placeholder="请选择地址" :list="addressData" :value-text-align="'text-align'" :hide-district="true" v-model="ruleForm.bankAddress"></x-address>
        <x-input title="开户行全称" placeholder="请输入开户行全称" type="text" is-type="china-name" v-model="ruleForm.fullname" ></x-input>
        <x-input title="预留手机号" placeholder="请输入银行预留手机号" type="tel" is-type="china-mobile" v-model="ruleForm.bankModel" ></x-input>
      </group>
      <group title="设置登录密码">
        <x-input title="设置密码" placeholder="请输入登录密码" type="password" is-type="password" v-model="ruleForm.password"></x-input>
        <x-input title="确认密码" placeholder="请确认登录密码" type="password" is-type="password" v-model="ruleForm.confirm"></x-input>
      </group>
      <group title="请上传认证信息">
        <up-image labelSuffix="请上传手持身份证照片"  dataname="takeimg" v-model="takeimg"></up-image>
        <up-image labelSuffix="请上传营业执照"  dataname="licenseimg" v-model="licenseimg"></up-image>
        <up-image labelSuffix="请上传企业LOGO"  dataname="logoimg" v-model="logoimg"></up-image>
        <up-image labelSuffix="请上传企业资质"  dataname="aptitude" v-model="aptitude"></up-image>
        <div class="btn-box">
          <button @click="get">提交入驻</button>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, XAddress, PopupPicker } from 'vux'
import addresss from '../main-components/address/address'
import UpImage from '../main-components/upimage/upimage'

export default {
  name: 'settle',
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    XAddress,
    // ChinaAddressV4Data,  城市数据
    PopupPicker,
    UpImage
  },
  data () {
    return {
      ruleForm: {
        email: '',
        name: '',
        companycity: [],
        username: '',
        usemodel: '',
        license: '',
        idcardNo: '',
        bankNo: '',
        bankname: [],
        bankAddress: [],
        fullname: '',
        bankModel: '',
        password: '',
        confirm: ''
      },
      takeimg: '',
      licenseimg: '',
      logoimg: '',
      aptitude: '',
      bankslist: [],
      addressData: addresss // 城市数据
    }
  },
  methods: {
    get () {
    }
  },
  created () {
    // 获取地址
    // this.$axios.post(
    //   'http://localhost:3002/wap/mersettle/getRegion',
    //   this.$qs.stringify({})
    // ).then(res => {
    //   // console.log(res)
    // }).catch(error => {
    //   console.log('地址信息' + error)
    // })

    // h获取银行列表
    this.$axios.post(
      'http://localhost:3002/wap/mersettle/getBanks',
      this.$qs.stringify({})
    ).then(res => {
      if (JSON.parse(this.$base64.decode(res.data)).code === '10000') {
        var banlStr = this.$base64.decode(res.data).replace(/paybankname/g, 'name')
        banlStr = banlStr.replace(/bankcode/g, 'value')
        this.bankslist.push(JSON.parse(banlStr).data)
      } else {
        this.$vux.toast.text('获取银行失败', 'middle')
      }
    }).catch(error => {
      console.log('银行列表' + error)
    })
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  @import "./settle.less";
  .settle{
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #f5f5f5;
    .weui-cells.weui-cells {
    }
    .weui-cell{
      padding: 0 0.15rem;
      height: 0.45rem;
      font-size: 0.14rem;
      color: #666666;
      font-weight: 800;
      line-height: 0.45rem;
    }
    .weui-cell::before{
      left: 0;
    }
    .weui-cell__hd{
      display: flex;
    }
    .vux-popup-picker-select{
      padding-left:10px;
      font-weight:normal;
    }
    .vux-popup-picker-placeholder{
      color: #666;
    }
    .vux-cell-value{
      color: #666;
    }
    h3{
      font-size: 0.16rem;
      font-weight: normal;
      line-height: 0.45rem;
      padding: 0 0.15rem;
      color: #333;
    }
    .btn-box{
      padding: .2rem 0.15rem;
      height: 0.4rem;
      background: #fff;
      border: none;
      button{
        display: block;
        height: 0.4rem;
        background: #f0c37b;
        border: none;
        width: 100%;
        color: #fff;
        font-weight: 600;
        font-size: 0.16rem;
      }
    }
  }
</style>
