<!-- 学生作答明细 -->
<template>
  <div class="assign-detail-wrapper">
    <div ref="topAreaWrap" :style="{'padding-top': topAreaTop}" class="top-area-wrapper">
      <div ref="topSlide" class="top-slide">
        <queens-nav-bar title="题目与解析" left-arrow @click-left="onClickLeft" />
        <queens-ques-switcher v-show="isOneMore" ref="ques-switcher" :question-infos="questionInfos" :active-index="activedIndex" :is-show-result="true" item-bg="#fff" item-active-bg="#fff"  :item-border="false" class="switcher-style" @click="clickHandler"/>
      </div>
      <div class="ellipse" />
    </div>
    <template v-if="groupInfo.questionResponses && groupInfo.questionResponses.length" >
      <swiper class="box-container" :options="swiperOption" ref="mySwiper" :style="{top: positonTop + 'px'}">
        <swiper-slide v-for="(quesData, index) in groupInfo.questionResponses" :key="index" class="slide-container">
            <queens-question ref="queens" :ques-data="quesData" :preview="true" :show-answer="false" :is-show-answering-area="false" :autoplay="false" :class="hasData ? 'question-style' : ''" :main-area-style="mainAreaStyle" >
              <div slot="footer" :class="quesData.page ? 'footer-area' : ''">
                  <div v-if="quesData.page" class="resource">
                      <div class="resource-text">知识点来源</div>
                      <div class="resource-content">{{ quesData.page }}</div>
                  </div>
              </div>
            </queens-question>
        </swiper-slide>
      </swiper>
      <queens-answer
        :body="quesDataIndex.body"
        :ques-data="quesDataIndex"
        :active-index="quesDataIndex.activeIndex"
        :options="quesDataIndex.options"
        :sub-questions="quesDataIndex.subQuestions"
        :preview="true" :answers="quesDataIndex.answers"
        :explain="quesDataIndex.explain"
        :template-type="quesDataIndex.templateType"
        :is-show-result="true"
        :is-unfold="isUnfold"
        :buttom-pad="['selectFillComplex', 'readFillComplex'].indexOf(quesDataIndex.templateType) >-1 ? -6 : 30"
        class="self-answer"
        @ans-touch="ansTouch"
        />
    </template>
    <template v-else-if="!loading" >
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
import { hiddenStatusBar } from '../utils/client'
import publish from '../mixins/publish'
export default {
  data () {
    return {
      // top-area-wrapper的padding-top值,默认给个25px
      topAreaTop: '25px',
      // main-area 上移距离, 默认给个30
      positonTop: -30,
      url: '/tch/homewk/h5/category/stu/question/query',
      swiperOption: {
        on: {
          slideChangeTransitionEnd: (e) => {
            this.activedIndex = e.activeIndex
            this.pauseAllAudio()
          }
        }
      }
    }
  },
  mixins: [publish],
  provide () {
    return {
      setDomNode: {
        getNode: () => {
          return document.querySelectorAll('.scrollCard')[this.activedIndex]
        }
      }
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    hiddenStatusBar()
    .then(data => {
      this.topAreaTop = data + 'px'
      this.$nextTick(() => {
        const topAreaWrapH = this.$refs['topAreaWrap'] && this.$refs['topAreaWrap'].clientHeight
        // 这里的90暂时写死，后续计算获得
        this.positonTop = (0 - ((topAreaWrapH || 0) - (parseInt(this.topAreaTop) || 0) - 90)) || this.positonTop
      })
    }).catch(e => {
      console.log(e)
    })
  },
  beforeDestroy () {
    this.topAreaTop = null
    this.url = null
    this.swiperOption = null
  },
  methods: {
    addUserAnswer () {
      const reg = /\|/
      this.groupInfo.questionResponses.forEach(it => {
        if (!it.userAnswer) {
          const answers = it.answers.map(i => {
            return i.content
          })
          answers.forEach((its, index) => {
            if (reg.test(its)) {
              answers.splice(index, 1, (its + '').split('|')[0])
            }
          })
          this.$set(it, 'userAnswer', { answers: answers })
        }
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
    /deep/ .popup-wrapper {
        position: absolute;
        padding-bottom: 10px;
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
