<template>
  <div class="courseDetail">
    <card-title title="数据概览"
                info="按练习截止时间统计"
                :showMore="false"></card-title>
    <div class="dataCard">
      <tab :tabTitle="courseTab"
           url="/headmaster/api/query/course/detail"
           reqMethod='post'
           :empty="empty"
           :defaultParams="{courseId: courseId, courseCode: courseCode}"
           :tabData.sync="courseDetail">
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
    <card-title title="班级数据"
                info="按截止时间统计，练习提交率降序"
                :showMore="false"></card-title>
    <div class="dataCard">
      <tab :tabTitle="courseTab"
           :tabData.sync="classList"
           :showMore="true"
           :defaultParams="{courseId: courseId, courseCode: courseCode}"
           reqMethod='post'
           :resType="1"
           contentMinHeight="70vh"
           :empty="emptyList"
           url="/headmaster/api/query/class/overview">
        <div slot="tabSlot0">
            <course-data-card v-for="(item,index) in classList['tabItem0']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
        <div slot="tabSlot1">
            <course-data-card v-for="(item,index) in classList['tabItem1']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
        <div slot="tabSlot2">
            <course-data-card v-for="(item,index) in classList['tabItem2']"
                              :key="index"
                              :cardData="item"></course-data-card>
        </div>
      </tab>
    </div>
  </div>
</template>
<script>
import cardTitle from '@/components/cardTitle'
import tab from '@/components/tab'
import courseCard from '@/components/courseCard.vue'
import courseDataCard from '@/components/courseDataCard.vue'
export default {
  name: 'courseDetail',
  components: {
    cardTitle,
    tab,
    courseCard,
    courseDataCard
  },
  data () {
    return {
      courseTab: ['近一周', '近一月', '近一年'],
      courseDetail: {},
      classList: {},
      courseId: Number(this.$route.query.id),
      courseCode: this.$route.query.code,
      empty: {
        notice: '暂无数据',
        info: '暂无课程使用数据'
      },
      emptyList: {
        position: 'absolute',
        notice: '暂无数据',
        info: '暂无课程使用数据'
      }
    }
  },
  beforeCreate () {
    document.title = this.$route.query.courseName
  },
  methods: {
    courseLoadMore (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="less">
.courseDetail {
  box-sizing: border-box;
  padding: 52px 36px;
  .dataCard {
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 32px;
    margin-top: 32px;
    margin-bottom: 54px;
  }
}
</style>
