<template>
<!-- 学情页面 -->
  <div class="situation-index">
    <!-- 头部数据展示 -->
    <div class="head">
      <h4 @click="addChild">
        {{currentBind ? currentBind.userName : '点击绑定孩子'}}
      </h4>
      <img 
        class="change-child" 
        v-if="currentBind" 
        :src="changeChildImg"
        @click="show=true">
      <img 
        class="head-pic"
        :style="currentBind && currentBind.headPic ? '' : 'border: none;'"
        @click="addChild"
        :src="currentBind && currentBind.headPic ? currentBind.headPic : stuHeadBorderImg">
      <ul>
        <li>
          <h5 v-if="studentData">{{studentData.homeWkCount}}<strong>个</strong></h5>
          <h5 v-else>-</h5>
          <span>完成任务</span>
        </li>
        <li>
          <h5 v-if="studentData">{{studentData.questionCount}}<strong>个</strong></h5>
          <h5 v-else>-</h5>
          <span>做题数</span>
        </li>
        <li>
          <h5 v-if="studentData">{{studentData.studyTime}}<strong>min</strong></h5>
          <h5 v-else>-</h5>
          <span>学习时长</span>
        </li>
      </ul>
      <!-- 切换/添加孩子 -->
      <change-child :show.sync="show"></change-child>
    </div>
    <!-- 学习任务列表 -->
    <div v-if="taskList && taskList.length > 0" class="task-list">
      <div class="title-style">
        <h3>学习任务{{totalSize ? '(' + totalSize + '个)' : ''}}</h3>
        <img class="historical-img" :src="historicalRecordsImg" alt="icon" @click="openHistoryList">
      </div>
      <learn-task-card 
        :taskInfo="taskInfo" 
        v-for="(taskInfo, index) in taskList" 
        :key="index">
      </learn-task-card>
      <p v-if="totalSize && !Vloading" class="more" @click="getList">
        一 {{taskList.length===totalSize ? '没有更多数据了' : '点击加载更多'}} 一
      </p>
      <p v-if="totalSize && Vloading" class="more">一 <van-loading /> 加载中 一</p>
    </div>
    <!-- 优秀配音 -->
    <div v-if="dubList && dubList.length > 0" class="excellent-dub">
      <div class="title-style">
        <h3>优秀配音</h3>
      </div>
      <ul>
        <li v-for="(taskInfo, index) in dubList" :key="index" @click="videoUrl=taskInfo.videoUrl">
          <img :src="taskInfo.coverPic" alt="视频封面">
          <van-icon name="play" />
        </li>
      </ul>
      <video-player v-if="videoUrl" :videoUrl.sync="videoUrl"></video-player>
    </div>
    <!-- 未绑定/暂无数据 -->
    <div v-if="currentBind && (taskList && taskList.length === 0) && (dubList && dubList.length === 0)" class="none-info">
      <div class="none-content">
        <img :src="noneImg">
        <p>暂无数据～</p>
      </div>
    </div>
    <div v-if="!currentBind" class="none-info">
      <div class="none-content">
        <img :src="noneImg">
        <p>绑定孩子后才可以看到孩子学情数据哦～</p>
        <van-button color="#7560FF" @click="addChild">绑定孩子</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import learnTaskCard from '../components/learnTaskCard'
import videoPlayer from '../components/video'
import changeChild from '../components/changeChild'
import changeChildImg from '../assets/img/changeChild.png'
import historicalRecordsImg from '../assets/img/historicalRecords.png'
import stuHeadBorderImg from '../assets/img/stuHeadBorder.png'
import noneImg from '../assets/img/none.png'

