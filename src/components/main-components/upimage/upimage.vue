<template>
  <div class="upimge">
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
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
