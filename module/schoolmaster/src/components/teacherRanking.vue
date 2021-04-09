<template>
  <div class="teacherRanking">
    <info-card v-for="(item,index) in itemData"
               :data="{title: item.tchName, img: item.headPic || teacherHeard}"
               :key="index"
               @click="goTeacherDetail(item.tchId)">
      <div slot="info">
        <div class="classInfo">
          <div class="info">
            最新提交率 {{toFixed(item.newSubmitSumRate * 100)}}%
          </div>
          <div class="line"></div>
          <div class="info">
            在班学生 {{item.stuSum}}
          </div>
        </div>
        <div class="info">
          平均提交率 <span>{{toFixed(item.submitSumRate * 100)}}%</span>
        </div>
      </div>
    </info-card>
  </div>
</template>
<script>
import infoCard from '@/components/infoCard.vue'
import {toFixed} from '@/assets/js/utils.js'
import teacherHeard from '@/assets/img/teacherHeard.png'
export default {
  name: 'teacherRanking',
  components: {
    infoCard
  },
  props: {
    itemData: {
      type: Array, default: () => []
    }
  },
  data () {
    return {
      teacherHeard
    }
  },
  methods: {
    toFixed,
    goTeacherDetail (id) {
      this.$router.push({ path: `/teacherDetail?id=${id}` })
    }
  }
}
</script>
<style lang="less">
.teacherRanking {
  .classInfo {
    display: flex;
    margin: 16px 0 14px;
  }
  .line {
    height: 22px;
    width: 1px;
    background: rgb(200, 200, 200);
    margin: 0 18px;
    margin-top: 10px;
  }
  .info {
    font-weight: 400;
    color: #888888;
    font-size: 28px;
    span {
      color: #7560ff;
    }
  }
}
</style>
