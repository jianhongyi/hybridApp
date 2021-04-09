<!-- 榜单页 -->
<template>
  <div class="assign-detail-wrapper">

    <div class="top-slide top-area-wrapper" v-if="!isshare"
         :style="{'padding-top': topAreaTop}">
      <queens-nav-bar title=""
                      left-arrow
                      @click-left="onClickLeft" />
    </div>

    <template>
      <div class="billboard-wrapper">
        <div class="header">
          <img src="@/assets/img/billHeader.png"
               class="header-img" />
        </div>
        <div class="content">
          <div class="org-info">
            <div class="org-name">{{ billData.orgName || '' }}</div>
            <div class="org-unit">
              <span class="org-unit-pre">{{ billData.unitNameWithoutSuffix || '' }}</span><span v-if="billData.unitHomewkIdentify">{{ '-'+billData.unitHomewkIdentify }}</span>
            </div>
          </div>

          <div class="padding"
               v-if="billData.dubbingQuestions && billData.dubbingQuestions.length">
            <div class="videoCard">
              <div class="cardHeader">
                <img src="@/assets/img/2@2x.png"
                     alt=""
                     srcset="">
                <div class="title">最佳配音</div>
              </div>
              <div v-if="!isshare"
                   class="change"
                   @click="change">
                    手动选择
                    <img src="@/assets/img/right@3x.png" alt="" srcset="">
                   </div>
              <div :class="isshare ? 'videoList isshare': 'videoList'"
                   v-if="billData.bestDubbingResponseList && billData.bestDubbingResponseList.length">
                <div class="videoItem"
                     v-for="item in  billData.bestDubbingResponseList"
                     :key="item.stuId">
                  <div class="video"
                       @click="play(item)">
                    <img src="@/assets/img/play@2x.png"
                         alt=""
                         srcset=""
                         class="paly">
                    <img :src="item.coverUrl"
                         alt=""
                         srcset="">
                  </div>
                  <div class="name">
                    <span>{{item.stuName}}</span>
                    <span class="tag">作品</span>
                  </div>
                </div>
              </div>
              <div v-else
                   class="nothing">
                <img src="@/assets/img/qupeiy10@2x.png"
                     alt=""
                     srcset="">
                <div class="nothingInfo">暂无优秀配音</div>
              </div>
            </div>
          </div>

          <div class="padding">
            <div class="start">
              <div class="cardHeader">
                <img src="@/assets/img/6@2x.png"
                     alt=""
                     srcset="">
                <div class="title">进步之星</div>
              </div>
              <div class="info">比上次进步</div>
              <div class="list"
                   v-if="billData.advanceStarResponseList && billData.advanceStarResponseList.length">
                <div class="listItem"
                     v-for="(item, index) in billData.advanceStarResponseList"
                     :key="index">
                  <div class="name">{{item.stuName}}</div>
                  <div class="startNum">
                    <span class="jia"><img src="@/assets/img/jia@2x.png"
                           alt=""
                           srcset=""></span>
                    <span class="startList"
                          v-for="e in Array(item.starHigh)"
                          :key="e"><img src="@/assets/img/start@2x.png"
                           alt=""
                           srcset=""></span>
                  </div>
                </div>
              </div>
              <div v-else
                   class="nothing">
                <img src="@/assets/img/tip_practice@3x.png"
                     alt=""
                     srcset="">
                <div class="nothingInfo">暂无进步之星</div>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="fiveStart">
              <div class="cardHeader">
                <img src="@/assets/img/jiangbei@2x.png"
                     alt=""
                     srcset="">
                <div class="title">五星大牛</div>
              </div>
              <div v-if="billData.fiveStarResponseList && billData.fiveStarResponseList.length"
                   class="fiveList">
                <div class="fiveItem"
                     v-for="(i, index) in billData.fiveStarResponseList"
                     :key="index">
                  {{i.stuName}}
                </div>
              </div>
              <div v-else
                   class="nothing">
                <img src="@/assets/img/tip_practice@3x.png"
                     alt=""
                     srcset="">
                <div class="nothingInfo">暂无学生上榜</div>
              </div>
            </div>
          </div>
        </div>
        <div class="share"
             v-if="!isshare">
          <div class="button"
               v-if="billData.bestDubbingResponseList && billData.bestDubbingResponseList.length || billData.fiveStarResponseList && billData.fiveStarResponseList.length || billData.advanceStarResponseList && billData.advanceStarResponseList.length"
               @click="share(billData.homewkName)">分享榜单</div>
          <div class="button disable"
               v-else>分享榜单</div>
        </div>
      </div>
    </template>
  </div>
</template>


