<template>
  <div class="courseDataCard">
    <div class="infoTitle">
      <div class="title">{{cardData.className}}</div>
      <div class="teacher">{{cardData.tchName}}</div>
      <div v-html="classStatus(cardData.classStatus)"></div>
    </div>
    <div class="infoList">
      <div class="info">
        <span class="blue">{{toFixed(cardData.submitSumRate * 100)}}%</span>
        <div>平均提交率</div>
      </div>
      <div class="info">
        <span>{{cardData.homewkSum}}</span>
        <div>布置练习次数</div>
      </div>
      <div class="info">
        <span>{{cardData.stuSum}}</span>
        <div>在班学生</div>
      </div>
      <div class="info">
        <span>{{toFixed(cardData.avgScore)}}</span>
        <div>平均分</div>
      </div>
    </div>
  </div>
</template>
<script>
import {toFixed} from '@/assets/js/utils.js'
export default {
  name: 'courseDataCard',
  props: {
    cardData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    toFixed,
    classStatus (type) {
      switch (`${type}`) {
        case '0':
          return '<div class="status willOpen">待开课</div>'
        case '1':
          return '<div class="status">开课中</div>'
        case '2':
          return '<div class="status end">已结课</div>'
        default:
          return '<div class="status">开课中</div>'
      }
    }
  }
}
</script>
<style lang="less">
.courseDataCard {
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 28px;
  padding: 36px 24px;
  box-sizing: border-box;
  .infoTitle {
    padding-bottom:36px;
    position: relative;
    border-bottom: 1px solid #ebebeb;
    .status {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px 10px 6px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      color: #fff;
      background: #7560ff;
      font-size: 24px;
      line-height: 24px;
      &.willOpen {
        background: #ff6000;
      }
      &.end {
        background: #d1d1d1;
      }
    }
    .title {
      font-size: 30px;
      color: #333333;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .teacher {
      font-size: 28px;
      font-weight: 400;
      color: #333333;
    }
  }
  .infoList {
    padding-top: 36px;
    display: flex;
    .info {
      flex: 1;
      text-align: center;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 12px;
        width: 1px;
        height: 26px;
        background: #ebebeb;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
      span {
        font-size: 36px;
        color: #333333;
        &.blue {
          color: #7560ff;
        }
      }
      div {
        margin-top: 14px;
        text-align: center;
        font-size: 22px;
        color: #999;
      }
    }
  }
}
</style>
