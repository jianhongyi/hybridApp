import Bridge from '~common/assets/js/dsBridge.js'

export default {
  data: () => {
    return {
      templateList: {
        0: 'QueensSelect',
        2: 'QueensFill',
        6: 'QueensSort',
        7: 'QueensLine',
        8: 'QueensJudge',
        9: 'QueensComposite'
      },
      loading: true,
      totalNum: 0,
      totalSubmitNum: 0,
      questionList: [],
      quesData: null,
      witchShow: '',
      info: null,
      getQuesParams: {
        batchNum: -1,
        nextQuestion: 1
      },
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
        Bridge.callHandler('showLoading', '加载中，请耐心等待')
      } else {
        Bridge.callHandler('hideLoading')
      }
    },
    deviceInfo () {
      this.getAllQuesData()
    }
  },
  computed: {
    elseQuesNum () {
      return (+this.totalNum || 0) - (+this.totalSubmitNum || 0) + 1
    },
    percentage () {
      return ((this.totalSubmitNum / this.totalNum) * 100 || 0)
    },
    deviceInfo () {
      return this.$store.student.state.deviceInfo
    },
    onlyError () {
      return this.$route.query.onlyError
    },
    // 默认是否展开正确答案
    isUnfold () {
      return this.quesData.templateType === 'readSelectComplex' || this.quesData.templateType === 'readJudgeComplex'
    }
  },
  created () {
    let query = this.$route.query
    console.log('this.$route.query:', query)
    this.info = {
      onlyError: query.onlyError,
      homeworkId: query.homeworkId,
      stuId: query.stuId,
      categoryId: query.categoryId
    }
    // 测试
    // this.info = {
    //   'homeworkId': '600a7d54a5510260c07a7ca3',
    //   'stuId': '202008847',
    //   'categoryId': '11'
    // }
    this.hideClientBar()
    this.getDeviceInfo()
  },
  mounted () {
    // mock数据用的
    // this.getAllQuesData()
    Bridge.callHandler('showLoading')
    Bridge.registerHandler('didEnterBackground', () => {
      console.log('推出后台 停止音频播放')
      const audios = document.getElementsByTagName('audio')
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause()
      }
      console.log('停止播放')
    })
  },
  methods: {
    // 页面刷新
    reload () {
      window.location.reload()
    },
    // 获取请求头数据
    getDeviceInfo () {
      console.log('开始获取头部信息==========')
      Bridge.callHandler('getDeviceInfo', {}, (res) => {
        res = JSON.parse(res)
        console.log(res)
        // 存储请求头参数
        let headers = {
          'access-token': res['access-token'],
          'X-Ca-Stage': res['X-Ca-Stage']
        }
        this.$store.student.commit('setDeviceInfo', headers)
        // 添加日志数据
        this.log.body.apiVersion = res['api-version']
        this.log.body.XCaStage = res['X-Ca-Stage']
        this.log.body.phoneType = res['phone-type']
        this.log.body.platform = res['platform']
        this.log.body.network = res['network']
        this.log.body.deviceId = res['device-id']
      })
    },
    // 获取全部题型数据
    getAllQuesData () {
      let url = '/stu/homewk/h5/category/question/query'
      let params = Object.assign({showResponse: true}, this.getQuesParams, this.info)
      this.log.body.apiUrl = url
      this.log.body.apiRequest = params
      this.$axios({
        method: 'post',
        url: url,
        data: params,
        headers: this.deviceInfo
        // 测试
        // headers: {
        //   'X-Ca-Stage': 'PRE',
        //   'access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmOTA4M2M5NWMwMDQ0NTYzOWFmMDAwYTk5MDJmMzUxNyIsImF1ZCI6IjExMDY3MTAyMiIsImF1dGhfdGltZSI6MTYxMTU2ODk5OCwiaXNzIjoiIiwiZXhwIjoxNjEyMjg4OTk4LCJub25jZSI6IiIsImlhdCI6MTYxMTU2ODk5OH0.GPotgXlCQ1SqOL9Zaw1BeI9ByeGt1G2RPZTW5p3c2vY'
        // }
      })
        .then((response) => {
          console.log('返回试题数据：', response)
          let data = response.data.data
          if (!(data && data.questionResponses && data.questionResponses.length)) return
          this.questionList = data.questionResponses
          this.totalNum = data.totalNum
          this.totalSubmitNum = data.totalSubmitNum
          this.tabSwitch()
          this.loading = false
          this.log.body.apiStatus = 'responseSuccess'
          this.log.body.apiResponse = data
          this.log.body.XCaRequestId = response.request._requestID
          this.buryLogMessage()
        })
        .catch((err) => {
          this.log.body.apiStatus = 'responseFailed'
          this.log.body.XCaErrorMessage = err
          this.loading = false
          this.buryLogMessage()
        })
    },
    // 返回操作
    returnBack () {
      Bridge.callHandler('dissmissWebView')
    },
    // 隐藏客户端导航栏
    hideClientBar () {
      this.$nextTick(() => {
        Bridge.callHandler('hideNativeNavBar')
      })
    },
    // 调用五星好评
    showDevicePerfect () {
      Bridge.callHandler('showDevicePerfect')
    },
    // 跳转到结果页
    finishAnswer () {
      Bridge.callHandler('finishAnswer', JSON.stringify(this.info))
    },
    // 播放正确音效
    playAnswerRightVoice () {
      Bridge.callHandler('playAnswerRightVoice')
    },
    // 播放错误音效
    playAnswerWrongVoice () {
      Bridge.callHandler('playAnswerWrongVoice')
    },
    // 通知客户端提交答案成功
    submitAnswerSuccess () {
      Bridge.callHandler('submitAnswerSuccess')
    },
    // 请求日志
    buryLogMessage () {
      Bridge.callHandler('buryLogMessage', JSON.stringify(this.log))
    }
  }
}
