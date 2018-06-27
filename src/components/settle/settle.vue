<template>
  <div class="settle">
    <h3>请输入商户信息</h3>
    <div class="formbox">
      <!--<group :gutter="'0'">-->
        <!--<x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>-->
      <!--</group>-->
      <my-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <mt-field label="邮箱"  placeholder="请输入邮箱" :state="rules.email.state" v-model="ruleForm.email"></mt-field>
        <mt-field label="名字"  placeholder="请输入邮箱" :state="rules.name.state" v-model="ruleForm.name"></mt-field>
        <button @click="submitForm('ruleForm')">dasdasdsa</button>
      </my-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settle',
  data () {
    return {
      ruleForm: {
        email: '',
        name: ''
      },
      rules: {
        email: [{ required: true, message: '请输入活动名称', trigger: 'blur', state: '' }],
        name: [{ required: true, min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur', state: '' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  /*@import "./settle.scss";*/
  .settle{
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #f5f5f5;
    .weui-cells.weui-cells {
    }
    .weui-cell{
    }
    h3{
      font-size: 0.16rem;
      font-weight: normal;
      line-height: 0.45rem;
      padding: 0 0.15rem;
      color: #333;
    }
    .formbox{
      background: #fff;
    }
  }
</style>
