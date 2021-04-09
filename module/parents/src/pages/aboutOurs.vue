<template>
<!-- 关于我们 -->
  <div class="about-ours">
    <img :src="aboutLog" alt="">
    <p>
      DiploTalk是外研在线推出的全新K12英语教育产品，依托北京外国语大学优质教学资源，同步外研在线经典教材，结合独家模型匹配的权威语音评测技术，打造的K12英语教育同步学习工具。
    </p>
  </div>
</template>

<script>
import aboutLog from '../assets/img/aboutLog.png'

export default {
  name: 'situationIndex',
  data () {
    return {
      aboutLog
    }
  }
}
</script>

<style lang="less" scoped>
.about-ours{
  width: 100%;
  height: 100vh;
  padding: 0px 43px;
  overflow: hidden;
  background-color: #ffffff;
  img{
    display: flex;
    margin: 140px auto 50px;
    width: 200px;
    height: 200px;
  }
  p{
    padding: 48px 38px;
    line-height: 70px;
    background: #F6F7FB;
    border-radius: 8px;
    font-size: 38px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #9FA5AC;
  }
}
</style>