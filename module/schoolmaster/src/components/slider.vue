<template>
  <div class="slider">
    <div class="sliderBack">
      <div class="sidlerValue"
           :style="{width: width + '%' }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      width: 0
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.width = this.value
      }
    }
  }
}
</script>
<style lang="less">
.slider {
  width: 100%;
  .sliderBack {
    height: 15px;
    border-radius: 8px;
    width: 100%;
    background: #e7e7e7;
    position: relative;
    .sidlerValue {
      height: 15px;
      border-radius: 8px;
      background: #7560ff;
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      transition: width 1s;
    }
  }
}
</style>
