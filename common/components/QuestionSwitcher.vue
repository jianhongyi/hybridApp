<!-- 题号切换器 -->
<template>
  <div class="question-switcher-wrapper">
    <ul class="item-wrap">
      <li v-for="(item, index) in questionInfos"
          :key="item.questionId"
          :class="[
            'item',
            isShowResult&&isTrue(item)===1 ? 'success' : isShowResult&&!isTrue(item)===-1 ? 'cross' : '',
            item.questionId === checked ? 'isChecked' : ''
          ]"
          @click="clickHandler(item)"
      >
        {{ index + 1 }}
        <div v-if="isShowResult&&item.userAnswer&&item.userAnswer.answers&&item.userAnswer.answers.length" :class="['result-icon', isTrue(item)===1 ? 'success' : isTrue(item)===-1 ? 'cross' : '' ]">
          <van-icon :name="isTrue(item)===1 ? 'success' : isTrue(item)===-1 ? 'cross' : ''" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QueensQueSwitcher',
  props: {
    questionInfos: {
      type: Array,
      default: () => ([]),
      required: true
    },
    isShowResult: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: null
    }
  },
  //  监控data中的数据变化
  watch: {
    questionInfos: {
      handler (value) {
        const firstQuestion = this.questionInfos[0]
        this.checked = firstQuestion && firstQuestion.questionId
        this.clickHandler(firstQuestion)
      }
    }
  },
  //  组件销毁之前调用
  beforeDestroy () {
    this.checked = null
  },
  //  方法集合
  methods: {
    clickHandler (item = {}) {
      this.$emit('click', item)
      this.checked = item.questionId
    },
    isTrue (item) {
      if (!item.userAnswer || !item.userAnswer.answers || !item.userAnswer.answers.length) {
        return 0
      }
      let result = -1
      const answers = item.answers.map(answer => answer.content)
      const userAnswers = item.userAnswer.answers
      for (let i = 0; i < userAnswers.length; i++) {
        if (!answers.includes(userAnswers[i])) {
          result = 1
          break
        }
      }
      return result
    }
  }

}
</script>
<style lang='less' scoped>
  .question-switcher-wrapper {
    padding: 12px 18px;
    .item-wrap {
      overflow: auto;
      white-space: nowrap;
      .item {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #F3F7F8;
        line-height: 29px;
        text-align: center;
        font-size: 20px;
        color: #CFD2D5;
        border: 1px solid #CFD2D5;
        &.success {
          color: #F96D5F;
        }
        &.cross {
          color: #67CF84;
        }
        &.isChecked {
          background-color: #7263FF;
          color: #fff;
          border-color:  #7263FF;
        }
        .result-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
          right: -8px;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          &.success {
            background-color: #67CF84;
            font-size: 10px;
          }
          &.cross {
            background-color: #F96D5F;
            font-size: 8px;
          }
        }
      }
      li.item:not(:last-of-type) {
        margin-right: 28px;
      }
    }
  }
</style>
