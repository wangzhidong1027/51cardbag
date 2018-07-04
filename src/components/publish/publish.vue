<template>
  <div id="publish">
    <div class="formbox">
      <group gutter='0'>
        <div class="input-box"><x-input placeholder='标题 输入商品名称' v-model="goodForm.name" type='text' :max
        ='16' required></x-input></div>
        <div class="input-box vux-1px-tb"><x-input placeholder='价格 输入商品价格' type='number' is-type='number' v-model="goodForm.price" required></x-input></div>
        <div class="textarea-box">
          <x-textarea placeholder='商品简介（40字以内）' :max='40' :rows='4' v-model="recommend" ></x-textarea>
        </div>
      </group>
      <div class="upimg" @click="getimg">
        <img v-if="imgsrc" :src="imgsrc" alt="">
        <div class="logo" v-if="!imgsrc">
          <p><span>+</span></p>
          <p>添加</p>
        </div>
        <input id='img' type="file"  ref="aptitude" accept="image/*" @change="ImgBase64($event)">
      </div>
    </div>
    <div class="btnbox">
      <x-button type='warn' style="border-radius:0px;" disabled="disabled"><b style="font-weight: normal;color:#fff;font-size:.16rem">确定发布</b></x-button>
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
      goodForm: {
        name: '',
        price: ''
      },
      recommend: '',
      imgsrc: '',
      disabled: false
    }
  },
  methods: {
    getimg () {
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
    height: .5rem;
  }
}
</style>
