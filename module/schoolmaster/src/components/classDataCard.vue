<template>
  <div>
    <div class="courseTitle"><span v-if="showCount">({{index+1}}/{{total}}) </span>{{cardData.courseName}}</div>
    <tab :tabTitle="courseTab"
         url="/headmaster/api/query/course/overview"
         :defaultParams="{courseCode: cardData.courseCode, courseId: cardData.courseId, courseName: cardData.courseName}"
         reqMethod='post'
         :empty="empty"
         :tabData.sync="courseData">
      <div slot="tabSlot0">
        <course-card :cardData="courseData['tabItem0']"></course-card>
      </div>
      <div slot="tabSlot1">
        <course-card :cardData="courseData['tabItem1']"></course-card>
      </div>
      <div slot="tabSlot2">
        <course-card :cardData="courseData['tabItem2']"></course-card>
      </div>
    </tab>
  </div>
</template>
<script>
import tab from '@/components/tab'
import courseCard from '@/components/courseCard.vue'
export default {
  name: 'classDataCard',
  props: {
    cardData: {
      type: Object,
      default: () => ({})
    },
    total: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    showCount: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      courseTab: ['近一周', '近一月', '近一年'],
      courseData: {},
      empty: {
        notice: '暂无数据',
        info: '暂无课程使用数据'
      }
    }
  },
  components: {
    tab,
    courseCard
  }
}
</script>
<style lang="less">
.courseTitle {
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  color: #999999;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 30px;
}
</style>