export default {
  name: 'situationIndex',
  data () {
    return {
      changeChildImg,
      historicalRecordsImg,
      stuHeadBorderImg,
      noneImg,
      taskList: [],
      dubList: [],
      totalSize: 0,
      pageNum: 1,
      pageSize: 3,
      Vloading: false,
      videoUrl: '',
      show: false
    }
  },
  computed: {
    currentBind () {
      return this.$store.parents.state.currentBind
    },
    studentData () {
      return this.$store.parents.state.studentData
    }
  },
  components: {
    learnTaskCard,
    videoPlayer,
    changeChild
  },
  watch: {
    currentBind: {
      handler (val) {
        if (this.currentBind) {
          this.$store.parents.dispatch('GET_STUDATA', this.currentBind.userId)
          this.getList()
          this.getDubList()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 添加孩子
    addChild () {
      if (!this.currentBind) {
        this.$router.push('addChild')
      }
    },
    // 历史任务list
    openHistoryList () {
      this.$router.push('historyList')
    },
    // 获取任务列表
    getList () {
      if (this.taskList.length === this.totalSize && this.totalSize) {
        return false
      }
      this.pageNum === 1 && this.$store.parents.commit('showLoading')
      this.Vloading = true
      let params = {
        stuId: this.currentBind.userId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      this.$store.parents.dispatch('GET_HOMEWORKLIST', params)
      .then(data => {
        this.pageNum += 1
        this.taskList.push(...data.pageData)
        this.totalSize = Number(data.totalSize)
        this.Vloading = false
        this.$store.parents.commit('hideLoading')
      })
      .catch(() => {
        this.Vloading = false
        this.$store.parents.commit('hideLoading')
      })
    },
    // 获取优秀配音
    getDubList () {
      let params = {
        stuId: this.currentBind.userId,
        pageNum: 1,
        pageSize: 3
      }
      this.$axios.post('/parents/api/query/excellent/dubbing', params)
        .then(data => {
          this.dubList = data.videoInfos
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/default.less';

.situation-index{
  min-height: 100vh;
  padding-bottom: 164px;
  .head{
    overflow: hidden;
    background: url("../assets/img/situationBg.png");
    background-size: 100% auto;
    h4{
      float: left;
      max-width: 60%;
      height: 72px;
      line-height: 72px;
      margin: 72px 26px 0px 44px;
      color: #ffffff;
      font-size: 56px;
      font-family: Helvetica;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .change-child{
      float: left;
      width: 42px;
      margin-top: 90px;
    }
    .head-pic{
      float: right;
      width: 132px;
      height: 132px;
      margin: 42px 44px 0px 0px;
      border: 4px solid #FFFFFF;
      border-radius: 50%;
      overflow: hidden;
    }
    ul{
      height: 169px;
      margin: 207px 42px 0px;
      background: #FFFFFF;
      box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      li{
        float: left;
        width: 33.333%;
        margin: 40px 0px;
        text-align: center;
        border-right: 1px solid rgba(216, 216, 216, 0.4);
        &:last-child{
          border-right: none;
        }
        h5{
          font-size: 43px;
          font-family: PingFangSC-Medium, PingFang SC;
          color: #333333;
          strong{
            font-size: 24px;
          }
        }
        span{
          color: #999999;
          font-size: 26px;
        }
      }
    }
  }
  .task-list{
    position: relative;
    overflow: hidden;
    min-height: @220px;
    margin: 0px @18px;
    .more{
      margin-top: 56px;
      text-align: center;
      font-size: @14px;
      color: #999999;
      .van-loading{
        display: inline;
      }
      .van-loading__spinner{
        width: @16px;
        height: @16px;
      }
    }
  }
  .title-style{
    margin-top: @22px;
    height: @22px;
    line-height: @22px;
    h3{
      position: relative;
      float: left;
      padding-left: 28px;
      line-height: @20px;
      font-size: @18px;
      font-weight: 500;
      &:before{
        content: '';
        position: absolute;
        top: 10%;
        left: 4px;
        width: @4px;
        height: 80%;
        background: #735EFC;
        border-radius: 1px;
      }
    }
    .historical-img{
      float: right;
      width: @22px;
    }
  }
  .excellent-dub{
    position: relative;
    overflow: hidden;
    margin: 0px @18px;
    ul{
      margin: @14px 0px;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        float: left;
        width: 31.3333%;
        min-height: 100px;
        margin-right: 3%;
        overflow: hidden;
        &:last-child{
          margin-right: 0px;
        }
        img{
          width: 100%;
          border-radius: 4px;
        }
        .van-icon{
          position: absolute;
          z-index: 1;
          padding: 8px;
          font-size: @20px;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }
      }
    }
  }
}
.none-info{
  position:relative;
  height: 60vh;
  text-align: center;
  .none-content{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;  
  }
  img{
    width: 336px;
  }
  p{
    width: 700px;
    margin: 50px 0px 62px;
    font-size: 34px;
    color: #7560FF;
  }
  .van-button{
    width: 281px;
    height: 94px;
  }
}
</style>