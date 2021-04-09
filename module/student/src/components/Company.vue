<template>
    <section class="company">
        <figure class="logo">
          <img v-if="companyInfo.orgLogo" :src="companyInfo.orgLogo" alt="机构logo">
          <img v-else src="@/assets/img/logo@2x.png" alt="机构logo">
        </figure>
        <section class="company-description">
            <p class="titile">{{this.companyInfo.orgName}}</p>
            <p class="detail">{{this.companyInfo.orgDesc}}</p>
        </section>
        <section class="circle circle-left"></section>
        <section class="circle circle-right"></section>
    </section>
</template>
<script>
    export default {
      name: 'Company',
      props: {
        companyInfo: Object
      }
    }
</script>
<style lang="less" scoped>
    .company{
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 686px;
        height: 240px;
        padding: 66px 10px 34px 38px;
        margin: 0 auto 16px;
        background-color: white;
        border-radius: 14px;
        .logo{
            flex-shrink: 0;
            max-width: 295px;
            max-height: 140px;
            margin-right: 24px;
            border-radius: 14px;
            img{
              display: block;
              max-width: 295px;
              max-height: 140px;
              border-radius: 14px;
            }
        }
        .company-description{
            flex-grow:1;
            height: 140px;
            .titile{
                height: 46px;
                line-height: 46px;
                font-size: 40px;
                font-weight: bold;
                font-family: "FZY4JW--GB1-0", "FZY4JW--GB1";
                margin-bottom: 14px;
            }
            .detail{
                display: -webkit-box;
                height: 84px;
                line-height: 42px;
                font-size: 26px;
                font-weight: bold;
                font-family: "FZY4JW--GB1-0", "FZY4JW--GB1";
                color: #CFD2D5;
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
    }
    .circle{
        position: absolute;
        top: 14px;
        width: 20px;
        height: 20px;
        background-color: #7263FF;
        border-radius: 50%;
    }
    .circle-left{
        left: 98px;
    }
    .circle-right{
        right: 102px;
    }
</style>
