<template>
  <!-- 已有课程列表 -->
  <div class="have-class-list">
    <ul v-if="list">
      <li v-for="(item, index) in list" :key="index">
        <div v-if="item.isAuthorized === 1" class="status-icon">
          已取消授权
        </div>
        <div v-else-if="item.status === 2" class="status-icon">
          已下架
        </div>
        <h5 :class="(item.isAuthorized === 1 || item.status === 2) ? '' : 'no-icon'">
          {{ item.sourceName }}
        </h5>
        <div class="table">
          <p style="border-bottom: 1px solid #DED9FF; border-right: 1px solid #DED9FF;">
            已有班级：{{ item.classSum }}
          </p>
          <p style="border-bottom: 1px solid #DED9FF;">
            已有学生：{{ item.stuSum }}
          </p>
          <p style="border-right: 1px solid #DED9FF;">
            开课中班级：{{ item.inClassSum }}
          </p>
          <p>
            开课中学生：{{ item.inStuSum }}
          </p>
        </div>
      </li>
    </ul>
    <no-data
      v-if="!LOADING && !error && list.length === 0"
      class="custom-image"
      description="暂无课程数据～" />
    <no-data
      v-if="!LOADING && error"
      class="custom-image"
      butText="点击刷新"
      description="加载失败~" />
  </div>
</template>

<script>
import noData from '~common/components/noData'

export default {
  name: 'haveClass',
  data () {
    return {
      list: [],
      loading: false,
      error: false
    }
  },
  computed: {
    LOADING () {
      return this.$store.schoolmaster.state.LOADING
    },
    orgId () {
      return this.$store.schoolmaster.state.hmOrgId
    }
  },
  components: {
    noData
  },
  watch: {
    orgId: {
      handler (val) {
        if (val) {
          this.getList()
        }
      },
      immediate: true
    }
  },
  methods: {
    // 获取列表
    getList () {
      this.error = false
      this.$store.schoolmaster.commit('showLoading')
      let params = {
        orgId: this.orgId
      }
      this.$axios.get('/headmaster/api/query/course', { params })
        .then((data) => {
          this.list = data || []
          this.error = false
          this.$store.schoolmaster.commit('hideLoading')
        })
        .catch(() => {
          this.error = true
          this.$store.schoolmaster.commit('hideLoading')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.have-class-list {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  margin: 0px 36px;
  padding: 28px 0px 36px;
  font-size: 28px;
  ul {
    width: 100%;
    li {
      position: relative;
      width: 100%;
      margin-bottom: 28px;
      padding: 28px 28px 40px;
      background: #ffffff;
      box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      .status-icon{
        position: absolute;
        top: 0px;
        right: 0px;
        min-width: 92px;
        line-height: 44px;
        text-align: center;
        padding: 0px 10px;
        background: #D1D1D1;
        border-radius: 0px 8px 0px 8px;
        font-size: 24px;
        color: #ffffff;
      }
      h5 {
        margin-top: 32px;
        margin-bottom: 28px;
        font-size: 32px;
        color: #333333;
        line-height: 44px;
      }
      .no-icon{
        margin-top: 12px;
      }
      .table {
          width:100%;
          height: 154px;
          border-radius: 4px;
          border: 1px solid #DED9FF;
          background: #FAF9FF;
          overflow: hidden;
        p {
          float: left;
          width: 50%;
          height: 76px;
          line-height: 76px;
          padding-left: 66px;
          font-size: 28px;
          font-weight: 400;
          color: #999999;
        }
      }
    }
  }
}

/deep/.custom-image {
  height: 80vh;
}
</style>
