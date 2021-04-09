import Mock from "mockjs";
Mock.setup({
  timeout: 3000
});
// 获取用户微信信息 /query/wechat/info
export const submit = Mock.mock(/\/wechat\/info[\w\W]?/, {
  code: "200",
  msg: "",
  data: {
    appid: null,
    country: "中国",
    headImgUrl:
      "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum7C1twLfXiaty6WY9g1OediaqZlMn4IXtSyygN0zOYA41VSaQmgq1jibH9t9C5FLTNBXqKiczRp20Q/132",
    nickname: "Shero",
    province: "北京",
    sex: "2",
    userId: 27185879,
    userType: 3,
    wechatOpenid: "o2XE55oKEaS467Adj6PNiCbNTnrE",
    wechatUnionId: "ozgaoxLgNwfCp5T3WkQqicWO1Kdw"
  }
});

// 短信验证码登录 /phone/code/login
export const phoneCodeLoginSSO = Mock.mock(/\/phone\/code\/login[\w\W]?/, {
  code: "200",
  msg: "操作成功",
  data: null
});

// 查询绑定信息 /query/bind/info
export const queryBindInfo = Mock.mock(/\/query\/bind\/info[\w\W]?/, {
  code: "200",
  msg: "操作成功",
  data: {
    appType: 1,
    createTime: 1606986242000,
    id: 1,
    updateTime: 1606986242000,
    userId: "1",
    weChatUnionId: "1",
    phone: "13123456789"
  }
});

// 获取短信验证码 /send/message
export const sendMessage = Mock.mock(/\/send\/message[\w\W]?/, {
  code: "200",
  msg: "操作成功"
});

// 获取图片验证码 /pic/code
export const getPicCode = Mock.mock(/\/pic\/code[\w\W]?/, {
  code: "200",
  msg: "操作成功",
  data:
    '{"image":"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","encodeCaptha":"eyJhbGciOiJIUzUxMiJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1USTRRMEpETFVoVE1qVTJJbjAuLm9fUTZOVnlDZmpPdUIydDFYWnBHM0EuOVA2ZHJuNEMzU3VuYmxrZkFUdFN5aC1oYU9iQU5RX3A0TEl3ZmFaOC1UQ3paQ1k4c25Ud1JGUGtvSmY1YXl5eC5NOUdCM1JOTkZoVkdMSVhnZHF3QTR3.7Zkz2eTKKxsD46s2PfnlI2Y9gBU4Q9RmuFqeACeedLDkGKBPLaRbVxy-IMGDDIM45fRB_K9EZsukdvp3x0dtYQ","links":[{"rel":"self","href":"http://utsso.unipus.cn/sso/4.0/sso/image_captcha"}],"type":"image/jpeg"}'
});

// 获取机构列表 /org/chooseorg
export const chooseOrg = Mock.mock(/\/org\/chooseorg[\w\W]?/, {
  code: "200",
  msg: "",
  "data|5-10": [
    {
      id: "@increment(1)",
      "orgCode|3-10": "",
      orgName: "@cword(2,30)",
      logoUrl: "@dataImage(55x55)",
      isTry: "0",
      remainingTime: null,
      userName: "珊珊老师"
    }
  ]
});

// 已有课程 /headmaster/api/query/course
export const queryCourse = Mock.mock('/headmaster/api/query/course', {
  code: "200",
  msg: "",
  "data|1-5": [
    {
      courseId: 1213241,
      sourceName: "@cword(2,100)",
      "classSum|1-150": 0,
      "inClassSum|1-50": 10,
      "stuSum|1-50": 15,
      "inStuSum|1-50": 15,
      "status|1-2": 1, // 1：上架  2：下架
      "isAuthorized|0-1": 0 // 是否取消授权  0:否  1：是
    }
  ]
});
