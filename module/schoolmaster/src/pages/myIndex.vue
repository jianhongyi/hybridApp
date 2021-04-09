<template>
<!-- 我的页面 -->
  <div class="my-index">
    <div class="top-info">
      <div class="left" @click="infoVisible = true">
        <img :src="weChatInfo.headImgUrl ? weChatInfo.headImgUrl : userHeadImg">
      </div>
      <div class="right">
        <h5>{{telHidden(userInfo.phone)}}</h5>
        <img v-if="orgList && orgList.length > 1" :src="changeImg" @click="choiceOrg" />
        <span>{{orgName}}</span>
      </div>
    </div>
    <ul class="child">
      <li>
        <router-link to="/haveClass">
          <img :src="childrenInfoImg">
          <span>已有课程</span>
          <van-icon name="arrow" />
        </router-link>
      </li>
      <li @click="userFeedbackVisible = true">
        <img :src="aboutImg">
        <span>用户反馈</span>
        <van-icon name="arrow" />
      </li>
       <li @click="signOutVisible = true">
        <img :src="outImg">
        <span>退出登录</span>
        <van-icon name="arrow" />
      </li>
    </ul>
    <my-dialog
      :visible.sync="userFeedbackVisible"
      :showConfirmButton="false"
      title="用户反馈"
      cancelButtonText="我知道了">
      <div class="userFeedback-box" slot="content">
        <p>客服电话：400-898-7008</p>
        <p style="color: #999999;">服务时间：8:00-23:00</p>
      </div>
    </my-dialog>
     <my-dialog
      :visible.sync="infoVisible"
      :showConfirmButton="false"
      title="账户信息"
      cancelButtonText="我知道了">
      <div class="userFeedback-box" slot="content">
        <p style="text-align: left; padding: 0px 12px; width: 240px;">您可通过DiploTalk机构端进行设置账户信息</p>
      </div>
    </my-dialog>
    <my-dialog
      :visible.sync="signOutVisible"
      :confirm="signOut"
      title="确定退出当前帐号吗？">
    </my-dialog>
  </div>
</template>

<script>
import childrenInfoImg from '../assets/img/childrenInfo.png'
import aboutImg from '../assets/img/about.png'
import outImg from '../assets/img/out.png'
import userHeadImg from '../assets/img/userHead.png'
import changeImg from '../assets/img/change.png'
import myDialog from '~common/components/myDialog'

export default {
  name: 'myIndex',
  data () {
    return {
      childrenInfoImg,
      aboutImg,
      outImg,
      userHeadImg,
      changeImg,
      signOutVisible: false,
      userFeedbackVisible: false,
      infoVisible: false
    }
  },
  components: {
    myDialog
  },
  computed: {
    weChatInfo () {
      return this.$store.schoolmaster.state.hmWechatInfo
    },
    userInfo () {
      return this.$store.schoolmaster.state.userInfo
    },
    orgName () {
      return this.$store.schoolmaster.state.hmOrgName
    },
    orgList () {
      return this.$store.schoolmaster.state.hmOrgList
    }
  },
  methods: {
    // 切换组织
    choiceOrg () {
      this.$router.push({
        path: 'choiceOrg',
        query: {
          path: 'my'
        }
      })
    },
    // 退出登录
    signOut () {
      this.$store.schoolmaster.commit('setOrgCode', '')
      this.$store.schoolmaster.commit('setOrgId', '')
      this.$store.schoolmaster.commit('setOrgList', [])
      this.$router.push('login')
    },
    // 手机号隐藏中间四位
    telHidden (tel) {
      if (tel) {
        let reg = /^(\d{3})\d{4}(\d{4})$/
        tel = tel.replace(reg, '$1****$2')
        return tel
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-index{
  padding: 0px 36px;
  background: url("../assets/img/myBg.png");
  background-size: 100% auto;
  .top-info{
    padding: 32px 0px;
    overflow: hidden;
    .right{
      float: left;
      margin-top: 15px;
      h5{
        float: left;
        max-width: 320px;
        line-height: 50px;
        font-size: 32px;
        color: #333333;
      }
      img{
        float: left;
        width: 36px;
        height: 36px;
        margin: 5px 0px 0px 16px;
      }
      span{
        clear: both;
        display: block;
        max-width: 398px;
        height: 42px;
        line-height: 38px;
        font-size: 28px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .left{
      float: left;
      width: 112px;
      height: 112px;
      margin-right: 37px;
      border: 2px solid #FFFFFF;
      overflow: hidden;
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .child{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    li{
      position: relative;
      height: 120px;
      line-height: 122px;
      padding-left: 28px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      img{
        float: left;
        width: 36px;
        margin-top: 42px;
        margin-right: 24px;
      }
      span{
        display: inline-block;
        font-size: 32px;
        font-weight: 400;
        color: #333333;
      }
      i{
        float: right;
        margin-top: 42px;
        margin-right: 25px;
        font-size: 34px;
        color: #9fa5ac;
      }
    }
  }
  .child{
    li{
      &::after {
        content: "";
        position: absolute;
        bottom: 0.5px;
        left: 28px;
        right: 28px;
        height: 0.5px;
        background: #F5F5F5;
      }
      &:last-child::after {
        display: none;
      }
    }
  }
  .userFeedback-box{
    margin: 0px 0px 10px;
    font-size: 28px;
    font-weight: 400;
    color: #121E2C;
    line-height: 52px;
  }
}
</style>
