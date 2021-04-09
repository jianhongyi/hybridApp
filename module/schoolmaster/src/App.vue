<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/loading'
import weChat from './mixins/weChat'

export default {
  mixins: [weChat],
  computed: {
    LOADING () {
      return this.$store.schoolmaster.state.LOADING
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="less" scoped>
#app {
  background: #f6f7fb;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>