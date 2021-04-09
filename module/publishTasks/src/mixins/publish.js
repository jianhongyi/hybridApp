import { getHeight } from '../utils'
// todo 真正调用时添加getRequest/getDeviceInfo
import { returnBack, hideNativeNavBar, showLoading, hideLoading, getRequest, getDeviceInfo, pauseAudioWhenBack, buryPointMessage, buryLogMessage } from '../utils/client'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => {
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
      // swiper位置，用于控制选择器
      activedIndex: 0,
      tid: null,
      // 题目中卡片区域样式
      mainAreaStyle: {
        margin: '6px 20px 20px',
        height: '100%',
        'overflow-y': scroll,
        'overflow-x': 'hidden'
      },
      // main-area 的上下margin总和
      mainAreaPadding: '22px',
      isUnfold: false,
      log: {
        moduleTopic: 'web',
        body: {
          apiVersion: '',
          XCaStage: '',
          apiStatus: 'apiStatus', // apiStatus:"responseSuccess"/"responseFailed"
          apiUrl: 'apiUrl',
          apiRequest: 'apiRequest',
          apiResponse: 'apiResponse',
          XCaErrorMessage: 'XCaErrorMessage',
          XCaRequestId: 'XCaRequestId'
        }
      }
    }
  },
  watch: {
    loading (val) {
      if (val) {
        showLoading('加载中...')
      } else {
        hideLoading()
      }
    }
  },
  computed: {
    hasData () {
      return this.quesData && Object.keys(this.quesData).length
    },
    mySwiper () {
      return this.$refs.mySwiper && this.$refs.mySwiper.$swiper
    },
    isOneMore () {
      return this.questionInfos.length > 1
    },
    quesDataIndex () {
      this.isUnfold = true
      this.$nextTick(() => {
        this.isUnfold = false
      })
      return this.groupInfo.questionResponses[this.activedIndex]
    }
  },
  created () {
    this.loading = true
    hideNativeNavBar()
    getDeviceInfo()
    .then(data => {
      const headers = JSON.parse(data)
      this.getGroupQuestions(headers)
    }).catch(e => {
      console.log(e)
    })
    // mock数据用的
    this.getGroupQuestions()
  },
  mounted () {
    pauseAudioWhenBack()
  },
  beforeDestroy () {
    this.loading = null
    this.groupInfo = null
    this.groupQuestions = null
    this.questionInfos = null
    this.quesData = null
    this.preview = null
    this.showAnswer = null
    this.getQuesParams = null
    this.audios = null
    this.activedIndex = null
    this.log = null
    clearTimeout(this.tid)
  },
  methods: {
    ansTouch (isTrue) {
      const obj = {
        event: 'web_answer',
        body: {
          question: this.groupInfo.questionResponses[this.activedIndex] && this.groupInfo.questionResponses[this.activedIndex].questionId,
          isCllapsed: isTrue
        }
      }
      buryPointMessage(obj)
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
      this.pauseAllAudio()
      const mySwiper = this.$refs.mySwiper && this.$refs.mySwiper.$swiper
      mySwiper && mySwiper.slideTo(index, 500, false)
    },
    // 暂停所有音频
    pauseAllAudio () {
      setTimeout(() => {
        const audios = document.querySelectorAll('audio')
        for (let i = 0; i < audios.length; i++) {
          audios[i].pause()
        }
      }, 20)
    },
    // 获取题干aodio标签并停止播放
    setStemAudio () {
      const quesEles = this.$refs.queens
      quesEles && quesEles.forEach(it => {
        this.tid = setTimeout(() => {
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
        url: this.url,
        data: Object.assign({}, this.getQuesParams, params),
        headers: headers
      })
      .then(data => {
        this.groupInfo = data || {}
        console.log('请求回来的数据：', this.groupInfo)
        this.addUserAnswer && this.addUserAnswer()
        this.questionInfos = this.groupInfo.questionResponses && this.groupInfo.questionResponses.map(item => {
          const obj = {
            questionId: item && item.questionId,
            answers: item && item.answers,
            userAnswer: item && item.userAnswer,
            templateType: item && item.templateType
          }
          return obj
        })
        this.log.body.apiStatus = 'responseSuccess'
        this.log.body.apiResponse = data
        this.final()
        // this.log.body.XCaRequestId = response.request._requestID
      })
      .catch(e => {
        this.final()
        console.log(e)
        this.log.body.apiStatus = 'responseFailed'
        this.log.body.XCaErrorMessage = e
      })
    },
    final () {
      this.setMainAreaStyle()
      this.setStemAudio()
      buryLogMessage(this.log)
    },
    // 设置卡片高度
    setMainAreaStyle () {
      setTimeout(() => {
        const headers = document.querySelectorAll('.top-area-wrapper')
        const answer = document.querySelectorAll('.self-answer .popup')
        const height = getHeight([...headers, ...answer])
        this.mainAreaStyle.height = `calc(100vh - ${height} - ${this.mainAreaPadding} - ${(this.positonTop || 0) + 'px'})`
        this.loading = false
        console.log(this.mainAreaStyle)
      }, 650)
    }
  }
}
