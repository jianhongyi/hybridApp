<!--  -->
<template>
  <div class="assign-detail-wrapper">
    <div :style="{'padding-top': topAreaTop}" class="top-area-wrapper">
      <div class="top-slide">
        <queens-nav-bar title="题目与解析" left-arrow @click-left="onClickLeft" />
        <queens-ques-switcher v-show="isOneMore" ref="ques-switcher" :question-infos="questionInfos" :active-index="activedIndex" :is-show-result="true" item-bg="#fff" item-active-bg="#fff"  :item-border="false" class="switcher-style" @click="clickHandler"/>
      </div>
      <div class="ellipse" />
    </div>
    <template v-if="groupInfo.questionResponses && groupInfo.questionResponses.length" >
      <swiper class="box-container" :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="quesData in groupInfo.questionResponses" :key="quesData.questionId" class="slide-container">
            <queens-question ref="queens" :ques-data="quesData" :preview="true" :show-answer="false" :class="hasData ? 'question-style' : ''" :main-area-style="mainAreaStyle" >
              <div slot="footer" :class="quesData.page ? 'footer-area' : ''">
                  <div v-if="quesData.page" class="resource">
                      <div class="resource-text">知识点来源</div>
                      <div class="resource-content">{{ quesData.page }}</div>
                  </div>
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
export default {

  //  import所引入的组件注册
  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
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
      // 某个题目的数据
      swiperOption: {
        on: {
          slideChange: (e) => {
            this.activedIndex = e.activeIndex
            this.$refs['ques-switcher'].caculatePosition(this.activedIndex)
            this.pauseAllAudio()
          }
        }
      },
      topAreaTop: '25px',
      mainAreaStyle: {
        margin: '6px 20px 20px',
        height: '100%',
        'overflow-y': scroll,
        'overflow-x': 'hidden'
      }
    }
  },

  //  监听属性
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.$swiper
    },
    hasData () {
      return this.quesData && Object.keys(this.quesData).length
    },
    isOneMore () {
      return this.questionInfos.length > 1
    },
    quesDataIndex () {
      console.log('this.activedIndex:', this.activedIndex)
      console.log('this.groupInfo.questionResponses:', this.groupInfo.questionResponses)
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
  //  挂载完成 访问DOM元素
  mounted () {

  },
  //  更新之后
  updated () {

  },
  //  for keep-alive 缓存功能，组件被激活时调用
  activated () {

  },
  //  for keep-alive 组件被移除时调用
  deactivated () {

  },
  //  组件销毁之前调用
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
  //  组件销毁之后调用
  destroyed () {

  },
  //  方法集合
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
      this.activedIndex = index
      this.mySwiper.slideTo(index, 500, false)
    },
    // 获取题干aodio标签并停止播放
    setStemAudio () {
      const quesEles = this.$refs.queens
      quesEles && quesEles.forEach(it => {
        this.$nextTick(() => {
          const quesEngine = it.$refs.quesEngine
          const fun = quesEngine && quesEngine.getAudioEle
          if (fun && typeof fun === 'function') {
            const audioEle = fun.call(quesEngine)
            audioEle && audioEle.pause()
          }
        })
      })
    },
    // 获取一组题目数据
    getGroupQuestions (headers) {
      const params = getRequest()
      this.$axios({
        method: 'post',
        url: '/tch/homewk/h5/category/stu/question/query',
        data: Object.assign({}, this.getQuesParams, params),
        headers: headers
      })
      .then(data => {
        this.groupInfo = data || {}
        const reg = /\|/g
        this.groupInfo.questionResponses.forEach(it => {
          if (!it.userAnswer) {
            const answers = it.answers.map(it => {
              return it.content
            })
            answers.forEach((its, index) => {
              if (reg.test(its)) {
                answers.splice(index, 1, (its + '').split(reg)[0])
              }
            })
            this.$set(it, 'userAnswer', { answers: answers })
          }
        })
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
        this.setStemAudio()
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
        this.mainAreaStyle.height = `calc(100vh - ${height} - 40px)`
        console.dir(this.mainAreaStyle)
      })
    }
  }

}
</script>
<style lang='less' scoped>
.assign-detail-wrapper {
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
    /deep/ .queens-nav-bar {
        background-color: transparent !important;
    }
    /deep/ .queens-nav-bar__left {
        padding: 0 !important;
    }
    /deep/ .queens-nav-bar__left .iconfont {
        padding: 0 !important;
        color: #fff !important;
    }
    /deep/ .queens-nav-bar__title {
        color: #fff !important;
        font-weight: 800;
    }
    /deep/ .main-area {
      margin: 0 20px;
    }
    /deep/ .main-area::-webkit-scrollbar {
      display: none !important;
    }
    /deep/ .ques-select-wrapper, .ques-fill-wrapper {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    .box-container {
      top: -52px;
    }
    /deep/ .answer-wrapper {
        position: absolute;
        padding-bottom: 28px;
        z-index: 3;
    }
    /deep/ .answer-inner::-webkit-scrollbar {
      display: none !important;
    }
    .top-area-wrapper {
        position: relative;
        background-color: #7263FF;
        box-sizing: border-box;
        width: 100%;
        z-index: 0;
        height: 186px;
        padding: 0 20px;
        .ellipse {
            width: 100%;
            height: 40px;
            position: absolute;
            left: 0;
            bottom: -20px;
            border-radius: 50%;
            background-color:#7263FF;
        }
    }
    .top-area {
      box-sizing: border-box;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      background-color:#7263FF;
      padding: 0 20px;
      .switcher-style {
          padding-top: 4px;
          padding-bottom: 4px;
      }
    }
    .resource {
      margin-top: 30px;
      display: flex;
      align-items: center;
      &-text {
        height: 20px;
        line-height: 20px;
        background-color: rgba(255, 202, 11, 0.1);
        border: 1px solid #FFCA0B;
        font-size: 14px;
        border-radius: 2px;
        padding: 0 10px;
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
    display: none;
  }
</style>
