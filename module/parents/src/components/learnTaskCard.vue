<template>
  <!-- 学习任务卡片 已完成 未开始 进行中-->
  <section class="learn-task-card">
    <div v-if="taskInfo.completeStatus === 0" class="status-icon not-started-icon">
      未开始
    </div>
    <div v-if="taskInfo.completeStatus === 1 || taskInfo.completeStatus === 2" class="status-icon doing-icon">
      进行中
    </div>

    <div class="task-card-top">
      <img class="task-icon" :src="task" alt="icon">
      <div style="width:50%; overflow:hidden; padding-top:2px;">
        <h4>{{taskInfo.homewkName}}</h4>
        <em v-if="taskInfo.completeStatus === 4">完成时间：{{timeDate(taskInfo.updateTime)}}</em>
        <em v-else>{{isTimeout ? '补交' : '截止'}}时间：{{timeDate(endTime)}}</em>
      </div>
      <van-button 
        v-if="taskInfo.completeStatus === 4"
        color="#7560FF" 
        size="mini" 
        @click="openTaskDetails(taskInfo.homewkId)">
        查看详情
      </van-button>
    </div>

    <div class="task-card-data">
      <!-- 已完成 -->
      <ul class="finish" v-if="taskInfo.completeStatus === 4">
        <li>
          <span>孩子获得星级</span>
          <span>班级平均星级</span>
        </li>
        <li>
          <span>
            {{starNumber(taskInfo.score)}}
            <van-icon name="star" />
          </span>
          <span>
            {{starNumber(taskInfo.avgScore)}}
            <van-icon name="star" />
          </span>
        </li>
        <li>
          <p>{{ rate + '%' }}</p>
          <van-circle 
          v-model="rateValue"
           :rate="10" 
           :speed="100" 
           text="超过同学"
           color="#7560FF"
           layer-color="#DAD5FA"
           stroke-linecap="butt"
           stroke-width="90"
           :size="circleSize" />
        </li>
      </ul>
      <!-- 未开始 -->
      <div class="notStarted" v-if="taskInfo.completeStatus === 0">
        <p>学习任务已布置，请提醒孩子按时完成学习任务</p>
      </div>
      <!-- 进行中 -->
      <div class="doing" v-if="taskInfo.completeStatus === 1 || taskInfo.completeStatus === 2">
        <div style="overflow: hidden;">
          <h4>学习任务完成进度</h4>
          <h5>{{progress}}%</h5>
        </div>
        <van-progress 
          :percentage="progress" 
          color="#7560FF" 
          track-color="#DCD8FA" 
          stroke-width="5" 
          :show-pivot="false"/>
          <p>距离{{isTimeout ? '补交' : '截止'}}时间还有{{time}}，请督促孩子按时完成</p>
      </div>
    </div>
  </section>
</template>

