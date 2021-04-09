<template>
  <section class="dplayer" ref="player">
    <section class="on-off" ref="onOff"></section>
    <section class="control-bar" ref="controlBar">
      <section class="switch-play" ref="switchPlay">
        <img :src="playStateImg" alt="播放状态" />
      </section>
      <section class="play-process">
        <span class="process-second">{{ currentTimeMinuteOne }}</span
        ><span class="process-second">{{ currentTimeMinuteTwo }}</span
        ><span>:</span
        ><span class="process-minute">{{ currentTimeSecondOne }}</span
        ><span class="process-second">{{ currentTimeSecondTwo }}</span>
      </section>
      <section class="process" ref="process">
        <section class="process-bar" :style="{ width: width + 'px' }"></section>
      </section>
      <section class="play-process nomargin">
        <span class="process-second">{{ durationMinuteOne }}</span
        ><span class="process-second">{{ durationMinuteTwo }}</span
        ><span>:</span
        ><span class="process-minute">{{ durationSecondOne }}</span
        ><span class="process-minute">{{ durationSecondTwo }}</span>
      </section>
      <section class="full-screen" ref="fullScreen">
        <img :src="FullScreen" alt="全屏" />
      </section>
    </section>
  </section>
</template>
<script>
import DPlayer from 'dplayer'
import PlayImg from '../assets/img/play.png'
import PauseImg from '../assets/img/pause.png'
import FullScreen from '../assets/img/fullscreen.png'
export default {
  props: ['url', 'coverPic'],
  data () {
    return {
      player: null,
      showColon: false,
      playStateImg: PlayImg,
      FullScreen,
      onlyTouch: true,
      touched: false,
      isAndroid: false,
      durationMinuteOne: 0,
      durationMinuteTwo: 0,
      durationSecondOne: 0,
      durationSecondTwo: 0,
      currentTimeMinuteOne: 0,
      currentTimeMinuteTwo: 0,
      currentTimeSecondOne: 0,
      currentTimeSecondTwo: 0,
      width: 0,
      times: 0
    }
  },
  methods: {
    generatePlayer () {
      let video = {
        url: this.url
      }
      if (this.coverPic) {
        video.pic = this.coverPic
      }
      this.player = new DPlayer({
        container: this.$refs.player,
        video: video
      })
      this.replaceStart()
      this.replaceControlBar()
      this.handleDrag()
      if (navigator.userAgent.indexOf('iPhone') === -1) {
        this.isAndroid = true
      }
      // 解决微信h5页面视频播放自动全屏问题
      const videoTag = this.$refs.player.querySelector('.dplayer-video')
      videoTag.setAttribute('playsinline', 'true')
      videoTag.setAttribute('webkit-playsinline', 'true')
      videoTag.setAttribute('x5-playsinline', 'true')
      videoTag.setAttribute('x5-video-player-type', 'web')
      videoTag.style.borderRadius = '8px'
      videoTag.setAttribute('controlslist', 'nodownload')
    },
    replaceStart () {
      // 替换原来的开始播放按钮
      const start = this.$refs.player.querySelector('.dplayer-mobile-play')
      this.$refs.onOff.addEventListener('touchend', (e) => {
        // 点击屏幕中心的紫色开始按钮
        e.stopPropagation()
        this.player.toggle()
      })
      this.$refs.fullScreen.addEventListener('touchend', (e) => {
        // 点击全屏
        e.stopPropagation()
        this.toFullVideo(this.player.video)
      })
      this.player.on('ended', () => {
        // 视频结束
        if (
          (this.isAndroid && window.orientation === 90) ||
          window.orientation === -90
        ) { location.reload() } else {
          this.player.pause()
          this.$refs.onOff.style.display = 'block'
          this.player.video.currentTime = 0
        }
      })
      this.player.on('loadeddata', () => {
        // 显示视频的总时长
        const allTime = this.player.video.duration
        const minute = Math.floor(allTime / 60)
        const second = Math.round(allTime % 60)
        this.caculateTotalTime(minute, second)
      })
      this.player.on('timeupdate', () => {
        // 更新播放时间
        const process = Math.floor(this.player.video.currentTime)
        const minute = Math.floor(process / 60)
        const second = process % 60
        this.width =
          this.$refs.process.offsetWidth *
          (this.player.video.currentTime / this.player.video.duration)
        this.caculateCurrentTime(minute, second)
      })
      this.player.on('playing', () => {
        this.$refs.onOff.style.opacity = '0'
        this.playStateImg = PauseImg
      })
      this.player.on('pause', () => {
        this.$refs.onOff.style.opacity = '1'
        this.playStateImg = PlayImg
      })
      start.parentElement.replaceChild(this.$refs.onOff, start)
    },
    timeOne (time) {
      return time >= 10 ? Number(String(time).slice(0, 1)) : 0
    },
    timeTwo (time) {
      return time >= 10 ? Number(String(time).slice(1, 2)) : time
    },
    replaceControlBar () {
      // 替换原来的视频控制栏按钮
      const controller = this.$refs.player.querySelector('.dplayer-controller')
      this.$refs.player.querySelector('.dplayer-menu').remove()
      this.$refs.player.querySelector('.dplayer-info-panel').remove()
      this.$refs.player.querySelector('.dplayer-controller-mask').remove()
      this.$refs.player.replaceChild(this.$refs.controlBar, controller)
      this.$refs.switchPlay.addEventListener('touchend', (e) => {
        e.stopPropagation()
        this.player.toggle()
      })
    },
    handleDrag () {
      let posx = 0
      this.$refs.process.addEventListener('touchstart', (e) => {
        e.stopPropagation()
        this.touched = true
        posx = e.changedTouches[0].clientX
      })
      document.addEventListener('touchmove', (e) => {
        if (!this.touched) return
        e.stopPropagation()
        this.onlyTouch = false
        const process = e.changedTouches[0].clientX - posx // 求出滑动的距离
        const maxWidth = this.$refs.process.offsetWidth
        this.width = Math.max(Math.min(this.width + process, maxWidth), 0)
        const time = Math.floor(
            (this.width / maxWidth) * this.player.video.duration
          )
        const minute = Math.floor(time / 60)
        const second = Math.round(time % 60)
        this.caculateCurrentTime(minute, second)
        posx = e.changedTouches[0].clientX // 更新开始坐标
      })
      this.$refs.process.addEventListener('touchend', (e) => {
        e.stopPropagation()
        if (this.onlyTouch) {
          // 通过点击快进到某一时间
          const left = this.getScreenLeft(this.$refs.process)
          const distance = e.changedTouches[0].clientX - left
          const radio = distance / this.$refs.process.offsetWidth
          const time = radio * Math.round(this.player.video.duration)
          this.player.video.currentTime = time // 设置currentTime会触发播放器的timeupdate事件
        } else {
          // 通过滑动快进到某一时间
          this.onlyTouch = true
          this.touched = false
          const radio = this.width / this.$refs.process.offsetWidth
          this.player.video.currentTime = Math.floor(
            radio * this.player.video.duration
          )
        }
      })
    },
    getScreenLeft (element) {
      // 获取元素到屏幕最左侧的距离
      let offsetLeft = element.offsetLeft
      let parent = element.offsetParent
      while (parent !== null) {
        offsetLeft += parent.offsetLeft
        parent = parent.offsetParent
      }
      return offsetLeft
    },
    caculateCurrentTime (minute, second) {
      this.timeOne(minute) === this.currentTimeMinuteOne
        ? ''
        : (this.currentTimeMinuteOne = this.timeOne(minute))
      this.timeTwo(minute) === this.currentTimeMinuteTwo
        ? ''
        : (this.currentTimeMinuteTwo = this.timeTwo(minute))
      this.timeOne(second) === this.currentTimeSecondOne
        ? ''
        : (this.currentTimeSecondOne = this.timeOne(second))
      this.timeTwo(second) === this.currentTimeSecondTwo
        ? ''
        : (this.currentTimeSecondTwo = this.timeTwo(second))
    },
    caculateTotalTime (minute, second) {
      this.durationMinuteOne = this.timeOne(minute)
      this.durationMinuteTwo = this.timeTwo(minute)
      this.durationSecondOne = this.timeOne(second)
      this.durationSecondTwo = this.timeTwo(second)
    },
    toFullVideo (videoDom) {
      if (videoDom.requestFullscreen) {
        return videoDom.requestFullscreen()
      } else if (videoDom.webkitEnterFullScreen) {
        return videoDom.webkitEnterFullScreen()
      } else if (videoDom.mozRequestFullScreen) {
        return videoDom.mozRequestFullScreen()
      } else {
        return videoDom.msRequestFullscreen()
      }
    }
  },
  mounted () {
    this.generatePlayer()
  }
}
</script>

