<template>
  <div class="countList">
    <div class="countTitle">
      <div>注：{{type==='1'?'显示近半年的教师布置数据':'显示近半年的学生练习提交数据'}}</div>
      <div class="control">
        <!-- 筛选 -->
        <!-- <van-popover
          v-model="showPopover"
          trigger="click"
          placement="bottom"
          @select="serch"
          :actions="actions"
        >
        <template #reference>
          <i class="iconfont iconshaixuan"></i>
        </template>
        </van-popover> -->
        <i :class="`iconfont iconpaixu-sheng ${reqParams.sort === 1 ? 'down' : ''}`"
           @click="sort"></i>
      </div>
    </div>
    <div class="scrollDom">
      <scrollRequest :url='url'
                     :params="reqParams"
                     @resDataListAction="resDataListAction"
                     reqMethod="post"
                     :empty="empty"
                     ref="scroll">
        <div slot="content"
             class="content">
          <infoCard v-for="(item,index) in dataList"
                    :data="type === '1' ? {title: item.tchName, img: item.headPic || teacherHeard} : {title: item.stuName, img: item.headPic || stuHeard}"
                    :key="index" :style="{opacity: item.status === 1 ? '0.4' : '1'}">
            <div slot="info"
                 class="countInfo">
              <div class="info">{{type==='1'?`布置练习次数`:'提交练习次数'}} {{item.homewkSum}}</div>
              <div class="line"></div>
              <div class="info">{{type === '1' ? item.tchPhone : item.stuPhone}}</div>
            </div>
          </infoCard>
        </div>
      </scrollRequest>
    </div>
  </div>
</template>
<script>
import scrollRequest from '@/components/scrollRequest.vue'
import infoCard from '@/components/infoCard.vue'
import teacherHeard from '@/assets/img/teacherHeard.png'
import stuHeard from '@/assets/img/stuHeard.png'

export default {
  name: 'countList',
  components: {
    scrollRequest,
    infoCard
  },
  data () {
    return {
      teacherHeard,
      stuHeard,
      data: { title: '教室新买', img: 'http://test.ai.digtalk.unischool.cn/static/img/left.e28c6073.png' },
      dataList: [],
      type: this.$route.query.type,
      url: this.$route.query.type === '1' ? '/headmaster/api/query/tchhomewk/sum' : '/headmaster/api/query/stuhomewk/sum',
      reqParams: { // 默认请求参数，每次请求都会带上
        orgId: this.$store.schoolmaster.state.hmOrgId,
        sort: 1
      },
      showPopover: false,
      actions: [{ index: 0, text: '正常账户', className: 'c7560ff' }, { index: 1, text: '已关闭账户' }],
      empty: {
        notice: '暂无数据',
        info: this.$route.query.type === '1' ? '暂无教师布置练习数据' : '暂无提交练习数据',
        place: 'center'
      }
    }
  },
  beforeCreate () {
    document.title = this.$route.query.type === '1' ? '练习布置次数' : '练习提交次数'
  },
  methods: {
    resDataListAction (list) {
      this.dataList = list
    },
    serch (action) {
      const {index} = action
      this.reqParams.status = index
      this.$refs.scroll.triggerDownScroll()
    },
    sort () {
      const {sort} = this.reqParams
      this.reqParams.sort = sort === 1 ? 2 : 1
      this.$refs.scroll.triggerDownScroll()
    }
  }
}
</script>
<style lang="less">
.countList {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .countTitle {
    height: 72px;
    line-height: 72px;
    background: rgba(216, 216, 216, 0.2);
    font-size: 28px;
    font-weight: 400;
    color: #888888;
    box-sizing: border-box;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    .control {
      i {
        color: #7560ff;
        margin-left: 38px;
        font-size: 32px;
        font-weight: bold;
        display: inline-block;
        transition: transform 1s;
        &.iconpaixu-sheng {
          font-size: 36px;
        }
        &.down{
          transition: transform 1s;
          transform: rotate(180deg);
        }
      }
    }
  }
  .scrollDom {
    flex: 1;
    background: #fff;
    position: relative;
    .content {
      box-sizing: border-box;
      padding: 0 40px;
    }
    .countInfo {
      display: flex;
      line-height: 32px;
      .info {
        font-size: 28px;
        font-weight: 400;
        color: #888888;
      }
      .line {
        height: 22px;
        width: 1px;
        background: #e8e8e8;
        margin: 0 18px;
        margin-top: 6px;
      }
    }
  }
}
.c7560ff{
  color: #7560ff;
}
</style>
