import Mock from 'mockjs'
Mock.setup({
  // timeout: 1000
})
// 获取用户信息 /query/wechat/info
export const submit = Mock.mock(/\/wechat\/info[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "appid": "111",
    "country": "222",
    "headImgUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=493514378,4291414782&fm=11&gp=0.jpg",
    "nickname": "姗姗的家长",
    "province": null,
    "sex": "1",
    "userId": 123,
    "userType": null,
    "wechatOpenid": "123456",
    "wechatUnionId": "654321"
  }
})

// 查询家长绑定孩子信息 /parents/api/query/bind/info
export const queryBindInfo = Mock.mock(/\/query\/bind\/info[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "appid": "111",
    "country": "222",
    "headImgUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=493514378,4291414782&fm=11&gp=0.jpg",
    "nickname": "姗姗的家长",
    "province": null,
    "sex": "1",
    "userId": 123,
    "userType": null,
    "wechatOpenid": "123456",
    "wechatUnionId": "654321",
    "children": [
      {
        "userName|1-30": "",
        "userId": 202007782,
        "orgName": "张云飞测试机构2,外研DiploTalk体验测试机构,,张明绩测试",
        "className": "测试班级",
        "tchName": "测试教师",
        "phone": "13011110000",
        "currentBind": 1
      }
    ]
  }
})
// 根据手机号和姓名查孩子信息 /query/stu/info
export const queryStuInfoByNameAndPhone = Mock.mock(/\/stu\/info[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "userName": "Tony",
    "userId": 202007160,
    "orgName": "DiploTalk官方学校DiploTalk官方学校DiploTalk官方学校",
    "className": "测试班级",
    "tchName": "测试教师",
    "headPic": null,
    "phone": "13000001111"
  }
})
// 绑定孩子 /bind/parent/info/add
export const addParetnBind = Mock.mock(/\/info\/add[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": null
})
// 解绑孩子 /bind/parent/info/update
export const updateParetnBind = Mock.mock(/\/info\/update[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": null
})

// 学生练习概览 /query/stuhomewk/detail
export const queryStuHomeWkDetail = Mock.mock(/\/stuhomewk\/detail[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "homeWkCount": 102,
    "questionCount": 1894,
    "studyTime": 4813
  }
})

// 学生练习信息 /query/stuhomewk/info
export const queryStuHomeWorkByStuId = Mock.mock(/\/stuhomewk\/info[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "totalSize": 9,
    "pageData|3": [
      {
        "id": "5faa43ab108e4100019db534",
        "homewkId": "5faa43aa108e4100019db4fe",
        "homewkName|1-40": "",
        "completeStatus|0-4": 0,
        "classId": 202010649,
        "className": "WR11-05-Box1-LEVEL3",
        "currentTime": 1605196740000,
        "endTime": 1605110340000,
        "updateTime": 1605171073054,
        "tchName": "九九",
        "tchId": 40501213,
        "stuId": 202007782,
        "score": 80,
        "courseId": 188,
        "courseName": "WR1105-2h-Box1-LEVEL3",
        "orgId": 20200776,
        "avgScore": 78,
        "finishCount|10-100": 23,
        "questionCount": 100,
        "stuCount": 20,
        "stuSort": 7
      }]
  }
})

// 个人优秀配音 /query/excellent/dubbing
export const querydubbing = Mock.mock(/\/excellent\/dubbing[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "videoInfos|1-3": [{
      "id": "5f8f9d7b2242a6f0fa8c17af",
      "questionId": "5f8114f68fb7a5000152d857",
      "categoryId": 2,
      "categoryName": "单词跟读",
      "homewkId": "5f8114f68fb7a5000152d851",
      "score": 96.0,
      "stuId": 202007782,
      "result": null,
      "createTime": 1605196740000,
      "updateTime": 1605196740000,
      "stuUri": "https://dev-uni-after-class-resource.oss-cn-shanghai.aliyuncs.com/debug_iOS_20201021__2_5f8114f68fb7a5000152d851_5f8114f68fb7a5000152d857.mp3",
      "audioUrl": "https://dev-uni-after-class-resource.oss-cn-shanghai.aliyuncs.com/debug_iOS_20201021__2_5f8114f68fb7a5000152d851_5f8114f68fb7a5000152d857.mp3",
      "dimension": {
        "accurate": 96.0,
        "fluency": 100.0,
        "complete": 100.0
      },
      "time": 11000,
      "videoUrl": 'https://vod.unischool.cn/sv/26a1ed3-1743433568c/26a1ed3-1743433568c.mp4',
      "coverPic": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2229955058,4230178144&fm=26&gp=0.jpg",
      "title": "Hello"
    }]
  }
})

// 更新当前绑定的孩子 /update/parent/bind/status
export const updateParetnBind1 = Mock.mock(/\/bind\/status[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": null
})

// 任务详情 /query/homewk/excellent/dubbing
export const queryExcellentDubbingDetail = Mock.mock(/\/excellent\/dubbing[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "homewkScore": 74.66549019607844,
    "updateTime": 1605196740000,
    "endTime": 1605196740000,
    "videoInfos|1-5": [
      {
        "id": "5f8f9d7b2242a6f0fa8c17af",
        "questionId": "5f8114f68fb7a5000152d857",
        "categoryId": 2,
        "categoryName": "单词跟读",
        "homewkId": "5f8114f68fb7a5000152d851",
        "score|10-100": 0,
        "stuId": 202007782,
        "result": null,
        "createTime": 1605196740000,
        "updateTime": 1605196740000,
        "stuUri": "https://dev-uni-after-class-resource.oss-cn-shanghai.aliyuncs.com/debug_iOS_20201021__2_5f8114f68fb7a5000152d851_5f8114f68fb7a5000152d85712.mp3",
        "audioUrl": "https://dev-uni-after-class-resource.oss-cn-shanghai.aliyuncs.com/debug_iOS_20201021__2_5f8114f68fb7a5000152d851_5f8114f68fb7a5000152d857.mp3",
        "dimension": {
          "accurate": 96,
          "fluency": 100,
          "complete": 100
        },
        "time": 11000,
        "videoUrl": null,
        "content|1-3": "What's your name？"
      }
    ]
  }
})
