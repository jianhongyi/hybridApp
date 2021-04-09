<template>
  <!-- 登录 绑定手机号 -->
  <div class="school-master-login">
    <!-- 第一步 输入手机号 获取验证码 -->
    <div v-if="index === 0" class="step-one">
      <h3>登录</h3>
      <em>Diplo校长端</em>
      <div class="tel-input">
        <input
          v-model="phone"
          type="tel"
          maxlength="11"
          placeholder="请输入手机号"
        />
        <van-icon name="cross" @click="clearPhone" />
      </div>
      <van-button
        color="#7560FF"
        block
        size="large"
        :disabled="disabled"
        @click="getPhoneCode"
      >
        获取短信验证码
      </van-button>
    </div>
    <!-- 第二步 输入短信验证码 -->
    <div v-if="index === 1" class="step-two">
      <h3>输入验证码</h3>
      <p><em>短信验证码已发送至</em> +86 {{phoneFormat(phone)}}</p>
      <van-password-input
        :value="code"
        :mask="false"
        :gutter="12"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-button
        color="#7560FF"
        block
        size="large"
        :disabled="showTime"
        @click="getPhoneCode">
        重新获取{{ showTime ? ('（' + count + 's）') : '' }}
      </van-button>
    </div>
    <!-- 验证码弹层 -->
    <pic-code-dialog
      ref="picCodeDialog"
      v-if="visible"
      :visible.sync="visible"
      :confirm="confirmPicCode">
    </pic-code-dialog>
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="code"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import check from '~common/assets/js/check.js'
import picCodeDialog from '../components/picCodeDialog.vue'
export default {
  name: 'login',
  data () {
    return {
      index: 0, // 当前进度 第几步
      phone: '', // 绑定手机号
      code: '', // 短信验证码，必填
      showKeyboard: false, // 数字键盘
      showTime: true, // 60s倒计时展示
      count: '', // 倒计时计数
      timer: null, // 计时器
      visible: false, // 是否弹出图片验证码
      pending: false, // 请求中 禁止点击
      operation: 'getCode' // getCode获取手机验证码 login登录
    }
  },
  components: {
    picCodeDialog
  },
  computed: {
    disabled () {
      return !this.phone
    },
    hmWechatInfo () {
      return this.$store.schoolmaster.state.hmWechatInfo
    }
  },
  watch: {
    code (value) {
      if (value.length === 6) {
        this.showKeyboard = false
        // 发送登录请求
        this.login()
      }
    }
  },
  mounted () {
    // 禁止页面返回操作
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  },
  methods: {
    // 清除输入内容
    clearPhone () {
      this.phone = ''
    },
    // 图片验证码弹层 确认方法
    confirmPicCode (picCode) {
      if (this.operation === 'getCode') {
        this.getPhoneCode(picCode)
      } else {
        this.login(picCode)
      }
    },
    // 获取短信验证码 获取成功跳到下一步
    getPhoneCode (picCode) {
      // 手机号验证
      let checkPhone = check.phone(this.phone)
      if (checkPhone.stat === 0) {
        Toast(checkPhone.tip)
        return false
      }
      if (this.pending) {
        return false
      }
      this.operation = 'getCode'
      this.pending = true
      // 请求参数
      let params = {
        phone: this.phone
      }
      if (picCode && picCode.picCode) {
        params = Object.assign(params, picCode)
      }
      // 请求短信验证码
      this.$axios.post('/send/message', params)
        .then((data) => {
          if (data && data.code && data.code === '1506') {
            // 需要图片验证 弹出弹层
            this.visible = true
          } else if (data && data.code && data.code === '1502') {
            // 图形验证码错误 更换验证码
            this.$refs.picCodeDialog.getPicCode()
          } else {
            this.index = 1
            this.showKeyboard = true
            this.visible = false
            this.startTime()
          }
          this.pending = false
        })
        .catch((err) => {
          this.pending = false
          console.log(err)
        })
    },
    // 获取短信验证码成功 开始倒计时
    startTime () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.showTime = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.showTime = false
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    // 短信验证码 验证成功 自动登录
    login (picCode) {
      if (this.pending) {
        return false
      }
      this.pending = true
      this.operation = 'login'
      let params = {
        weChatUnionId: this.hmWechatInfo.wechatUnionId,
        code: this.code,
        phone: this.phone
      }
      if (picCode && picCode.picCode) {
        params = Object.assign(params, picCode)
      }
      this.$axios.post('/phone/code/login', params)
        .then((data) => {
          if (data && data.code && data.code === '1506') {
            // 需要图片验证 弹出弹层
            this.visible = true
          } else if (data && data.code && data.code === '1502') {
            // 图形验证码错误 更换验证码
            this.$refs.picCodeDialog.getPicCode()
          } else {
            this.visible = false
            if (data && data === 'false') {
              this.$toast('暂无访问权限')
              this.$router.push('login')
              setTimeout(() => window.location.reload(), 2000)
            } else {
              this.$store.schoolmaster.commit('setOrgCode', '')
              this.$store.schoolmaster.commit('setOrgId', '')
              this.$store.schoolmaster.commit('setOrgList', [])
              this.$router.replace({
                name: 'choiceOrg',
                query: {
                  enter: '2',
                  path: 'dataIndex'
                }
              })
              window.location.reload()
            }
          }
          this.pending = false
        })
        .catch((err) => {
          console.log(err)
          this.pending = false
        })
    },
    // 手机号展示格式化
    phoneFormat (phone) {
      return phone.slice(0, 3) + (phone.slice(3) === '' ? '' : (' ' + this.phoneFormatMethd(phone.slice(3))))
    },
    phoneFormatMethd (phone4) {
      return phone4.slice(0, 4) + (phone4.slice(4) === '' ? '' : (' ' + this.phoneFormatMethd(phone4.slice(4))))
    }
  }
}
</script>

<style lang="less" scoped>
.school-master-login {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  .step-one,
  .step-two {
    height: 100vh;
    padding: 48px 36px 0px;
    h3 {
      margin-bottom: 20px;
      font-size: 48px;
      color: #333333;
    }
    em {
      font-size: 26px;
      font-style: normal;
      color: #cdd2d5;
    }
    input {
      width: 100%;
      height: 112px;
      margin-top: 50px;
      border: none;
      border-bottom: 1px solid #e9e9e9;
      font-size: 32px;
      color: #333333;
    }
    .van-button {
      margin-top: 72px;
    }
  }
  .tel-input {
    position: relative;
    i {
      position: absolute;
      right: 0px;
      bottom: 42px;
      font-size: 32px;
      font-weight: bold;
      color: #d8d8d8;
    }
  }
  .step-two {
    h3 {
      font-weight: 500;
    }
    p {
      margin: 75px 0px 29px 38px;
      font-size: 26px;
    }
    .van-password-input {
      ul {
        border: none;
      }
      li {
        border-radius: 6px;
        border: 1px solid #f0f0f0;
      }
      .van-password-input__item--focus {
        border-color: #7263ff;
      }
      .van-password-input__cursor {
        width: 2px;
        background-color: #7263ff;
      }
    }
  }
}
</style>
