<template>
  <div class="settle">
    <h3>请填写商户信息</h3>
    <div class="formbox">
      <group :gutter="'0'">
        <x-input title="邮箱" placeholder="请输入邮箱" type="email" is-type="email"  v-model="settleForm.email" ref="email" required>
        </x-input>
        <x-input title="企业名称" placeholder="请输入企业名称" type="text" :is-type="chinese" v-model="settleForm.companyname" :max="18" ref="companyname" required>
        </x-input>
        <x-address title="所在城市" placeholder="请选择企业地址" :list="addressData" :value-text-align="'text-align'" v-model="companycity"  :hide-district="true" >
        </x-address>
        <x-input title="详细地址" placeholder="请输企业详细地址" type="text"  is-type="china-name" v-model="settleForm.address" ref="address"  required>
        </x-input>
        <x-input title="联系人" placeholder="请输入联系人姓名" type="text" is-type="china-name" v-model="settleForm.linkname" ref="linkname" required>
        </x-input>
        <x-input title="联系人电话" placeholder="请输入联系人电话" type="tel" is-type="china-mobile" v-model="settleForm.linkphone" ref="linkphone" required>
        </x-input>
        <x-input title="营业执照号" placeholder="请输入营业执照号" type="tel" :is-type="special" :max="18" v-model="settleForm.certificate" ref="certificate" required>
        </x-input>
        <x-input title="法人姓名" placeholder="请输入法人姓名" type="text" is-type="china-name" v-model="settleForm.legalname" ref="legalname" required>
        </x-input>
        <x-input title="法人身份证号" placeholder="请输入法人身份证号" type="email" :is-type="idcard" :max="18" v-model="settleForm.legalidcard" ref="legalidcard" required>
        </x-input>
      </group>
      <group title="请填写对公账户信息">
        <x-input title="对公账户" placeholder="请输入对公账户" type="number" is-type="number" v-model="settleForm.bankno" ref="bankno" required>
        </x-input>
        <popup-picker title="银行名称" placeholder="请选择银行名称" popup-title="选择开户行名称" value-text-align="text-left" :data="bankslist" :show-name="true" v-model="bankid">
        </popup-picker>
        <x-address title="开户城市" placeholder="请选择地址" :list="addressData" :value-text-align="'text-align'" :hide-district="true" v-model="bankAddress">
        </x-address>
        <x-input title="开户行全称" placeholder="请输入开户行全称" type="text"  v-model="settleForm.banksubname" ref="banksubname" required>
        </x-input>
        <x-input title="预留手机号" placeholder="请输入银行预留手机号" type="tel" is-type="china-mobile" v-model="settleForm.mobile" ref="mobile" required>
        </x-input>
      </group>
      <group title="设置登录密码">
        <x-input title="设置密码" placeholder="请输入登录密码" type="password" is-type="password" :min='6' :max="15" v-model="settleForm.password" ref="password" required>
        </x-input>
        <x-input title="确认密码" placeholder="请确认登录密码" type="password" :max="18" is-type="password" :equal-with='settleForm.password' v-model="settleForm.pwd" ref="pwd" required>
        </x-input>
      </group>
      <group title="请上传认证信息">
        <up-image labelSuffix="请上传手持身份证照片"  dataname="lefalhand" v-model="lefalhand">
        </up-image>
        <up-image labelSuffix="请上传营业执照"  dataname="bslicense" v-model="bslicense">
        </up-image>
        <up-image labelSuffix="请上传企业Logo<b style='color:#ff3737;font-size:0.12rem '> (建议上传正方形logo)<b>"  dataname="logo" v-model="logo">
        </up-image>
        <up-image labelSuffix="请上传企业资质<b style='color:#ff3737;font-size:0.12rem '> 可不传<b>"  dataname="aptitude" v-model="aptitude">
        </up-image>
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
      settleForm: {
        email: '',
        companyname: '',
        address: '',
        linkname: '',
        linkphone: '',
        certificate: '',
        legalname: '',
        legalidcard: '',
        bankno: '',
        banksubname: '',
        mobile: '',
        password: '',
        pwd: ''
      },
      companycity: [],
      bankid: [],
      bankAddress: [],
      lefalhand: '',
      bslicense: '',
      logo: '',
      aptitude: '',
      bankslist: [], // 银行列表
      addressData: addresss // 城市数据
    }
  },
  created () {
    // 获取地址
    // this.$axios.post(
    //   'http://localhost:3002/wap/mersettleForm/getRegion',
    //   this.$qs.stringify({})
    // ).then(res => {
    //   // console.log(res)
    // }).catch(error => {
    //   console.log('地址信息' + error)
    // })

    // 获取银行列表
    this.$axios.post(
      this.$GLOBAL.commonGetBankApi,
      this.$qs.stringify({})
    ).then(res => {
      if (JSON.parse(this.$base64.decode(res.data)).code === '10000') {
        var banlStr = this.$base64.decode(res.data).replace(/paybankname/g, 'name')
        banlStr = banlStr.replace(/id":/g, 'value":"')
        banlStr = banlStr.replace(/,"name"/g, '","name"')
        this.bankslist.push(JSON.parse(banlStr).data)
        // console.log(this.bankslist)
      } else {
        this.$vux.toast.text('获取银行失败', 'middle')
      }
    }).catch(error => {
      console.log('银行列表' + error)
    })
  },
  methods: {
    // 注册提交
    get () {
      for (var i in this.settleForm) {
        if (!this.$refs[i].valid) {
          this.$vux.alert.show({
            title: '提示',
            content: '请填写正确信息'
          })
          return
        }
      }
      var data = { ...this.settleForm }
      if (this.companycity.length) {
        data['province'] = this.companycity[0]
        data['city'] = this.companycity[1]
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: '请选择企业所在城市'
        })
        return
      }
      if (this.bankid.length) {
        data['bankid'] = this.bankid[0]
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: '请选择银行名称'
        })
        return
      }
      if (this.bankAddress.length) {
        data['bank_province'] = this.bankAddress[0]
        data['bank_city'] = this.bankAddress[1]
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: '请选择开户行城市'
        })
      }
      if (this.lefalhand && this.bslicense && this.logo) {
        data['lefalhand'] = this.lefalhand
        data['bslicense'] = this.bslicense
        data['logo'] = this.logo
        data['aptitude'] = this.aptitude
      } else {
        this.$vux.alert.show({
          title: '提示',
          content: '请上传完整图像信息'
        })
        return
      }
      this.loading.show({text: '入驻中'})
      var jsonData = JSON.stringify(data)
      this.$axios.post(
        this.$GLOBAL.commonSettleApi,
        this.$qs.stringify({
          data: this.$base64.encode(jsonData)
        })
      ).then(res => {
        this.loading.hide()
        var reslut = JSON.parse(this.$base64.decode(res.data))
        if (reslut.code === '10000') {
          localStorage.setItem('apiAuth', reslut.data)
          this.$router.push({
            path: '/index'
          })
        } else {
          this.$vux.alert.show({
            title: '提示',
            content: reslut.info
          })
        }
      }).catch(error => {
        console.log('商户入驻' + error)
      })
    },
    chinese (value) {
      var res = this.$ecDo.checkType.check(value, 'chinese')
      if (res) {
        return { valid: true }
      } else {
        return { valid: false, msg: '企业名称' }
      }
    },
    special (value) {
      var res = this.$ecDo.checkType.check(value, 'special')
      if (res) {
        return { valid: true }
      } else {
        return { valid: false, msg: '格式不正确' }
      }
    },
    idcard (value) {
      var res = this.$ecDo.checkType.check(value, 'idcard')
      if (res) {
        return { valid: true }
      } else {
        return { valid: false, msg: '身份证号格式不正确' }
      }
    }
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
