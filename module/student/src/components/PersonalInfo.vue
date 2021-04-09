<template>
    <section>
        <section class="personal-info">
            <figure>
                <img v-if="studentMessage.studentHeadPortrait" :src="studentMessage.studentHeadPortrait" alt="">
                <img v-else src="@/assets/img/mine_header_default@3x.png" alt="头像">
            </figure>
            <section class="info-score">
                <section class="name-grade">
                    <p class="name">{{this.studentMessage.stuName}}</p>
                    <p class="time">
                        {{this.studentMessage.createTime}}
                    </p>
                </section>
                <section class="star-time">
                    <section class="grade">{{this.studentMessage.courseName}}</section>
                </section>
            </section>
        </section>
        <section class="record-font"><span>—</span> 我的学习档案 <span>—</span></section>
        <section>
            <ul class="record">
                <li>
                      <p class="score">{{this.record.completeHomeworkNum || 0}}</p>
                    <p class="description">完成任务/个</p>
                </li>
                <li class="line"></li>
                <li>
                    <p class="score">{{this.record.completeQuestionNum || 0}}</p>
                    <p class="description">做题数/个</p>
                </li>
                <li class="line"></li>
                <li>
                    <p class="score">{{Math.round(this.record.doQuestionTimeNum/60) || 0}}</p>
                    <p class="description">学习时长/分钟</p>
                </li>
            </ul>
        </section>
        <section class="point-bottom-left circle"></section>
        <section class="point-bottom-right circle"></section>
        <section class="link-left link"></section>
        <section class="link-right link"></section>
    </section>
</template>
<script>
    export default {
      name: 'PersonalInfo',
      props: {
        record: Object,
        studentMessage: Object
      }
    }
</script>
<style lang="less" scoped>
    .personal-info{
        display: flex;
        align-items: center;
        height: 110px;
        margin-top: 28px;
        margin-bottom: 60px;
        figure{
            flex-shrink: 0;
            width: 110px;
            height: 110px;
            margin-right: 26px;
            border-radius: 50%;
            img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .info-score{
            width: 470px;
            height: 100%;
            .name-grade{
                display: flex;
                justify-content: space-between;
                margin-top: 8px;
                line-height: 40px;
                margin-bottom: 12px;
                .name{
                    color: #111F2C;
                    font-size: 36px;
                    font-family: "方正粗圆简体";
                }
                .time{
                    font-size: 26px;
                    font-family: "ArialRoundedMTBold";
                    color:rgba(160,165,171,1);
                }
            }
            .star-time{
                .grade{
                    display: inline-block;
                    max-width: 470px;
                    height: 42px;
                    line-height: 42px;
                    border: 1px solid rgba(207,210,213,1);
                    font-size: 24px;
                    color: #A0A5AB;
                    background:rgba(243,247,248,1);
                    text-align: center;
                    border-radius:6px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    .record-font{
        height: 40px;
        line-height: 40px;
        margin-bottom: 40px;
        font-size: 36px;
        font-family: "FZY3JW--GB1-0", "FZY3JW--GB1";
        color: #A0A5AB;
        text-align: center;
        font-weight: bold;
    }
    .record{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        li > p.score{
            height: 52px;
            line-height: 52px;
            margin-bottom: 20px;
            font-size: 44px;
            color: #7263FF;
            font-weight: bold;
            text-align: center;
            font-family: "ArialRoundedMTBold";
        }
        li > p.description{
            height: 28px;
            line-height: 28px;
            font-size: 26px;
            font-family: "FZY3JW--GB1-0", "FZY3JW--GB1";
            color: #A0A5AB;
        }
        .line{
            width: 2px;
            height: 96px;
            background-color: #F0F0F0;
        }
    }
    .circle{
        position: absolute;
        bottom: 14px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #7263FF;
    }
    .point-bottom-left{
        left: 98px;
    }
    .point-bottom-right{
        right: 102px;
    }
    .link{
        position: absolute;
        top: 894px;
        width: 8px;
        height: 72px;
        border-radius: 8px;
        background-color: white;
        z-index: 2;
    }
    .link-left{
        left: 104px;
    }
    .link-right{
        right: 108px;
    }
</style>
