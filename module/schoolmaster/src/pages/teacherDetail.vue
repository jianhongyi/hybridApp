<template>
  <div class="teacherDetail">
    <info-card :data="{title: teacherInfo.nickName, img: teacherInfo.headPic || teacherHeard}"
               class="teacherCard">
      <div slot="info"
           class="teacherInfo">
        <div class="name">{{teacherInfo.tchName}}</div>
        <div class="line"></div>
        <div class="phoneNumer">{{teacherInfo.phone}}</div>
      </div>
    </info-card>
    <!-- 数据概览 -->
    <card-title title="数据概览"
                info="按练习截止时间统计"
                :showMore="false"></card-title>
    <div class="preview">
      <tab :tabTitle="tabName"
           :tabData.sync="courseDetail"
           reqMethod='post'
           :defaultParams="{ tchId: tchId}"
           url="/headmaster/api/query/course/detail">
        <div slot="tabSlot0">
          <course-card type="2"
                       :cardData="courseDetail['tabItem0']"></course-card>
        </div>
        <div slot="tabSlot1">
          <course-card type="2"
                       :cardData="courseDetail['tabItem1']"></course-card>
        </div>
        <div slot="tabSlot2">
          <course-card type="2"
                       :cardData="courseDetail['tabItem2']"></course-card>
        </div>
      </tab>
    </div>
    <!-- 班级数据 -->
    <card-title title="班级数据"
                info="按截止时间统计，练习提交率降序"
                :showMore="false"></card-title>
    <div class="preview">
      <tab :tabTitle="tabName"
           :showMore="true"
           :tabData.sync="courseClasData"
           reqMethod='post'
           contentMinHeight="70vh"
           :defaultParams="{ tchId: tchId}"
           url="/headmaster/api/query/class/overview">
        <div slot="tabSlot0">
            <course-data-card v-for="(item,index) in courseClasData['tabItem0']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
        <div slot="tabSlot1">
            <course-data-card v-for="(item,index) in courseClasData['tabItem1']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
        <div slot="tabSlot2">
            <course-data-card v-for="(item,index) in courseClasData['tabItem2']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
      </tab>
    </div>
  </div>
</template>
<script>
import infoCard from '@/components/infoCard.vue'
import cardTitle from '@/components/cardTitle'
import tab from '@/components/tab'
import courseCard from '@/components/courseCard.vue'
import courseDataCard from '@/components/courseDataCard.vue'
import teacherHeard from '@/assets/img/teacherHeard.png'
export default {
  name: 'teacherDetail',
  components: {
    infoCard,
    cardTitle,
    tab,
    courseCard,
    courseDataCard
  },
  data () {
    return {
      teacherHeard,
      tabName: ['近一周', '近一月', '近一年'],
      courseLoading: false,
      teacherInfo: {}, // 教师基本信息
      courseDetail: {}, // 数据概览数据
      courseClasData: {}, // 班级数据
      tchId: Number(this.$route.query.id)
    }
  },
  created () {
    this.getTeacherInfo()
  },
  methods: {
    previewChangeTab () {
    },
    // 获取教师信息
    getTeacherInfo () {
      let params = {
        orgId: this.$store.schoolmaster.state.hmOrgId,
        tchId: this.tchId
      }
      this.$axios.get('/headmaster/api/query/tch/info', { params })
        .then((data) => {
          this.teacherInfo = data || {}
        })
    },
    courseLoadMore () {
      this.courseLoading = true
      setTimeout(() => {
        this.courseLoading = false
      }, 3000)
    }
  }
}
</script>
<style lang="less">
.teacherDetail {
  padding: 52px 36px;
  .teacherCard {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 53px;
  }
  .teacherInfo {
    display: flex;
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    color: #888888;
    .line {
      height: 22px;
      width: 1px;
      background: #e8e8e8;
      margin: 0 20px;
      margin-top: 5px;
    }
  }
  .preview {
    background: #fff;
    margin-top: 28px;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 52px;
  }
}
</style>
