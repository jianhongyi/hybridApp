<template>
<!-- 我的页面 -->
  <div class="my-index">
    <div class="top-info">
      <div class="left">
        <h5>{{userInfo.nickname}}</h5>
        <!-- <span v-if="currentBind">{{currentBind.phone}}</span> -->
      </div>
      <div class="right">
        <img :src="userInfo.headImgUrl ? userInfo.headImgUrl : userHeadImg">
      </div>
    </div>
    <ul class="child">
      <li>
        <router-link to="/addChild">
          <img :src="addChildImg">
          <span>添加孩子</span>
          <van-icon name="arrow" />
        </router-link>
      </li>
      <li>
        <router-link to="/childInfo">
          <img :src="childrenInfoImg">
          <span>孩子信息</span>
          <van-icon name="arrow" />
        </router-link>
      </li>
    </ul>
    <ul class="ours">
      <li>
        <router-link to="/aboutOurs">
          <img :src="aboutImg">
          <span>关于我们</span>
          <van-icon name="arrow" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import addChildImg from '../assets/img/addChild.png'
import childrenInfoImg from '../assets/img/childrenInfo.png'
import aboutImg from '../assets/img/about.png'
import userHeadImg from '../assets/img/userHead.png'

export default {
  name: 'aboutOurs',
  data () {
    return {
      addChildImg,
      childrenInfoImg,
      aboutImg,
      userHeadImg
    }
  },
  computed: {
    userInfo () {
      return this.$store.parents.state.userInfo
    },
    currentBind () {
      return this.$store.parents.state.currentBind
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
    padding: 38px 0px;
    overflow: hidden;
    .left{
      float: left;
      margin-top: 30px;
      h5{
        max-width: 430px;
        height: 56px;
        line-height: 55px;
        margin: 12px 0px 20px; 
        font-size: 50px;
        font-family: Helvetica;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      // span{
      //   font-size: 33px;
      //   font-family: PingFangSC-Regular, PingFang SC;
      //   font-weight: 400;
      //   color: #999999;
      //   line-height: 28px;
      // }
    }
    .right{
      float: right;
      width: 129px;
      height: 129px;
      border: 2px solid #FFFFFF;
      overflow: hidden;
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .child, .ours{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    li{
      position: relative;
      height: 140px;
      line-height: 142px;
      padding-left: 33px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      img{
        float: left;
        width: 42px;
        margin-top: 46px;
        margin-right: 28px;
      }
      span{
        font-size: 37px;
        font-weight: 400;
        color: #333333;
        font-family: PingFangSC-Regular, PingFang SC;
      }
      i{
        float: right;
        margin-top: 48px;
        margin-right: 28px;
        font-size: 38px;
        color: #9fa5ac;
      }
    }
  }
  .child{
    li{
      &:first-child::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 100px;
        width: 100%;
        height: 1px;
        background: #F5F5F5;
      }
    }
  }
  .ours{
    margin-top: 38px;
  }
}
</style>