<template>
  <div class="queens-play-audio">
    <div v-if="url && !icon" class="playAudio" :class="{ playing: playing }">
      <img class="play_audio3" :src="playAudio3" alt @click.stop="play" />
      <img :src="playAudio2" alt @click.stop="play" />
    </div>
    <div v-if="icon" class="icon" :class="{ playing: playing }">
      <img :src="icon" alt @click.stop="play" />
    </div>
    <audio
      v-if="url"
      ref="audio"
      class="audio"
      :src="url"
      :autoplay="autoplay"
    />
  </div>
</template>
<script>
import playAudio2 from '../assets/img/play_audio2.png'
import playAudio3 from '../assets/img/play_audio3.png'

export default {
  name: 'PlayAudio',
  props: {
    icon: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '',
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    // 点击从头播放 点击改变状态暂停／播放
    clickType: {
      type: String,
      default: 'play'
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      playing: false,
      canplay: true,
      playAudio2,
      playAudio3
    }
  },
  mounted () {
    let doc = this.$refs.audio
    doc.addEventListener('play', () => {
      this.playing = true
    })
    doc.addEventListener('pause', () => {
      this.playing = false
    })
    doc.addEventListener('ended', () => {
      if (this.loop) {
        this.playing = true
        this.play()
      } else {
        this.playing = false
      }
    })
    doc.addEventListener('canplay', () => {
      this.canplay = true
    })
    doc.addEventListener('error', event => {
      this.canplay = event.target.tagName !== 'AUDIO'
    }, true)

    document.addEventListener('visibilitychange', () => {
      // 用户离开了当前页面
      if (document.visibilityState === 'hidden') {
        this.$refs.audio && this.pause()
      }
    })
  },
  methods: {
    // 播放
    play () {
      const audios = document.getElementsByTagName('audio')
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause()
      }
      if (this.canplay) {
        if (this.clickType === 'play') {
          this.$refs.audio.currentTime = 0
          this.$refs.audio.play()
        } else if (this.clickType === 'changeState') {
          if (this.playing) {
            this.$refs.audio.pause()
          } else {
            this.$refs.audio.play()
          }
        }
      } else {
        this.$toast('音频资源暂不可用')
      }
    },
    // 暂停
    pause () {
      this.$refs.audio.pause()
    }
  }
}
</script>
<style scoped lang='less'>
.queens-play-audio {
  img {
    max-width: 100%;
  }
  .icon.playing img {
    animation: Bubbles 1.2s infinite;
  }
  .playAudio {
    position: relative;
    height: 36px;
    width: 44px;
    overflow: hidden;
    img {
      position: absolute;
      height: 100% !important;
    }
  }
  .playing {
    .play_audio3 {
      left: -40px;
      border-radius: 0% 50% 50% 0%;
      animation: fadeInOut 1s infinite;
    }
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      left: -40px;
    }
    50% {
      opacity: 0;
      left: 0px;
    }
    100% {
      opacity: 1;
      left: 0px;
    }
  }
  @keyframes Bubbles {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(0.8, 0.8);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}
</style>
