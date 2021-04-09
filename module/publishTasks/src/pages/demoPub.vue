<!-- 布置练习明细 -->
<template>
  <div class="assign-detail-wrapper">
        <div class="top-slide bar-fixed">
          <queens-nav-bar title="题目与解析" left-arrow @click-left="onClickLeft" />
          <queens-ques-switcher v-show="isOneMore" ref="ques-switcher" :question-infos="questionInfos" :active-index="activedIndex" @click="clickHandler" class="switcher-style"/>
        </div>
        <template v-if="groupInfo.questionResponses && groupInfo.questionResponses.length" >
          <swiper class="box-container" :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(quesData, index) in groupInfo.questionResponses" :key="index" class="slide-container">
                  <queens-question ref="queens" :ques-data="quesData" :preview="false" :show-answer="false" :class="hasData ? 'question-style' : ''" :main-area-style="mainAreaStyle">
                      <div slot="footer" :class="quesData.page ? 'footer-area' : ''">
                          <div v-if="quesData.page" class="resource">
                              <span class="resource-text">知识点来源</span>
                              <span class="resource-content">{{ quesData.page }}</span>
                          </div>
                          <!-- <div v-if="quesData.explain && quesData.explain.content" class="explain">
                              <span class="explain-text">解析</span>
                              <span class="explain-content" v-html="quesData.explain.content" />
                          </div> -->
                      </div>
                  </queens-question>
              </swiper-slide>
          </swiper>
          <queens-answer :body="quesDataIndex.body" :options="quesDataIndex.options" :answers="quesDataIndex.answers" :explain="quesDataIndex.explain" :template-type="quesDataIndex.templateType" @ans-touch="ansTouch" class="self-answer"/>
        </template>
        <template v-else-if="!loading">
          <div class="no-data-area">
            <img src="@/assets/img/tip_practice@3x.png" alt="none" />
            <p>加载任务出现异常，请重试</p>
            <queens-button plain round type="primary" size="small" @click="reload">
              重新加载
            </queens-button>
          </div>
        </template>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { getHeight } from '../utils'
