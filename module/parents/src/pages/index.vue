<template>
<!-- 首页 -->
  <div class="parents-client">
    <router-view v-show="userInfo.wechatUnionId && !LOADING"></router-view>
    <van-empty
      v-if="!userInfo.wechatUnionId && !LOADING"
      class="custom-image"
      description="暂无数据～"
    />
    <van-tabbar route>
      <van-tabbar-item replace to="/situation" name="situation">
        <span>学情</span>
        <template #icon="props">
          <img :src="props.active ? icon.situationActive : icon.situation" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.myActive : icon.my" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import situationActive from '../assets/img/situationActive.png'
import situation from '../assets/img/situation.png'
import myActive from '../assets/img/myActive.png'
import my from '../assets/img/my.png'

export default {
  data () {
    return {
      active: 'situation',
      icon: {
        situationActive,
        situation,
        myActive,
        my
      }
    }
  },
  computed: {
    LOADING () {
      return this.$store.parents.state.LOADING
    },
    userInfo () {
      return this.$store.parents.state.userInfo
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
</style>