<template>
  <!-- 添加孩子 -->
  <div class="parents-add-child">
    <!-- 第一步 输入名字、手机号 获取信息 -->
    <div v-if="index === 0" class="step-one">
      <h3>请输入学生信息</h3>
      <em>绑定学生后可查看考试分数和练习情况</em>
      <input v-model="form.stuName" type="text" placeholder="请输入学生姓名" />
      <input
        v-model="form.phone"
        type="tel"
        maxlength="11"
        placeholder="请输入学生手机号"
      />
      <van-button
        color="#7560FF"
        block
        size="large"
        :disabled="disabled"
        @click="submitInfo"
      >
        下一步
      </van-button>
    </div>
    <!-- 第二步 展示孩子信息 确认绑定 -->
    <div v-if="index === 1" class="step-two">
      <h3>请确认要绑定的孩子信息</h3>
      <em>确认信息无误后再点击确认绑定</em>
      <ul>
        <li>
          <p>孩子信息</p>
        </li>
        <li>
          <span class="label">姓名</span>
          <span>{{ info.userName }}</span>
        </li>
        <li>
          <span class="label">所在机构</span>
          <span>{{ info.orgName }}</span>
        </li>
        <li>
          <span class="label">班级名称</span>
          <span>{{ info.className }}</span>
        </li>
        <li>
          <span class="label">任教老师</span>
          <span>{{ info.tchName }}</span>
        </li>
        <li>
          <span class="label">所报学科</span>
          <span>英语</span>
        </li>
      </ul>
      <van-button color="#7560FF" block size="large" @click="confirm">
        确认绑定
      </van-button>
    </div>
    <bundling :visible.sync="visible"></bundling>
  </div>
</template>

<script>
import { Toast } from 'vant'
import check from '~common/assets/js/check.js'
import bundling from '../components/bundling'
export default {
  name: 'addChild',
  data () {
    return {
      index: 0,
      form: {
        stuName: '',
        phone: ''
      },
      info: {},
      visible: false,
      pending: false
    }
  },
  components: {
    bundling
  },
  computed: {
    disabled () {
      return !this.form.stuName || !this.form.phone
    },
    userInfo () {
      return this.$store.parents.state.userInfo
    }
  },
  methods: {
    // 请求后端获取孩子信息 获取成功跳到下一步
    submitInfo () {
      let checkPhone = check.phone(this.form.phone)
      if (checkPhone.stat === 0) {
        Toast(checkPhone.tip)
        return false
      }
      this.$axios
        .get('/parents/api/query/stu/info', { params: this.form })
        .then((data) => {
          if (data) {
            this.index = 1
            this.info = data
          } else {
            Toast('未查到相关用户')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 确认绑定 弹出弹层回到首页
    confirm () {
      if (this.pending) {
        return false
      }
      this.pending = true
      let params = {
        unionId: this.userInfo.wechatUnionId,
        stuId: this.info.userId,
        phone: this.info.phone
      }
      this.$axios
        .put('/parents/api/bind/parent/info/add', params)
        .then((data) => {
          this.visible = true
          this.pending = false
        })
        .catch((err) => {
          console.log(err)
          this.pending = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.parents-add-child {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  .step-one,
  .step-two {
    height: 100vh;
    padding: 64px 36px 0px;
    h3 {
      margin-bottom: 3px;
      font-size: 54px;
      font-family: Helvetica;
      color: #333333;
    }
    em {
      font-size: 32px;
      font-style: normal;
      color: rgba(117, 96, 255, 0.43);
    }
    input {
      width: 100%;
      height: 138px;
      margin-top: 50px;
      border: none;
      border-bottom: 1px solid #e9e9e9;
      font-size: 38px;
      color: #333333;
    }
    .van-button {
      margin-top: 86px;
    }
  }
  .step-two {
    em {
      color: #cdd2d5;
    }
    ul {
      margin-top: 47px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid #a79cff;
      li {
        float: left;
        width: 100%;
        height: 126px;
        line-height: 126px;
        box-sizing: content-box;
        border-bottom: 1px solid #e6e2ff;
        &:first-child {
          height: 112px;
          line-height: 112px;
          padding-left: 33px;
          background: #a79cff;
          font-size: 37px;
          font-family: Helvetica;
          color: #ffffff;
        }
        span {
          float: left;
          height: 126px;
          max-width: 55%;
          padding-left: 38px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #666666;
          font-size: 32px;
        }
        .label {
          float: left;
          width: 196px;
          padding-left: 33px;
          background-color: #f6f4ff;
          border-right: 1px solid #e6e2ff;
        }
      }
    }
    .van-button {
      margin-top: 136px;
    }
  }
}
</style>
