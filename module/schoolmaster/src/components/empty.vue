<template>
  <div :class="`nothingCard ${empty.place||''} ${empty.position||''}`">
    <img class="nothingImg"
         :src="empty.img || nothing"
         alt=""
         srcset="">
    <div class="nothingNotice" v-if="empty.notice">{{empty.notice}}</div>
    <div class="nothingInfo" v-if="empty.info">{{empty.info}}</div>
    <slot></slot>
  </div>
</template>
<script>
import nothing from '@/assets/img/nothing3@2x.png'
export default {
  name: 'empty',
  props: {
    empty: { // 空状态
      type: Object,
      default: () => ({
        img: nothing,
        notice: '暂无数据',
        info: '暂无教师教学数据',
        place: 'top',
        position: 'relative'
      })
    }
  },
  data () {
    return {
      nothing
    }
  }
}
</script>
<style lang="less">
.nothingCard {
  width: 100%;
  height: 450px;
  background: #f6f7fb;
  overflow: hidden;
  left: 0;
  top: 0;
  &.relative{
    position: relative;
  }
  &.absolute{
    position: absolute;
  }
  &.fixed{
    position: fixed;
  }
  &.center {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    .nothingImg {
      margin-top: 370px;
      margin-bottom: 64px;
    }
  }
  .nothingImg {
    height: 180px;
    width: 286px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 34px;
    display: block;
    font-weight: bold;
  }
  .nothingNotice {
    text-align: center;
    font-size: 30px;
    color: #7560ff;
    margin-bottom: 28px;
  }
  .nothingInfo {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: #7560ff;
  }
}
</style>