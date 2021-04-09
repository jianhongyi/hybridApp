<template>
  <!-- 选择机构 -->
  <div class="choice-org" v-if="orgList && orgList.length > 1">
    <h3>选择机构</h3>
    <em>您的手机号下存在多个机构，请选择一个机构</em>
    <ul>
      <li
        v-for="(item, index) in orgList"
        :key="index"
        @click="checkedOrg(item)"
        :class="item.orgCode === orgCode ? 'active' : ''">
        <p>{{item.orgName}}</p>
        <!-- <van-icon name="checked" /> -->
        <i class="iconfont iconduigou"></i>
        <span>{{item.userName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'choiceOrg',
  computed: {
    orgList () {
      return this.$store.schoolmaster.state.hmOrgList
    },
    orgCode () {
      return this.$store.schoolmaster.state.hmOrgCode
    }
  },
  methods: {
    // 点击选中机构 跳转到首页
    checkedOrg (org) {
      // 储存选中机构id 机构名称
      this.$store.schoolmaster.commit('setOrgCode', org.orgCode)
      this.$store.schoolmaster.commit('setOrgId', org.id)
      this.$store.schoolmaster.commit('setOrgName', org.orgName)
      this.$router.push(this.$route.query.path)
    }
  }
}
</script>

<style lang="less" scoped>
.choice-org {
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  background-color: #ffffff;
  font-size: 32px;
  padding: 48px 36px 0px;
  h3 {
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: 700;
    color: #333333;
  }
  em {
    display: inline-block;
    margin-bottom: 60px;
    font-size: 26px;
    font-style: normal;
    color: #cdd2d5;
  }
  ul {
    li{
      position: relative;
      width: 100%;
      height: 220px;
      margin-bottom: 40px;
      padding: 40px;
      overflow: hidden;
      background: url('../assets/img/orgBg.png') no-repeat;
      background-size: 100%;
      color: #A0A5AB;
      p {
        float: left;
        width: 440px;
        height: 50px;
        line-height: 50px;
        margin: 42px 0px 14px;
        font-size: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        clear: both;
        display: block;
        font-size: 26px;
      }
      i {
        float: right;
        margin-top: 42px;
        font-size: 42px;
        color: #CFD2D5;
      }
      &::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 40px;
        width: 56px;
        height: 10px;
        border-radius: 3px;
        background: #CFD2D5;
      }
    }
    .active {
      color: #FFFFFF;
      background: url('../assets/img/orgChecked.png') no-repeat;
      background-size: 100%;
      i {
        color: #FFFFFF;
      }
      &::before {
        background: #FFCA0B;
      }
    }
  }
}
</style>
