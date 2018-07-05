<template>
  <div class="upimge">
    <div class="title" v-html="labelSuffix">
    </div>
    <div class="bgbox" @click="select(dataname)">
      <img v-if="imgsrc" :src="imgsrc" alt="" :style="style">
      <input type="file" accept="image/*" :id="dataname" @change="getimg($event)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpImage',
  componentName: 'UpImage',
  props: {
    labelSuffix: {
      type: String,
      default: ''
    },
    dataname: String
  },
  data () {
    return {
      imgsrc: '',
      style: ''
    }
  },
  created () {
  },
  methods: {
    select (dom) {
      var Dinput = document.getElementById(dom)
      Dinput.click()
    },
    getimg (e) {
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
          if (this.naturalWidth / this.naturalHeight < 345 / 200) {
            _this.style = 'margin:0 auto;height:100%;display:block;'
          } else {
            _this.style = 'width:100%;vertical-align: center; '
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
          this.imgsrc = baseimg
          this.$emit('input', 'a.data.data.imgUrl')
        } else {
          this.$vux.toast.show({
            text: '<p style="line-height: 0.1rem;font-size: 0.16rem;">上传失败<p>',
            type: 'warn'
          })
        }
      }).catch(error => {
        console.log('图片上传' + error)
      })
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  @import "./upimage.less";
</style>
