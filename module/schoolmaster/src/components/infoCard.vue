<template>
  <div class="infoCard" @click="click">
    <div class="img">
      <img :src="data.img"
           alt=""
           srcset="">
    </div>
    <div class="infomation">
      <div class="title">{{data.title}}</div>
      <slot name="info"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'infoCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less">
.infoCard {
  display: flex;
  box-sizing: border-box;
  padding: 30px 0;
  border-bottom: 1px solid #E9E9E9;
  &:last-child{
    border: none;
  }
  .img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 30px;
    img {
      width: 100%;
    }
  }
  .infomation {
    flex: 1;
    .title {
      font-size: 32px;
      color: #333333;
      margin-bottom: 16px;
      font-weight: bold;
    }
  }
}
</style>
