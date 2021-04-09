import Mock from 'mockjs'
Mock.setup({
  // timeout: 6000
})
// 提交答案 stu/homewk/h5/question/answer/submit
export const submit = Mock.mock(/\/answer\/submit[\w\W]?/, {
  "code": "200",
  "msg": "失败",
  "data": null
})
// 获取试题 http://stuapi.diplotalk.unischool.cn/stu/homewk/h5/category/question/query
export const query = Mock.mock(/\/question\/query[\w\W]?/, {
  "code": "200",
  "msg": "",
  "data": {
    "totalNum": 15,
    "totalSubmitNum": 14,
    "categoryId": 11,
    "categoryName": "做练习",
    "homeworkId": "5fe9a761d3fbbf00017e1b76",
    "questionResponses": [
      {
				"questionId": "2a9eccc2103848c9b32beadca8cad0b9",
				"questionDocId": "KB1L1U4ST_0000596",
				"questionDescription": "look and choose",
				"direction": {
					"content": "试题指导语",
					"type": "",
					"resUrl": ""
				},
				"additionalAudio": {
					"url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_Alex_2uidd05a5b713e3f4b1e8d27178c67b4fe46.mp3?auth_key=1608025480998-0-0-053d2c767416cd60d05b0bb9d196b0c9",
					"duration": 1097,
					"unit": "ms",
					"listeningText": "how are you !"
				},
				"body": {
					"content": "Can <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> see <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;dog?<br />Yes, I <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. It’s under the bed.<br />Can you see the tiger?<br />Yes, I can. It’s on the table.<br />Can you see the bird?<br />Yes, I can. It’s on the book.<br />Can you <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;the duck?<br />Yes, I can. It’s under the chair.<br />Can you see the frog?<br />Yes, I can. It’s in the house.<br />Can you see the fish?<br />Yes, I can. It’s in the car.",
					"type": "",
					"audioInfo": null
				},
				"structure": "9",
				"templateType": "selectFillComplex",
				"options": [{
						"contentIdx": "1",
						"content": "you",
						"type": ""
					},
					{
						"contentIdx": "4",
						"content": "are",
						"type": ""
					},
					{
						"contentIdx": "2",
						"content": "the",
						"type": ""
					},
					{
						"contentIdx": "3",
						"content": "can",
						"type": ""
					},
					{
						"contentIdx": "5",
						"content": "fix",
						"type": ""
					}
				],
				"answers": [
					{
						"contentIdx": "2",
						"content": "the",
						"explain": "the explain"
					},
					{
						"contentIdx": "4",
						"content": "are",
						"explain": "are explain"
					},
					{
						"contentIdx": "3",
						"content": "can",
						"explain": "can explain"
					},
					{
						"contentIdx": "5",
						"content": "fix",
						"explain": "fix explain"
					}
				],
				"userAnswer": {
					"score": 80.0,
					"answers": [
            {
              "contentIdx": "2",
              "content": "the",
              "explain": "the explain"
            },
            {
              "contentIdx": "4",
              "content": "are",
              "explain": "are explain"
            },
            {
              "contentIdx": "3",
              "content": "can",
              "explain": "can explain"
            },
            {
              "contentIdx": "5",
              "content": "fix",
              "explain": "fix explain"
            }
          ]
				},
				"explain": {
					"content": "sdfas asdf as asdf",
					"type": null
				}
			}, {
				"questionId": "f22bbfb038c441478e2d21bb790bc47f",
				"questionDocId": "KB1L1U4ST_0000595",
				"questionDescription": null,
				"body": {
					"content": "Can <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /> see <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;dog?<br />Yes, I <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />. It’s under the bed.<br />Can you see the tiger?<br />Yes, I can. It’s on the table.<br />Can you see the bird?<br />Yes, I can. It’s on the book.<br />Can you <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />&nbsp;the duck?<br />Yes, I can. It’s under the chair.<br />Can you see the frog?<br />Yes, I can. It’s in the house.<br />Can you see the fish?<br />Yes, I can. It’s in the car.",
					"type": "",
					"audioInfo": null
				},
				"structure": "9",
				"templateType": "readFillComplex",
				"options": [],
				"answers": [{
						"contentIdx": "1",
						"content": "you",
						"explain": "you explain"
					},
					{
						"contentIdx": "2",
						"content": "the",
						"explain": "the explain"
					},
					{
						"contentIdx": "4",
						"content": "are",
						"explain": "are explain"
					},
					{
						"contentIdx": "3",
						"content": "can",
						"explain": "can explain"
					}
				],
				"userAnswer": {
					"score": 0.0,
					"answers": [
					]
				},
				"explain": {
					"content": "asdf asd fasdf&nbsp;",
					"type": null
				}
			}, {
				"questionId": "3756336ac9bf4851afc66fc1b5436dbe",
				"questionDocId": "KB1L1U4ST_0000594",
				"questionDescription": null,
				"body": {
					"content": "<p>Dear Nick,</p><p><br /></p><p>I was with the police all morning yesterday. It was very funny!</p><p><br /></p><p>Two private detectives called Lock and Key think I've got their car. Last Thursday they were at a café in town and there was a car thief at the table next to them. He was strong and angry. They think it was me. They're not very clever!</p><p><br /></p><p>Well, you're stronger than me, Nick and you're angrier too. Were you at a&nbsp;café&nbsp;in town last Thursday morning? Have you got their car?</p><p><br /></p><p>See you soon,</p><p>Your brother Robin</p>",
					"type": "",
					"audioInfo": {
						"url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E9%9F%B3%E9%A2%91_3uidd0dbe91c28a84dae8a1df6556ac918ce.mp3?auth_key=1608025481005-0-0-961192dcf15a7b975374c5b09e9b7e7b",
						"duration": 34298,
						"unit": "ms"
					}
				},
				"structure": "9",
				"templateType": "readJudgeComplex",
				"subQuestions": [{
						"questionId": "123",
						"questionDocId": "KB1L1U4ST_0000600",
						"body": {
							"content": "I was with the police all morning yesterday.",
							"type": "",
							"audioInfo": null
						},
						"structure": "8",
						"templateType": "YNJudge",
						"options": [{
								"content": "Yes",
								"type": null,
								"audioInfo": null
							},
							{
								"content": "No",
								"type": null,
								"audioInfo": null
							}
						],
						"answers": [{
							"content": "Yes",
							"answerImg": ""
						}],
						"userAnswer": {
							"score": 80.0,
							"answers": [
								"Yes"
							]
						},
						"explain": {
							"content": "yes",
							"type": null
						}
					},
					{
						"questionId": "456",
						"questionDocId": "KB1L1U4ST_0000600",
						"body": {
							"content": "Two private detectives called Lock and Key think I've got their car.",
							"type": "",
							"audioInfo": null
						},
						"structure": "8",
						"templateType": "YNJudge",
						"options": [{
								"content": "Yes",
								"type": null,
								"audioInfo": null
							},
							{
								"content": "No",
								"type": null,
								"audioInfo": null
							}
						],
						"answers": [{
							"content": "Yes",
							"answerImg": ""
						}],
						"userAnswer": {
							"score": 80.0,
							"answers": [
								"Yes"
							]
						},
						"explain": {
							"content": "yes",
							"type": null
						}
					}
				]
			}, {
				"questionId": "4603c5697fe44765964197eff6b2c30d",
				"questionDocId": "KB1L1U4ST_0000598",
				"questionDescription": "looks and choose",
				"body": {
					"content": "Wake up! Wake up!<br />Monty, Maskman, Marie.<br />Walk and talk now.<br />One … two … three.<br />Marie: Look! Here’s a picture to colour. Maskman, colour number one white, please … Monty, colour number two red, please.<br />Maskman: What is it? What is it?&nbsp;<br />Monty: Hmm, red and white, Marie. They’re your favourite colours.<br />Marie: Yes, Monty … Maskman, colour number three black, please.<br />Maskman: Look! It’s a red pencil!<br />Monty: Ha! Ha! Yes! It’s a red pencil … and now I’m a red mouse.<br />Marie: Now you, Maskman.<br />Maskman: Here you are! A picture to colour … Monty, colour number four blue, please … Marie, colour number five black, please.<br />Marie: Er, yes, Maskman.<br />Marie: What is it? What is it? Only two colours, Maskman?<br />Maskman: No, Marie. Colour number six yellow, please.<br />Marie: It’s YOU, Maskman!<br />Maskman: Yes, it is. I’m Maskman!<br />",
					"type": "",
					"audioInfo": null
				},
				"structure": "9",
				"templateType": "readSelectComplex",
				"options": null,
				"subQuestions": [{
					"questionId": "321",
					"questionDocId": "KB1L1U4ST_0000600",
					"body": {
						"content": "I was talking with the police all morning yesterday.",
						"type": "",
						"audioInfo": null
					},
					"structure": "0",
					"templateType": "textSelect",
					"options": [{
							"content": "talk",
							"type": ""
						},
						{
							"content": "fly",
							"type": ""
						},
						{
							"content": "jump",
							"type": ""
						},
						{
							"content": "draw",
							"type": ""
						}
					],
					"answers": [{
						"content": "talk",
						"answerImg": ""
					}],
					"userAnswer": {
						"score": 0.0,
						"answers": [
							"jump"
						]
					},
					"explain": {
						"content": "talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />",
						"type": ""
					}
				}]
			}, {
        'questionId': '4603c5697fe44765964197eff6b2c30d',
        'questionDocId': 'KB1L1U4ST_0000598',
        'questionDescription': 'looks and choose',
        'body': {
          'content': 'Wake up! Wake up!<br />Monty, Maskman, Marie.<br />Walk and talk now.<br />One … two … three.<br />Marie: <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />! Here’s a picture to colour. Maskman, colour number one white, please … Monty, colour number two red, please.<br />Maskman: What is it? What is it?&nbsp;<br />Monty: Hmm, red and white, Marie. They’re your favourite colours.<br />Marie: Yes, Monty … Maskman, colour number three black, please.<br />Maskman: Look! It’s a red pencil!<br />Monty: Ha! Ha! Yes! It’s a red pencil … and now I’m a red mouse.<br />Marie: Now you, Maskman.<br />Maskman: Here you are! A picture to colour … Monty, colour number four blue, please … Marie, colour number five black, please.<br />Marie: Er, yes, Maskman.<br />Marie: What is it? What is it? Only two colours, Maskman?<br />Maskman: No, Marie. Colour number six yellow, please.<br />Marie: It’s YOU, Maskman!<br />Maskman: Yes, it is. I’m Maskman!<br />',
          'type': '',
          'audioInfo': null
        },
        'structure': '9',
        'templateType': 'clozeFillComplex',
        'options': null,
        'subQuestions': [{
          'questionId': '79704261299246a889a6489c76f03570',
          'questionDocId': 'KB1L1U4ST_0000600',
          'questionDescription': 'look and choose',
          'structure': '0',
          'templateType': '',
          'options': [{
            'contentIdx': '1',
            'content': 'talk',
            'type': ''
          },
          {
            'contentIdx': '2',
            'content': 'look',
            'type': ''
          },
          {
            'contentIdx': '3',
            'content': 'jump',
            'type': ''
          },
          {
            'contentIdx': '4',
            'content': 'draw',
            'type': ''
          }
          ],
          'answers': [{
            'content': 'look',
            'contentIdx': '2',
            'answerImg': ''
          }],
          'userAnswer': {
            'score': 0.0,
            'answers': []
          },
          'explain': {
            'content': 'talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />',
            'type': ''
          }
        }]
      }, {
        'questionId': 'KB1L1U12ST_0000723_1',
        'questionDocId': 'KB1L1U12ST_0000723',
        'questionDescription': 'look and choose',
        'body': {
          'content': 'fish can not fly.|<p>O</p><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />a<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>g</span><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />|',
          'type': '',
          'audioInfo': null
        },
        'structure': '6',
        'templateType': 'letterSort',
        'options': [{
            'content': 'b',
            'type': null,

            'audioInfo': null,
            'contentIdx': '2',
            'groupIdx': null
          },
          {
            'content': 'c',
            'type': null,

            'audioInfo': null,
            'contentIdx': '3',
            'groupIdx': null
          },
          {
            'content': 'd',
            'type': null,

            'audioInfo': null,
            'contentIdx': '4',
            'groupIdx': null
          },
          {
            'content': 'a',
            'type': null,

            'audioInfo': null,
            'contentIdx': '1',
            'groupIdx': null
          }
        ],
        'answers': [1, 2, 3, 4],
        'userAnswer': {
          answers: [3, 2, 1, 4]
        },
        'explain': {
          'content': '<span>adf sadf sad&nbsp; asd</span>',
          'type': null
        },
        'page': '教材2页'
      }, {
        'questionId': '5fed319167d43a000153cc14',
        'questionDocId': 'KB2L2U2ST_0000124',
        'questionDescription': 'Read and choose in order. 组词成句。',
        'body': {
          'content': '<img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />.',
          'type': ''
        },
        'structure': '6',
        'templateType': 'textSort',
        'options': [{
          'content': 'There are',
          'contentIdx': '1'
        }, {
          'content': '16 books',
          'contentIdx': '2'
        }, {
          'content': 'the bookcase',
          'contentIdx': '4'
        }, {
          'content': 'in',
          'contentIdx': '3'
        }],
        'config': {
          'optionsDisorderIds': [0, 1, 3, 2]
        },
        'answers': ['1', '2', '3', '4'],
        'explain': {
          'content': ''
        },
        'page': '教材13页'
      }, {
        "questionId": "3b5a90d0bade4e96833829b5893c77d3",
        "questionDocId": "KB1L1U4ST_0000596",
        "questionDescription": "look and choose",
        "body": {
          "content": '<p style="text-align:center;"><img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/2uid1dc0e6251e2c42639ab36df631b818af.jpg" width="240" /></p><p style="text-align:center;"><span><u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</u>p___n</span></p>',
          "type": "",
          "audioInfo": null
        },
        "structure": "0",
        "optionsRandomSort": false,
        "templateType": "audioSelect",
        "options": [{
            "content": "&nbsp;",
            "type": "",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_Alex_2uidd05a5b713e3f4b1e8d27178c67b4fe46.mp3",
              "duration": 1097,
              "unit": "ms"
            }
          },
          {
            "content": "1",
            "type": "",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_board_6uidafe71acdda6a47efb0434b4e4e7be0dd.mp3",
              "duration": 914,
              "unit": "ms"
            }
          },
          {
            "content": "2",
            "type": "",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_computer_11uidec2bf81db6cd4b84b176ef665ae4da6d.mp3",
              "duration": 1149,
              "unit": "ms"
            }
          },
          {
            "content": "3",
            "type": "",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_Lenny_3uid9216ec8906234f47bc25bd0059de0d59.mp3",
              "duration": 1044,
              "unit": "ms"
            }
          }
        ],
        "answers": [{
          "content": "&nbsp;",
          "answerImg": ""
        }],
        userAnswer: {
          answers: [],
          score: 95.5
        },
        "page": '教材15页',
        "explain": {
          "content": "<span>how</span><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>you?</span>",
          "type": null
        }
      }, {
        "questionId": "5fd73408fb02d20001a270f7",
        "questionDocId": "KB2L1U9ST_0000969",
        "questionDescription": "填空题",
        "body": {
          "content": "<div style=\"text-align:center;\">p<img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />ay</div>",
          "type": "",
          "audioInfo": {
            "url": "http://test.enres.diplotalk.unischool.cn/audio/question/U09-10uid18bbc9ff600b41998d049e21190fd9ab.mp3?auth_key=1607943185213-0-0-fe44852d1954e8494e8b95f3a52fcd59",
            "duration": -1,
            "unit": "ms"
          }
        },
        "config": {
          "optionsRandomSort": null
        },
        "structure": "2",
        "templateType": "letterFill",
        "answers": [{
          "content": "l",
          "answerImg": ""
        }],
        "userAnswer": null,
        "explain": {
          "content": ""
        },
        "page": "教材0页"
      }, {
        "questionId": "5fd73408fb02d20001a270f8",
        "questionDocId": "KB2L1U12ST_0001135",
        "questionDescription": "填空题",
        "body": {
          "content": "<p style=\"text-align:center;\"><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/fishuid90ccdc24113146c49e07510e1039da1e.jpg\" width=\"60\" title=\"2\" alt=\"2\" height=\"45\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/ice%20creamuidb465d94b7b164b17b86cd21c75d69e2c.jpg\" width=\"60\" title=\"2\" alt=\"2\" height=\"45\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_12_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_sandwich_16uidba88c999a3d54f4f803b36ef94b162b5.jpg\" width=\"60\" title=\"2\" alt=\"2\" height=\"45\" align=\"\" /><img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/hippouid4fd94e571b4041f090e99c071a20ac60.jpg\" width=\"60\" title=\"2\" alt=\"2\" height=\"45\" align=\"\" /></p><p style=\"text-align:center;\"><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"https://english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /></p>",
          "type": ""
        },
        "config": {
          "optionsRandomSort": null
        },
        "structure": "2",
        "templateType": "letterFill",
        "answers": [{
          "content": "h",
          "answerImg": ""
        }, {
          "content": "o",
          "answerImg": ""
        }, {
          "content": "r",
          "answerImg": ""
        }, {
          "content": "s",
          "answerImg": ""
        }, {
          "content": "e",
          "answerImg": ""
        }],
        "userAnswer": null,
        "explain": {
          "content": ""
        },
        "page": "教材0页"
      }, {
        "questionId": "dc5710285d3a453e8d3ad1ac0918af71",
        "questionDocId": "KB1L1U4ST_0000595",
        "questionDescription": null,
        "body": {
          "content": "sad fsa fas&nbsp; sdf",
          "type": "",
          "audioInfo": null
        },
        "structure": "0",
        "optionsRandomSort": true,
        "templateType": "textSelect",
        "options": [{
            "content": "a",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "v",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "d",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "c",
            "type": "",
            "audioInfo": null
          }
        ],
        "answers": [{
          "content": "a",
          "answerImg": ""
        }],
        userAnswer: {
          answers: ["c"],
          score: 95.5
        },
        "explain": null
      }, {
        "questionId": "c0428564f1ee45788b82affff124cd8a",
        "questionDocId": "KB1L1U4ST_0000594",
        "questionDescription": null,
        "body": {
          "content": "asdf asdfas asd as d",
          "type": "",
          "audioInfo": {
            "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E9%9F%B3%E9%A2%91_3uidd0dbe91c28a84dae8a1df6556ac918ce.mp3",
            "duration": 34298,
            "unit": "ms"
          }
        },
        "structure": "0",
        "optionsRandomSort": true,
        "templateType": "imgSelect",
        "options": [{
            "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg\" width=\"240\" />",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid6722023feb4c462ebf41e08fd801da6e.jpg\" width=\"240\" />",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_4uida06d9a41e7cf471ead44171428a16428.jpg\" width=\"240\" />",
            "type": "",
            "audioInfo": null
          },
          {
            "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_7uid0ef7cf7759724c38b5bb5a5abbea81c1.jpg\" width=\"240\" />",
            "type": "",
            "audioInfo": null
          }
        ],
        "answers": [{
          "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg\" width=\"240\" />",
          "answerImg": ""
        }],
        userAnswer: {
          answers: ['<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg\" width=\"240\" />'],
          score: 95.5
        },
        "explain": {
          "content": "<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_5uiddd3977c3ae744d109487f599130bffcc.jpg\" width=\"240\" />asd&nbsp; asdf as asd asf&nbsp;",
          "type": null
        }
      }, {
        "questionId": "5fe9a761d3fbbf00017e1b77",
        "questionDocId": "KB2L1U11ST_0001114",
        "questionDescription": "图图连线",
        "body": {
          "content": "&nbsp; &nbsp;",
          "type": "",
          "audioInfo": {
            "url": "http://test.enres.diplotalk.unischool.cn/audio/question/U11-%E8%AF%8D%E6%B1%871uidf75942e3e9544674b2876c32f87111d7.mp3?auth_key=1609151943412-0-0-4b89da0d6aaa61d824137e5e828db8ca",
            "duration": 50076,
            "unit": "ms"
          }
        },
        "structure": "7",
        "templateType": "imgLine",
        "options": [{
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/Simonuide0a49bb14a74426cbf06de5db806088c.jpg\" width=\"240\" title=\"Simon.jpg\" alt=\"Simon.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "11",
          "groupIdx": "1",
          "feExtData": "135,50"
        }, {
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_1_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_MrsStar_3uiddeabe1c177b4431da9a6596bf40663e9.jpg\" width=\"240\" title=\"KB_2_1_单词_图片_MrsStar_3.jpg\" alt=\"KB_2_1_单词_图片_MrsStar_3.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "12",
          "groupIdx": "1",
          "feExtData": "135,167"
        }, {
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_bathroom_2uid061c8d6ade7d4525945e9ee3a2684643.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_bathroom_2.jpg\" alt=\"KB_2_11_单词_图片_bathroom_2.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "21",
          "groupIdx": "2",
          "feExtData": "211,167"
        }, {
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_11_%E5%8D%95%E8%AF%8D_%E5%9B%BE%E7%89%87_dining%20room_4uid9d678926a58445519c0a35bbd12f8f1f.jpg\" width=\"240\" title=\"KB_2_11_单词_图片_dining room_4.jpg\" alt=\"KB_2_11_单词_图片_dining room_4.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "22",
          "groupIdx": "2",
          "feExtData": "211,284"
        }],
        "config": {
          "optionsRandomSort": null,
          "optionsDisorderIds": [4, 0, 1, 5, 2, 3]
        },
        "answers": [
          ["11", "21"],
          ["12", "22"]
        ],
        "userAnswer": {
          "score": 0.0,
          "answers": [
            ["11", "22"],
            ["12", "21"]
          ]
        },
        "explain": {
          "content": "",
          "type": null
        },
        "page": "教材13页"
      }, {
        "questionId": "5fe9a761d3fbbf00017e1b78",
        "questionDocId": "KB2L3U8ST_0001113",
        "questionDescription": "音图连线",
        "body": {
          "content": "&nbsp;",
          "type": "",
          "audioInfo": null
        },
        "structure": "7",
        "templateType": "audioImgLine",
        "options": [{
          "content": "&nbsp;123",
          "type": "audio",
          "audioInfo": {
            "url": "http://test.enres.diplotalk.unischool.cn/audio/question/%E7%83%9F%E6%8A%8A%E5%84%BF%E4%B9%90%E9%98%9F-%E7%BA%B8%E7%9F%AD%E6%83%85%E9%95%BFuide1990a2285014c649b732e6a297e0018.mp3?auth_key=1609151943413-0-0-e149f44941294437e37b75fe00dabce1",
            "duration": 173244,
            "unit": "ms"
          },
          "contentIdx": "11",
          "groupIdx": "1",
          "feExtData": "135,50"
        }, {
          "content": "&nbsp;12",
          "type": "audio",
          "audioInfo": {
            "url": "http://test.enres.diplotalk.unischool.cn/audio/question/Chainsuidfcb401c970e84e49a76c89f7589a02c8.mp3?auth_key=1609151943413-0-0-bc17091887c8ce16a1a140adc786ec8b",
            "duration": 60029,
            "unit": "ms"
          },
          "contentIdx": "12",
          "groupIdx": "1",
          "feExtData": "135,167"
        }, {
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E7%BB%83%E4%B9%A0%E9%A2%98%E5%9B%BE%E7%89%872uid58af7f0f4bc6490a8d054aa154121fb1.jpg\" width=\"240\" title=\"练习题图片2.jpg\" alt=\"练习题图片2.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "21",
          "groupIdx": "2",
          "feExtData": "211,284"
        }, {
          "content": "<img src=\"https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E7%BB%83%E4%B9%A0%E9%A2%98%E5%9B%BE%E7%89%87uid10683415b3014eb187fdbf10fda7db0a.jpg\" width=\"240\" title=\"练习题图片.jpg\" alt=\"练习题图片.jpg\" />",
          "type": "img",
          "audioInfo": null,
          "contentIdx": "22",
          "groupIdx": "2",
          "feExtData": "211,401"
        }],
        "config": {
          "optionsRandomSort": null,
          "optionsDisorderIds": [2, 3, 0, 1]
        },
        "answers": [
          ["11", "21"],
          ["12", "22"]
        ],
        "userAnswer": {
          "score": 0.0,
          "answers": [
            // ["11", "21"],
            // ["12", "22"]
          ]
        },
        "explain": {
          "content": "",
          "type": null
        },
        "page": "教材13页"
      }, {
        "questionId": "5fcddc63bded503014cedddc",
        "questionDocId": "KB1L1U12ST_0000727",
        "questionDescription": "look and choose",
        "body": {
          "content": "<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">The trick is to take on tasks you truly want to do.</span>",
          "type": "",
          "audioInfo": null
        },
        "structure": "7",
        "templateType": "audioTextLine",
        "options": [{
            "content": "a",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E4%BE%8B%E5%8F%A5_%E9%9F%B3%E9%A2%91_Alex_2uidd50a323b144b4dcf80b735787709d235.mp3?auth_key=1608649171684-0-0-b576c66fb2c2ce6a6cde881c8c41561a",
              "duration": 1906,
              "unit": "ms"
            },
            "type": "audio",
            "contentIdx": "1",
            "groupIdx": "1"
          },
          {
            "content": "v",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E4%BE%8B%E5%8F%A5_%E9%9F%B3%E9%A2%91_board_6uid655ea37431d34aa78a438450424e38d8.mp3?auth_key=1608649171684-0-0-05cfb41448908bb18e4197dc686d9030",
              "duration": 3526,
              "unit": "ms"
            },
            "type": "audio",
            "contentIdx": "2",
            "groupIdx": "1"
          },
          {
            "content": "c",
            "audioInfo": {
              "url": "http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E4%BE%8B%E5%8F%A5_%E9%9F%B3%E9%A2%91_bookcase_5uid7863a7eafd4f40b0a65806b54e36047c.mp3?auth_key=1608649171684-0-0-0d9fab9e210258158a367e9aaee32f18",
              "duration": 3918,
              "unit": "ms"
            },
            "type": "audio",
            "contentIdx": "3",
            "groupIdx": "1"
          },
          {
            "content": "c",
            "audioInfo": null,
            "type": "text",
            "contentIdx": "3",
            "groupIdx": "2"
          },
          {
            "content": "a",
            "audioInfo": null,
            "type": "text",
            "contentIdx": "1",
            "groupIdx": "2"
          },
          {
            "content": "b",
            "audioInfo": null,
            "type": "text",
            "contentIdx": "2",
            "groupIdx": "2"
          }
        ],
        "config": {
          "optionsRandomSort": null,
          "optionsDisorderIds": [
            2,
            0,
            1
          ]
        },
        "answers": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ]
        ],
        "userAnswer": null,
        "explain": {
          "content": "<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">The trick is to take on tasks you truly want to do.</span>",
          "type": null
        },
        "page": "教材4页"
      }
    ]
  }
})
