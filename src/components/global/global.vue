<script>
// 测试地址:URL1：http://10.10.18.87/wap/MerchantSettle
// URL2：http://10.10.18.87/wap/Merchant

const baseApiURL = '/wap/mersettle'
const baseApiURL1 = '/wap/merchant'

const commonLoginApi = baseApiURL + '/login' // C001 登录接口
const commonGetBankApi = baseApiURL + '/getBanks' //  C002获取银行列表
const commonUploadImageApi = '/index.php?r=Common/UploadImg' //  C003图片上传
const commonSettleApi = baseApiURL + '/settle' //  C004商户入驻接口
const commonGetGoodsApi = baseApiURL1 + '/getMerchGoods' // C005 获取商户商品
const commonSeleteGoodsApi = baseApiURL1 + 'delMerchGoods' // C006 删除商品
const commonGetMerchIngoApi = baseApiURL1 + 'getMerchInfo' // c007 获取商户信息
const commonGoodsPushApi = baseApiURL1 + 'goodsPush' // c008 发布商品

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
  commonSettleApi,
  commonUploadImageApi,
  commonSeleteGoodsApi,
  commonGetMerchIngoApi,
  commonGoodsPushApi
}
</script>

<style scoped>

</style>
