<template>
  <!-- loading -->
  <van-overlay class="parents-loading" z-index="100" :show="loading">
    <div class="wrapper">
      <van-loading color="white" size="24px" vertical>
        <span style="color: white;">加载中...</span>
      </van-loading>
    </div>
  </van-overlay>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.parents-loading {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
