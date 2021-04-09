import Mock from 'mockjs'
Mock.setup({
  // timeout: 6000
})
// 提交答案 stu/homewk/h5/question/answer/submit
export const submit = Mock.mock(/\/answer\/submit[\w\W]?/, {
  "code": "200",
  "msg": "",
})
// 获取试题 http://stuapi.diplotalk.unischool.cn/stu/homewk/h5/category/question/query
// export const query = Mock.mock(/\/question\/query[\w\W]?/, {
// 	"code": "200",
// 	"msg": "",
// 	"data": {
// 		"totalNum": 3,
// 		"totalSubmitNum": 3,
// 		"categoryId": 11,
// 		"categoryName": "做练习",
// 		"homeworkId": "5ffd714e5fe9b60001d3c0a0",
// 		"questionResponses": [{
// 			"questionId": "5ffd71515fe9b60001d3c0a1",
// 			"questionDocId": "KB2L2U5ST_0000449",
// 			"questionDescription": "图图连线",
// 			"body": {
// 				"content": "颠三倒四",
// 				"type": "",
// 				"audioInfo": null
// 			},
// 			"structure": "7",
// 			"templateType": "imgTextLine",
// 			"options": [{
// 				"content": "选项1<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_clean_52uid2a41f49058984588ba547bd83d13b9a4.jpg\" width=\"240\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "11",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<span>选项2<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_bike_27uidb5dbc48c7efb4ea0a8df7910cb608c29.jpg\" width=\"240\" /></span>",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "12",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<span>选项3<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_black_23uid55846231b1ae4714b4106b31b539468b.jpg\" width=\"240\" /></span>",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "13",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<span>答案2<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_comic_5uidac069448cc114d71b6f36a2d0186e396.jpg\" width=\"240\" /></span>",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "22",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<span>答案<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_camera_28uid6b77035ad0784fdab72db9aebb54aa8f.jpg\" width=\"240\" /></span>",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "23",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "答案1<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_0_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_blue_21uid41d67c8fe8f145cfbfa14672a3940569.jpg\" width=\"240\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "21",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}],
// 			"answers": [
// 				["11", "23"],
// 				["12", "22"],
// 				["13", "21"]
// 			],
// 			"userAnswer": {
// 				"score": 100.0,
// 				"answers": [
// 					["11", "23"],
// 					["12", "22"],
// 					["13", "21"]
// 				],
// 				"completeTime": 1610445167521,
// 				"correctStatus": 1
// 			},
// 			"explain": {
// 				"content": "",
// 				"type": null
// 			},
// 			"page": "教材0页",
// 			"config": {
// 				"optionsRandomSort": null,
// 				"optionsDisorderIds": [1, 2, 0]
// 			}
// 		}, {
// 			"questionId": "5ffd71515fe9b60001d3c0a2",
// 			"questionDocId": "KB2L1U11ST_0001114",
// 			"questionDescription": "图图连线",
// 			"body": {
// 				"content": "&nbsp; &nbsp;",
// 				"type": "",
// 				"audioInfo": {
// 					"url": "http://test.enres.diplotalk.unischool.cn/audio/question/U11-%E8%AF%8D%E6%B1%871uidf75942e3e9544674b2876c32f87111d7.mp3?auth_key=1610522914559-0-0-9b2b5c56597fc144b128426fc6f284da",
// 					"duration": 50076,
// 					"unit": "ms"
// 				}
// 			},
// 			"structure": "7",
// 			"templateType": "imgLine",
// 			"options": [{
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/Simonuide0a49bb14a74426cbf06de5db806088c.jpg\" width=\"240\" title=\"Simon.jpg\" alt=\"Simon.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "11",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_1_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_MrsStar_3uiddeabe1c177b4431da9a6596bf40663e9.jpg\" width=\"240\" title=\"KB_2_1_单词_图片_MrsStar_3.jpg\" alt=\"KB_2_1_单词_图片_MrsStar_3.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "12",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_1_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_Stella_4uidb9cdf5236c984b988d14843af2acd974.jpg\" width=\"240\" title=\"KB_2_1_单词_图片_Stella_4.jpg\" alt=\"KB_2_1_单词_图片_Stella_4.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "13",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/daduidb894928059c4475692844acb5745cac8.jpg\" width=\"240\" title=\"dad.jpg\" alt=\"dad.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "14",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/Suzyuid938a870815724948aa290a54181ae6f0.jpg\" width=\"240\" title=\"Suzy.jpg\" alt=\"Suzy.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "15",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%9B%BE%E7%89%871uid88550dc4404847399aab8c75eddaa5bb.jpg\" width=\"240\" title=\"图片1.jpg\" alt=\"图片1.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "16",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_living%20room_7uidf0ea18fc9b3540dc80de2d864de1f3f4.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_living room_7.jpg\" alt=\"KB_2_11_单词_图片_living room_7.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "26",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_hall_5uid92eeb8898f2e473badaec04b98e17c3c.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_hall_5.jpg\" alt=\"KB_2_11_单词_图片_hall_5.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "24",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_kitchen_6uid74aee47b030d4905b27c0b4e4080145a.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_kitchen_6.jpg\" alt=\"KB_2_11_单词_图片_kitchen_6.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "23",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1-1_%E5%89%AF%E6%9C%ACuidc87307466ab446c2be6771b5a1b5c98d.jpg\" width=\"240\" title=\"1-1_副本.jpg\" alt=\"1-1_副本.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "25",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_dining%20room_4uid9d678926a58445519c0a35bbd12f8f1f.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_dining room_4.jpg\" alt=\"KB_2_11_单词_图片_dining room_4.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "22",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_bathroom_2uid061c8d6ade7d4525945e9ee3a2684643.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_bathroom_2.jpg\" alt=\"KB_2_11_单词_图片_bathroom_2.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "21",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}],
// 			"answers": [
// 				["11", "21"],
// 				["12", "22"],
// 				["13", "23"],
// 				["14", "24"],
// 				["15", "25"],
// 				["16", "26"]
// 			],
// 			"userAnswer": {
// 				"score": 0.0,
// 				"answers": [
// 					["11", "24"],
// 					["12", "26"],
// 					["13", "22"],
// 					["14", "23"],
// 					["15", "21"],
// 					["16", "25"]
// 				],
// 				"completeTime": 1610445195098,
// 				"correctStatus": 2
// 			},
// 			"explain": {
// 				"content": "",
// 				"type": null
// 			},
// 			"page": "教材13页",
// 			"config": {
// 				"optionsRandomSort": null,
// 				"optionsDisorderIds": [5, 3, 2, 4, 1, 0]
// 			}
// 		}, {
// 			"questionId": "5ffd71515fe9b60001d3c0a3",
// 			"questionDocId": "KB2L1U10ST_0000994",
// 			"questionDescription": "图文连线",
// 			"body": {
// 				"content": "&nbsp; &nbsp;",
// 				"type": "",
// 				"audioInfo": null
// 			},
// 			"structure": "7",
// 			"templateType": "imgTextLine",
// 			"options": [{
// 				"content": "<p><br /></p><p>The boy can't swim.</p><p><br /></p>",
// 				"type": "text",
// 				"audioInfo": null,
// 				"contentIdx": "11",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<p><p>The boy can stand next to Maskman.</p></p>",
// 				"type": "text",
// 				"audioInfo": null,
// 				"contentIdx": "12",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<p><p>Maskman can pick the boy up.</p></p>",
// 				"type": "text",
// 				"audioInfo": null,
// 				"contentIdx": "13",
// 				"optionType": null,
// 				"groupIdx": "1"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uide675556ca6c9443ebe87f23b219960fc.jpg\" width=\"240\" title=\"2.jpg\" alt=\"2.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "23",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid3cf1fa8673ab4af3861e32851c6533ba.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "21",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}, {
// 				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/3uid1a6f3cb26e5f4802b63c7ad10abcab67.jpg\" width=\"240\" title=\"3.jpg\" alt=\"3.jpg\" />",
// 				"type": "img",
// 				"audioInfo": null,
// 				"contentIdx": "22",
// 				"optionType": null,
// 				"groupIdx": "2"
// 			}],
// 			"answers": [
// 				["11", "21"],
// 				["12", "22"],
// 				["13", "23"]
// 			],
// 			"userAnswer": {
// 				"score": 0.0,
// 				"answers": [
// 					["11", "23"],
// 					["12", "21"],
// 					["13", "22"]
// 				],
// 				"completeTime": 1610445239154,
// 				"correctStatus": 2
// 			},
// 			"explain": {
// 				"content": "",
// 				"type": null
// 			},
// 			"page": "教材13页",
// 			"config": {
// 				"optionsRandomSort": null,
// 				"optionsDisorderIds": [2, 0, 1]
// 			}
// 		}]
// 	}
// })

