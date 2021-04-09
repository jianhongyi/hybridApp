<!-- 学生端H5 作答页面 -->
<template>
  <div class="exercises-section">
    <!-- head头  -->
    <queens-nav-bar
      @click-left="dialogVisible=true"
      @click-right="reset"
      title="做练习"
      :fixed="true"
      :zIndex="3"
      >
      <template #right>
        <queens-button v-if="resetBtnText==='重置'" class="reset-btn" plain type="primary" :disabled="isResetDisabled">
          {{resetBtnText}}
        </queens-button>
      </template>
    </queens-nav-bar>
    <!-- 作答进度条 -->
    <div v-if="quesData" class="exercises-progress">
      <queens-progress :percentage="percentage">
        <span style="color: #a0a5ab">
          <span style="color: #7263ff">{{ totalSubmitNum }}</span>/{{ totalNum }}
        </span>
      </queens-progress>
    </div>
    <!-- 作答区域  -->
    <div v-if="quesData" class="exercises-content">
      <!-- 答题组件 -->
      <component
        ref="ques"
        class="exercises-ques"
        :key="quesData.questionId + random"
        :is="witchShow"
        :ques-data="quesData"
        :template-type="quesData.templateType"
        :show-answer="showAnswer"
        :preview="preview"
        :is-show-result="preview"
        :is-unfold="isUnfold"
      />
      <!-- 提交按钮 -->
      <div class="botton-wrapper">
        <queens-button
          type="primary"
          round
          size="large"
          :disabled="isButtonDisabled"
          @click="clickBtn"
        >
          {{ submitBottonText }}
        </queens-button>
      </div>
    </div>
    <!-- 请求数据异常 -->
    <div v-else-if="!loading" class="no-data">
      <img src="@/assets/img/tip_practice@3x.png" alt="none" />
      <p>加载任务出现异常，请重试</p>
      <queens-button plain round type="primary" size="small" @click="reload">
        重新加载
      </queens-button>
    </div>

    <message :visible.sync="dialogVisible">
      <template v-if="onlyError">
        <p>退出后,已订正的结果会保留</p>
        <p>当前还有{{ elseQuesNum }}道题未订正哦~</p>
      </template>
      <template v-else>
        <p>一次完成效果更好哦~</p>
        <p>再坚持一下吧!</p>
      </template>
    </message>
    <div v-show="isShowMask" class="exercise-mask"/>
  </div>
</template>

<script>
import exercises from '../mixins/exercises'
import message from '../components/message'

