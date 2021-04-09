<template>
  <div class="tabCard">
    <van-tabs type="card"
              :active="defaultActive"
              @click="onChange"
              animated>
      <van-tab v-for="(item, index) in tabTitle"
               :key="index"
               :title="item">
        <div class="tabContent" :style="{minHeight: contentMinHeight ? contentMinHeight : ''}">
          <!-- 提示文案和排序按钮 -->
          <div class="notice"
               v-if="showSort">
            <span>{{sortInfo}}</span>
            <i :class="`iconfont iconpaixu-sheng ${sort === 1 ? 'down' : ''}`"
               @click="changeSort"></i>
          </div>
          <!-- 空状态 -->
          <empty v-if="showNothing"
                 :empty="empty"></empty>
          <!-- 内容区 -->
          <loading :loading="laoding===1 && page<=1"
                   v-if="!resError"
                   place="top">
            <slot :name="`tabSlot${index}`"></slot>
          </loading>
          <click-load-more v-if="showMore"
                  :laoding="laoding"
                  @loadMore="loadMore"></click-load-more>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Loading from '@/components/loading'
import clickLoadMore from '@/components/clickLoadMore.vue'
import empty from '@/components/empty.vue'
import { getTimeSlot } from '@/assets/js/utils.js'
export default {
  name: 'tab',
  components: {
    clickLoadMore,
    Loading,
    empty
  },
  props: {
    tabTitle: {
      type: Array,
      required: true
    },
    defaultActive: {
      type: Number,
      default: 0
    },
    showMore: { // 是否显示加载更多
      type: Boolean,
      default: false
    },
    showSort: { // 是否显示排序
      type: Boolean,
      default: false
    },
    sortInfo: { // 排序文案
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    tabData: { // 数据源
      type: Object,
      default: () => ({})
    },
    defaultParams: { // 请求数据时，默认参数
      type: Object,
      default: () => ({})
    },
    reqMethod: { // ajax请求方法
      type: String,
      default: 'get'
    },
    empty: { // 空状态
      type: Object,
      default: () => ({
        notice: '暂无数据',
        info: '暂无教师教学数据'
      })
    },
    contentMinHeight: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: 0,
      page: 1, // 分页
      sort: 1, // 排序  1 降序 2升序
      laoding: 0,
      showNothing: false,
      resError: false
    }
  },
  created () {
    this.initRequestData()
  },
  methods: {
    // 改变排序状态
    changeSort () {
      this.page = 1 // 改变顺序后分页变为1
      this.sort = this.sort === 1 ? 2 : 1
      this.requestData()
    },
    // 切换tab
    onChange (e) {
      let index = e
      if (this.active === index) return // 点击相同的tab不往上传递
      this.$emit('changeTab', this.active)
      this.active = index
      this.page = 1 // 切换tab后初始化分页为1.
      this.sort = 1 // 切换tab后排序转为初始化1
      this.requestData()
    },
    // 初始化数据，用于外部调用
    initRequestData (params) {
      this.requestData(params)
    },
    // 加载更多
    loadMore () {
      this.page = this.page + 1
      this.requestData()
    },
    // 获取数据
    requestData (params = {}) {
      if (!this.url) return // 如何没有请求的url则不请求数据
      this.laoding = 1
      this.resError = false
      const { page, active, url, pageSize, sort, defaultParams } = this
      const { startTime, endTime } = getTimeSlot(active)
      const reqParams = {
        orgId: this.$store.schoolmaster.state.hmOrgId,
        pageNum: page,
        pageSize,
        timeType: active,
        startTime,
        endTime,
        sort,
        ...defaultParams,
        ...params
      }
      this.$axios[this.reqMethod](url, reqParams)
        .then((data) => {
          this.showNothing = false
          this.laoding = 0
          if (Array.isArray(data)) { // 如果是数组，那么默认为列表。并且有分页
            if (!data.length) { // 空数组
              if (page === 1) { // 如果第一页就没有数据那么展示空状态
                this.laoding = 3
                this.showNothing = true
              } else { // 如果不是第一页，展示无更多数据
                this.laoding = 2
              }
            } else { // 如果有数据
              if (data.length < pageSize) { // 如果返回数组小于pagesize, 那么判断后面无数据，展示无更多数据
                this.laoding = 2
              }
              if (page === 1) {
                this.tabData[`tabItem${active}`] = data
              } else {
                this.tabData[`tabItem${active}`] = this.tabData[`tabItem${active}`].concat(data)
              }
            }
          } else { // 非数组直接赋值
            this.tabData[`tabItem${active}`] = data
          }
          this.$emit('update:tabData', JSON.parse(JSON.stringify(this.tabData)))
        }).catch(() => {
          this.showNothing = true
          this.resError = true
          this.laoding = 3
        })
    }
  }
}
</script>
<style lang="less">
.notice {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  margin-top: 12px;
  margin-bottom: 10px;
  span {
    font-weight: 400;
    color: #888888;
    font-size: 24px;
  }
  i {
    color: rgb(97, 65, 255);
    font-size: 40px;
    transition: transform 1s;
    &.down {
      transition: transform 1s;
      transform: rotate(180deg);
    }
  }
}
.tabCard {
  .tabContent {
    position: relative;
    padding-top: 28px;
  }
  .van-tabs__nav--card {
    border: none;
    border-radius: 6px;
    overflow: hidden;
    margin: 0;
    .van-tab {
      color: #baafff;
      border-right: 1px solid #e3dfff;
      border-top: 1px solid #e3dfff;
      border-bottom: 1px solid #e3dfff;
      &.van-tab--active {
        color: #fff;
        background-color: #7560ff;
        border-top: 1px solid #7560ff;
        border-bottom: 1px solid #7560ff;
        border-right: 1px solid #7560ff;
        border-left: 1px solid #7560ff !important;
      }
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-left: 1px solid #e3dfff;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
}
.nothingCard {
  width: 100%;
  height: 450px;
  background: #f6f7fb;
  overflow: hidden;
  .nothingImg {
    height: 180px;
    width: 286px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 34px;
    display: block;
    font-weight: bold;
  }
  .nothingNotice {
    text-align: center;
    font-size: 30px;
    color: #7560ff;
    margin-bottom: 28px;
  }
  .nothingInfo {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: #7560ff;
  }
}
</style>