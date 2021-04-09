<template>
  <!-- 解除绑定弹层 -->
  <div v-if="visible">
    <section class="popup" v-if="visible">
      <div class="popup-title">
        <h5>提示</h5>
      </div>
      <div class="popup-content">
        <p>解除绑定孩子后</p>
        <p>您将不能继续查看孩子的学情数据了~</p>
      </div>
      <div class="popup-bottom">
        <van-button color="#7560FF" @click="openHome" plain> 解绑 </van-button>
        <van-button color="#7560FF" @click="close"> 取消 </van-button>
      </div>
    </section>
    <div class="popup-mask" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'unbundling',
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
    // 解绑
    openHome () {
      this.$emit('relieve')
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
  z-index: 2;
  padding: 54px 48px;
  background: #ffffff;
  border-radius: 14px;
  text-align: center;
  .popup-title {
    h5{
      font-size: 43px;
    }
  }
  .popup-content {
    width: 560px;
    padding: 30px 0px 46px;
    p {
      font-size: 33px;
      color: #999999;
      line-height: 60px;
    }
  }
  .popup-bottom{
    .van-button{
      width: 255px;
      margin-right: 37.5px;
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
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
