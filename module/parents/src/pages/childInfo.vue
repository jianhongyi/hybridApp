<template>
<!-- 孩子信息 -->
  <div class="child-info">
    <div class="child-info-content" v-if="currentBind">
      <ul>
        <li>
          <span class="label">头像</span>
          <img :src="currentBind.headPic ? currentBind.headPic : stuHeadImg" alt="">
        </li>
        <li>
          <span class="label">姓名</span>
          <span>{{currentBind.userName}}</span>
        </li>
        <li>
          <span class="label">手机号</span>
          <span>{{currentBind.phone}}</span>
        </li>
        <li>
          <span class="label">所在机构</span>
          <span>{{currentBind.orgName}}</span>
        </li>
        <li>
          <span class="label">班级名称</span>
          <span>{{currentBind.className}}</span>
        </li>
        <li>
          <span class="label">任教老师</span>
          <span>{{currentBind.tchName}}</span>
        </li>
        <li>
          <span class="label">所报学科</span>
          <span>英语</span>
        </li>
      </ul>
      <van-button 
        color="#7560FF" 
        plain 
        block 
        size="large" 
        @click="visible = true">
        解除绑定
      </van-button>
    </div>
    <div class="child-info-none" v-else>
      <div style="margin-top: -120px;">
        <img :src="infoNoneImg" alt="暂无信息">
        <p>您还没有绑定孩子哦～</p> 
      </div>
      <van-button color="#7560FF" block size="large" @click="bind">绑定孩子</van-button>
    </div>
    <unbundling @relieve="relieve" :visible.sync="visible"></unbundling>
  </div>
</template>

<script>
import unbundling from '../components/unbundling'
import infoNoneImg from '../assets/img/infoNone.png'
import stuHeadImg from '../assets/img/stuHead.png'

export default {
  name: 'childInfo',
  data () {
    return {
      infoNoneImg,
      stuHeadImg,
      visible: false
    }
  },
  computed: {
    currentBind () {
      return this.$store.parents.state.currentBind
    },
    userInfo () {
      return this.$store.parents.state.userInfo
    }
  },
  components: {
    unbundling
  },
  methods: {
    // 解除绑定
    relieve () {
      let params = {
        stuId: this.currentBind.userId,
        unionId: this.userInfo.wechatUnionId,
        bindStatus: 0
      }
      this.$axios.put('/parents/api/bind/parent/info/update', params)
        .then(data => {
          this.$router.push('situation')
          window.location.reload()
          this.$notify({ type: 'success', message: '解绑成功！' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 绑定孩子
    bind () {
      this.$router.push('addChild')
    }
  }
}
</script>

<style lang="less" scoped>
.child-info{
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  padding: 0px 43px;
  .child-info-content, .child-info-none{
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 48px 0px;
  }
  ul{
    font-size:38px;
    li{
      width: 100%;
      height: 148px;
      line-height: 150px;
      overflow: hidden;
      border-bottom: 1px solid #F5F5F5;
      span{
        float: right;
        max-width: 50%;
        color: #888888;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .label{
        float: left;
        color: #333333;
      }
      img{
        float: right;
        width: 118px;
        height: 118px;
        border-radius: 50%;
      }
    }
  }
  .van-button{
    position: absolute;
    bottom: 74px;
  }
  .child-info-none{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 300px;
    }
    p{
      margin-top: 50px;
      font-size:34px;
      color: #7560FF;
    }
  }
}
</style>