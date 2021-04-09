<template>
  <!-- 绑定成功跳转弹层 -->
  <div v-if="visible">
    <section class="popup" v-if="visible">
      <div class="popup-title">
        <h5>提示</h5>
      </div>
      <div class="popup-content">
        <p>您已成功绑定孩子的账号</p>
        <p>快去看看孩子的学习情况吧~</p>
      </div>
      <div class="popup-bottom">
        <van-button color="#7560FF" block @click="openHome"> 查看学情 </van-button>
      </div>
    </section>
    <div class="popup-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'bundling',
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
    // 回到首页
    openHome () {
      this.$router.push('situation')
      window.location.reload()
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
