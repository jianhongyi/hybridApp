<!-- 学生端H5 查看页面 -->
<template>
  <div class="exercises-section">
    <!-- head头  -->
    <queens-nav-bar @click-left="returnBack" title="做练习" :fixed="true" :zIndex="3" right-text="" />
    <!-- 查看进度条 -->
    <div v-if="quesData" class="exercises-progress">
      <queens-progress :percentage="percentage">
        <span style="color: #a0a5ab">
          <span style="color: #7263ff">{{totalSubmitNum}}</span>/{{ totalNum }}
        </span>
      </queens-progress>
    </div>
    <!-- 试题展示区域  -->
    <div v-if="quesData" class="exercises-content">
      <!-- 试题组件 -->
      <component
        ref="ques"
        class="exercises-ques"
        :key="quesData.questionId"
        :is="witchShow"
        :ques-data="quesData"
        :template-type="quesData.templateType"
        :show-answer="true"
        :preview="true"
        :is-show-result="true"
        :init-active-index="initActiveIndex"
        :is-unfold="isUnfold"
      />
      <!-- 切换按钮 -->
      <div class="botton-wrapper">
        <queens-button
          v-if="totalSubmitNum!==1"
          type="primary"
          round
          size="large"
          @click="tabSwitch(-1)">
          上一题
        </queens-button>
        <queens-button
           v-if="totalSubmitNum!==totalNum"
          type="primary"
          round
          size="large"
          @click="tabSwitch(1)">
          下一题
        </queens-button>
        <queens-button
           v-if="questionList.length===1"
          type="primary"
          round
          size="large"
          @click="returnBack">
          查看报告
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
  </div>
</template>

<script>
import exercises from '../mixins/exercises'

export default {
  components: {},
  mixins: [exercises],
  provide () {
    return {
      thisComponent: this,
      refClassName: 'ques'
    }
  },
  data () {
    return {
      index: 0,
      initActiveIndex: -1
    }
  },
  created () {
    let query = this.$route.query
    this.index = Number(query.index)
    this.initActiveIndex = Number(query.initActiveIndex) || -1
  },
  methods: {
    // 上一题 下一题 切换
    tabSwitch (num) {
      if (num === undefined) { // 初始化
        this.totalSubmitNum = 0
        num = this.index + 1
      }
      this.totalSubmitNum += num
      this.quesData = this.questionList[this.totalSubmitNum - 1]
      this.$set(this.quesData, 'showAnswer', true)
      this.witchShow = this.templateList[this.quesData.structure]
      document.getElementById('app').scrollTop = 0
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../src/assets/style/exercises.less';
</style>

