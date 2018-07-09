<template>
  <div id="publish">
    <div class="formbox">
      <group gutter='0'>
        <div class="input-box"><x-input placeholder='标题 输入商品名称' v-model="publishForm.name" ref='name' type='text' :max='16' required></x-input></div>
        <div class="input-box vux-1px-tb"><x-input placeholder='价格 输入商品价格' type='number' :is-type='isprive' v-model="publishForm.price" ref="price" required></x-input></div>
        <div class="textarea-box">
          <x-textarea placeholder='商品简介（40字以内）' :max='40' :rows='4' v-model="recommend" ></x-textarea>
        </div>
      </group>
      <div class="upimg" @click="getimg">
        <img v-if="imgsrc" :src="imgsrc">
        <div class="logo" v-if="!imgsrc">
          <p><span>+</span></p>
          <p>添加</p>
        </div>
        <input id='publishimg' type="file" accept="image/*" @change="ImgBase64($event)">
      </div>
    </div>
    <div class="btnbox">
      <x-button type='warn' style="border-radius:0px;" @click.native="publishGoods"><b style="font-weight: normal;color:#fff;font-size:.16rem" >确定发布</b></x-button>
    </div>
  </div>
</template>

<script>
import { XInput, XTextarea, XButton } from 'vux'

export default{
  name: 'publish',
  components: {
    XInput,
    XTextarea,
    XButton
  },
  data () {
    return {
      publishForm: {
        name: '',
        price: ''
      },
      recommend: '',
      imgsrc: ''
    }
  },
  computed: {
    disabled: function () {
      // console.log(this.publishForm)
      // for (var k in this.publishForm) {
      //   console.log(this.$refs[k])
      //   // if (!this.$refs[k].valid) {
      //   //   return true
      //   // }
      // }
      // if (!this.recommend) {
      //   return true
      // }
      // if (!this.imgsrc) {
      //   return true
      return false
    }
  },
  methods: {
    isprive (value) {
      if (/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)) {
        return { valid: true }
      } else {
        return { valid: false, msg: '请填写正确价格，最多两位小数' }
      }
    },
    getimg () {
      document.getElementById('publishimg').click()
    },
    ImgBase64 (e) {
      let tag = e.target
      let fileList = tag.files
      let _this = this
      if (!fileList.length) {
        return
      }
      let reader = new FileReader()
      reader.readAsDataURL(fileList[0])
      reader.onload = function (e) {
        var image = new Image()
        image.src = e.target.result
        image.onload = function () {
          var expectWidth = image.naturalWidth
          var expectHeight = image.naturalHeight
          if (
            this.naturalWidth > this.naturalHeight &&
            this.naturalWidth > 800
          ) {
            expectWidth = 800
            expectHeight =
              expectWidth * this.naturalHeight / this.naturalWidth
          } else if (
            this.naturalHeight > this.naturalWidth &&
            this.naturalHeight > 1200
          ) {
            expectHeight = 1200
            expectWidth =
              expectHeight * this.naturalWidth / this.naturalHeight
          }
          var canvas = document.createElement('canvas')
          var ctx = canvas.getContext('2d')
          canvas.width = expectWidth
          canvas.height = expectHeight
          ctx.drawImage(this, 0, 0, expectWidth, expectHeight)
          var base64 = null
          base64 = canvas.toDataURL('image/jpeg', 1)
          _this.upimg(base64)
        }
      }
    },
    upimg (baseimg) {
      this.loading.show({
        text: '上传中'
      })
      this.$axios.post(
        this.$GLOBAL.commonUploadImageApi,
        this.$qs.stringify({
          fileImg: baseimg
        })
      ).then(res => {
        this.loading.hide()
        var a = this.$base64.decode(res.data)
        a = JSON.parse(a)
        if (a.code === '10000' && a.data.err === '10000') {
          // this.imgsrc = baseimg
          this.imgsrc = a.data.data.imgUrl
        } else {
          this.$vux.toast.show({
            text: '<p style="line-height: 0.1rem;font-size: 0.16rem;">上传失败<p>',
            type: 'warn'
          })
        }
      }).catch(error => {
        console.log('图片上传' + error)
      })
    },
    publishGoods () {
      for (var i in this.publishForm) {
        console.log(this.$refs[i].valid)
        if (!this.$refs[i].valid) {
          this.$vux.alert.show({
            title: '提示',
            content: '请填写完整信息'
          })
          return
        }
      }
      if (!this.recommend) {
        this.$vux.alert.show({
          title: '提示',
          content: '请填写商品简介'
        })
        return
      }
      if (!this.imgsrc) {
        this.$vux.alert.show({
          title: '提示',
          content: '请上传商品图片'
        })
        return
      }
      this.loading.show({text: '发布中'})
      this.$axios.post(
        this.$GLOBAL.commonGoodsPushApi,
        this.$qs.stringify({
          pmoney: this.publishForm.price,
          pname: this.publishForm.name,
          pintro: this.recommend,
          pdpicture: this.imgsrc,
          zftype: '123'
        })
      ).then(res => {
        this.loading.hide()
        var reslut = JSON.parse(this.$base64.decode(res.data))
        if (reslut.code === '10000') {
          this.$router.push({
            path: '/index'
          })
        } else {
          this.$vux.alert.show({
            title: '提示',
            content: reslut.info
          })
        }
      }).catch(err => {
        console.log('发布商品' + err)
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang='less'>
#publish{
  width: 100%;
  min-height: 100%;
  overflow: scroll;
  background: #fff;
  display: flex;
  flex-flow: column;
  .formbox{
    flex: 1;
  }
  .input-box{
    height: .5rem;
    font-size: .14rem;
  }
  .textarea-box{
    font-size: .14rem;
    color: #333;
  }
  .upimg{
    width: .8rem;
    height: .8rem;
    background: #f3f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .15rem;
    img{
      width: 100%;
      height: 100%;
    }
    input{
      display: none;
    }
    .logo{
      color: #999;
      font-size: .12rem;
      p{
        display: flex;
        justify-content: center;
        span{
          border: 1px solid #999;
          display: block;
          width: .2rem;
          height: .2rem;
          border-radius: 50%;
          text-align: center;
          line-height: .18rem;
        }
      }
    }
  }
  .btnbox{
  }
}
</style>
