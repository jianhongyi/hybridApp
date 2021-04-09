<template>
  <div class="scroll">
    <!--mescroll滚动区域的基本结构-->
    <mescroll-vue ref="mescroll"
                  :down="mescrollDown"
                  :up="mescrollUp"
                  @init="mescrollInit">
       <!-- 空状态 -->
      <empty v-if="showNothing" :empty="empty"></empty>
      <!-- 内容区 -->
      <slot name="content"></slot>
    </mescroll-vue>
  </div>
</template>
<script>
// 引入mescroll的vue组件
import axios from '~common/assets/js/axios.js'
import MescrollVue from 'mescroll.js/mescroll.vue'
import upTop from '@/assets/img/upTop.png'
import empty from '@/components/empty.vue'
export default {
  components: {
    MescrollVue, // 注册mescroll组件
    empty
  },
  props: {
    url: { type: String, required: true },
    params: { // 附加参数，可以覆盖默认参数
      type: Object,
      default: () => {
        return {}
      }
    },
    num: { type: Number, default: 0 }, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
    size: { type: Number, default: 10 }, // 每页数据条数,默认10
    showToTop: { type: Boolean, default: false }, // 是否展示回到顶部按钮
    evaluation: { // 是否需要深度取值，默认后端返回就是数组，但是有时会用对象包裹起来，如data:{total:12,list[]} evaluation 用于映射对象中数组位置，只支持1级
      type: String,
      required: false
    },
    reqMethod: { // ajax请求方法
      type: String,
      default: 'get'
    },
    empty: { // 空状态
      type: Object,
      default: () => ({
        notice: '暂无数据',
        info: '暂无数据',
        place: 'center'
      })
    }
  },
  data () {
    return {
      showNothing: false,
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        // 以下是一些常用的配置,当然不写也可以的.
        page: {
          num: this.num, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: this.size
        },
        htmlNodata: '<p class="upwarp-nodata">-- 无更多数据 --</p>',
        noMoreSize: 10, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;避免列表数据过少 (比如只有一条数据), 显示无更多数据会不好看这就是为什么无更多数据有时候不显示的原因
        toTop: {
          // 回到顶部按钮
          src: this.showToTop ? upTop : '', // 图片路径,默认null,支持网络图
          offset: 1000 // 列表滚动1000px才显示回到顶部按钮
        }
      },
      dataList: [] // 列表数据
    }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
    // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    next()
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 下拉刷新
    triggerDownScroll () {
      this.mescroll.triggerDownScroll()
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      // 联网请求
      let reqParams = {
        pageNum: page.num, // 页码
        pageSize: page.size, // 每页长度
        ...this.params
      }
      axios[this.reqMethod](this.url, reqParams).then((response) => {
        this.showNothing = false
        this.$emit('resDataAction', response)
        // 请求的列表数据
        let arr = []
        if (this.evaluation) {
          arr = response[this.evaluation]
        } else {
          arr = response
        }
        // 如果是第一页需手动置空列表
        if (page.num === 1) {
          setTimeout(this.mescroll.scrollTo(0, 0), 500)
          this.dataList = []
          if (!arr.length) {
            this.showNothing = true
          }
        }
        // 把请求到的数据添加到列表
        this.dataList = this.dataList.concat(arr)
        this.$emit('resDataListAction', this.dataList)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(arr.length)
        })
      }).catch((e) => {
        this.showNothing = true
        mescroll.lockUpScroll()
        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        mescroll.endErr()
      })
    }
  },
  destroyed () {
    this.mescroll.destroy()
  }
}
</script>
			
<style scoped lang="less">
/*通过fixed固定mescroll的高度*/
.mescroll {
  position: absolute;
  top: 0;
  bottom: 0;
  height: auto;
}
.nothingCard {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #f6f7fb;
  overflow: hidden;
  z-index: 1;
  .nothingImg {
    height: 180px;
    width: 286px;
    margin: 0 auto;
    margin-top: 370px;
    margin-bottom: 64px;
    display: block;
    font-weight: bold;
  }
  .nothingNotice {
    text-align: center;
    font-size: 40px;
    color: #7560ff;
    margin-bottom: 28px;
  }
  .nothingInfo {
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    color: #7560ff;
  }
}
</style>