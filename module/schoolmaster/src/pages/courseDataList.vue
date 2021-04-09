<template>
  <div class="courseDataList">
    <scrollRequest url='/headmaster/api/query/course/list'
                   :params="reqParams"
                   @resDataListAction="resDataListAction"
                   @resDataAction="resDataAction"
                   evaluation="pageData"
                   :empty="empty"
                   reqMethod='post'
                   ref="scroll">
      <div slot="content">
        <div class="notice">注：课程班级全部结课一周后，不再显示</div>
        <div v-for="(item, index) in classListData"
             :key="index"
             class="card">
          <class-data-card :cardData="item"
                           :total="resData.totalSize"
                           :index="index"></class-data-card>
        </div>
      </div>

    </scrollRequest>
  </div>
</template>
<script>
import tab from '@/components/tab'
import classDataCard from '@/components/classDataCard.vue'
import scrollRequest from '@/components/scrollRequest.vue'
export default {
  name: 'courseDataList',
  components: {
    tab,
    classDataCard,
    scrollRequest
  },
  methods: {
    resDataListAction (list) {
      console.log('----', list)
      this.classListData = list
    },
    resDataAction (data) {
      this.resData = data
    }
  },
  data () {
    return {
      classListData: [], // 数据列表
      resData: {
        totalSize: 0
      }, // 后端返回的原始数据
      reqParams: { // 请求参数
        'orgId': this.$store.schoolmaster.state.hmOrgId,
        size: 10
      },
      empty: {
        notice: '暂无数据',
        info: '暂无课程使用数据',
        place: 'center'
      }
    }
  }
}
</script>
<style lang="less">
.courseDataList {
  .notice {
    font-size: 28px;
    font-weight: 400;
    color: #999999;
    line-height: 28px;
    padding-left: 36px;
    margin: 40px 0;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    padding: 32px;
    width: 678px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
</style>