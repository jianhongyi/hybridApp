<template>
  <!-- 任务详情 -->
  <div>
    <div class="task-details" v-if="taskData">
      <div v-if="isFiveStars || isGoodVideo || isThreeGood" class="billboard">
        <div class="title-style">
          <h3>获得表扬</h3>
        </div>
        <ul>
          <li>
            <img :src="isFiveStars ? fiveStarsActiveImg : fiveStarsImg" alt="五星选手"/>
            <span :style="{ color: isFiveStars ? '#D59D27' : '#A9A9A9' }">五星选手</span>
          </li>
          <li>
            <img :src="isGoodVideo ? goodVideoActiveImg : goodVideoImg" alt="优秀配音" />
            <span :style="{ color: isGoodVideo ? '#516FD8' : '#A9A9A9' }">优秀配音</span>
          </li>
          <li>
            <img :src="isThreeGood ? threeGoodActiveImg : threeGoodImg" alt="三好学生" />
            <span :style="{ color: isThreeGood ? '#19B6A4' : '#A9A9A9' }">三好学生</span>
          </li>
        </ul>
      </div>

      <div v-if="taskData.videoInfos && taskData.videoInfos.length > 0" class="task-content">
        <div class="title-style">
          <h3>练习详情</h3>
        </div>
        <div class="good-video">
          <h4>优秀配音</h4>
          <ul>
            <li v-for="(item, index) in taskData.videoInfos" :key="index">
              <div class="left">
                <audioPlayer class="horn-img" :url="item.audioUrl"></audioPlayer>
                <p>{{ item.content }}</p>
                <em>{{ item.categoryName }}</em>
              </div>
              <div class="right">
                <i>我的录音</i>
                <audioPlayer
                  class="microphone-img"
                  :icon="microphoneImg"
                  :url="item.stuUri">
                </audioPlayer>
                <div class="star-img">
                  <img
                    v-for="item in starNumber(item.score)"
                    :key="item"
                    :src="starImg"
                    alt="星"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-else-if="!LOADING && !isFiveStars && !isGoodVideo && !isThreeGood">
        <no-data
          class="custom-image"
          description="暂无可展示数据～"
        />
      </div>
    </div>
    <div v-else-if="!LOADING">
      <no-data
        class="custom-image"
        description="未获取到数据～"
      />
    </div>
  </div>
</template>

<script>
import noData from '~common/components/noData'
import audioPlayer from '../components/audio'
import fiveStarsImg from '../assets/img/fiveStars.png'
import fiveStarsActiveImg from '../assets/img/fiveStarsActive.png'
import goodVideoImg from '../assets/img/goodVideo.png'
import goodVideoActiveImg from '../assets/img/goodVideoActive.png'
import threeGoodImg from '../assets/img/threeGood.png'
import threeGoodActiveImg from '../assets/img/threeGoodActive.png'
import hornImg from '../assets/img/horn.png'
import microphoneImg from '../assets/img/Microphone.png'
import starImg from '../assets/img/star.png'

export default {
  name: 'taskDetails',
  data () {
    return {
      taskData: null,
      fiveStarsImg,
      fiveStarsActiveImg,
      goodVideoImg,
      goodVideoActiveImg,
      threeGoodImg,
      threeGoodActiveImg,
      hornImg,
      microphoneImg,
      starImg
    }
  },
  components: {
    audioPlayer,
    noData
  },
  computed: {
    LOADING () {
      return this.$store.parents.state.LOADING
    },
    currentBind () {
      return this.$store.parents.state.currentBind
    },
    studentData () {
      return this.$store.parents.state.studentData
    },
    isFiveStars () {
      return this.starNumber(this.taskData.homewkScore) === 5
    },
    isGoodVideo () {
      let videoList = this.taskData.videoInfos
      return videoList && videoList.length > 0 && videoList[0].score >= 70
    },
    isThreeGood () {
      let time =
        Date.parse(this.taskData.endTime) >=
        Date.parse(this.taskData.updateTime)
      return time && this.taskData.homewkScore >= 60
    }
  },
  watch: {
    currentBind: {
      handler (val) {
        if (this.currentBind) {
          this.getData()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 获取数据
    getData () {
      this.$store.parents.commit('showLoading')
      let params = {
        stuId: this.currentBind.userId,
        homewkId: this.$route.query.id
      }
      this.$axios
        .post('/parents/api/query/homewk/excellent/dubbing', params)
        .then((data) => {
          this.taskData = data
          this.$store.parents.commit('hideLoading')
        })
        .catch((err) => {
          console.log(err)
          this.$store.parents.commit('hideLoading')
        })
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
@import "../assets/style/default.less";

.task-details {
  position: relative;
  overflow: hidden;
  min-height: @220px;
  margin: 0px @18px;
  padding: 0px 0px @18px;
  .billboard {
    ul {
      width: 100%;
      padding: @16px 0px;
      margin-top: @14px;
      background: #ffffff;
      box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      overflow: hidden;
      li {
        float: left;
        width: 33.33%;
        text-align: center;
        img {
          width: 56%;
        }
        span {
          display: block;
          margin: @4px 0px;
          font-size: @14px;
        }
      }
    }
  }
  .task-content {
    overflow: hidden;
    .good-video {
      width: 100%;
      padding: @16px @14px;
      margin-top: @14px;
      background: #ffffff;
      box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      overflow: hidden;
      h4 {
        position: relative;
        margin-bottom: @8px;
        font-size: @16px;
        &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          width: 150px;
          height: @8px;
          background: #a89bff;
          opacity: 0.3;
        }
      }
      ul {
        li {
          padding: @20px 0px;
          overflow: hidden;
          border-bottom: 1px solid rgba(216, 216, 216, 0.4);
          &:last-child {
            border-bottom: none;
          }
          .left {
            float: left;
            width: 65%;
            .horn-img {
              position: relative;
              top: 8px;
              float: left;
              width: @20px;
              margin-right: @6px;
            }
            p{
              float: left;
              width: 80%;
              margin-bottom: @10px;
              font-size: @16px;
            }
            em{
              clear: both;
              display: block;
              margin-left: 58px;
              font-style: normal;
              font-size: @13px;
              color: #8E8E9F;
            }
          }
          .right {
            float: right;
            width: 30%;
            .microphone-img {
              float: right;
              width: @20px;
              margin-right: @4px;
            }
            i {
              float: right;
              line-height: @20px;
              font-size: @12px;
              font-style: normal;
              color: #5c6ee0;
            }
            .star-img {
              float: right;
              width: 100%;
              overflow: hidden;
              margin-top: @13px;
              img{
                float: right;
                width: @12px;
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }
}
.title-style {
  margin-top: @25px;
  height: @22px;
  line-height: @22px;
  h3 {
    position: relative;
    float: left;
    padding-left: 28px;
    line-height: @20px;
    font-size: @18px;
    font-family: Helvetica;
    font-weight: 500;
    &:before {
      content: "";
      position: absolute;
      top: 10%;
      left: 4px;
      width: @4px;
      height: 80%;
      background: #735efc;
      border-radius: 1px;
    }
  }
}

/deep/.custom-image {
  height: 80vh;
}
</style>
