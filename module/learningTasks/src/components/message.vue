<template>
  <section class="popup" v-if="visible">
    <div class="popup-content">
      <slot>
        <p>一次完成效果更好哦~</p>
        <p>再坚持一下吧!</p>
      </slot>
      <queens-button round plain type="primary" size="small" @click="returnBack">
        退出
      </queens-button>
      <queens-button round type="primary" size="small" @click="close">
        继续做题
      </queens-button>
    </div>

    <div class="popup-mask" @click="close"></div>
  </section>
</template>

<script>
import Bridge from '~common/assets/js/dsBridge.js'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    // 返回操作
    returnBack () {
      Bridge.callHandler('dissmissWebView')
    }
  }
}
</script>

<style lang="less" scoped>
.popup {
  text-align: center;
  .popup-content{
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 1000;
    width: 600px;
    padding: 50px 40px;
    background: #ffffff;
    border-radius: 14px;
    p {
      font-size: 38px;
      color: #26001D;
      line-height: 60px;
    }
    /deep/.queens-button--round{
      width: 230px;
      height: 90px;
      margin-top: 40px;
    }
  }
  .popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
