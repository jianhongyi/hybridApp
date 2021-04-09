<template>
  <!-- video -->
  <div v-if="videoUrl" class="parents-video">
    <video :src="videoUrl" controls="controls" autoplay>
      您的浏览器不支持 video 标签。
    </video>
    <div class="popup-mask" @click="close"></div>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      default: ''
    }
  },
  mounted () {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
  },
  methods: {
    close () {
      this.$emit('update:videoUrl', '')
    }
  },
  destroyed () {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style lang="less" scoped>
.parents-video{
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  video{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 20;
    transform: translate(-50%,-50%);
    max-width: 90%;
  }
  .popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
