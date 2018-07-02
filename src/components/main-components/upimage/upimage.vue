<template>
  <div class="upimge">
    <div class="title" v-html="labelSuffix">
    </div>
    <div class="bgbox" @click="select(dataname)">
      <img src="../../../assets/logo.png" alt="">
      <input type="file" accept="image/*" :id="dataname" @change="getimg()">
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
    dataname: String,
    imgsrc: ''
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    select (dom) {
      var Dinput = document.getElementById(dom)
      Dinput.click()
    },
    getimg () {
      console.log(1)
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  @import "./upimage.less";
</style>
