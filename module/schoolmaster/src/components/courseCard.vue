<template>
  <div class="coruseCard">
    <div class="classIng">
      <div class="title" v-if="type==='1'">开课中班级 {{cardData.classSum}}</div>
      <div class="info marginBottom">
        在班学生<span>{{cardData.stuSum}}</span>
      </div>
      <div class="info marginBottom" v-if="type==='2'">
        布置练习次数<span>{{cardData.homewkCount}}</span>
      </div>
      <div class="info marginBottom">
        学生平均使用时长<span>{{cardData.useTimes|formatTime}}</span>
      </div>
      <div class="flex marginBottom">
        <div class="info">
          平均提交率<span>{{average()}}%</span>
        </div>
        <div class="info">
          环比<span v-if="relative()">{{relative()}}%</span><span v-else>--</span>
           <i class="iconfont iconshang" v-if="relative() > 0"></i>
          <i class="iconfont iconshang down" v-if="relative() < 0"></i>
        </div>
      </div>
      <slider :value='average()'></slider>
    </div>
    <div class="willClass" v-if="type==='1'">
      <div class="title">待开课中班级 {{cardData.waitClassSum}}</div>
      <div class="flex">
        <div class="info">
          新增学生<span>{{cardData.waitStuSum||0}}人</span>
        </div>
        <div class="info">
          环比<span v-if="willRelative()">{{willRelative()}}%</span><span v-else>--</span>
          <i class="iconfont iconshang" v-if="willRelative() > 0"></i>
          <i class="iconfont iconshang down" v-if="willRelative() < 0"></i>
        </div>
      </div>
    </div>
    <div class="moreInfo" @click="goCourseDetail(cardData)" v-if="type==='1'">
      课程数据
      <van-icon name="arrow"
                class="moreIcon" />
    </div>
  </div>
</template>
<script>
import slider from '@/components/slider.vue'

export default {
  name: 'coruseCard',
  props: {
    type: {type: String, default: '1'},
    cardData: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    slider
  },
  filters: {
    formatTime (time) {
      if (!isNaN(Number(time))) {
        let hours = time / 1000 / 60 / 60
        let hoursRound = Math.floor(hours)
        let minutes = time / 1000 / 60 - (60 * hoursRound)
        let minutesRound = Math.floor(minutes)
        return `${hoursRound}时${minutesRound}分`
      }
      return 0
    }
  },
  methods: {
    goCourseDetail (data) {
      const {courseId, courseName, courseCode} = data
      this.$router.push({path: `/courseDetail?id=${courseId}&code=${courseCode}&courseName=${courseName || '课程详情'}`})
    },
    // 平均提交率 （本期总练习提交人数/本期总人数） * 100%
    average (type) {
      const {submitSum, homewkSum} = this.cardData
      if (!homewkSum) return 0
      let num = submitSum / homewkSum * 100
      return type ? num : Number(num.toFixed(2))
    },
    // 上期提交率
    lastAverage (type) {
      const {lastSubmitSum, lastHomewkSum} = this.cardData
      if (!lastHomewkSum) return 0
      let num = lastSubmitSum / lastHomewkSum * 100
      return type ? num : Number(num.toFixed(2))
    },
    // 提交率环比环比 公式：（本期平均提交率-上期平均提交率）/ 上期平均提交率 * 100%
    relative () {
      let average = this.average(true)
      let lastAverage = this.lastAverage(true)
      if (!lastAverage) return 0
      let num = (average - lastAverage) / lastAverage * 100
      return Number(num ? num.toFixed(2) : 0)
    },
    // 待开班学生环比：公式 (本期学生-上期学生)/上期学生 * 100%
    willRelative () {
      const {waitStuSum, waitLastStuSum} = this.cardData
      if (!waitLastStuSum) return 0
      let num = (waitStuSum - waitLastStuSum) / waitLastStuSum * 100
      return Number(num ? num.toFixed(2) : 0)
    }
  }
}
</script>
<style lang="less">
.coruseCard {
  .classIng,
  .willClass {
    background: #f9f9f9;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 28px;
  }
  .willClass {
    margin-top: 28px;
    margin-bottom: 24px;
  }
  .moreInfo {
    background: #fbfbfb;
    border-radius: 8px;
    padding: 28px;
    text-align: center;
    font-weight: 500;
    color: #7560ff;
    font-size: 28px;
    .moreIcon {
      vertical-align: -5px;
    }
  }
  .title {
    font-size: 28px;
    font-weight: 500;
    color: #333333;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .info {
    font-size: 24px;
    font-weight: 400;
    color: #999999;

    span {
      font-size: 24px;
      font-weight: 500;
      color: #7560ff;
      margin-left: 16px;
    }
    i {
      color: rgb(26, 198, 55);
      font-size: 24px;
      margin-left: 11px;
      display: inline-block;
      &.down{
        color: rgb(252, 70, 78);
        transform: rotate(180deg);
      }
    }
  }
  .marginBottom {
    margin-bottom: 22px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>