<script>
import { timeFormat } from '~common/assets/js/util.js'
import task from '../assets/img/task.png'
export default {
  name: 'learnTaskCard',
  data () {
    return {
      task,
      rateValue: 0,
      circleSize: '59px'
    }
  },
  props: {
    taskInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    // 已完成 超过同学百分数 通过排名和总人数计算
    rate () {
      this.rateValue = Math.round(((this.taskInfo.stuCount - this.taskInfo.stuSort) / this.taskInfo.stuCount) * 100)
      return this.rateValue
    },
    // 进行中 完成进度
    progress () {
      return Math.round((this.taskInfo.finishCount / this.taskInfo.questionCount) * 100)
    },
    // 是否为补交
    isTimeout () {
      const endTime = this.taskInfo.endTime
      const currentTime = this.taskInfo.currentTime
      const restSec = endTime - currentTime
      return restSec < 0
    },
    endTime () {
      let endTime = this.taskInfo.endTime
      if (this.isTimeout) endTime = Number(endTime) + 14 * 60 * 60 * 24 * 1000
      return endTime
    },
    // 距离截止时间计算
    time () {
      const currentTime = this.taskInfo.currentTime
      const restSec = this.endTime - currentTime
      const day = parseInt(restSec / (60 * 60 * 24 * 1000))
      const hour = parseInt(restSec / (60 * 60 * 1000) % 24)
      const min = parseInt(restSec / (60 * 1000) % 60)
      const sec = parseInt(restSec / 1000 % 60)
      if (day) {
        return day + '天'
      } else if (hour) {
        return hour + '小时'
      } else if (min) {
        return min + '分钟'
      } else if (sec) {
        return sec + '秒'
      }
    }
  },
  mounted () {
    // 计算进度条宽度
    let htmlFontSize = getComputedStyle(window.document.documentElement)['font-size']
    this.circleSize = Number(htmlFontSize.replace('px', '')) * 3.6875 + 'px'
  },
  methods: {
    // 时间格式转换 date时间戳
    timeDate (date) {
      return timeFormat(new Date(date), 'MM-dd hh:mm')
    },
    // 查看详情
    openTaskDetails (id) {
      this.$router.push({path: '/taskDetails', query: {id}})
    },
    // 星级判断
    starNumber (score) {
      score = score ? Number(score) : 0
      if (score < 30) {
        return 1
      } else if (score < 45) {
        return 2
      } else if (score < 60) {
        return 3
      } else if (score < 80) {
        return 4
      } else {
        return 5
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/default.less';

.learn-task-card{
  position: relative;
  margin-top: 33px;
  padding: 33px;
  background: #FFFFFF;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  .status-icon{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 108px;
    line-height: 52px;
    text-align: center;
    background: #D1D1D1;
    border-radius: 0px 8px 0px 8px;
    font-size: @12px;
    color: #ffffff;
  }
  .doing-icon{
    background: #FFA860;
  }
  .task-card-top{
    position: relative;
    margin-bottom: 42px;
    padding-bottom: @12px;
    overflow: hidden;
    border-bottom: 1px solid #E9E9E9;
    .task-icon{
      float: left;
      width: 85px;
      margin-right: @12px;
    }
    h4{
      float: left;
      width: 100%;
      line-height: 46px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 38px;
      font-family: Helvetica;
      color: #333333;
    }
    em{
      float: left;
      font-style: normal;
      font-size: @12px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #999999;
    }
    .van-button{
      position: absolute;
      top: 8px;
      right: 0px;
      width: 172px;
      height: 66px;
    }
  }
  .task-card-data{
    .finish{
      background-color: #FAF9FF;
      border: 1px solid #DED9FF;
      border-radius: 4px;
      overflow: hidden;
      li{
        float: left;
        width: 40.3%;
        border-right: 1px solid #DED9FF;
        text-align: center;
        span{
          display: inline-block;
          width: 100%;
          line-height: 101px;
          font-size: @12px;
          &:first-child{
            border-bottom: 1px solid #DED9FF;
          }
        }
        &:first-child{
          width: 31.5%;
          background-color: #F4F2FF;
        }
        &:last-child{
          position: relative;
          width: 28.2%;
          border-right: none;
          padding-top: 38px;
          p{
            position: absolute;
            top: 76px;
            width: 100%;
            font-size: 34px;
            font-weight: bold;
            color: #7560FF;
          }
          /deep/.van-circle__text{
            top: 50%;
            margin-top: 25px;
            font-size: 20px;
            color: rgba(68, 68, 68, 0.4);
          }
        }
        .van-icon-star{
          position: relative;
          top: 3px;
          font-size: 32px;
          color: #FFCD43;
        }
      }
    }
    .notStarted{
      width: 100%;
      padding: 0px @12px;
      background: @lavender;
      border-radius: 4px;
      p{
        width: 100%;
        line-height: 85px;
        font-size: @12px;
        color: @purple;
      }
    }
    .doing{
      width: 100%;
      padding: @12px;
      background: @lavender;
      border-radius: 4px;
      h4{
        float: left;
        font-size: @12px;
        font-family: Helvetica;
        color: @defaultColor;
      }
      h5{
        float: right;
        font-size: @12px;
        font-family: Helvetica;
        color: @defaultColor;
      }
      .van-progress{
        clear: both;
        margin: @10px 0px;
      }
      p{
        font-size: @12px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: @purple;
      }
    }
  }
}
</style>
