<template>
  <div class="numberCard" :style="{backgroundImage: 'url(' + (type === '1' ? icon.blue : icon.yellow) + ')' }" @click="goCountList">
    <div class="title" >
      较上日
      <span v-if="type === '1'">{{formartNum(homewk)}}</span>
      <span v-else>{{formartNum(subm)}}</span>
      <i v-if="homewk || subm" :class="`iconfont iconshang ${type === '1' ? (homewk <0 ? 'tdown':'') : (subm<0 ? 'tdown':'')}`"></i>
    </div>
    <div class="num" v-if="type === '1'">{{formartNum(data.homewkTotal, true)}}</div>
    <div class="num" v-else>{{formartNum(data.submitSumTotal, true)}}</div>
    <div class="text">{{type==='1'?'累计布置练习次数':'累计学员提交次数'}}</div>
  </div>
</template>
<script>
import yellow from '@/assets/img/yellow.png'
import blue from '@/assets/img/blue.png'
import { formartNum } from '@/assets/js/utils.js'

export default {
  props: {
    type: {type: String, default: '1'},
    data: {
      type: Object, default: () => {}
    }
  },
  data () {
    return {
      icon: {
        yellow,
        blue
      }
    }
  },
  computed: {
    homewk () {
      return this.data.homewkTotal - this.data.homewkSum
    },
    subm () {
      return this.data.submitSumTotal - this.data.submitSum
    }
  },
  methods: {
    formartNum,
    goCountList () {
      this.$router.push({path: `/countList?type=${this.type}`})
    }
  }
}
</script>
<style lang="less">
.numberCard{
  width: 323px;
  height: 174px;
  text-align: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 8px;
  .title{
    display: inline-block;
    background: rgba(255,255,255, 0.15);
    color: #fff;
    font-size: 24px;
    line-height: 29px;
    margin: 24px auto 14px;
    border-radius: 29px;
    padding: 4px 14px;
    i{
      font-size: 24px;
      display: inline-block;
      &.tdown{
        transform: rotate(180deg);
      }
    }
  }
  .num{
    font-size: 40px;
    color: #fff;
    line-height: 40px;
    margin-bottom: 19px;
  }
  .text{
    font-size: 22px;
    color: #fff;
    line-height: 24px;
  }
}

</style>
