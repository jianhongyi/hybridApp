<template>
  <div class="cardTitle">
    <div class="titleLeft">
      <span>{{title}}</span>
      <i class="iconfont iconwenhao"
         @click="noticeVisible = true"
         v-if="notice.length"></i>
      <span class="info"
            v-if="info">{{info}}</span>
      <slot name="other"></slot>
    </div>
    <my-dialog :visible.sync="noticeVisible"
               :showConfirmButton="false"
               cancelButtonText="我知道了"
               v-if="notice.length">
      <div class="userFeedback-box"
           slot="content">
        <p v-for="(item, index) in notice"
           :key="index">
          <span class="title">{{item.title}}</span>
          <span class="info">{{item.info}}</span>
        </p>
      </div>
    </my-dialog>
    <div class="more"
         v-if="showMore"
         @click="more()">
      <span>更多</span>
      <i class="iconfont icongengduo"></i>
    </div>
  </div>
</template>
<script>
import myDialog from '~common/components/myDialog'
export default {
  props: {
    title: { type: String, required: true }, // 标题
    info: { type: String, default: '' }, // 子标题
    showMore: { type: Boolean, default: true }, // 是否展示更多
    notice: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    myDialog
  },
  data () {
    return {
      noticeVisible: false
    }
  },
  methods: {
    more () {
      this.$emit('more')
    }
  }
}
</script>
<style lang="less">
.cardTitle {
  display: flex;
  height: 32px;
  line-height: 32px;
  justify-content: space-between;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    height: 32px;
    width: 8px;
    background: #735efc;
    border-radius: 2px;
  }
  .titleLeft {
    padding-left: 24px;
    line-height: 36px;
    .iconwenhao {
      font-size:36px;
      color: #7560ff;
      margin: 0 10px;
    }
    span {
      font-size: 36px;
      color: #333333;
      font-weight: bold;
    }
    .info {
      font-size: 24px;
      font-weight: 400;
      color: #999999;
      margin-left: 16px;
    }
  }
  .more {
    font-size: 28px;
    color: #7560ff;
    font-weight: bold;
    span {
      margin-right: -10px;
    }
  }
  .userFeedback-box {
    text-align: left;
    p{
      line-height: 36px;
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 20px;
      }
    }
    .title {
      font-weight: bold;
      color: #121e2c;
      font-size: 28px;
    }
  }
}
</style>