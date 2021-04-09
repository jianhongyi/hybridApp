<template>
<!-- 首页 -->
  <div class="parents-client">
    <router-view v-show="userInfo.userId && !LOADING"></router-view>
    <van-tabbar v-show="userInfo.userId && !LOADING" route>
      <van-tabbar-item replace to="/dataIndex" name="dataIndex">
        <span>数据</span>
        <template #icon="props">
          <img :src="props.active ? icon.dataIndexActive : icon.dataIndex" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.myActive : icon.my" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <van-empty
      v-if="!userInfo.userId && !LOADING"
      class="custom-image"
      description="暂无数据～"
    />
  </div>
</template>

<script>
import dataIndexActive from '../assets/img/situationActive.png'
import dataIndex from '../assets/img/situation.png'
import myActive from '../assets/img/myActive.png'
import my from '../assets/img/my.png'

export default {
  data () {
    return {
      active: 'dataIndex',
      icon: {
        dataIndexActive,
        dataIndex,
        myActive,
        my
      }
    }
  },
  computed: {
    LOADING () {
      return this.$store.schoolmaster.state.LOADING
    },
    userInfo () {
      return this.$store.schoolmaster.state.userInfo
    }
  }
}
</script>

<style lang="less" scoped>
.parents-client{
  min-height: 100%;
  .van-tabbar-item--active {
    color: #7560FF;
  }
}
/deep/.custom-image {
  height: 80vh;
  .van-empty__image {
    width: 336px;
    height: auto;
  }
}
.van-tabbar--fixed{
  z-index: 1000;
  position: absolute;
}
</style>
