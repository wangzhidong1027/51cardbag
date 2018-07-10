<template>
  <div id="receivables" v-if="imgsrc">
    <div class="receivablesbox">
      <p class="pfont">扫一扫，付款给</p>
      <p class="store_name">{{info.pname}}</p>
      <div class="img">
        <img :src='imgsrc'/>
      </div>
      <div class="money">
        <span>￥</span>
        <p><label for="money"  number>{{info.money}}</label></p>
        <input type='text' id="money" ref="money" v-model="message" @focus="showbutton" @blur="change()" @keyup="inputmoney">
      </div>
      <div class="content" v-text="tit"></div>
      <div class="operation">
        <a class="modify">修改金额</a>
        <a class="preservation" v-if="showtrue">确定修改</a>
      </div>
    </div>
    <a class="jump" href="#/travel/settlement">查看结算账户</a>
  </div>
</template>

<script>
export default {
  name: 'QRcode',
  data: function () {
    return {
      imgsrc: '',
      message: '',
      info: {}
    }
  },
  created () {
    var id = this.$route.params.id
    this.$axios.post(
      this.$GLOBAL.commonGoodInfoApi,
      this.$qs.stringify({
        productId: id
      })
    ).then(res => {
      var result = JSON.parse(this.$base64.decode(res.data))
      if (result.code === '10000') {
        console.log(result)
        this.info = result.data
      } else {
        this.$router.go(-1)
      }
    }).catch(error => {
      console.log('单条商品信息' + error)
    })
  },
  methods: {

  }
}
</script>

<style lang='less'>
#receivables {
  background: -webkit-linear-gradient(#ecbf71, #e6b559); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ecbf71, #e6b559); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ecbf71, #e6b559); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ecbf71, #e6b559); /* 标准的语法 */
  padding: 1rem 1rem;
  height: 100%;
  overflow: scroll;
}
#receivables .receivablesbox {
  width: 16.75rem;
  margin: 0 auto 3.12rem auto;
  background-color: #fff;
  padding: 2rem 0;
  border-radius: 0.15rem;
}
.receivablesbox p.pfont {
  font-size: 0.8rem;
  color: #333333;
  text-align: center;
  line-height: 1.5rem;
}
.receivablesbox p.store_name {
  font-size: 0.8rem;
  color: #333333;
  text-align: center;
  line-height: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
}
.receivablesbox div.img {
  width: 12rem;
  height: 12rem;
  margin: 0 auto 0rem auto;
}
.receivablesbox div.img img {
  width: 100%;
  height: 100%;
}
.receivablesbox div.money {
  text-align: center;
  color: #333333;
  font-size: 1.75rem;
}
.receivablesbox div.money label { /*display: inline-block;*/
}
/*.receivablesbox div.money input{*/
/*text-align: center;*/
/*width:90%;*/
/*border: none;*/
/*font-weight: bold;*/
/*font-size: 1.75rem;*/
/*font-family: tahoma,Helvetica,*/
/*Arial,"\5FAE\8F6F\96C5\9ED1";*/
/*}*/
.receivablesbox div.content {
  font-size: 0.65rem;
  color: #999999;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
}

.receivablesbox div.operation {
    width: 100%;
  display: flex;
  justify-content: center;
}

.receivablesbox div.operation a {
  display: inline-block;
  font-size: 0.7rem;
  color: #333333;
}

.receivablesbox div.operation a.modify {
  text-align: left;
  text-align: center;
  line-height: 30px;
}

.receivablesbox div.operation a.preservation {
  width: 4.3rem;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

#receivables a.jump {
  font-size: 0.7rem;
  display: block;
  text-align: center;
  text-align: center;
  color: #fff;
}
.receivablesbox {
  .money {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    span {
      font-weight: normal;
      font-size: 1.5rem;
    }
    p {
      width: auto;
      max-width: 100%;
      font-weight: bold;
      padding: 0;
      margin: 0;
      outline: none;
      padding-right: 0rem;
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  #money {
    margin-left:0.1rem;
    width: 1rem;
    border: none;
    opacity: 0;
  }
}
</style>
