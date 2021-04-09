<template>
  <!-- 切换孩子弹层 -->
  <van-popup 
    class="change-child-pop"
    v-model="visible" 
    position="top" 
    :style="{ maxHeight: '80%' }" 
    get-container="body" 
    @closed="closed">
    <h4>切换孩子</h4>
    <ul>
      <li v-for="(item, index) in userInfo.children" :key="index" @click="changeChild(item.userId)">
        <img :src="item.headPic ? item.headPic : stuHeadImg" alt="">
        <span>{{item.userName}}</span>
      </li>
      <li @click="addChild">
        <img :src="addImg" alt="添加">
        <span>添加</span>
      </li>
    </ul>
    <van-icon name="arrow-up" @click="visible=false"/>
  </van-popup>
</template>

<script>
import addImg from '../assets/img/add.png'
import stuHeadImg from '../assets/img/stuHead.png'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      addImg,
      stuHeadImg,
      visible: false
    }
  },
  computed: {
    userInfo () {
      return this.$store.parents.state.userInfo
    }
  },
  watch: {
    show: {
      handler (val) {
        this.visible = val
      }
    }
  },
  methods: {
    addChild () {
      this.$router.push('addChild')
    },
    changeChild (stuId) {
      let params = {
        stuId: stuId,
        unionId: this.userInfo.wechatUnionId
      }
      this.$axios.put('/parents/api/update/parent/bind/status', params)
        .then(data => {
          this.$router.push({query: {}})
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    closed () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/default.less';
.change-child-pop{
  padding: @12px @16px;
  text-align: center;
  h4{
    position: relative;
    margin-bottom: @18px;
    margin-top: @12px;
    font-size: @18px;
    font-weight: 400;
    color: #333333;
    font-family: PingFangSC-Regular, PingFang SC;
    &::before{
      content: "";
      display:inline-block;
      position: relative;
      top: -12px;
      left: -32px;
      width: 40px;
      height: 4.6px;
      background: #D8D8D8;
      border-radius: 1px;
    }
    &::after{
      content: "";
      display:inline-block;
      position: relative;
      top: -12px;
      left: 32px;
      width: 40px;
      height: 4.6px;
      background: #D8D8D8;
      border-radius: 1px;
    }
  }
  ul{
    padding-top: 38px;
    background: rgba(216, 216, 216, 0.2);
    border-radius: 6px;
    overflow: hidden;
    li{
      float: left;
      width: 25%;
      margin-bottom: 47px;
      img{
        width: 103px;
        border-radius: 50%;
      }
      span{
        display: block;
        max-width: 80%;
        margin: 14px auto 0px;
        font-size: 28px;
        font-family: Helvetica;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .van-icon{
    margin-top: @12px;
    font-size: @16px;
    font-weight: bold;
    color: #7560FF;
  }
}
</style>
