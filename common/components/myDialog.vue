<template>
  <!-- 弹层封装 -->
  <div v-if="visible">
    <section class="popup" v-if="visible">
      <div v-if="title" class="popup-title">
        <h5>{{title}}</h5>
      </div>
      <div class="popup-content">
        <slot name="content">
          <p v-if="message" class="message">{{message}}</p>
        </slot>
      </div>
      <div v-if="showBottom" class="popup-bottom">
        <van-button
          v-if="showConfirmButton"
          color="#7560FF"
          @click="confirm"
          block
          plain>
          {{confirmButtonText}}
        </van-button>
        <van-button
          v-if="showCancelButton"
          color="#7560FF"
          block
          @click="close">
          {{cancelButtonText}}
        </van-button>
      </div>
    </section>
    <div class="popup-mask" @click="closeOnClickOverlayFn"></div>
  </div>
</template>

<script>
export default {
  name: 'myDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    showBottom: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 是否在点击遮罩层后关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Function,
      default: () => {
        console.log('确定')
      }
    }
  },
  watch: {
    visible (val) {
      document.body.style.overflow = val ? 'hidden' : 'auto'
      document.getElementById('app').style.overflow = val ? 'hidden' : 'auto'
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    closeOnClickOverlayFn () {
      this.closeOnClickOverlay && this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.popup {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 10000;
  padding: 36px 40px;
  background: #ffffff;
  border-radius: 14px;
  text-align: center;
  overflow: hidden;
  .popup-title {
    h5{
      margin: 10px 0px 30px;
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #111F2C;
    }
  }
  .popup-content {
    min-width: 432px;
    overflow: hidden;
    font-size: 28px;
    .message {
      width: 432px;
      padding: 30px 0px 46px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #121E2C;
      line-height: 42px;
    }
  }
  .popup-bottom{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    margin-top: 26px;
    background-color: #fff;
    .van-button{
      height: 77px;
      border-radius: 6px;
      margin-right: 32px;
      &:last-child{
        margin-right: 0px;
      }
    }
  }
}
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
