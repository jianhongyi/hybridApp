<!--  -->
<template>
  <div class="demo-section">
    <queens-nav-bar title="选择题" @click-left="returnBack"/>
    <div v-if="quesData && Object.keys(quesData).length">
      <queens-progress :percentage="percentage" class="process">
        <span style="color: #A0A5AB;"><span style="color: #7263FF;">{{ questionData.totalSubmitNum + 1 }}</span>/{{ questionData.totalNum }}</span>
      </queens-progress>
      <component :is="witchShow" ref="ques" :ques-data="quesData" />
      <div class="botton-wrapper">
        <queens-button type="primary" round size="large" :disabled="isButtonDisabled" @click="doSubmit1">
          {{ submitBottonText }}
        </queens-button>
      </div>
    </div>
    <div v-else class="no-data">
      暂无数据
    </div>
  </div>
</template>

<script>
const witchShow = {
  '0': 'QueensSelect',
  '2': 'QueensFill',
  '8': 'QueensJudge'
}
export default {

  //  import所引入的组件注册
  components: {

  },

  data () {
    return {
      isButtonDisabled: true,
      questionData: {},
      quesData: {},
      submitBottonText: '提交',
      witchShow: '',
      getQuesParams: {
        'homeworkId': '5f9676fa57000a8ba4b1a53c',
        'stuId': 202007152,
        'categoryId': 11,
        'batchNum': 1,
        'nextQuestion': 1
      },
      submitQuesParams: {
        'stuId': 202007152,
        'homeworkId': '5f9676fa57000a8ba4b1a53c',
        'questionId': '',
        'userAnswer': {},
        'completeType': null,
        'time': null
      }
    }
  },

  //  监听属性
  computed: {
    percentage () {
      return (this.questionData && this.questionData.totalSubmitNum + 1) / (this.questionData && this.questionData.totalNum) * 100 || 0
    }
  },

  //  监控data中的数据变化
  watch: {
    quesData: {
      deep: true,
      handler (val) {
        if (!val) {
          return
        }
        if (
          val.userAnswer &&
          val.userAnswer.answers &&
          val.userAnswer.answers.length === val.answers.length
        ) {
          this.isButtonDisabled = val.userAnswer.answers.some(
            (item, index) => item === ''
          )
        } else {
          this.isButtonDisabled = true
        }
      }
    },
    'submitQuesParams.completeType': {
      handler (newV) {
        if (newV === 1) {
          this.isButtonDisabled = true
        }
      }
    }
  },

  //  创建完成 访问当前this实例
  created () {
    this.getQuesData()
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

  },
  //  组件销毁之后调用
  destroyed () {

  },
  //  方法集合
  methods: {
    // 点击提交按钮
    doSubmit1 () {
      if (this.submitBottonText === '下一题') {
        this.beforeGetQuestion()
        return
      }
      const p = this.$refs.ques.nextAnswer()
      p.then(data => {
        const { userCheckedAnswers, answerResult } = data
        this.submitQuesParams.userAnswer = this.getScore(userCheckedAnswers)
        this.submitQuesParams.time = new Date().getTime() - this.submitQuesParams.time
        this.submitQuesParams.completeType = (this.questionData && this.questionData.totalSubmitNum + 1) === (this.questionData && this.questionData.totalNum) ? 1 : 0
        this.submitQuestion()
        if (!answerResult) {
          this.$set(this.quesData, 'showAnswer', !answerResult)
          this.submitBottonText = '下一题'
        } else {
          setTimeout(() => {
            this.showDevicePerfect()
            this.beforeGetQuestion()
          }, 2000)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    // 获取题型数据
    getQuesData () {
      this.$axios.post('/stu/homewk/h5/category/question/query', this.getQuesParams)
        .then(data => {
          this.questionData = data
          if (!this.questionData.questionResponses.length) {
            return
          }
          this.quesData = this.questionData.questionResponses && this.questionData.questionResponses[0]
          if (!this.quesData.userAnswer) {
            this.$set(this.quesData, 'userAnswer', { answers: [] })
          }
          this.witchShow = witchShow[this.quesData && this.quesData.structure]
          this.submitQuesParams.questionId = this.quesData && this.quesData.questionId
          this.submitQuesParams.time = new Date().getTime()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 提交
    submitQuestion () {
      const params = [this.submitQuesParams]
      this.$axios.post('/stu/homewk/h5/question/answer/submit', params)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 评分
    getScore (userAnswer) {
      userAnswer.score = 80
      return userAnswer
    },
    beforeGetQuestion () {
      this.getQuesData()
      this.submitBottonText = '提交'
    },
    // 返回操作
    returnBack () {
      console.log('退出')
      this.$bridge.callHandler('dissmissWebView', {}, (res) => {
        console.log(res, '推出推出推出推出推出推出')
      })
    },
    // 调用五星好评
    showDevicePerfect () {
      console.log('调用五星好评')
      this.$bridge.callHandler('showDevicePerfect', {}, (res) => {
        console.log(res, '调用五星好评')
      })
    }
  }

}
</script>
<style lang="less" scoped>
  .demo-section {
    background-color: #fff;
  }
  .process {
    padding: 20px 32px 0;
  }
  .botton-wrapper {
    box-sizing: border-box;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 16px 16px;
    z-index: 1;
  }

  .no-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

