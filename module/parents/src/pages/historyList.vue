<template>
  <!-- 已完成学习任务列表 -->
  <div class="task-list">
    <template v-if="taskList && taskList.length > 0">
      <learn-task-card 
        :taskInfo="taskInfo" 
        v-for="(taskInfo, index) in taskList" 
        :key="index">
      </learn-task-card>
      <p v-if="totalSize && !Vloading" class="more" @click="getList">
        一 {{taskList.length===totalSize ? '没有更多数据了' : '点击加载更多'}} 一
      </p>
      <p v-if="totalSize && Vloading" class="more">一 <van-loading /> 加载中 一</p>
    </template>
    <template v-else-if="!LOADING">
      <no-data
        class="custom-image"
        description="暂无历史完成任务～"
      />
    </template>
  </div>
</template>

<script>
import noData from '~common/components/noData'
import learnTaskCard from '../components/learnTaskCard'

export default {
  name: 'historyList',
  data () {
    return {
      taskList: [],
      totalSize: 0,
      pageNum: 1,
      pageSize: 10,
      Vloading: false
    }
  },
  computed: {
    LOADING () {
      return this.$store.parents.state.LOADING
    },
    currentBind () {
      return this.$store.parents.state.currentBind
    },
    studentData () {
      return this.$store.parents.state.studentData
    }
  },
  components: {
    learnTaskCard,
    noData
  },
  watch: {
    currentBind: {
      handler (val) {
        if (this.currentBind) {
          this.getList()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 获取任务列表
    getList () {
      if ((this.taskList.length === this.totalSize && this.totalSize) || this.Vloading) {
        return false
      }
      this.$store.parents.commit('showLoading')
      this.Vloading = true
      let params = {
        stuId: this.currentBind.userId,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        history: true
      }
      this.$store.parents.dispatch('GET_HOMEWORKLIST', params)
      .then(data => {
        this.pageNum += 1
        this.taskList.push(...data.pageData)
        this.totalSize = Number(data.totalSize)
        this.Vloading = false
        this.$store.parents.commit('hideLoading')
      })
      .catch(() => {
        this.Vloading = false
        this.$store.parents.commit('hideLoading')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/default.less';

.task-list{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  margin: 0px @18px;
  padding: @14px 0px @18px;
  .more{
    margin-top: 56px;
    text-align: center;
    font-size: @14px;
    color: #999999;
    .van-loading{
      display: inline;
    }
    .van-loading__spinner{
      width: @16px;
      height: @16px;
    }
  }
}

/deep/.custom-image {
  height: 80vh;
}
</style>