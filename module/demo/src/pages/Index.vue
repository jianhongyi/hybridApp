<template>
  <div class="demo" @click="clickCardCallBack" ref="demo">
    <queens-description />
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      clickCardCallBack () {
        window.location.href = 'https://touch.uni.com'
      }
    }
  }
</script>
<style lang="less" scoped>
  .demo {
  }
</style>
