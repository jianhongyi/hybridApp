import Mock from 'mockjs'
let Random = Mock.Random
var api = 'http://test.english.digtalk.unischool.cn/api/headmaster-business'

Mock.setup({
  timeout: '600-1000'
})
// 练习次数和提交次数概览 /headmaster/api/query/homekw/overview
export const homekw = Mock.mock(/\/headmaster\/api\/query\/homekw\/overview/, {
  code: '200',
  msg: '',
  data: {
    homewkSum: 13,
    submitSum: 151567687,
    homewkTotal: 135,
    submitSumTotal: 123
  }
})

// 练习布置次数 /headmaster/api/query/tchhomewk/sum
export const tchhomewk = Mock.mock(/\/headmaster\/api\/query\/tchhomewk\/sum/, {
  code: '200',
  msg: '',
  'data|10': [
    {
      tchName: '老师姓名',
      'homewkSum|+1': 100,
      phone: '176****9025',
      headPic: 'http://test.ai.digtalk.unischool.cn/static/img/left.e28c6073.png',
      status: 1
    }
  ]
})

// 练习提交次数 /headmaster/api/query/tchhomewk/sum
export const stuhomewk = Mock.mock(/\/headmaster\/api\/query\/stuhomewk\/sum/, {
  code: '200',
  msg: '',
  'data|10': [
    {
      stuName: '学生姓名',
      'homewkSum|+1': 100,
      phone: '176****9025',
      headPic: 'http://test.ai.digtalk.unischool.cn/static/img/left.e28c6073.png',
      status: 1
    }
  ]
})

// 教师排行 /headmaster/api/query/tch/overview
export const headmaster = Mock.mock(/\/headmaster\/api\/query\/tch\/overview/, {
  code: '200',
  msg: '',
  'data|10': [
    {
      'tchId': 1213241,
      'tchName': '@cname',
      'orgId': 753443,
      'headPic': Random.image('200x200', '#894FC4', '#FFF', 'png', '!'),
      'status': 0,
      'stuSum|+1': 10,
      'submitSumRate': 0.135,
      'newSubmitSumRate': 0.5675
    }
  ]
})

// 教师信息 /headmaster/api/query/tch/info
export const teacherInfo = Mock.mock(/\/headmaster\/api\/query\/tch\/info/, {
  code: '200',
  msg: '',
  data: {
    'tchId': 40501217,
    'headPic': 'http://test.ai.digtalk.unischool.cn/static/img/left.e28c6073.png',
    'tchName': 'feifei',
    'nickName': '张云飞',
    'phone': '176****9025',
    'status': 0
  }
})

// 教师数据概览 /headmaster/api/query/course/detail
export const teacherCD = Mock.mock(api + '/headmaster/api/query/course/detail', {
  code: '200',
  msg: '',
  data: {
    'courseId': 174,
    'courseName': '做练习模块名称',
    'classSum': 1,
    'stuSum': 121,
    'lastStuSum': 3,
    'useTimes': 2523904321,
    'submitSum': 115,
    'lastSubmitSum': 314,
    'homewkSum': 20
  }
})

// 教师-班级数据 /headmaster/api/query/class/overview
export const teacherCourseOverview = Mock.mock(/\/headmaster\/api\/query\/class\/overview/, {
  code: '200',
  msg: '',
  'data|10': [
    {
      'className': '外研1班',
      'tchName': '小白',
      'stuSum|+1': 10,
      'submitSumRate': 0.22,
      'homewkSum': 15,
      'avgScore': 15,
      'classStatus|0-2': 1
    }
  ]
})

// 课程概览列表 /headmaster/api/query/course/list
export const getCourseList = Mock.mock(/\/headmaster\/api\/query\/course\/list/, {
  code: '200',
  msg: '',
  data: {
    'totalSize': 20,
    'pageData|10': [
      {
        'courseCode': '@id',
        'courseName': '@ctitle'
      }
    ]
  }
})

// 课程概念列表item /headmaster/api/query/course/overview
export const getCourseOverview = Mock.mock(/\/headmaster\/api\/query\/course\/overview/, {
  code: '200',
  msg: '',
  data: {
    'courseId': '@id',
    'courseName': '@ctitle',
    'classSum|1-100': 1,
    'stuSum|50-200': 1,
    'lastStuSum': 3,
    'useTimes': 252394321,
    'submitSum': 15,
    'lastSubmitSum': 114,
    'waitClassSum': 10,
    'waitStuSum': 20,
    'waitLastStuSum': 30
  }
})

// 课程详情班级数据
export const getClassOverview = Mock.mock('/headmaster/api/query/class/overview', {
  code: '200',
  msg: '',
  'data|10': [{
    'className': '@word(2,50)',
    'tchName': '@cname',
    'stuSum|10-100': 15,
    'submitSumRate': 0.14214,
    'homewkSum': 15,
    'avgScore': 15,
    'classStatus': 1
  }]
})
