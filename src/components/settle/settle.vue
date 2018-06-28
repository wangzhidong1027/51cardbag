<template>
  <div class="settle">
    <h3>请填写商户信息</h3>
    <div class="formbox">
      <group :gutter="'0'">
        <x-input title="邮箱" placeholder="请输入邮箱" type="email" is-type="email"  v-model="ruleForm.email"></x-input>
        <x-input title="企业名称" placeholder="请输入企业名称" type="email" is-type="email" ></x-input>
        <x-address title="所在城市" placeholder="请选择地址" :list="addressData" :value-text-align="'text-align'" v-model="ruleForm.bankAddress"  @on-shadow-change="onShadowChange" :hide-district="true" ></x-address>
        <x-input title="联系人" placeholder="请输入联系人姓名" type="email" is-type="email" ></x-input>
        <x-input title="联系人电话" placeholder="请输入联系人电话" type="number" is-type="number" ></x-input>
        <x-input title="营业执照号" placeholder="请输入营业执照号" type="number" is-type="email" ></x-input>
        <x-input title="法人身份证号" placeholder="请输入法人身份证号" type="number" is-type="email" ></x-input>
      </group>
      <group title="请填写对公账户信息">
        <x-input title="对公账户" placeholder="请输入对公账户" type="number" is-type="number" ></x-input>
        <popup-picker :title="'开户行全称'" :data="list1" v-model="ruleForm.bankname" :placeholder="'请选择开户行全称'" :popup-title="'选择开户行全称'" :value-text-align="'text-left'"></popup-picker>
        <x-address title="开户城市" placeholder="请选择地址" :list="addressData" :value-text-align="'text-align'" v-model="ruleForm.bankAddress"  @on-shadow-change="onShadowChange" :hide-district="true"></x-address>
        <x-input title="开户行全称" placeholder="请输入开户行全称" type="email" is-type="email" ></x-input>
        <x-input title="预留手机号" placeholder="请输入银行预留手机号" type="email" is-type="email" ></x-input>
      </group>
      <group title="请上传认证信息">
        <div></div>
      </group>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, XAddress, ChinaAddressV4Data, PopupPicker } from 'vux'
export default {
  name: 'settle',
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    XAddress,
    ChinaAddressV4Data,
    PopupPicker
  },
  data () {
    return {
      ruleForm: {
        email: '',
        name: '',
        bankname: [],
        bankAddress: []
      },
      onShow: false,
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      addressData: ChinaAddressV4Data // 城市数据
    }
  },
  methods: {
    onShadowChange () {

    }
  },
  Create () {
    this.$axios.post(
      'http://localhost:3002/wap/mersettle/getRegion',
      this.$qs.stringify({})
    ).then(res => {
      var a = this.$base64.decode(res)
      console.log(a)
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
    .formbox{
    }
  }
</style>
