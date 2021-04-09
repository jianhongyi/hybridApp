<template>
  <!-- 图片验码弹层 -->
  <div v-if="visible">
    <section class="popup" v-if="visible">
      <div class="popup-title">
        <h5>请输入验证码</h5>
        <van-icon name="cross" @click="close" />
      </div>
      <div class="popup-content">
        <input
        v-model="picCode"
        type="text"
        placeholder="请输入验证码"
        maxlength="8">
        <img :src="image" @click="getPicCode">
        <div v-if="replayShow" class="replay" @click="getPicCode">
          <van-icon name="replay" />
          <span>点击刷新</span>
        </div>
      </div>
      <div class="popup-bottom">
        <van-button
          color="#7560FF"
          block
          @click="confirmPicCode">
          确认
        </van-button>
      </div>
    </section>
    <div class="popup-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'unbundling',
  data () {
    return {
      image: '',
      picCode: '',
      encodeCaptha: '',
      replayShow: false
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Function,
      default: () => {
        console.log('确定')
      }
    }
  },
  created () {
    this.getPicCode()
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    confirmPicCode () {
      if (!this.picCode) {
        this.$toast('验证码不能为空')
        return false
      }
      let picInfo = {
        picCode: this.picCode,
        encodeCaptha: this.encodeCaptha
      }
      this.confirm(picInfo)
    },
    // 请求图片验证码
    getPicCode () {
      this.$axios.post('/pic/code')
        .then(res => {
          if (res) {
            res = JSON.parse(res)
            this.image = 'data:' + res.type + ';base64,' + res.image
            this.encodeCaptha = res.encodeCaptha
            this.picCode = ''
            this.replayShow = false
          }
        })
        .catch(err => {
          console.log(err)
          this.replayShow = true
        })
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
  z-index: 3;
  padding: 38px 54px 60px;
  background: #ffffff;
  border-radius: 14px;
  text-align: center;
  overflow: hidden;
  .popup-title {
    position: relative;
    h5 {
      margin: 10px 0px 30px;
      font-size: 36px;
      font-weight: 700;
      color: #111F2C;
    }
    i {
      position: absolute;
      top: 3px;
      right: 0px;
      font-size: 40px;
      font-weight: bold;
      color: #979797;
    }
  }
  .popup-content {
    position: relative;
    min-width: 432px;
    overflow: hidden;
    font-size: 28px;
    input {
      width: 520px;
      height: 80px;
      padding-left: 20px;
      background: #F3F7F8;
      border-radius: 4px;
      border: none;
    }
    img {
      position: absolute;
      top: 14px;
      right: 20px;
      width: 130px;
      height: 52px;
    }
    .replay{
      position: absolute;
      top: 21px;
      right: 16px;
      color: #A0A5AB;
      font-size: 24px;
      i {
        position: relative;
        top: 2px;
        font-size: 26px;
      }
    }
  }
  .popup-bottom{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    margin-top: 40px;
    background-color: #fff;
    .van-button{
      height: 88px;
      border-radius: 4px;
      font-size: 28px;
    }
  }
}
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