<script>
import { hiddenStatusBar, getDeviceInfo, getParam, showShare, showGreateDubList, getRequest, showExcellentDub, returnBack, buryPointMessage } from '../utils/client'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      billData: {},
      topAreaTop: '0',
      isshare: getRequest().isshare || false
    }
  },
  computed: {},
  watch: {},
  created () {
    // moke 用
    // this.getData({})
    this.loading = true
    if (this.isshare) {
      const XCaStage = getRequest().XCaStage
      this.getData({
        'X-Ca-Stage': XCaStage
      })
    } else {
      getDeviceInfo()
        .then(data => {
          const headers = JSON.parse(data)
          this.getData(headers)
        }).catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    hiddenStatusBar()
      .then(data => {
        this.topAreaTop = data + 'px'
      }).catch(e => {
        console.log(e)
      })
  },
  beforeDestroy () {
    this.topAreaTop = null
  },
  methods: {
    // 左侧按钮点击事件
    onClickLeft () {
      returnBack()
    },
    // 跳转到趣录音
    play (item) {
      if (this.isshare) {
        const XCaStage = getRequest().XCaStage
        location.href = `http://h5.diplotalk.unischool.cn/${XCaStage === 'RELEASE' ? '' : 'h5Test/'}student/#/share?questionId=${item.questionId}&stuId=${item.stuId}&stage=${XCaStage}`
      } else {
        const { homewkId } = getRequest()
        buryPointMessage(JSON.stringify({ // 埋点
          'event': 'check_arrangement',
          'body': {
            'item': 'arrangement_rank',
            'title': '练习榜单页',
            'action': '学生配音点击配音',
            'stuId': item.stuId,
            'homeworkId': homewkId
          }
        }))
        showExcellentDub(JSON.stringify({ // 跳转原生
          homeworkId: homewkId,
          stuId: item.stuId
        }))
      }
    },
    // 分享
    share (title) {
      const { homewkId } = getRequest()
      buryPointMessage(JSON.stringify({ // 埋点
        'event': 'check_arrangement',
        'body': {
          'item': 'arrangement_rank',
          'title': '练习榜单页',
          'action': '学生配音点击分享榜单',
          'homeworkId': homewkId
        }
      }))
      getDeviceInfo()
        .then(data => {
          const headers = JSON.parse(data)
          showShare(JSON.stringify({
            linkUrl: `${location.href}&isshare=1&XCaStage=${headers['X-Ca-Stage']}`,
            shareTitle: `本次练习榜单出来啦，快来看看吧！`,
            shareDesc: `老师分享了【${title}】的练习榜单，点击查看`
          }))
        })
    },
    // 手动选择
    change () {
      const { homewkId } = getRequest()
      buryPointMessage(JSON.stringify({ // 埋点
        'event': 'check_arrangement',
        'body': {
          'item': 'arrangement_rank',
          'title': '练习榜单页',
          'action': '学生配音点击手动选择',
          'homeworkId': homewkId
        }
      }))
      showGreateDubList(JSON.stringify({
        homeworkId: homewkId
      }))
    },
    // 获取接口数据
    getData (headers) {
      this.$axios({
        method: 'get',
        url: `/tch/homewk/h5/billboard/list${getParam()}`,
        headers: headers
      })
        .then(data => {
          console.log(data)
          this.billData = data
        })
        .catch(err => {
          this.$toast(err)
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
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  /deep/ .queens-nav-bar {
    background: rgba(0, 0, 0, 0);
  }
  /deep/ .queens-nav-bar__left {
    padding: 0 !important;
  }
  /deep/ .queens-nav-bar__left .iconfont {
    padding: 0 !important;
    color: #ffffff;
  }
  /deep/ .queens-nav-bar__title {
    font-weight: 800 !important;
  }
  /deep/ .main-area::-webkit-scrollbar {
    display: none !important;
  }
  /deep/ .ques-select-wrapper,
  .ques-fill-wrapper {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}
.billboard-wrapper {
  .header {
    width: 100%;
    &-img {
      width: 100%;
    }
  }
  .content {
    width: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgb(255, 255, 255) 0%,
      rgb(98, 54, 255) 100%
    );
    position: relative;
    z-index: 2;
    padding-bottom: 34px;
    .org-info {
      padding-top: 30px;
      .org-name {
        font-size: 22px;
        color: #7263ff;
        text-align: center;
        margin-bottom: 12px;
        font-weight: bold;
      }
      .org-unit {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #cfd2d5;
        padding: 0 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-pre {
          display: inline-block;
          max-width: calc(100% - 16px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .videoCard {
      background: #ffffff;
      box-shadow: 0px 0px 14px 0px rgba(93, 90, 117, 0.14);
      border-radius: 14px;
      box-sizing: border-box;
      padding: 40px 16px 30px;
      position: relative;
      margin-top: 60px;
      .nothing {
        margin-top: 60px;
      }
      .cardHeader {
        top: -14px;
        left: 48%;
        .title {
          top: 67px;
        }
      }
      .change {
        position: absolute;
        left: 50%;
        top: 37px;
        transform: translateX(-50%);
        background: rgba(213, 209, 255, 0.5);
        border-radius: 18px;
        font-size: 14px;
        color: #7263ff;
        padding: 7px 14px 6px;
        font-weight: bold;
        img{
          width: 10px;
          display: inline-block;
          margin-left: -2px;
        }
      }
      .videoList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 46px;
        &.isshare{
          margin-top: 32px;
        }
        .videoItem {
          width: 48%;
          background: #ffffff;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
          .video {
            width: 100%;
            height: 120px;
            overflow: hidden;
            position: relative;
            .paly {
              height: 30px;
              width: 30px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            img {
              width: 100%;
            }
          }
          .name {
            padding: 10px 10px 17px 10px;
            span {
              font-size: 18px;
              color: #211b00;
              line-height: 21px;
            }
            .tag {
              font-size: 13px;
              color: #febb00;
              background: rgba(254, 187, 0, 0.3);
              border: 1px solid #febb00;
              border-radius: 2px;
              padding: 1px 4px 1px;
              margin-left: 4px;
              box-sizing: border-box;
              vertical-align: 2px;
            }
          }
        }
      }
    }
    .start {
      background: #ffffff;
      box-shadow: 0px 0px 14px 0px rgba(93, 90, 117, 0.14);
      border-radius: 14px;
      box-sizing: border-box;
      padding: 40px 16px 30px;
      position: relative;
      margin-top: 74px;
      .info {
        text-align: center;
        font-family: 'fzlt';
        font-size: 15px;
        font-weight: normal;
        color: #cfd2d5;
        line-height: 15px;
        margin-bottom: 16px;
      }
      .list {
        margin-top: 10px;
        .listItem {
          margin-top: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          height: 48px;
          line-height: 48px;
          box-sizing: border-box;
          padding-left: 14px;
          padding-right: 20px;
          display: flex;
          justify-content: space-between;
          .name {
            font-size: 16px;
            font-family: FZY4JW--GB1-0, FZY4JW--GB1;
            font-weight: bold;
            color: #21001c;
          }
          &:first-child {
            margin-top: 0;
          }
          .startNum {
            display: flex;
            .jia {
              line-height: 48px;
              img {
                display: inline-block;
                width: 14px;
              }
            }
            .startList {
              line-height: 48px;
              margin-top: 7px;
              margin-right: -5px;
              img {
                display: inline-block;
                width: 30px;
              }
            }
          }
        }
      }
    }
    .bg {
      background: url("../assets/img/di2@2x.png") no-repeat;
      background-size: 107%;
      background-position: bottom;
      padding: 0 15px;
      padding-bottom: 140px;
    }
    .fiveStart {
      margin-top: 78px;
      background: #ffffff;
      box-shadow: 0px 0px 14px 0px rgba(93, 90, 117, 0.14);
      border-radius: 14px;
      padding: 52px 5px 32px;
      position: relative;

      .nothing {
        margin-top: 0px;
      }
      .cardHeader {
        top: -16px;
        left: 46%;
        .title {
          transform: translateX(8px);
          top: 77px;
        }
      }
      .fiveList {
        display: flex;
        flex-flow: wrap;
        .fiveItem {
          width: 25%;
          height: 84px;
          background: url("../assets/img/five@2x.png");
          background-size: 90%;
          background-position: center;
          line-height: 72px;
          text-align: center;
          font-size: 14px;
          color: #fa822c;
          font-weight: bold;
          margin-bottom: 12px;
        }
      }
    }
    .cardHeader {
      position: absolute;
      left: 48%;
      top: -8px;
      transform: translate(-50%, -50%);
      width: 300px;
      .title {
        float: left;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 62px;
        left: 10px;
        color: #ffffff;
        font-size: 24px;
        font-weight: normal;
        color: #ffffff;
        line-height: 26px;
        text-shadow: 0px 1px 4px #4f3eea;
        font-weight: bold;
      }
      img {
        width: 100%;
      }
    }
  }
  .padding {
    padding: 0 15px;
  }
  .share {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 84px;
    left: 0;
    bottom: 0;
    background: #7263ff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    line-height: 80px;
    padding: 0 15px;
    box-sizing: border-box;
    .button {
      display: inline-block;
      width: 100%;
      height: 48px;
      text-align: center;
      line-height: 48px;
      font-size: 20px;
      font-weight: bold;
      color: #6336ff;
      background: #ffffff;
      border-radius: 48px;
      &.disable {
        background: rgba(255, 255, 255, 0.7);
        color: rgba(99, 54, 255, 0.4);
      }
    }
  }
  .di2 {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 48px;
  }
}
.nothing {
  margin-top: 30px;
  img {
    display: block;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .nothingInfo {
    text-align: center;
    font-size: 14px;
    color: #d5d1ff;
    font-weight: bold;
  }
}
</style>
