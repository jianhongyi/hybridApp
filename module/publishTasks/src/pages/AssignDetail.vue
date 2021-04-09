<!-- 布置练习明细 -->
<template>
  <div class="assign-detail-wrapper">
        <div class="top-slide top-area-wrapper">
          <queens-nav-bar title="题目与解析" left-arrow @click-left="onClickLeft" />
          <queens-ques-switcher v-show="isOneMore" ref="ques-switcher" :question-infos="questionInfos" :active-index="activedIndex" @click="clickHandler" class="switcher-style"/>
        </div>
        <template v-if="groupInfo.questionResponses && groupInfo.questionResponses.length" >
          <swiper class="box-container" :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(quesData, index) in groupInfo.questionResponses" :key="index" class="slide-container">
                  <queens-question ref="queens" :ques-data="quesData" :show-answer="false"  :is-show-answering-area="false" :can-active="false" :autoplay="false" :class="hasData ? 'question-style' : ''" :main-area-style="mainAreaStyle">
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
            :preview="true"
            :answers="quesDataIndex.answers"
            :explain="quesDataIndex.explain"
            :template-type="quesDataIndex.templateType"
            :is-unfold="isUnfold"
            item-active-bg="#7263FF"
            :buttom-pad="['selectFillComplex', 'readFillComplex'].indexOf(quesDataIndex.templateType) > -1 ? -6 : 30"
            class="self-answer"
            @ans-touch="ansTouch"
          />
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
import publish from '../mixins/publish'
export default {
  data () {
    return {
      url: '/tch/homewk/h5/category/child/module/question/query',
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
  created () {},
  mounted () {},
  beforeDestroy () {
    this.url = null
    this.swiperOption = null
  },
  methods: {}

}
</script>
<style lang='less' scoped>
.assign-detail-wrapper {
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
    .top-slide {
      padding: 0 20px;
    }
    /deep/ .queens-nav-bar__left {
        padding: 0 !important;
    }
    /deep/ .queens-nav-bar__left .iconfont {
        padding: 0 !important;
    }
    /deep/ .queens-nav-bar__title {
        font-weight: 800 !important;
    }
    /deep/ .main-area::-webkit-scrollbar {
      display: none !important;
    }
    /deep/ .ques-select-wrapper, .ques-fill-wrapper {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    /deep/ .popup-wrapper {
        position: absolute;
        padding-bottom: 10px;
        z-index: 3;
    }
    .resource {
      padding-top: 30px;
      padding-bottom: 16px;
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
    .explain {
      margin-top: 30px;
      &-text {
        float: left;
        background-color: rgba(103, 207, 132, 0.1);
        border: 1px solid #67CF84;
        border-radius: 2px;
        font-size: 13px;
        padding: 4px 10px;
        margin-right: 10px;
        color:  #67CF84;
        font-weight: bold;
      }
      &-content {
        display: block;
        overflow: hidden;
        font-size: 14px;
        line-height:20px;
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
      display: none !important;
  }
</style>
