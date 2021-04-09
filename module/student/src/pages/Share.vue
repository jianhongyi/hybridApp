<template>
  <section class="share_container">
    <section class="card">
      <header>
        <h1 class="title">我的配音作品</h1>
        <ul class="star clearfix">
          <li v-for="item in star" :key="item"></li>
        </ul>
      </header>
      <Player v-if="coverPic" :url="videoUrl" :coverPic="coverPic"/>
      <PersonalInfo :record="record" :studentMessage="studentMessage"/>
    </section>
    <Company :companyInfo="companyInfo"/>
    <section class="fltrp-logo"></section>
    <section class="want-dub" @click="openApp">我也要配音</section>
  </section>
</template>
<script>
  import Player from '../../../../common/components/VideoPlayer'
  import PersonalInfo from '../components/PersonalInfo'
  import Company from '../components/Company'

  export default {
    components: {
      Player,
      PersonalInfo,
      Company
    },
    data () {
      return {
        record: {},
        star: 0,
        studentMessage: {},
        companyInfo: {},
        coverPic: '',
        videoUrl: ''
      }
    },
    created () {
      let query = this.$route.query
      let params = {
        questionId: query.questionId,
        stuId: query.stuId
      }
      this.$axios.get('/stu/homewk/dubbed/get', {params})
        .then(data => {
          const {orgName, score, createTime, stuName, studentHeadPortrait, courseName, orgDesc, orgLogo, coverPic, videoUrl} = data
          document.title = orgName
          this.coverPic = coverPic
          this.videoUrl = videoUrl
          if (score < 30) {
            this.star = 1
          } else if (score < 45) {
            this.star = 2
          } else if (score < 60) {
            this.star = 3
          } else if (score < 80) {
            this.star = 4
          } else {
            this.star = 5
          }
          this.studentMessage = {createTime: this.generateTime(createTime), stuName, studentHeadPortrait, courseName}
          this.companyInfo = {orgDesc, orgLogo, orgName}
        })
        .catch(err => {
          this.$toast(err)
        })
      this.$axios.get('/stu/homewk/statistics/get', {
        params: {
          stuId: query.stuId
        }
      })
        .then(data => {
          const {completeHomeworkNum, completeQuestionNum, doQuestionTimeNum} = data
          this.record = {completeHomeworkNum, completeQuestionNum, doQuestionTimeNum}
        })
        .catch(err => {
          this.$toast(err)
        })
    },
    methods: {
      generateTime (val) {
        let date = new Date(val)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let dates = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        month = date.toString().length > 1 ? month : `0${month}`
        dates = date.toString().length > 1 ? dates : `0${dates}`
        hour = hour.toString().length > 1 ? hour : `0${hour}`
        minute = minute.toString().length > 1 ? minute : `0${minute}`
        second = second.toString().length > 1 ? second : `0${second}`
        return `${year}-${month}-${dates} ${hour}:${minute}:${second}`
      },
      openApp () {
        let urls = {
          iphone: 'itms-apps://itunes.apple.com/app/id1524575244',
          android: 'market://details?id=com.fltrp.organ.student',
          weixin: 'http://a.app.qq.com/o/simple.jsp?pkgname=' + 'com.fltrp.organ.student'
        }
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
          window.location = urls.iphone
        } else if (navigator.userAgent.match(/micromessenger/i)) {
          window.location = urls.weixin
        } else {
          window.location = urls.android
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .share_container {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #7263FF;
    background-image: radial-gradient(circle at 97% 37%,
    #6157E3,
    #6157E3 20%,
    transparent 0), radial-gradient(circle at 1% 21%,
    #7A70FF,
    #7A70FF 17%,
    transparent 0), radial-gradient(circle at 1% 55%,
    #766CF0,
    #766CF0 21%,
    transparent 0);
    overflow-x: hidden;
  }

  .card {
    position: relative;
    width: 91.47vw;
    height: 920px;
    padding: 28px 42px 106px 38px;
    margin: 48px auto 20px;
    background-color: white;
    border-radius: 14px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 46px;
      margin-bottom: 22px;

      h1 {
        padding-left: 4px;
        font-size: 40px;
        font-family: "FZY4JW--GB1-0", "FZY4JW--GB1";
        color: rgba(33, 0, 28, 1);
      }

      .star {
        li {
          float: right;
          width: 32px;
          height: 32px;
          background: url('../assets/img/star.png') no-repeat center / cover;
        }

        li + li {
          margin-left: 2px;
        }
      }
    }
  }

  .fltrp-logo {
    width: 300px;
    height: 60px;
    margin: 0 auto 34px;
    background: url('../assets/img/fltrp_logo.png') no-repeat center / cover;
  }

  .want-dub {
    display: block;
    width: 684px;
    height: 96px;
    line-height: 96px;
    margin: 0 auto 38px;
    font-size: 36px;
    color: #7E4A00;
    text-align: center;
    font-weight: bold;
    font-family: "FZY4JW--GB1-0", "FZY4JW--GB1";
    background-color: #FFCA0B;
    border-radius: 24px;
  }

  video {
    width: 606px;
    height: 340px;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