export default {
  components: {
    message
  },
  mixins: [exercises],
  provide () {
    return {
      thisComponent: this,
      refClassName: 'ques'
    }
  },
  data () {
    return {
      preview: false, // 预览模式 不可做答 展示正确答案
      showAnswer: false, // 是否展示正确答案
      isButtonDisabled: true, // 提交按钮是否可点击
      isResetDisabled: false, // 重置按钮是否可点击
      submitBottonText: '提交',
      submitQuesParams: { // 提交数据结构
        questionId: '', // 试题id
        userAnswer: {}, // 用户答案
        completeType: null, // 全部练习是否完成
        time: null // 本题作答时长
      },
      dialogVisible: false,
      startTime: 0, // 开始作答时间记录
      scrollTop: 0, // 解决iOS掉起键盘兼容问题
      isShowMask: false, // 是否显示蒙版
      random: 1 // 控制重新渲染
    }
  },
  computed: {
    // 重置按钮文案
    resetBtnText () {
      if (this.quesData) {
        // 只有选词 排序 连线 未提交前可重置
        let structure = Number(this.quesData.structure)
        if ((this.quesData.templateType === 'selectFillComplex' || [6, 7].includes(structure)) && this.submitBottonText === '提交') {
          return '重置'
        }
      }
      return ''
    }
  },
  watch: {
    'quesData.userAnswer': {
      handler (val) {
        // 连线题作答埋点
        if (this.witchShow === 'QueensLine') {
          if (!val) {
            this.log.body.apiResponse = 'quesData.userAnswer 无值'
          } else if (!val.answers) {
            this.log.body.apiResponse = 'quesData.userAnswer.answers 无值'
          } else if (!val.answers.length) {
            this.log.body.apiResponse = 'quesData.userAnswer.answers 是空数组'
          } else if (val.answers.length && val.answers.length !== this.quesData.answers.length) {
            this.log.body.apiRequest = '连线题还未做完'
            this.log.body.apiResponse = val
          } else if (val.answers.length && val.answers.length === this.quesData.answers.length) {
            this.log.body.apiRequest = '连线题已经做完'
            this.log.body.apiResponse = val
          }
          this.buryLogMessage()
        }
        if (this.witchShow === 'QueensComposite') { // 复合题判断是否可提交
          this.isButtonDisabled = val.answers.length === 0 || val.answers.some(
            (item, index) => !item.content || item.content === ''
          )
          return
        }
        if (
          val && val.answers && val.answers.length > 0 &&
          (['QueensFill', 'QueensSort', 'QueensLine'].indexOf(this.witchShow) < 0 ||
          (['QueensFill', 'QueensSort', 'QueensLine'].indexOf(this.witchShow) >= 0 && val.answers.length === this.quesData.answers.length))
        ) {
          console.log(this.witchShow)
          // 用户答案不存在为空项 按钮可提交
          this.isButtonDisabled = val.answers.some(
            (item, index) => (this.witchShow === 'QueensFill' ? this.trim(item) : item) === ''
          )
        } else {
          this.isButtonDisabled = true
        }
      },
      deep: true
    }
  },
  mounted () {
    this.IosInputFocusBlur()
  },
  methods: {
    reset () {
      if (!this.isResetDisabled) {
        this.$refs.ques.reset()
      }
    },
     // ios input 输入框弹起软键盘的解决方案
    IosInputFocusBlur () {
      const ua = window.navigator.userAgent.toLocaleLowerCase()
      const isIOS = /iphone|ipad|ipod/.test(ua)
      if (isIOS) {
        let isReset = true // 是否归位
        this.focusinHandler = () => {
          this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
          isReset = false // 聚焦时键盘弹出，焦点在输入框之间切换时，会先触发上一个输入框的失焦事件，再触发下一个输入框的聚焦事件
        }
        this.focusoutHandler = (e) => {
          isReset = true
          setTimeout(() => {
            // 当焦点在弹出层的输入框之间切换时先不归位
            if (isReset) {
              window.scroll(0, this.scrollTop) // 确定延时后没有聚焦下一元素，是由收起键盘引起的失焦，则强制让页面归位
            }
          }, 30)
        }
        document.body.addEventListener('focusin', this.focusinHandler)
        document.body.addEventListener('focusout', this.focusoutHandler)
      }
    },
    // 去左右空格
    trim (str) {
      return str.replace(/(^\s*)|(\s*$)/g, '')
    },
    // 设置当前试题 计算当前第几题
    tabSwitch (isAnswerFlase) {
      if (this.totalSubmitNum === this.totalNum && !this.onlyError) { // 已经作答完成
        return false
      }
      this.preview = false
      this.showAnswer = false
      this.isResetDisabled = false
      if (!isAnswerFlase) {
        this.totalSubmitNum = this.totalSubmitNum + 1
      } else {
        this.totalSubmitNum = this.onlyError ? this.totalSubmitNum : this.totalSubmitNum + 1
      }
      this.quesData = this.questionList[this.totalSubmitNum - 1]
      if (this.onlyError) {
        this.$set(this.quesData, 'userAnswer', { answers: [], score: '' })
        this.random = this.random + 1
      }
      if (this.onlyError || !this.quesData.userAnswer) {
        this.$set(this.quesData, 'userAnswer', { answers: [], score: '' })
      }
      this.quesData.userAnswer.optionsDisorderIds = (this.quesData.config && this.quesData.config.optionsDisorderIds) || []
      this.witchShow = this.templateList[this.quesData.structure]
      this.submitQuesParams.questionId = this.quesData.questionId
      this.startTime = new Date().getTime()
      this.submitBottonText = '提交'
      this.isButtonDisabled = false
      // 如果是订正，做错的题目数据初始化
      if (this.onlyError) {
        this.$nextTick(() => {
          this.$refs.ques && this.$refs.ques.reset && this.$refs.ques.reset()
        })
      }
      document.getElementById('app').scrollTop = 0
    },
    // 获取提交参数
    getParams () {
      let userAnswers = this.quesData.userAnswer
      if (this.witchShow === 'QueensFill') { // 填空题去除前后空格和换行
        const arr = userAnswers.answers.map((item) => {
          return this.trim(item.toString())
        })
        userAnswers = {
          answers: arr,
          score: ''
        }
      }
      if (this.witchShow === 'QueensComposite') { // 复合题需要提交对象数组
        let subQuestions = this.quesData.subQuestions
        const arr = userAnswers.answers.map((item, index) => {
          return {
            contentIdx: item.contentIdx,
            content: item.content,
            questionId: subQuestions ? subQuestions[index].questionId : ''
          }
        })
        userAnswers = {
          answers: arr,
          score: ''
        }
      }
      this.submitQuesParams.userAnswer = userAnswers
      this.submitQuesParams.time = new Date().getTime() - this.startTime
      this.submitQuesParams.completeType = this.totalSubmitNum === this.totalNum ? 1 : 0
      return [Object.assign({}, this.submitQuesParams, this.info)]
    },
    // 提交答案
    submitQuestion () {
      const params = this.getParams()
      console.log('提交的参数:', params)
      this.$axios({
        method: 'post',
        url: '/stu/homewk/h5/question/answer/submit',
        data: params,
        headers: this.deviceInfo
        // headers: {
        //   'X-Ca-Stage': 'PRE',
        //   'access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmOTA4M2M5NWMwMDQ0NTYzOWFmMDAwYTk5MDJmMzUxNyIsImF1ZCI6IjExMDY3MTAyMiIsImF1dGhfdGltZSI6MTYxMTI3OTU0OSwiaXNzIjoiIiwiZXhwIjoxNjExNjM5NTQ5LCJub25jZSI6IiIsImlhdCI6MTYxMTI3OTU0OX0.ezOJywN5Tj196jv8ZBMH8bCnCtumezqUHpMagEnsNkw'
        // }
      })
        .then((response) => {
          // 提交成功 执行逻辑
          this.preview = true
          this.submitAnswerSuccess() // 通知客户端
          this.doSubmit()
        })
        .catch((err) => {
          this.isButtonDisabled = false
          let message = err && err.response && err.response.data && err.response.data.msg
          this.$toast.fail(message || (err && err.message) || '提交失败，请重试')
        })
    },
    // 提交答案后 正确错误判断 执行方法
    doSubmit () {
      this.$refs.ques.checkAnswer()
        .then((res) => {
          if (!res.answerResult) {
            // 作答错误：展示正确答案 修改按钮文案
            this.playAnswerWrongVoice()
            this.showAnswer = true
            this.submitBottonText = this.totalSubmitNum === this.totalNum ? '完成' : '下一题'
            this.isButtonDisabled = false
            // 如果是订正，则将本题目放到题目集合的最后面
            if (this.onlyError) {
              this.questionList.push(this.quesData)
              this.questionList.splice(this.totalSubmitNum - 1, 1)
              this.submitBottonText = '下一题'
              console.log(this.questionList)
            }
          } else {
            // 作答正确：按钮禁止点击 五星好评 自动跳到下一题
            this.isShowMask = true
            this.isButtonDisabled = true
            this.isResetDisabled = true
            this.playAnswerRightVoice()
            this.showDevicePerfect() // 动画2.5秒
            setTimeout(() => {
              this.isShowMask = false
              if (this.totalSubmitNum === this.totalNum) {
                this.finishAnswer()
                return
              }
              this.tabSwitch()
            }, 2600)
          }
        })
    },
    // 提交成功修改状态
    clickBtn () {
      if (this.isButtonDisabled) return false
      this.isButtonDisabled = true
      switch (this.submitBottonText) {
        case '下一题':
          this.tabSwitch(true)
          break
        case '提交':
          this.submitQuestion()
          break
        case '完成':
          this.finishAnswer()
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../src/assets/style/exercises.less";
.reset-btn{
  border: none !important;
  &:active::before {
    opacity: 0 !important;
  }
}
</style>

