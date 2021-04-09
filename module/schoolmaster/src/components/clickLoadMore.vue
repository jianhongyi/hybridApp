<template>
  <div>
    <slot></slot>
    <div class="loadMore">
      <div class="more"
            v-if="laoding===0"
            @click="clickMore">- 点击加载更多 -</div>
      <div class="loading" v-if="laoding===1">
        <van-loading size="20px">正在加载...</van-loading>
      </div>
      <div class="noMoreData" v-if="laoding===2">- 无更多数据 -</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    laoding: {
      type: Number,
      default: 0 // 0 加载更多 1 正在加载 2 无更多数据或结束 3 不展示
    }
  },
  methods: {
    clickMore () {
      this.$emit('loadMore')
    }
  }
}
</script>

<style lang="less">
.loadMore {
  .more,
  .loading, .noMoreData {
    height: 100px;
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    color: #888;
  }
  .loading {
    opacity: 0.8;
  }
  .noMoreData{
    opacity: 0.5;
  }
}
</style>