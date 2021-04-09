<template>
  <!-- 数据页面 -->
  <section class="dataIndex">
    <div class="notice">每日上午 10:00 更新统计数据</div>
    <div class="cardList">
      <number-card type='1'
                   :data="homekwData"></number-card>
      <number-card type='2'
                   :data="homekwData"></number-card>
    </div>
    <div class="course">
      <card-title title="课程概览"
                  :notice="notice"
                  @more="goCourse"></card-title>
      <div class="content">
        <swiper ref="mySwiper">
          <swiper-slide v-for="(item, index) in classListData.pageData"
                        :key="index">
            <class-data-card :cardData="item"
                             :showCount="false"
                             :total="classListData.totalSize >= 5 ? 5 : classListData.totalSize"
                             :index="index"></class-data-card>
          </swiper-slide>
        </swiper>
        <empty v-if="!classListData.totalSize" :empty="empty"></empty>
      </div>
    </div>
    <div class="teacher">
      <card-title title="教师排行"
                  :showMore="false"></card-title>
      <div class="content">
        <tab :tabTitle="courseTab"
             url="/headmaster/api/query/tch/overview"
             :tabData.sync="courseData"
             :showMore="true"
             :showSort="true"
             :empty="teacherEmpty"
             contentMinHeight="70vh"
             reqMethod="post"
             ref="courseTab"
             :resType="1"
             sortInfo="注：按练习提交率排序">
          <div slot="tabSlot0">
            <teacher-ranking :itemData="courseData['tabItem0']"></teacher-ranking>
          </div>
          <div slot="tabSlot1">
            <teacher-ranking :itemData="courseData['tabItem1']"></teacher-ranking>
          </div>
          <div slot="tabSlot2">
            <teacher-ranking :itemData="courseData['tabItem2']"></teacher-ranking>
          </div>
        </tab>
      </div>
    </div>
  </section>
</template>

<script>
import numberCard from '@/components/numberCard.vue'
import cardTitle from '@/components/cardTitle'
import tab from '@/components/tab'
import teacherRanking from '@/components/teacherRanking.vue'
import classDataCard from '@/components/classDataCard.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import empty from '@/components/empty.vue'
import 'swiper/swiper-bundle.css'

export default {
  name: 'dataIndex',
  components: {
    numberCard,
    cardTitle,
    tab,
    teacherRanking,
    classDataCard,
    Swiper,
    SwiperSlide,
    empty
  },
  mounted () {
    this.getHomekw()
    this.getClassList()
  },
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  data () {
    return {
      courseTab: ['近一周', '近一月', '近一年'],
      homekwData: {},
      courseData: {},
      classListData: {
        totalSize: 0,
        pageData: []
      },
      notice: [
        { title: '提交率：', info: '到截止时间提交人数/班级人数 * 100%' },
        { title: '环比：', info: '与上个统计周期的比较的增长或减少百分比' }
      ],
      empty: {
        notice: '暂无数据',
        info: '暂无课程使用数据'
      },
      teacherEmpty: {
        notice: '暂无数据',
        info: '暂无教师教学数据',
        position: 'absolute'
      }
    }
  },
  methods: {
    // 课程概览切换tab
    courseChangeTab (type) {
    },
    // 更多课程概览
    goCourse () {
      this.$router.push({ path: '/courseDataList' })
    },
    // 练习次数和提交次数概览
    getHomekw (picCode) {
      let params = {
        orgId: this.$store.schoolmaster.state.hmOrgId
      }
      this.$axios.get('/headmaster/api/query/homekw/overview', { params })
        .then((data) => {
          this.homekwData = data
        })
    },
    // 获取课程概念列表
    getClassList (picCode) {
      let params = {
        orgId: this.$store.schoolmaster.state.hmOrgId,
        pageSize: 5,
        pageNum: 1
      }
      this.$axios.post('/headmaster/api/query/course/list', params)
        .then((data) => {
          this.classListData = data
        })
    }
  }
}
</script>

<style lang="less" scoped>
.dataIndex {
  box-sizing: border-box;
  padding: 40px 36px 52px;
  margin-bottom: 102px;
  .notice {
    font-size: 28px;
    font-weight: 400;
    color: #999999;
    margin-bottom: 24px;
  }
  .cardList {
    display: flex;
    justify-content: space-between;
  }
  .course {
    margin-top: 60px;
  }
  .teacher {
    margin-top: 52px;
  }
  .content {
    background: #fff;
    margin-top: 28px;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 32px;
  }
}
</style>
