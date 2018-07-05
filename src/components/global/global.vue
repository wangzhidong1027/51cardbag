<script>
// 测试地址:URL1：http://10.10.18.87/wap/MerchantSettle
// URL2：http://10.10.18.87/wap/Merchant

const baseApiURL = '/wap/mersettle'
const baseApiURL1 = '/wap/merchant'

const commonLoginApi = baseApiURL + '/login' // C001 登录接口
const commonGetBankApi = baseApiURL + '/getBanks' // 获取银行列表
const commonUploadImageApi = '/index.php?r=Common/UploadImg' // 图片上传
const commonGetGoodsApi = baseApiURL1 + '/getMerchGoods' // C001 获取商户商品

// ---------状态常量--------- start
// const vipStatusConst = {
//   yesValue: 1,
//   yesLabel: '是',
//   noValue: 0,
//   noLabel: '否'
// }

export default {
  commonLoginApi,
  commonGetBankApi,
  commonGetGoodsApi,
  commonUploadImageApi
}
</script>

<style scoped>

</style>
