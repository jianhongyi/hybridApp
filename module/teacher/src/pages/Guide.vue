<template>
  <section class="guide-container">
    <section class="guide-card">
      <section class="font">
        <p class="title">新手必看</p>
        <p class="description">一分钟了解外研趣学</p>
      </section>
      <Player
        :coverPic="coverPic"
        url="https://admin.diplotalk.unischool.cn/static-video/guide.mp4"/>
    </section>
  </section>
</template>
<script>
  import Player from '../../../../common/components/VideoPlayer'
  import coverPic from '../assets/img/guide.png'
  export default {
    name: 'Guide',
    components: {
      Player
    },
    data () {
      return {
        coverPic
      }
    }
  }
</script>
<style lang="less" scoped>
  .guide-container {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    padding: 58px 30px 0 34px;
    overflow-x: hidden;
    background: white url('../assets/img/decoration.png') no-repeat top left / 100% 19%;

    .guide-card {
      height: 578px;
      padding: 40px 40px 60px;
      background-color: white;
      border-radius: 14px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.05);
    }

    .font {
      margin-bottom: 40px;

      .title {
        height: 48px;
        line-height: 48px;
        padding-left: 14px;
        margin-bottom: 20px;
        font-size: 40px;
        color: #21001C;
        font-weight: bold;
      }

      .description {
        height: 30px;
        line-height: 30px;
        font-size: 28px;
        color: #A0A5AB;
        font-weight: bold;
      }
    }
  }
</style>