import { returnBack, showLoading, hideLoading, getRequest } from '../utils/client'
// import * as mockData from '../mockData/mockData.js'
export default {
  //  import所引入的组件注册
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      // mockData,
      // 加载状态
      loading: false,
      // 返回的数据
      groupInfo: {},
      // 所有题目集合
      groupQuestions: [],
      // 所有题目信息，用于题目切换选择器
      questionInfos: [],
      // 单个题目数据
      quesData: {},
      // 是否显示结果，用户查看作答结果
      preview: false,
      // 是否显示答案
      showAnswer: false,
      // 请求参数
      getQuesParams: {
        batchNum: -1,
        nextQuestion: 1
      },
      // 所有的音频
      audios: [],
      activedIndex: 0,
      swiperOption: {
        on: {
          slideChange: (e) => {
            this.activedIndex = e.activeIndex
            this.$refs['ques-switcher'].caculatePosition(this.activedIndex)
            this.pauseAllAudio()
          }
        }
      },
      mainAreaStyle: {
        margin: '6px 20px 20px',
        height: '100%',
        'overflow-y': scroll,
        'overflow-x': 'hidden'
      }
    }
  },
  computed: {
    hasData () {
      return this.quesData && Object.keys(this.quesData).length
    },
    mySwiper () {
      return this.$refs.mySwiper.$swiper
    },
    isOneMore () {
      return this.questionInfos.length > 1
    },
    quesDataIndex () {
      return this.groupInfo.questionResponses[this.activedIndex]
    }
  },
  watch: {
    loading (val) {
      if (val) {
        showLoading('加载中，请耐心等待')
      } else {
        hideLoading()
      }
    }
  },
  created () {
    this.loading = true
    this.getGroupQuestions()
  },
  mounted () {},
  beforeDestroy () {
    this.loading = null
    this.groupInfo = null
    this.groupQuestions = null
    this.questionInfos = null
    this.quesData = null
    this.preview = null
    this.showAnswer = null
    this.getQuesParams = null
  },
  methods: {
    // 暂停所有音频
    pauseAllAudio () {
      let audios = []
      if (!this.audios.length) {
        audios = this.audios = document.querySelectorAll('audio')
      } else {
        audios = this.audios
      }
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause()
      }
    },
    // 页面刷新
    reload () {
      window.location.reload()
    },
    // 左侧按钮点击事件
    onClickLeft () {
      returnBack()
    },
    // 点击操作
    clickHandler (item, index, preIndex) {
      this.mySwiper.slideTo(index, 500, false)
    },
    // 获取一组题目数据
    getGroupQuestions (headers) {
      const params = getRequest()
      this.$axios({
        method: 'post',
        url: '/tch/homewk/h5/category/child/module/question/query',
        data: Object.assign({}, this.getQuesParams, params),
        headers: headers
      })
      .then(data => {
        this.groupInfo = data || {}
        this.questionInfos = this.groupInfo.questionResponses && this.groupInfo.questionResponses.map(item => {
          const obj = {
            questionId: item && item.questionId,
            answers: item && item.answers,
            userAnswer: item && item.userAnswer
          }
          return obj
        })
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        this.setMainAreaStyle()
        this.loading = false
      })
    },
    // 答案点击埋点
    ansTouch (isTrue) {
      const obj = {
        event: 'web_answer',
        body: {
          question: this.groupInfo.questionResponses[this.activedIndex] && this.groupInfo.questionResponses[this.activedIndex].questionId,
          isCllapsed: isTrue
        }
      }
      console.log(obj, 'obj')
    },
    // 设置卡片高度
    setMainAreaStyle () {
      this.$nextTick(() => {
        const headers = document.querySelectorAll('.top-slide')
        const answer = document.querySelectorAll('.self-answer')
        const height = getHeight([...headers, ...answer])
        this.mainAreaStyle.height = `calc(100vh - ${height} - 20px)`
        console.dir(this.mainAreaStyle)
      })
    }
  }

}
</script>
<style lang='less' scoped>
.assign-detail-wrapper {
    background-color: #fff;
    .top-slide {
      padding: 0 20px;
    }
    /deep/ .main-area::-webkit-scrollbar {
      display: none !important;
    }
    /deep/ .ques-select-wrapper, .ques-fill-wrapper {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    /deep/ .answer-wrapper {
        position: absolute;
        padding-bottom: 28px;
        z-index: 3;
    }
    .resource {
      margin-top: 30px;
      &-text {
        background-color: rgba(255, 202, 11, 0.1);
        border: 1px solid #FFCA0B;
        font-size: 14px;
        border-radius: 2px;
        padding: 2px 10px;
        color: #F7B500;
        font-weight: bold;
        margin-right: 10px;
      }
      &-content {
        font-size: 16px;
        line-height:20px;
        font-weight: 600;
        color: #7A8189;
      }
    }
    // .explain {
    //   margin-top: 30px;
    //   &-text {
    //     float: left;
    //     background-color: rgba(103, 207, 132, 0.1);
    //     border: 1px solid #67CF84;
    //     border-radius: 2px;
    //     font-size: 13px;
    //     padding: 4px 10px;
    //     margin-right: 10px;
    //     color:  #67CF84;
    //     font-weight: bold;
    //   }
    //   &-content {
    //     display: block;
    //     overflow: hidden;
    //     font-size: 14px;
    //     line-height:20px;
    //   }
    // }
    .no-data-area {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      img {
        width: 100%;
        max-width: 230px;
        margin-bottom: 25px;
      }

      p {
        margin-bottom: 25px;
        font-size: 16px;
        color: #D5D1FF;
      }

      button {
        width: 150px;
        height: 40px;
      }
    }
  }
  /deep/ .scroll-wrapper::-webkit-scrollbar {
      display: none !important;
  }
</style>
