<template>
<div id="cardlist">
  <ul>
    <li>
      <div class="imgbox">
        <img src="../../assets/images/bank.png" alt="">
      </div>
      <div class="cardinfo">
        <p class="name">{{bank.bankname}}</p>
        <p class="no">{{showNo | capitalize}}</p>
      </div>
      <div class="show">
        <b @click="displays">as</b>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default{
  name: 'bankcard',
  data () {
    return {
      bank: {},
      show: false
    }
  },
  computed: {
    showNo () {
      if (this.bank.bankno) {
        var hien = ''
        if (!this.show) {
          var mask = ''
          for (var i = 2; i < this.bank.bankno.length - 3; i++) {
            mask = mask + '*'
          }
          hien = this.bank.bankno.slice(0, 3) + mask + this.bank.bankno.slice(this.bank.bankno.length - 3, this.bank.bankno.length)
          console.log(hien)
        }
        return this.show ? this.bank.bankno : hien
      } else {
        return ''
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (value) {
        var Anum = value.substring
        var len = Anum.length
        var r = len % 4
        var No = Anum.slice(0, len - r).match(/\d{4}/g).join(' ') + ' ' + Anum.slice(len - r, len)
        return No
      } else {
        return ''
      }
    }
  },
  created () {
    this.$axios.post(
      this.$GLOBAL.commonGetBankNoApi,
      this.$qs.stringify()
    ).then(res => {
      var reslut = JSON.parse(this.$base64.decode(res.data))
      if (reslut.code === '10000') {
        this.bank = reslut.data
      }
    }).catch(error => {
      console.log('对公账户' + error)
    })
  },
  methods: {
    displays () {
      this.show = !this.show
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
#cardlist{
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #fffefd;
  ul{
    padding: 0.15rem;
    li{
      width: 100%;
      height: .8rem;
      padding: 0 0.2rem;
      border-radius: 6px;
      background-image: linear-gradient(90deg, rgb(255, 79, 42), rgb(255, 151, 75));
      display: flex;
      justify-content: space-around;
      align-items: center;
      .imgbox{
        align-items: center;
        img{
          display: block;
          width: 0.35rem;
        }
      }
      .cardinfo{
        letter-spacing:1px;
        font-size: 0.14rem;
        flex: 1;
        padding-left: 0.15rem;
        .name{
          color: #fff;
          font-weight: bold;
        }
        .no{
          font-size: .11rem;
          color: #ffffff;
        }
      }
      .show{
        font-size: 0.3rem;
      }
    }
  }
}
</style>
