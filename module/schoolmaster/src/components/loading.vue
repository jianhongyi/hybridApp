<template>
  <!-- loading -->
  <div>
    <slot></slot>
    <van-overlay class="schoolmaster-loading"
                 z-index="100"
                 :show="loading">
      <div :class="place === 'center' ? 'wrapper' : 'top'"
           :show="loading">
        <van-loading color="#7560ff"
                     type="spinner"
                     size="24px"
                     vertical>
          <span style="color: white;">加载中...</span>
        </van-loading>
      </div>
    </van-overlay>
  </div>

</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    place: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang="less" scoped>
.van-overlay {
  background-color: rgba(255, 255, 255, 0.8);
}
.schoolmaster-loading {
  position: absolute;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .top {
    display: flex;
    align-items: start;
    justify-content: center;
    height: 100%;
    padding-top: 100px;
  }
}
</style>