export const query = Mock.mock(/\/question\/query[\w\W]?/, {
	"code": "200",
	"msg": "",
	"data": {
		"totalNum": 35,
		"totalSubmitNum": 35,
		"categoryId": 11,
		"categoryName": "做练习",
		"homeworkId": "601281aa837abe0001ed45c8",
		"questionResponses": [{
			"questionId": "601281ac837abe0001ed45c9",
			"questionDocId": "KB2L3U3FH_0000020",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p>&nbsp;<span>There are seven days in a<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>&nbsp;is the day after Monday. The day after Wednesday is&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>. The day before Saturday is&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>. Saturday and Sunday are the&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>.</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "Tuesday",
				"contentIdx": "2"
			}, {
				"content": "Welcome",
				"contentIdx": "7"
			}, {
				"content": "money",
				"contentIdx": "6"
			}, {
				"content": "weekend",
				"contentIdx": "5"
			}, {
				"content": "week",
				"contentIdx": "1"
			}, {
				"content": "Friday",
				"contentIdx": "4"
			}, {
				"content": "clever",
				"contentIdx": "8"
			}, {
				"content": "Thursday",
				"contentIdx": "3"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "6dd19e9be5274a45aa4514de78822970",
				"content": "week"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "a83e742ae8554a97a5f161ded8b90955",
				"content": "Tuesday"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "5a85f8c37de6423fa4d728768f3227bc",
				"content": "Thursday"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "856c158295e84702936f1e52703b1065",
				"content": "Friday"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "e06046ab95e2425f9ba0721c05d9de3b",
				"content": "weekend"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "6dd19e9be5274a45aa4514de78822970",
					"content": "week"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "a83e742ae8554a97a5f161ded8b90955",
					"content": "Tuesday"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "5a85f8c37de6423fa4d728768f3227bc",
					"content": "Thursday"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "856c158295e84702936f1e52703b1065",
					"content": "Friday"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "e06046ab95e2425f9ba0721c05d9de3b",
					"content": "weekend"
				}],
				"completeTime": 1611825637671,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材11页",
			"config": {
				"optionsDisorderIds": [1, 6, 5, 4, 0, 3, 7, 2]
			},
			"subQuestions": [{
				"questionId": "6dd19e9be5274a45aa4514de78822970",
				"config": {}
			}, {
				"questionId": "a83e742ae8554a97a5f161ded8b90955",
				"config": {}
			}, {
				"questionId": "5a85f8c37de6423fa4d728768f3227bc",
				"config": {}
			}, {
				"questionId": "856c158295e84702936f1e52703b1065",
				"config": {}
			}, {
				"questionId": "e06046ab95e2425f9ba0721c05d9de3b",
				"config": {}
			}, {
				"questionId": "e394f9c0b84549fdbe39ec65f7d81230",
				"config": {}
			}, {
				"questionId": "23f4a9448ad14a7da37b18a8884d886f",
				"config": {}
			}, {
				"questionId": "c3a21d5f4d834c73b854713d40be9e9c",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45ca",
			"questionDocId": "KB2L3U3FH_0000023",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "On Mondays Paul wakes up at eight o'clock. He gets up and always has a <img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/showeruid7b4a459cf1b046cd82aa7cbfe7bac51f.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />&nbsp;s<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. Then he gets dressed and goes to the kitchen to have breakfast. After breakfast he puts on his<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/jacketuide5b8fa0fe6364e35acae1d913f0a6170.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />&nbsp;j<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> and he goes to the bus stop to catch a bus. He never walks to school.<br /><br />Paul comes home and does his <img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/homeworkuidb45ca8abe5fa483182c26310ba008810.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />&nbsp;h<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />before dinner. After dinner he sometimes plays on his <img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/computeruid494d0d33158b46cabd1f14025022ce54.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />c<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. He goes to <img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/beduid8590dfa2bc714fd3bdde4a47e5a96a5e.png\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />&nbsp;b<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />at nine o'clock.<br />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readFillComplex",
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "b481ef1a4da94ac2b4c9f605584adf3b",
				"content": "hower"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "eff48bd143804b9f8e507319d976f4b6",
				"content": "acket"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "c8cfeb8e5dbc4776bbbb04e731f9549b",
				"content": "omework"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "80ae890c88e84d32b6e5b01b82f27433",
				"content": "omputer"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "dfab9dbf8278413a9c70ec1914f09a58",
				"content": "ed"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"score": 100,
					"questionId": "b481ef1a4da94ac2b4c9f605584adf3b",
					"content": "hower"
				}, {
					"score": 100,
					"questionId": "eff48bd143804b9f8e507319d976f4b6",
					"content": "acket"
				}, {
					"score": 100,
					"questionId": "c8cfeb8e5dbc4776bbbb04e731f9549b",
					"content": "omework"
				}, {
					"score": 100,
					"questionId": "80ae890c88e84d32b6e5b01b82f27433",
					"content": "omputer"
				}, {
					"score": 100,
					"questionId": "dfab9dbf8278413a9c70ec1914f09a58",
					"content": "ed"
				}],
				"completeTime": 1611825772919,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材12页",
			"config": {},
			"subQuestions": [{
				"questionId": "b481ef1a4da94ac2b4c9f605584adf3b",
				"config": {}
			}, {
				"questionId": "eff48bd143804b9f8e507319d976f4b6",
				"config": {}
			}, {
				"questionId": "c8cfeb8e5dbc4776bbbb04e731f9549b",
				"config": {}
			}, {
				"questionId": "80ae890c88e84d32b6e5b01b82f27433",
				"config": {}
			}, {
				"questionId": "dfab9dbf8278413a9c70ec1914f09a58",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45cb",
			"questionDocId": "KB2L3U0FH_0000009",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p class=\"MsoNormal\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E9%A2%98%E5%B9%B2uid52edf3217783443d9f072cdef7bbd7d2.jpg\" width=\"240\" title=\"题干.jpg\" alt=\"题干.jpg\" /></p><p><p>Hello. My name's Suzy Star. I'm five. I've got a dog. She's called Dotty.&nbsp;</p><p>Hello. My&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;Stella</p></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "name's",
				"contentIdx": "1"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "a3390c6fec94486e932eb996aa268920",
				"content": "name's"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "a3390c6fec94486e932eb996aa268920",
					"content": "name's"
				}],
				"completeTime": 1611825779873,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {
				"optionsDisorderIds": [0]
			},
			"subQuestions": [{
				"questionId": "a3390c6fec94486e932eb996aa268920",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45cc",
			"questionDocId": "KB2L2U9FH_0000049",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid3abb6c89754e4240bfaf160206ee6c25.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p>Simon and Alex are wearing black <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />, blue<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> and white shoes. Simon's got small <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> on his head. Suzy's wearing a long purple <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;and a nice big red <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. She's got a beautiful gold <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.&nbsp;</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "hat",
				"contentIdx": "5"
			}, {
				"content": "shirts",
				"contentIdx": "1"
			}, {
				"content": "jeans",
				"contentIdx": "2"
			}, {
				"content": "handbag",
				"contentIdx": "6"
			}, {
				"content": "dress",
				"contentIdx": "4"
			}, {
				"content": "sunglasses",
				"contentIdx": "3"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "c7bf0e6ba90b405fb6ddfe65b79b7e4d",
				"content": "shirts"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "009341e799d840deaa9561f407fc4de6",
				"content": "jeans"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "3e666839cac942b3973f04555f0375ae",
				"content": "sunglasses"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "f2361d1eda454e9e919c66c1166651a0",
				"content": "dress"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "44c4309b679a48e6bbd4c111262c42fe",
				"content": "hat"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "1951a5e4573c40cc95d480b49b1e6446",
				"content": "handbag"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "c7bf0e6ba90b405fb6ddfe65b79b7e4d",
					"content": "shirts"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "009341e799d840deaa9561f407fc4de6",
					"content": "jeans"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "3e666839cac942b3973f04555f0375ae",
					"content": "sunglasses"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "f2361d1eda454e9e919c66c1166651a0",
					"content": "dress"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "44c4309b679a48e6bbd4c111262c42fe",
					"content": "hat"
				}, {
					"contentIdx": "6",
					"score": 100,
					"questionId": "1951a5e4573c40cc95d480b49b1e6446",
					"content": "handbag"
				}],
				"completeTime": 1611825905238,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材11页",
			"config": {
				"optionsDisorderIds": [4, 0, 1, 5, 3, 2]
			},
			"subQuestions": [{
				"questionId": "c7bf0e6ba90b405fb6ddfe65b79b7e4d",
				"config": {}
			}, {
				"questionId": "009341e799d840deaa9561f407fc4de6",
				"config": {}
			}, {
				"questionId": "3e666839cac942b3973f04555f0375ae",
				"config": {}
			}, {
				"questionId": "f2361d1eda454e9e919c66c1166651a0",
				"config": {}
			}, {
				"questionId": "44c4309b679a48e6bbd4c111262c42fe",
				"config": {}
			}, {
				"questionId": "1951a5e4573c40cc95d480b49b1e6446",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45cd",
			"questionDocId": "KB2L2U7FH_0000050",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uidd64ee9aed0234365ac1db96d50e598f6.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p><strong>Jane:</strong> What animals do you like?</p><p><strong>Dan:&nbsp;</strong><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p><p><strong>Jane:</strong>&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p><p><strong>Dan:</strong>&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "Ohh. So do I.",
				"contentIdx": "3"
			}, {
				"content": "I don't. They're so big. I like cats.",
				"contentIdx": "2"
			}, {
				"content": "I like horses.",
				"contentIdx": "1"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "b088590072da4387a6d6024d5da33e85",
				"content": "I like horses."
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "7627557f11ee4e328462b9cc93e7dc2f",
				"content": "I don't. They're so big. I like cats."
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "0aa5b19d5d474d05a331ef0f7a68e7e1",
				"content": "Ohh. So do I."
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "b088590072da4387a6d6024d5da33e85",
					"content": "I like horses."
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "7627557f11ee4e328462b9cc93e7dc2f",
					"content": "I don't. They're so big. I like cats."
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "0aa5b19d5d474d05a331ef0f7a68e7e1",
					"content": "Ohh. So do I."
				}],
				"completeTime": 1611825928168,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材11页",
			"config": {
				"optionsDisorderIds": [2, 1, 0]
			},
			"subQuestions": [{
				"questionId": "b088590072da4387a6d6024d5da33e85",
				"config": {}
			}, {
				"questionId": "7627557f11ee4e328462b9cc93e7dc2f",
				"config": {}
			}, {
				"questionId": "0aa5b19d5d474d05a331ef0f7a68e7e1",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45ce",
			"questionDocId": "KB2L3U2FH_0000010",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<span>Lenny lives in a village, in the country.&nbsp;</span><span>There are five houses in his&nbsp;</span><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_street_55uidd63a40ccde6f47faa9acce3b9d8b4abf.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" /><span>s</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>.&nbsp;</span><span>His house has got three floors. Lenny walks&nbsp;<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_stairs_12uid605e5d24ad354bd99080fc5c58f215d1.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />u</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;to his bedroom because there isn't a&nbsp;<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_lift_11uid3ca19f54a1bf4a9db6f5f374460f2f1a.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />l</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>.&nbsp;The living room and the kitchen are&nbsp;<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_downstairs_9uid9cf6a6ef5fca41b9b1e819cf9f6e4b29.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />d<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.&nbsp;His house hasn't got a&nbsp;<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uidc5b1609db42e48789db083fb202d0423.jpg\" width=\"60\" title=\"3\" alt=\"3\" height=\"45\" align=\"\" />b<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />, but it's got a beautiful garden.&nbsp;</span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readFillComplex",
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "a11e6da35d99462dac8e763e7f54b0c9",
				"content": "treet"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "c46d30c1a6a146a2b86f7223d1b8acfa",
				"content": "pstairs"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "b0c2e876c12b4c5ca00c1ac94b3497d7",
				"content": "ift"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "bdf65063c0404c4d8695f8d7d6eea1c4",
				"content": "ownstairs"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "617c5b9efe03441591ba2bfe5a8b8b8e",
				"content": "alcony"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"score": 100,
					"questionId": "a11e6da35d99462dac8e763e7f54b0c9",
					"content": "treet"
				}, {
					"score": 100,
					"questionId": "c46d30c1a6a146a2b86f7223d1b8acfa",
					"content": "pstairs"
				}, {
					"score": 100,
					"questionId": "b0c2e876c12b4c5ca00c1ac94b3497d7",
					"content": "ift"
				}, {
					"score": 100,
					"questionId": "bdf65063c0404c4d8695f8d7d6eea1c4",
					"content": "ownstairs"
				}, {
					"score": 100,
					"questionId": "617c5b9efe03441591ba2bfe5a8b8b8e",
					"content": "alcony"
				}],
				"completeTime": 1611826014176,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材12页",
			"config": {},
			"subQuestions": [{
				"questionId": "a11e6da35d99462dac8e763e7f54b0c9",
				"config": {}
			}, {
				"questionId": "c46d30c1a6a146a2b86f7223d1b8acfa",
				"config": {}
			}, {
				"questionId": "b0c2e876c12b4c5ca00c1ac94b3497d7",
				"config": {}
			}, {
				"questionId": "bdf65063c0404c4d8695f8d7d6eea1c4",
				"config": {}
			}, {
				"questionId": "617c5b9efe03441591ba2bfe5a8b8b8e",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45cf",
			"questionDocId": "KB2L3U8FH_0000067",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/6%E5%BC%A0uid18dc0a43132b4f2a9a7f6462be40ab77.jpg\" width=\"240\" title=\"1\" alt=\"6张.jpg\" /></p><p><span>It's hot and yellow.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p><span>It's cold and white.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p><span>It's strong.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p><span>It's wet.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p><span>It's white, grey or black.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p><span>It's beautiful.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span></p><p></p><p><br /></p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readFillComplex",
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "b2b7aef058c941ccaa3a465caf3de54e",
				"content": "sun|Sun|SUN"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "f040afc27bf94930aeafb3a78bbf658e",
				"content": "snow|Snow|SNOW"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "e9a64032a9f7439aac6aaea82fe06f53",
				"content": "wind|Wind|WIND"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "2f0a698b75bc4488932bfd23abec072f",
				"content": "rain|Rain|RAIN"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "2b8bff340cdf41a59db5daccc2cc3c11",
				"content": "cloud|Cloud|CLOUD"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "e1ae72ef7c784f499844d41a7b9012cf",
				"content": "rainbow|Rainbow|RAINBOW"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"score": 100,
					"questionId": "b2b7aef058c941ccaa3a465caf3de54e",
					"content": "sun"
				}, {
					"score": 100,
					"questionId": "f040afc27bf94930aeafb3a78bbf658e",
					"content": "snow"
				}, {
					"score": 100,
					"questionId": "e9a64032a9f7439aac6aaea82fe06f53",
					"content": "wind"
				}, {
					"score": 100,
					"questionId": "2f0a698b75bc4488932bfd23abec072f",
					"content": "rain"
				}, {
					"score": 100,
					"questionId": "2b8bff340cdf41a59db5daccc2cc3c11",
					"content": "cloud"
				}, {
					"score": 100,
					"questionId": "e1ae72ef7c784f499844d41a7b9012cf",
					"content": "rainbow"
				}],
				"completeTime": 1611826088617,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "b2b7aef058c941ccaa3a465caf3de54e",
				"config": {}
			}, {
				"questionId": "f040afc27bf94930aeafb3a78bbf658e",
				"config": {}
			}, {
				"questionId": "e9a64032a9f7439aac6aaea82fe06f53",
				"config": {}
			}, {
				"questionId": "2f0a698b75bc4488932bfd23abec072f",
				"config": {}
			}, {
				"questionId": "2b8bff340cdf41a59db5daccc2cc3c11",
				"config": {}
			}, {
				"questionId": "e1ae72ef7c784f499844d41a7b9012cf",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d0",
			"questionDocId": "KB2L3U4FH_0000026",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "<p>It's seven o'clock and Sally is in bed. Her mum comes in to wake her up. First, she has a shower and then she looks out of the&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. She's happy because she can see the&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. She puts on her&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;and skirt and goes downstairs for breakfast. At eight o'clock, she leaves the house and&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;to the bus stop.</p><p class=\"MsoNormal\">'Oh no!' she says. 'Where is my&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />?'</p><p class=\"MsoNormal\">She runs back to the house. Then she runs back to the bus stop.</p><p class=\"MsoNormal\">The&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;sees her and waits.</p><p class=\"MsoNormal\">'I'm lucky!' she says.</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "walks",
				"contentIdx": "4"
			}, {
				"content": "bus driver",
				"contentIdx": "6"
			}, {
				"content": "schoolbag",
				"contentIdx": "5"
			}, {
				"content": "sun",
				"contentIdx": "2"
			}, {
				"content": "window",
				"contentIdx": "1"
			}, {
				"content": "T-shirt",
				"contentIdx": "3"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "10c224dc07ea4de5924902597616c638",
				"content": "window"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "10733b5b817a4438a975e14fcb9ecba7",
				"content": "sun"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "e80ec43f0b4d4953b8d70c77329d7d56",
				"content": "T-shirt"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "59678feef6dd4604921270b56d8b0084",
				"content": "walks"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "ac75fa3325e749fca6911966cf2122dd",
				"content": "schoolbag"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "502088cb143f49a7adb19bf94df86712",
				"content": "bus driver"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "10c224dc07ea4de5924902597616c638",
					"content": "window"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "10733b5b817a4438a975e14fcb9ecba7",
					"content": "sun"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "e80ec43f0b4d4953b8d70c77329d7d56",
					"content": "T-shirt"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "59678feef6dd4604921270b56d8b0084",
					"content": "walks"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "ac75fa3325e749fca6911966cf2122dd",
					"content": "schoolbag"
				}, {
					"contentIdx": "6",
					"score": 100,
					"questionId": "502088cb143f49a7adb19bf94df86712",
					"content": "bus driver"
				}],
				"completeTime": 1611826161084,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {
				"optionsDisorderIds": [3, 5, 4, 1, 0, 2]
			},
			"subQuestions": [{
				"questionId": "10c224dc07ea4de5924902597616c638",
				"config": {}
			}, {
				"questionId": "10733b5b817a4438a975e14fcb9ecba7",
				"config": {}
			}, {
				"questionId": "e80ec43f0b4d4953b8d70c77329d7d56",
				"config": {}
			}, {
				"questionId": "59678feef6dd4604921270b56d8b0084",
				"config": {}
			}, {
				"questionId": "ac75fa3325e749fca6911966cf2122dd",
				"config": {}
			}, {
				"questionId": "502088cb143f49a7adb19bf94df86712",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d1",
			"questionDocId": "KB2L3U4FH_0000025",
			"questionDescription": "Read and choose.阅读填空--折行折行折行===============",
			"body": {
				"content": "The library is in Green street in Jim's town. He goes there to read&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;and comics, with his Aunt, Lily. 'We want two new story books today,' says Jim.<p class=\"MsoNormal\">'And then I need to buy some rice and some&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />,' Aunt Lily says.</p><p class=\"MsoNormal\">'Where do you go to buy food?' Jim asks.</p><p class=\"MsoNormal\">'The&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />,' Aunt Lily says. 'We must go there after the library.'</p><p class=\"MsoNormal\">'I'd like to see a film at the&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />, too, today,' John says.</p><p class=\"MsoNormal\">'We can go there before the bank,' Aunt Lily says.</p><p class=\"MsoNormal\">'We're having an exciting and busy day in town today,' Jim says. 'Can we play badminton in the&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />, too?'</p><p class=\"MsoNormal\">'No, sorry, you must do your&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />!' Aunt Lily says.</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "books",
				"contentIdx": "1"
			}, {
				"content": "supermarket",
				"contentIdx": "3"
			}, {
				"content": "sports centre",
				"contentIdx": "5"
			}, {
				"content": "cinema",
				"contentIdx": "4"
			}, {
				"content": "carrots",
				"contentIdx": "2"
			}, {
				"content": "homework",
				"contentIdx": "6"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "d33cb94b9c92440c90fd88a27a25012d",
				"content": "books"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "c9b72b0390544314b971aaeffee41bc4",
				"content": "carrots"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "0824c15cb211421bb81ac5fa595b2e6f",
				"content": "supermarket"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "04b14a90123d47c799f1fa3df6173678",
				"content": "cinema"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "b9b568ab99b34f1b83367c197a022993",
				"content": "sports centre"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "719c4525d272483fa52f2a743054fd15",
				"content": "homework"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "d33cb94b9c92440c90fd88a27a25012d",
					"content": "books"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "c9b72b0390544314b971aaeffee41bc4",
					"content": "carrots"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "0824c15cb211421bb81ac5fa595b2e6f",
					"content": "supermarket"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "04b14a90123d47c799f1fa3df6173678",
					"content": "cinema"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "b9b568ab99b34f1b83367c197a022993",
					"content": "sports centre"
				}, {
					"contentIdx": "6",
					"score": 100,
					"questionId": "719c4525d272483fa52f2a743054fd15",
					"content": "homework"
				}],
				"completeTime": 1611826320487,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材14页",
			"config": {
				"optionsDisorderIds": [0, 2, 4, 3, 1, 5]
			},
			"subQuestions": [{
				"questionId": "d33cb94b9c92440c90fd88a27a25012d",
				"config": {}
			}, {
				"questionId": "c9b72b0390544314b971aaeffee41bc4",
				"config": {}
			}, {
				"questionId": "0824c15cb211421bb81ac5fa595b2e6f",
				"config": {}
			}, {
				"questionId": "04b14a90123d47c799f1fa3df6173678",
				"config": {}
			}, {
				"questionId": "b9b568ab99b34f1b83367c197a022993",
				"config": {}
			}, {
				"questionId": "719c4525d272483fa52f2a743054fd15",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d2",
			"questionDocId": "KB2L3U1FH_0000011",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/3uidbcea0ee76fd64e6d9623344270a9fadd.jpg\" width=\"240\" title=\"3.jpg\" alt=\"3.jpg\" /></p><p><span>（1）Daisy's mum Sally has got&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;</span><span>fair hair.</span></p><p>（2）<span>Nick's got&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;</span><span>black hair.</span></p><p>（3）<span>Aunt Vicky's got&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;hair.</span></p><p>（4）<span>Uncle Jack has got short brown hair and a&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>.</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "12378987",
				"contentIdx": "3"
			}, {
				"content": "straight",
				"contentIdx": "1"
			}, {
				"content": "的的广泛地刚发的",
				"contentIdx": "4"
			}, {
				"content": "123",
				"contentIdx": "2"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "1",
				"questionId": "2e88f382b33946d8a86a2ad25be8b164",
				"content": "straight"
			}, {
				"contentIdx": "2",
				"explain": "2",
				"questionId": "6196090f8fdf4df1a8c4bcb4332f20ec",
				"content": "123"
			}, {
				"contentIdx": "3",
				"explain": "3",
				"questionId": "0132697e463c4d5b8685c5a0ee3bd1ac",
				"content": "12378987"
			}, {
				"contentIdx": "4",
				"explain": "4",
				"questionId": "404aa154ac9e4ce585f0a448b18876da",
				"content": "的的广泛地刚发的"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "2e88f382b33946d8a86a2ad25be8b164",
					"content": "straight"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "6196090f8fdf4df1a8c4bcb4332f20ec",
					"content": "123"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "0132697e463c4d5b8685c5a0ee3bd1ac",
					"content": "12378987"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "404aa154ac9e4ce585f0a448b18876da",
					"content": "的的广泛地刚发的"
				}],
				"completeTime": 1611826377563,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材24页",
			"config": {
				"optionsDisorderIds": [2, 0, 3, 1]
			},
			"subQuestions": [{
				"questionId": "2e88f382b33946d8a86a2ad25be8b164",
				"config": {}
			}, {
				"questionId": "6196090f8fdf4df1a8c4bcb4332f20ec",
				"config": {}
			}, {
				"questionId": "0132697e463c4d5b8685c5a0ee3bd1ac",
				"config": {}
			}, {
				"questionId": "404aa154ac9e4ce585f0a448b18876da",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d3",
			"questionDocId": "KB2L2U8FH_0000048",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p style=\"text-align:center;\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/3uid36184642775649d4aaf8ce11d8142519.jpg\" width=\"240\" title=\"1\" alt=\"3.jpg\" /></p><p><span>The blue book is&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></span><span>&nbsp;the sofa.</span></p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "on",
				"contentIdx": "1"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "f3c070db4f27460e8d6c32cb3f53f2e5",
				"content": "on"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "f3c070db4f27460e8d6c32cb3f53f2e5",
					"content": "on"
				}],
				"completeTime": 1611826423227,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材34页",
			"config": {
				"optionsDisorderIds": [0]
			},
			"subQuestions": [{
				"questionId": "f3c070db4f27460e8d6c32cb3f53f2e5",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d4",
			"questionDocId": "KB2L2U8FH_0000047",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uidd50ec0a6e16844aea475b30a1bb5e644.jpg\" width=\"240\" title=\"1\" alt=\"2.jpg\" /></p><p><span>It's behind the school. It's the p<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />。</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "123213",
				"contentIdx": "2"
			}, {
				"content": "ark",
				"contentIdx": "1"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "123123",
				"questionId": "fc64ca0f31884a31bd3ba897f45f98f5",
				"content": "ark"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "fc64ca0f31884a31bd3ba897f45f98f5",
					"content": "ark"
				}],
				"completeTime": 1611826692555,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材45页",
			"config": {
				"optionsDisorderIds": [1, 0]
			},
			"subQuestions": [{
				"questionId": "fc64ca0f31884a31bd3ba897f45f98f5",
				"config": {}
			}, {
				"questionId": "6a9da31e475d4b6782ecd55d058218e3",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d5",
			"questionDocId": "KB2L2U6FH_0000037",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid62290bb587274d07bf1115e853db2650.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p><span>Anna and her&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;are having breakfast in the kitchen. On the table, there are oranges and&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. Anna is drinking&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;and eating a&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. Anna's brother is very happy today. He is eating his favourite food. It's a small, white&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;with bread.&nbsp;</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "banana",
				"contentIdx": "4"
			}, {
				"content": "brother",
				"contentIdx": "1"
			}, {
				"content": "apples",
				"contentIdx": "2"
			}, {
				"content": "milk",
				"contentIdx": "3"
			}, {
				"content": "egg",
				"contentIdx": "5"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "ae5f49a3bb5c4f47b7a5c8e975094dd8",
				"content": "brother"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "c12288fe24274aff85942fc4a7304281",
				"content": "apples"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "5846ffdc1a194c5bb402ca815e68c627",
				"content": "milk"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "74ee22e8286f47d2a33ce7a56e6e0442",
				"content": "banana"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "4ca74327206c4155b85b1cf375c35284",
				"content": "egg"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "ae5f49a3bb5c4f47b7a5c8e975094dd8",
					"content": "brother"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "c12288fe24274aff85942fc4a7304281",
					"content": "apples"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "5846ffdc1a194c5bb402ca815e68c627",
					"content": "milk"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "74ee22e8286f47d2a33ce7a56e6e0442",
					"content": "banana"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "4ca74327206c4155b85b1cf375c35284",
					"content": "egg"
				}],
				"completeTime": 1611826736895,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材34页",
			"config": {
				"optionsDisorderIds": [3, 0, 1, 2, 4]
			},
			"subQuestions": [{
				"questionId": "ae5f49a3bb5c4f47b7a5c8e975094dd8",
				"config": {}
			}, {
				"questionId": "c12288fe24274aff85942fc4a7304281",
				"config": {}
			}, {
				"questionId": "5846ffdc1a194c5bb402ca815e68c627",
				"config": {}
			}, {
				"questionId": "74ee22e8286f47d2a33ce7a56e6e0442",
				"config": {}
			}, {
				"questionId": "4ca74327206c4155b85b1cf375c35284",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d6",
			"questionDocId": "KB2L2U5FH_0000036",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid3d5c5014384c4334a5ee3c5030a635dc.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p><span>I'm Lenny and this is my&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. My&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;is Kim and my&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;is Nick. Nelson is my</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;and Anna is my&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. I've got one&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;Frank. He's a baby.</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "cousin",
				"contentIdx": "6"
			}, {
				"content": "family",
				"contentIdx": "1"
			}, {
				"content": "grandpa",
				"contentIdx": "4"
			}, {
				"content": "daddy",
				"contentIdx": "3"
			}, {
				"content": "grandma",
				"contentIdx": "5"
			}, {
				"content": "mummy",
				"contentIdx": "2"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "449575dca5fd42cfb2f008cf3142d3c0",
				"content": "family"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "c5fb2f44ede549578ba027777d7ab755",
				"content": "mummy"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "3ce9ba594e434385b0107029d9bfa5ca",
				"content": "daddy"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "09d3534912504987bcc23bb8ca9c7041",
				"content": "grandpa"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "d27db55805e341e7bfa389b5a5c093d5",
				"content": "grandma"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "1003a888d44e43b9b5e7e8f24b5384f4",
				"content": "cousin"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "449575dca5fd42cfb2f008cf3142d3c0",
					"content": "family"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "c5fb2f44ede549578ba027777d7ab755",
					"content": "mummy"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "3ce9ba594e434385b0107029d9bfa5ca",
					"content": "daddy"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "09d3534912504987bcc23bb8ca9c7041",
					"content": "grandpa"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "d27db55805e341e7bfa389b5a5c093d5",
					"content": "grandma"
				}, {
					"contentIdx": "6",
					"score": 100,
					"questionId": "1003a888d44e43b9b5e7e8f24b5384f4",
					"content": "cousin"
				}],
				"completeTime": 1611826794989,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材24页",
			"config": {
				"optionsDisorderIds": [5, 0, 3, 2, 4, 1]
			},
			"subQuestions": [{
				"questionId": "449575dca5fd42cfb2f008cf3142d3c0",
				"config": {}
			}, {
				"questionId": "c5fb2f44ede549578ba027777d7ab755",
				"config": {}
			}, {
				"questionId": "3ce9ba594e434385b0107029d9bfa5ca",
				"config": {}
			}, {
				"questionId": "09d3534912504987bcc23bb8ca9c7041",
				"config": {}
			}, {
				"questionId": "d27db55805e341e7bfa389b5a5c093d5",
				"config": {}
			}, {
				"questionId": "1003a888d44e43b9b5e7e8f24b5384f4",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d7",
			"questionDocId": "KB2L2U4FH_0000019",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid904f6f42f3364adf8495d682d7883e6d.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" /></p><p><span>In my living room there is a big brown&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. It's not an&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. There's a small table next to the sofa. On the table, there's a white&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;and a grey&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>. There's a big grey TV and an orange and yellow mat. There's a white&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;and a pink&nbsp;</span><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>&nbsp;on the wall.&nbsp;</span></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "clock",
				"contentIdx": "5"
			}, {
				"content": "phone",
				"contentIdx": "4"
			}, {
				"content": "mirror",
				"contentIdx": "6"
			}, {
				"content": "armchair",
				"contentIdx": "2"
			}, {
				"content": "lamp",
				"contentIdx": "3"
			}, {
				"content": "sofa",
				"contentIdx": "1"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "7fd21316b1b54400970c73ea428c7b3b",
				"content": "sofa"
			}, {
				"contentIdx": "2",
				"explain": "",
				"questionId": "a16e5a5e5bef4cab88a6a5e125d55de8",
				"content": "armchair"
			}, {
				"contentIdx": "3",
				"explain": "",
				"questionId": "3a3c075c3fe54c99bb53699c9aa09e3f",
				"content": "lamp"
			}, {
				"contentIdx": "4",
				"explain": "",
				"questionId": "2b6c53a10d7b433fbe0bb8560105bb61",
				"content": "phone"
			}, {
				"contentIdx": "5",
				"explain": "",
				"questionId": "587e00a54f804525b0fd13e650ee6d0a",
				"content": "clock"
			}, {
				"contentIdx": "6",
				"explain": "",
				"questionId": "74d488b0253b4f19a0eb32f15a9202e4",
				"content": "mirror"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "7fd21316b1b54400970c73ea428c7b3b",
					"content": "sofa"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "a16e5a5e5bef4cab88a6a5e125d55de8",
					"content": "armchair"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "3a3c075c3fe54c99bb53699c9aa09e3f",
					"content": "lamp"
				}, {
					"contentIdx": "4",
					"score": 100,
					"questionId": "2b6c53a10d7b433fbe0bb8560105bb61",
					"content": "phone"
				}, {
					"contentIdx": "5",
					"score": 100,
					"questionId": "587e00a54f804525b0fd13e650ee6d0a",
					"content": "clock"
				}, {
					"contentIdx": "6",
					"score": 100,
					"questionId": "74d488b0253b4f19a0eb32f15a9202e4",
					"content": "mirror"
				}],
				"completeTime": 1611826927021,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材23页",
			"config": {
				"optionsDisorderIds": [4, 3, 5, 1, 2, 0]
			},
			"subQuestions": [{
				"questionId": "7fd21316b1b54400970c73ea428c7b3b",
				"config": {}
			}, {
				"questionId": "a16e5a5e5bef4cab88a6a5e125d55de8",
				"config": {}
			}, {
				"questionId": "3a3c075c3fe54c99bb53699c9aa09e3f",
				"config": {}
			}, {
				"questionId": "2b6c53a10d7b433fbe0bb8560105bb61",
				"config": {}
			}, {
				"questionId": "587e00a54f804525b0fd13e650ee6d0a",
				"config": {}
			}, {
				"questionId": "74d488b0253b4f19a0eb32f15a9202e4",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d8",
			"questionDocId": "KB2L2U1FH_0000012",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid1d40f348e53e43f18c2cec05e6834fc2.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" /></p><p><p><strong>A:</strong>&nbsp;What is the boy's name?</p><p><strong>B:&nbsp;</strong>The boy's name is&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p><br /></p><p><p><strong>A:&nbsp;</strong>How old is he?</p><p><strong>B:</strong>&nbsp;He's&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p><br /></p><p><strong>A:</strong>&nbsp;What is his favourite book?</p><p><strong>B:</strong>&nbsp;His favourite books is&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p><strong>A:</strong>&nbsp;Who is next to Dan?</p><p><strong>B:</strong>&nbsp;She's&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p></p><br /><p><strong>A:&nbsp;</strong>How old is she?</p><p><strong>B:</strong>&nbsp;She's&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readFillComplex",
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "02baa268bc654763aceeaf248104998d",
				"content": "Dan|dan|DAN"
			}, {
				"contentIdx": "2",
				"questionId": "71f1f39237db4352b4b9a1665184a02d",
				"content": "7|Seven|seven|SEVEN"
			}, {
				"contentIdx": "3",
				"questionId": "b43f682dcad743ef85cb9d527dddb62a",
				"content": "Kim|kim|KIM"
			}, {
				"contentIdx": "4",
				"questionId": "faa88d5dd3c04d1e8056f408e3e48ad3",
				"content": "Grace|grace|GRACE"
			}, {
				"contentIdx": "5",
				"questionId": "8145b411043146808b268652fe59333c",
				"content": "9|Nine|nine|NINE"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"score": 100,
					"questionId": "02baa268bc654763aceeaf248104998d",
					"content": "dan"
				}, {
					"score": 100,
					"questionId": "71f1f39237db4352b4b9a1665184a02d",
					"content": "7"
				}, {
					"score": 100,
					"questionId": "b43f682dcad743ef85cb9d527dddb62a",
					"content": "kim"
				}, {
					"score": 100,
					"questionId": "faa88d5dd3c04d1e8056f408e3e48ad3",
					"content": "grace"
				}, {
					"score": 100,
					"questionId": "8145b411043146808b268652fe59333c",
					"content": "9"
				}],
				"completeTime": 1611827065021,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材23页",
			"config": {},
			"subQuestions": [{
				"questionId": "02baa268bc654763aceeaf248104998d",
				"config": {}
			}, {
				"questionId": "71f1f39237db4352b4b9a1665184a02d",
				"config": {}
			}, {
				"questionId": "b43f682dcad743ef85cb9d527dddb62a",
				"config": {}
			}, {
				"questionId": "faa88d5dd3c04d1e8056f408e3e48ad3",
				"config": {}
			}, {
				"questionId": "8145b411043146808b268652fe59333c",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45d9",
			"questionDocId": "KB2L1U7FH_0000044",
			"questionDescription": "选词填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_1_7_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_14_%E5%89%AF%E6%9C%ACuid174c5d30dfb94f0d809cf615367653a3.jpg\" width=\"240\" title=\"1\" alt=\"KB_1_7_跟读句子_图片_14_副本.jpg\" /></p><p><br /></p><p class=\"ql-long-71030\"><strong>Suzy</strong>: <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p><p class=\"ql-long-71030\"><strong>Simon</strong>: No, they haven't.</p><p class=\"ql-long-71030\"><strong>Suzy</strong>: <img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p><p class=\"ql-long-71030\"><strong>Simon</strong>: Yes, they have.&nbsp;</p><p class=\"ql-long-71030\"><strong>Suzy</strong>:&nbsp;<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p><p class=\"ql-long-71030\"><strong>Simon</strong>:&nbsp;They've got four legs.&nbsp;</p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "selectFillComplex",
			"options": [{
				"content": "Have they got legs?",
				"contentIdx": "2"
			}, {
				"content": "Have they got small ears?",
				"contentIdx": "1"
			}, {
				"content": "How many legs have they got?",
				"contentIdx": "3"
			}],
			"answers": [{
				"contentIdx": "1",
				"explain": "",
				"questionId": "0d5f244f3a2d4490b18ac982096d7aba",
				"content": "Have they got small ears?"
			}, {
				"contentIdx": "2",
				"questionId": "0fe6ddea52674db8aee0e8e4294ab7a1",
				"content": "Have they got legs?"
			}, {
				"contentIdx": "3",
				"questionId": "78a749314088455d8705af26f36546cf",
				"content": "How many legs have they got?"
			}],
			"userAnswer": {
				"score": 100.0,
				"answers": [{
					"contentIdx": "1",
					"score": 100,
					"questionId": "0d5f244f3a2d4490b18ac982096d7aba",
					"content": "Have they got small ears?"
				}, {
					"contentIdx": "2",
					"score": 100,
					"questionId": "0fe6ddea52674db8aee0e8e4294ab7a1",
					"content": "Have they got legs?"
				}, {
					"contentIdx": "3",
					"score": 100,
					"questionId": "78a749314088455d8705af26f36546cf",
					"content": "How many legs have they got?"
				}],
				"completeTime": 1611827109232,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材23页",
			"config": {
				"optionsDisorderIds": [1, 0, 2]
			},
			"subQuestions": [{
				"questionId": "0d5f244f3a2d4490b18ac982096d7aba",
				"config": {}
			}, {
				"questionId": "0fe6ddea52674db8aee0e8e4294ab7a1",
				"config": {}
			}, {
				"questionId": "78a749314088455d8705af26f36546cf",
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45da",
			"questionDocId": "KB2L2U6FH_0000038",
			"questionDescription": "阅读理解-选择",
			"body": {
				"content": "<img src=\"http://test.enrt.diplotalk.unischool.cn/pic/question/imageuid6e550925dc144d3ba045695f56b985cf.png\" width=\"240\" title=\"1\" alt=\"image.png\" />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827195872,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材23页",
			"config": {},
			"subQuestions": [{
				"questionId": "9977e6732b204de0b3c5b416daebdd3b",
				"body": {
					"content": "<p>What are you doing?</p>",
					"type": "",
					"audioInfo": {
						"url": "http://test.enres.diplotalk.unischool.cn/audio/question/22cd3fb6-17568a9a022uid5e52eadbdce34266a9382ff1e7554b00.mp3?auth_key=1611825639322-6b5761197e8648c5a94a15b8b581d9d5-0-0431ba797142ab3cc3961d6e7bc83a44&auth_key=1611829180277-0-0-fd0c537331a88e4c6e225317abfceaa0",
						"duration": -1,
						"unit": "ms"
					}
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "<p>She's having breakfast.</p>",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "<span>They're having tea.</span>",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "We're having dinner.",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "We're having dinner."
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["We're having dinner."]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "67a814c82d034b01b05c0ef440094c6b",
				"body": {
					"content": "What's for dinner?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Chicken and rice.",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Yes, it is.",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "I'm making dinner.",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Chicken and rice."
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Chicken and rice."]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "12d8582412c0483e962785dac2a1a548",
				"body": {
					"content": "Can I have a drink, please?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "I'm drinking.",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Do you like chicken?",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "Milk, water or fruit juice?",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "Milk, water or fruit juice?"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Milk, water or fruit juice?"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "972ac3ce7da548189aecd5120e3ba87e",
				"body": {
					"content": "Can I have some bread, please?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "No, you're not.",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Here you are.",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "I like brown bread.",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "Here you are."
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Here you are."]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45db",
			"questionDocId": "KB2L2U12FH_0000065",
			"questionDescription": "阅读理解-选择",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid62398e6cafec47d99f4caf60e0a6c559.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p>Marie wants to go on holiday. She's getting her clothes. She wants her new dress, her new shoes, and her new sunhat and sunglasses. She'd like to swim and pick up shells and she loves walking on the sand.&nbsp;</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827225841,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "892a25b85e2a41198504e99dbe76d3a8",
				"body": {
					"content": "What does Marie want for her holiday?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Her new dress.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Her notebooks.<br />",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "Her skirt.",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Her new dress.<br />"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Her new dress.<br />"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "50eeb9a7efe04f84a6592dbbb8cff57d",
				"body": {
					"content": "What does Marie want to do?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "She wants to fly a kite.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "<p>She wants to swim.</p>",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "<p>She wants to jump.</p>",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "<p>She wants to swim.</p>"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["<p>She wants to swim.</p>"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "21970be09cc5445abb13c7fa7a2c31b0",
				"body": {
					"content": "What does Marie love doing?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "She loves walking on the street.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "<p>She loves walking on the sand.</p>",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "<p>She loves running on the sand.</p>",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "<p>She loves walking on the sand.</p>"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["<p>She loves walking on the sand.</p>"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "d068b4f6eeb84328b6382aed804b0a32",
				"body": {
					"content": "Where is Marie going?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "<p>To a city.</p>",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "To the mountains.",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "To the beach.",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "To the beach."
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["To the beach."]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45dc",
			"questionDocId": "KB2L2U12FH_0000064",
			"questionDescription": "阅读理解-选择",
			"body": {
				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid924c3d6e38f84366bf9e381064211178.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827242662,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "1733b53f7a7049b186a43ac3c5f168a2",
				"body": {
					"content": "Does Daniel want a new bike?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Yes, he does.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "No, he doesn't.&nbsp;",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Yes, he does.<br />"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes, he does.<br />"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "a6710f59106c4a51b3f66606f406bed5",
				"body": {
					"content": "Does Daniel want a small kite?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "<p>Yes, he does.</p>",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "No, he doesn't.&nbsp;",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "No, he doesn't.&nbsp;"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No, he doesn't.&nbsp;"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "6d0554d1cdd44bc08f7d359026b3eb95",
				"body": {
					"content": "What does Daniel want to do?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "He wants a big kite.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "He wants to fly a kite on the beach.",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "He wants to fly a kite on the beach."
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["He wants to fly a kite on the beach."]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "74c6e228d4194e90a748b0161537ac83",
				"body": {
					"content": "Where does Daniel want to go?",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "He wants to go to the beach.<br />",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "He wants a chocolate cake.",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "He wants to go to the beach.<br />"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["He wants to go to the beach.<br />"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45dd",
			"questionDocId": "KB2L3U7FH_0000063",
			"questionDescription": "阅读理解-选择",
			"body": {
				"content": "<p align=\"justify\" class=\"ql-align-justify\">Yesterday Robin was with his older cousin Pete. Pete is richer than Robin. He lives in a very big castle on an island. He loves water and he goes swimming every day in any weather. He was in the sea yesterday morning when there wasn't any sun and it was very windy. The weather was better in the afternoon and they went fishing.&nbsp;Pete loves fishing but he isn't very strong. After three hours there weren't any fish in his basket. There were five fish in Robin's basket. He was happy but Pete was very angry!</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827257186,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "287e78c5e4504e89baffbd0bfa9f1ad6",
				"body": {
					"content": "<li class=\"\">Who is younger?</li>",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Robin",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Pete",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Robin"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Robin"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "38c8872f6b3946daa67e67d048bbed8e",
				"body": {
					"content": "<li class=\"\">When was the weather worse?</li>",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "afternoon",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "morning",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "morning"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["morning"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "da685ab34f9645e880d9c9c0aacb1ab5",
				"body": {
					"content": "<li class=\"\">Who is better at catching fish?</li>",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Robin",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Pete",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Robin"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Robin"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "701fbf1c2ba04c478b33a03e1ecf0a4c",
				"body": {
					"content": "<li class=\"\">Who was happier in the afternoon?</li>",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Robin",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Pete",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Robin"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Robin"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45de",
			"questionDocId": "KB2L3U7FH_0000062",
			"questionDescription": "阅读理解-选择",
			"body": {
				"content": "<span><p style=\"text-align:left;\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid4feab82af54b4a17bc4cca8c9b56eae8.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /></p><p>There are red kangaroos <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />grey kangaroos. The kangaroo<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />in a country called Australia. A red kangaroo is bigger<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> a grey kangaroo. A kangaroo <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />got a very long tail and a long face.</p><p>&nbsp;</p><p>This animal can't run but<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />can move really fast! Kangaroos are&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> than people.</p></span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "clozeFillComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827275892,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "c6936dc0209243f0afb25516120ffa1b",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "and",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "but",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "because",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "and"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["and"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "3dc12cf16bad4ae196da09117528ae13",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "lived",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "living",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "lives",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "lives"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["lives"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c4881dc49bce415789ed36ba6f619120",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "then",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "than",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "that",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "than"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["than"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "3e0458337fe943678bd592319358735b",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "has",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "is",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "have",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "has"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["has"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "bbc810bccc614ecdaed900c50539ee0e",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "it's",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "to",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "it",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "it"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["it"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "220a65222ab54a06b9bbc6c8563a5079",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "strong",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "stronger",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "weak",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "stronger"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["stronger"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45df",
			"questionDocId": "KB2L3U2FH_0000008",
			"questionDescription": "判断",
			"body": {
				"content": "<p class=\"MsoNormal\"><strong><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E9%A2%98%E5%B9%B2uid496bbb668f1c446a8db83548439594c1.jpg\" width=\"240\" title=\"1\" alt=\"题干.jpg\" /><br /></strong></p><p class=\"MsoNormal\"><strong>Lock:</strong> This is a lovely old house, Mrs. Potts.</p><p class=\"MsoNormal\"><strong>Mrs. Potts:</strong> Thank you, Detective Lock. Do you live in a house?</p><p class=\"MsoNormal\"><strong>Lock:</strong> Yes, but I'd like to live in a new flat because blocks of flats haven't got monsters! My dream home is in the centre of the town next to the river. It's got three big bedrooms and two bathrooms. The kitchen and living room are one room. There is a big balcony. There are twenty floors and I have to get a lift upstairs and downstairs. There isn't a basement in my dream home!</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827301513,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材9页",
			"config": {},
			"subQuestions": [{
				"questionId": "d9bace696b0a495e96b257ea5d535d49",
				"body": {
					"content": "Lock wants to live in the country.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "df956062ce224680bac4e3c94e7b5557",
				"body": {
					"content": "Lock wants a flat with a big balcony.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "4a094c9dd2bc4f27b46c2b8e7b0a405a",
				"body": {
					"content": "Lock wants a flat with a basement.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "20b7f17af74b462d80834f1e8c8445df",
				"body": {
					"content": "Lock wants a flat with three bedrooms.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e0",
			"questionDocId": "KB2L3U0FH_0000006",
			"questionDescription": "判断",
			"body": {
				"content": "<p class=\"MsoNormal\">My friends are called John and Daisy. John can ride a bike, but he can't swim. He can play the piano and he can play badminton. Daisy can ride a bike, swim and play the piano. She can't play badminton.</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827313772,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材45页",
			"config": {},
			"subQuestions": [{
				"questionId": "2983aaa6cd174a1bba41c91d338fe830",
				"body": {
					"content": "John can ride a bike and he can play the piano.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "73f06f38a4e04e27a90d62c1143bf719",
				"body": {
					"content": "Daisy can swim, but she can't play the piano.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "54493a48728645e5a542f42a0757128f",
				"body": {
					"content": "Daisy can play badminton.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e1",
			"questionDocId": "KB2L2U4FH_0000022",
			"questionDescription": "判断",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uid991a4cd7dadd486d8cbbffff44ba7e4c.jpg\" width=\"240\" title=\"2.jpg\" alt=\"2.jpg\" /></p><p><span></span></p><p class=\"ql-long-33734733\"><strong>Maskman: </strong>Let's play hide and seek.</p><p class=\"ql-long-33734733\"><strong>Marie:</strong> Trevor, close your eyes and count to 20.</p><p class=\"ql-long-33734733\"><strong>Trevor:</strong> … 15, 16, 17, 18, 19, 20. I'm coming.</p><p class=\"ql-long-33734733\"><strong>Trevor:</strong> Where are they? Whose is that tail? Ha ha! I can see&nbsp;you, Monty. &nbsp;You're under the armchair.</p><p class=\"ql-long-33734733\"><strong>Monty:</strong> OK. Well done, Trevor.</p><p class=\"ql-long-33734733\"><strong>Monty:</strong> Look. Whose feet are those?&nbsp;Come out, Maskman. We can see you next to the bookcase.</p><p class=\"ql-long-33734733\"><strong>Maskman:</strong> Now, where's Marie?</p><p class=\"ql-long-33734733\"><strong>Monty:</strong> Marie's in the cupboard. Look! That's her hair.</p><p class=\"ql-long-33734733\"><strong>Maskman:</strong> Eek! What's that?</p><p class=\"ql-long-33734733\"><strong>Monty:</strong> It's a toy horse.</p><p class=\"ql-long-33734733\"><strong>Marie:</strong> I win!</p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827329080,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材56页",
			"config": {},
			"subQuestions": [{
				"questionId": "2f6ccb6ed171410484a69423015321a1",
				"body": {
					"content": "The tail is Monty's.&nbsp;",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c49a48487e1a4ebbad2f5d82a5452823",
				"body": {
					"content": "The feet are Trevor's.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c6e3c6d844664e62aabea9e24db02807",
				"body": {
					"content": "The feet are Maskman's.&nbsp;",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "96672fc237794b08b33d2b2587f3ae85",
				"body": {
					"content": "The hair is Marie's.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e2",
			"questionDocId": "KB2L2U3FH_0000015",
			"questionDescription": "判断",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uida54fe0f8107d4a15aedea2daf3f6f2d5.jpg\" width=\"240\" title=\"2.jpg\" alt=\"2.jpg\" /></p><p><br /></p><p class=\"ql-long-33734733\"><strong>Trevor: </strong>Whose is this robot?</p><p class=\"ql-long-33734733\"><strong>Maskman:</strong> It's Simon's.</p><p class=\"ql-long-33734733\"><strong>Trevor: </strong>Hello. What's your name?</p><p class=\"ql-long-33734733\"><strong>Robot:</strong> My name is Metal Mouth.</p><p class=\"ql-long-33734733\"><strong>Trevor:</strong> Oh. Can you walk, Metal Mouth?</p><p class=\"ql-long-33734733\"><strong>Robot: </strong>I can walk and I can talk.</p><p class=\"ql-long-33734733\"><strong>Maskman: </strong>Well, I can walk. I can talk, and I can spell. U–g–l–y.</p><p class=\"ql-long-33734733\"><strong>Trevor: </strong>I know! I know! … It's ugly!</p><p class=\"ql-long-33734733\"><strong>Maskman:</strong> Yes, it is … and it can't fly.</p><p class=\"ql-long-33734733\"><strong>Marie:</strong> Maskman! Say ‘sorry’, please.</p><p class=\"ql-long-33734733\"><strong>Maskman: </strong>Sorry.</p><p class=\"ql-long-33734733\"><strong>Monty:</strong> It's OK, Maskman. You're a superhero and you're Simon's&nbsp;favourite toy.</p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827347630,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材55页",
			"config": {},
			"subQuestions": [{
				"questionId": "2da3fceea7fc47999c23826432030ed4",
				"body": {
					"content": "Metal Mouth is Stella's robot.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "ae49311bb6ad472a9c46456dd3643aef",
				"body": {
					"content": "<span>Metal Mouth can walk and talk.&nbsp;</span>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "b5a62e65fa78487a817e0fda4312477b",
				"body": {
					"content": "Maskman can't spell.&nbsp;",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "dfd912de0d2a425fbbfed55d6b6a3a1a",
				"body": {
					"content": "Metal Mouth can fly.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "95e6afe9a9c84350849b12ba46e80507",
				"body": {
					"content": "Maskman is Simon's favourite toy.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e3",
			"questionDocId": "KB2L2U3FH_0000028",
			"questionDescription": "判断",
			"body": {
				"content": "<span style=\"color:rgba(0, 0, 0, 0.85);font-family:Arial, PingFang-SC, Avenir, Helvetica, sans-serif;font-size:14px;background-color:#FFFFFF;\">The robot is Simon's but Maskman is Simon's favourite toy. The kite is Suzy's but Monty is Suzy's favourite toy. The computer game is Stella's but Marie is Stella's favourite toy.&nbsp;</span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827368213,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材45页",
			"config": {},
			"subQuestions": [{
				"questionId": "cea5ed3fb5724a708eeb89a1671f9c67",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid6dd9dbd81ed14bb5a052009f03a925ee.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" /></p><p>This is Simon's favourite toy.</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "df204db8c229420bb1e7b8f8ecc4d052",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/5uidaa75aa0d888444448c1ccaa77598967d.jpg\" width=\"240\" title=\"5.jpg\" alt=\"5.jpg\" /></p><p>This is Stella's toy.</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "8628e8732c464d09bc329a2f9c064a9a",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/3uiddfafdcb51db14918b50a78c5017de5ed.jpg\" width=\"240\" title=\"3.jpg\" alt=\"3.jpg\" /></p><p>This is Stella's favourite toy.</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "8239821ecc17452ba4ad5a82013cc9ac",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/4uid5dd22258b4c74d00ad5e00ffd90ccfc6.jpg\" width=\"240\" title=\"4.jpg\" alt=\"4.jpg\" /></p><p><span>This is Suzy's.</span></p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "6316700d58a544b3b4a3255eb8c2a44f",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uid81dc9e51cc8147cabd8bd16f28b105ee.jpg\" width=\"240\" title=\"2.jpg\" alt=\"2.jpg\" /></p><p>This is Suzy's favourite toy.</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "6304c2e4e2fb496cbc4da4860e930865",
				"body": {
					"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/6uid926816489bc3481ba57192a65ed30e4e.jpg\" width=\"240\" title=\"6.jpg\" alt=\"6.jpg\" /></p><p>This is Stella's.</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e4",
			"questionDocId": "KB2L2U2FH_0000013",
			"questionDescription": "判断",
			"body": {
				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uidb91aecc609b647b6bf7b6225053e6849.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827384252,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材34页",
			"config": {},
			"subQuestions": [{
				"questionId": "670a8a505eaa4b97aaad6247e37a8a4c",
				"body": {
					"content": "There are two teachers in the classroom.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "8ef4dceaaffe400eadc356c31950e7f0",
				"body": {
					"content": "There is a door next to the cupboard.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "a851b2322a2b4180aaf118f9bdacd903",
				"body": {
					"content": "There is a board on the wall.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "206cf60c3c4f4cc981ca0f61264b0e91",
				"body": {
					"content": "There are two tables under the board.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c6f409582f7649319e5888fe85003aef",
				"body": {
					"content": "There is a ruler on the bookcase.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "d3ddb56ba60c430c9c317867a3fca717",
				"body": {
					"content": "There are two cars under the desk.",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e5",
			"questionDocId": "KB2L1U9FH_0000055",
			"questionDescription": "判断",
			"body": {
				"content": "<p class=\"ql-long-71030\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/rideabikeuidb482b25d679a40fa90120c0f3e40cf54.jpg\" width=\"240\" title=\"2\" alt=\"2\" height=\"180\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/playtennisuidacd90961b9504bfbb6e74e80dc9b74a6.jpg\" width=\"240\" title=\"2\" alt=\"2\" height=\"180\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/swimuid8931056b8c894fddaab2d8833680dc41.jpg\" width=\"240\" title=\"2\" alt=\"2\" height=\"180\" align=\"\" /></p><p class=\"ql-long-71030\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/play%20footballuid641f86cd6e554982938002c1087681f6.jpg\" width=\"240\" title=\"2\" alt=\"2\" height=\"180\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/playbasketballuid3f72665d1e53483b91165d9c1635b704.jpg\" width=\"240\" title=\"2\" alt=\"2\" height=\"180\" align=\"\" /></p><p class=\"ql-long-71030\">Maskman can ride a bike and play tennis. He can swim and he can play football. He can play basketball but he can't play the guitar and he can't sing.&nbsp;</p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readJudgeComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827401288,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材13页",
			"config": {},
			"subQuestions": [{
				"questionId": "09bd43dd0319425db40fc01e4b303c48",
				"body": {
					"content": "<p class=\"ql-long-71030\">Maskman can sing.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "223238b309e24c0690340fdb3be042c0",
				"body": {
					"content": "<p class=\"ql-long-71030\">He can play basketball.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "637d88e7195e43d2b7738b0226f6e05b",
				"body": {
					"content": "<p class=\"ql-long-71030\">He can play tennis.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "35101d86cb8a4bed9f0939826e8107e7",
				"body": {
					"content": "<p class=\"ql-long-71030\">He can play the guitar.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "00ea7920758f4aeaa52fd6d9ca22c860",
				"body": {
					"content": "<p class=\"ql-long-71030\">He can play football.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "1",
					"answerImg": "",
					"content": "Yes"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Yes"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "1b4f30d4503243bca56090c03b2a699c",
				"body": {
					"content": "<p class=\"ql-long-71030\">He can't swim.&nbsp;</p>",
					"type": ""
				},
				"structure": "8",
				"templateType": "YNJudge",
				"options": [{
					"content": "Yes",
					"contentIdx": "1"
				}, {
					"content": "No",
					"contentIdx": "0"
				}],
				"answers": [{
					"contentIdx": "0",
					"answerImg": "",
					"content": "No"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["No"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e6",
			"questionDocId": "KB2L2U4FH_0000021",
			"questionDescription": "完形填空",
			"body": {
				"content": "<p><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid47a567bbc0384ecc9b494ddd6000cdd2.jpg\" width=\"240\" title=\"1.jpg\" alt=\"1.jpg\" /></p><p><br /></p><p class=\"ql-long-33734733\"><strong>Alex:</strong>&nbsp;Whose is<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />camera?</p><p class=\"ql-long-33734733\"><strong>Meera:</strong>&nbsp;It's mine.</p><p class=\"ql-long-33734733\"><strong>Alex:</strong>&nbsp;Whose are&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />balls?</p><p class=\"ql-long-33734733\"><strong>Meera:</strong>&nbsp;They aren't mine. They're&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />!</p><p class=\"ql-long-33734733\"><strong>Alex:</strong>&nbsp;Oh, yes.&nbsp;<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />are those lorries?</p><p class=\"ql-long-33734733\"><strong>Meera:</strong>&nbsp;They're<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p class=\"ql-long-33734733\"><strong>Alex:</strong>&nbsp;Whose is that watch?</p><p class=\"ql-long-33734733\"><strong>Meera:</strong><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />yours, Alex！</p><p><br /></p>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "clozeFillComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827419407,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材1页",
			"config": {},
			"subQuestions": [{
				"questionId": "72297c3bdab0434fbb4d1f7f32037668",
				"body": {
					"content": "<span><p class=\"ql-long-33734733\">&nbsp;</p></span>&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "that",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "those",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "that"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["that"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "8df03bc395214ab9b34ab73a90965ab0",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "that",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "those",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "those"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["those"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "7c6948b25c5b4eb8a46450ce6297a1ee",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "mine",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "yours",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "yours"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["yours"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "a07491cb4e174b4bb3b1dd70fc8426d0",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Whose",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Which",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Whose"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Whose"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c7e6ceb37ce64fe78ad2a1052f67332e",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "mine",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "yours",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "mine"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["mine"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "1e2ca4add3e44044903449db4887c964",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "It's",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "They're",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "It's"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["It's"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e7",
			"questionDocId": "KB2STU2_0000005",
			"questionDescription": "完形填空",
			"body": {
				"content": "<span><p class=\"ql-long-71030\"><strong>Lenny: </strong>Hello. I'm Lenny. <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />your name?</p><p class=\"ql-long-71030\"><strong>Stella:</strong> Stella.<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> that?</p><p class=\"ql-long-71030\"><strong>Lenny:</strong> That's Alex. He's my friend.</p><p class=\"ql-long-71030\"><strong>Stella</strong><strong>: </strong><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;is he?</p><p class=\"ql-long-71030\"><strong>Lenny:</strong> He's six. Who's that? <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />she your friend?</p><p class=\"ql-long-71030\"><strong>Stella: </strong>Yes, she <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. That's Meera.</p><p class=\"ql-long-71030\"><strong>Lenny:</strong> Is she six?</p><p class=\"ql-long-71030\"><strong>Stella:</strong> No, she isn't. She's eight.</p><p class=\"ql-long-71030\"><strong>Lenny:</strong> I'm seven. How old are you?</p><p class=\"ql-long-71030\"><strong>Stella:</strong><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />seven, too.</p></span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "clozeFillComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827436411,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材2页",
			"config": {},
			"subQuestions": [{
				"questionId": "ae36ea49d5b540139d6cbbd3a886f91e",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "What's&nbsp;",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "How's",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "What's&nbsp;"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["What's&nbsp;"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "b2e9aca807d946a7ba379c19c36b0245",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Who's",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "How's",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Who's"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Who's"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "3fc10842c0514d218c09f1d2951f875f",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "How",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "How old",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "How old"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["How old"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "62b48611fec9407aa1b03edab528ce08",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Isn't",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Is",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "Is"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Is"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "582109d46b154c0babefc9a1d9cefdeb",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "isn't",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "is",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "is"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["is"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "0a4ab3d28bd44738a8393fbcc4ed26e7",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "I is",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "I am",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "I am"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["I am"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e8",
			"questionDocId": "KB2L3U6FH_0000052",
			"questionDescription": "完形填空",
			"body": {
				"content": "<span><p align=\"left\" class=\"ql-align-left ql-long-33734733\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/12uid88818095e16f43f9996afa1f178b9929.jpg\" width=\"240\" title=\"1\" alt=\"12.jpg\" /></p><p align=\"left\" class=\"ql-align-left ql-long-33734733\">The Star family are having a day in the countryside.</p><p align=\"left\" class=\"ql-align-left ql-long-33734733\">Now Grandma Star is ___ a picture of a baby cow. Grandpa Star is <span>___</span> a big fish. Mr and Mrs Star&nbsp;<span>___</span>. Stella <span>___</span> a tree. Simon's <span>___</span>. He wants to eat.</p><p align=\"left\" class=\"ql-align-left ql-long-33734733\"><span>'___</span> I open the picnic basket?' he says.</p><p align=\"left\" class=\"ql-align-left ql-long-33734733\">'Good idea,' says Suzy, 'I'm thirsty.'</p></span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "clozeFillComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827453590,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材3页",
			"config": {},
			"subQuestions": [{
				"questionId": "aaf081ff3a8749e393a9c5c4a65cb0db",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "painting",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "paint",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "paints",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "painting"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["painting"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "a22304796cf34d85a6ea42d4aeabcd6c",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "catch",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "catching",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "catches",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "catching"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["catching"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "b95f3bc6a7814afa9de10183988ec4a8",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "relax",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "are relaxing",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "relaxes",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "are relaxing"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["are relaxing"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c6eee140e6d14764bd5dd9ef3e0bd445",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "draws",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "draw",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "is drawing",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "3",
					"content": "is drawing"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["is drawing"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "47563fbc73bd44a28aa156ecc8799002",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "thirsty",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "hungry",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "hot",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "hungry"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["hungry"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "d956ae199ed4494c8ce859844a6084cf",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Shall",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Need",
					"type": "",
					"contentIdx": "2"
				}, {
					"content": "What",
					"type": "",
					"contentIdx": "3"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Shall"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Shall"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45e9",
			"questionDocId": "KB2L3U4FH_0000027",
			"questionDescription": "完形填空",
			"body": {
				"content": "<span><p><strong><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/1uid0766255a26cc4310b83160e9a2e8a32c.jpg\" width=\"240\" title=\"1\" alt=\"1.jpg\" /><br /></strong></p><p><strong>Charlie:</strong>&nbsp;Hey! You are <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />that tree Mary, and I love trees!</p><p><strong>Mary:</strong> Yes, so do I. Sorry. You're right.</p><p><strong>Charlie:</strong> Let's play football over there in the <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p><strong>Mary:</strong> No, we can't. Those toys are for small <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p><p><strong>Charlie:</strong> Oh, yes. Do you want to play football?</p><p><strong>Mary:</strong> Yes, but we can't play next to the <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. Let's go there.</p><p><strong>Charlie:</strong> Yes, that's a great place to <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />.</p></span>",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "clozeFillComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827467032,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材4页",
			"config": {},
			"subQuestions": [{
				"questionId": "2fd6a97da84a49329df84a3ff7ce6d7b",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "helping",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "breaking",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "breaking"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["breaking"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "990f77cc21db494a9c7b9805ee9f0b4d",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "library",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "playground",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "playground"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["playground"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "0b13a6c512a048c8a76e6449fb029fed",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "children",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "pets",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "children"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["children"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "beaf84157b384030bad9ef6b961ba772",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "flowers",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "cinema",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "flowers"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["flowers"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "6d62bfe3691b4e83a1144153cf5d911e",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "play football",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "buy food",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "play football"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["play football"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45ea",
			"questionDocId": "KB2L3U2FH_0000007",
			"questionDescription": "完形填空",
			"body": {
				"content": "&nbsp;<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uidef834afe4cdc4f94a58bbe960fa93211.jpg\" width=\"240\" title=\"2.jpg\" alt=\"2.jpg\" />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827480233,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材5页",
			"config": {},
			"subQuestions": [{
				"questionId": "f14f9b9cc4a24555a854be7c36b24d8d",
				"body": {
					"content": "The men _____ the sofa.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "are carrying",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "is carrying",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "are carrying"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["are carrying"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "988d22bfe298488082fad8cd6db484c9",
				"body": {
					"content": "The woman _____ the window.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "<div>is painting<br /></div>",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "is cleaning",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "is cleaning"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["is cleaning"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "c4543e1da13348cea4fd539cb30d157a",
				"body": {
					"content": "The girl is _____ upstairs.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "going",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "taking",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "going"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["going"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "df7883d226f348008a5c873d87e12717",
				"body": {
					"content": "The boy _____ on the floor.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "is sitting",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "are sitting",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "is sitting"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["is sitting"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "bf01dd29ce6c4f269d389c99bb8dadec",
				"body": {
					"content": "The boy is _____ a box.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "next to",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "between",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "next to"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["next to"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "642336db7f194f438f90c843737ca891",
				"body": {
					"content": "The boy's _____ a comic.",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "<span>riding</span>",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "<span>reading</span>",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "<span>reading</span>"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["<span>reading</span>"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}, {
			"questionId": "601281ac837abe0001ed45eb",
			"questionDocId": "KB2L1U6FH_0000040",
			"questionDescription": "完形填空",
			"body": {
				"content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E9%A2%98%E5%B9%B2%E5%9B%BE%E7%89%87uid594b49e1baad41cc8bf3150c1f88173c.jpg\" width=\"240\" title=\"1\" alt=\"题干图片.jpg\" />",
				"type": "RICHTEXT"
			},
			"structure": "9",
			"templateType": "readSelectComplex",
			"userAnswer": {
				"score": 100.0,
				"completeTime": 1611827495077,
				"correctStatus": 1
			},
			"explain": {},
			"page": "教材6页",
			"config": {},
			"subQuestions": [{
				"questionId": "9461988d4b414a858fbb426466e31ccb",
				"body": {
					"content": "&nbsp;&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Murk",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Moss",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Murk"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Murk"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "dae785a4eb334f0981a44b105d37152a",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Murk",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Moss",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "Moss"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Moss"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "f6b78f6ddb554edaa29a4b19a2a750ed",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Murk",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Moss",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "Moss"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Moss"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "b2c8d79e585e4bfc936e9e48ea21fc86",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Murk",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Moss",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "1",
					"content": "Murk"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Murk"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}, {
				"questionId": "14b60ffd2a154ddeb9529560c6b3f070",
				"body": {
					"content": "&nbsp;",
					"type": ""
				},
				"structure": "0",
				"templateType": "textSelect",
				"options": [{
					"content": "Murk",
					"type": "",
					"contentIdx": "1"
				}, {
					"content": "Moss",
					"type": "",
					"contentIdx": "2"
				}],
				"answers": [{
					"contentIdx": "2",
					"content": "Moss"
				}],
				"userAnswer": {
					"score": 100.0,
					"answers": ["Moss"]
				},
				"explain": {
					"content": "",
					"type": ""
				},
				"config": {}
			}]
		}]
	}
})