<style lang="less" scoped>
/deep/.dplayer-video-wrap {
  background: none !important;
}
.dplayer {
  position: relative;
  width: 606px;
  height: 340px;
  border-radius: 8px;
  .on-off {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 2.56rem;
    height: 2.56rem;
    margin: auto;
    background: url("../assets/img/play_btn.png") no-repeat center/cover;
    border-radius: 50%;
    transform: translate(0, 0);
  }
  .control-bar {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 606px;
    height: 60px;
    margin: 0 auto;
    background: linear-gradient(rgba(69, 0, 60, 0), rgba(33, 0, 28, 0.5));
    color: white;
    section {
      flex-shrink: 0;
    }
    .switch-play {
      width: 28px;
      height: 36px;
      margin-left: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .play-process {
      margin: 0 19px 0 27px;
      span {
        font-size: 24px;
      }
    }
    .nomargin {
      margin: 0px;
    }
    .process {
      position: relative;
      width: 300px;
      height: 8px;
      margin-right: 16px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      .process-bar {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: white;
        border-radius: 8px;
      }
    }
    .full-screen {
      width: 45px;
      height: 60px;
      padding-top: 30px;
      padding-left: 27px;
      img {
        width: 30px;
      }
    }
  }
}
.dplayer.dplayer-fulled {
  position: fixed !important;
}
</style>
