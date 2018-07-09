<script>
// 测试地址:URL1：http://10.10.18.87/wap/MerchantSettle
// URL2：http://10.10.18.87/wap/Merchant

const baseApiURL = '/wap/mersettle'
const baseApiURL1 = '/wap/merchant'

const commonLoginApi = baseApiURL + '/login' // C001 登录接口
const commonLoginOutApi = baseApiURL + '/logout' // C002 登录接口
const commonGetBankApi = baseApiURL + '/getBanks' //  C003获取银行列表
const commonUploadImageApi = '/index.php?r=Common/UploadImg' //  C004图片上传
const commonSettleApi = baseApiURL + '/settle' //  C005商户入驻接口
const commonGetGoodsApi = baseApiURL1 + '/getMerchGoods' // C006 获取商户商品
const commonDelGoodsApi = baseApiURL1 + '/delMerchGoods' // C007 删除商品
const commonGetMerchApi = baseApiURL1 + '/getMerchInfo' // c008 获取商户信息
const commonGetBankNoApi = baseApiURL1 + '/getMerchBank' // c009 获取商户对公账户
const commonGoodsPushApi = baseApiURL1 + '/goodsPush' // c010 发布商品

// ---------状态常量--------- start
// const vipStatusConst = {
//   yesValue: 1,
//   yesLabel: '是',
//   noValue: 0,
//   noLabel: '否'
// }

export default {
  commonLoginApi,
  commonLoginOutApi,
  commonGetBankApi,
  commonGetGoodsApi,
  commonSettleApi,
  commonUploadImageApi,
  commonDelGoodsApi,
  commonGetMerchApi,
  commonGetBankNoApi,
  commonGoodsPushApi
}
</script>

<style scoped>

</style>
