const data ={
  "axis": {
      "X": [
          {
              "dataType": "string",
              "dName": "教育程度/学历",
              "name": "S_DC_VB_DIPLOMA",
              "type": "field",
              "nodeType": "SYSTEM_FIELD",
              "description": null,
              "conditionsGroup": [
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "博士",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "博士"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "硕士",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "硕士"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "本科",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "本科"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "other",
                      "conditionsDesc": "其他条件",
                      "conditions": []
                  }
              ]
          },
          {
              "dataType": "integer",
              "dName": "借款人年龄",
              "name": "N_DC_VB_AGE",
              "type": "field",
              "nodeType": "SYSTEM_FIELD",
              "description": null,
              "conditionsGroup": [
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": " >55",
                      "conditions": [
                          {
                              "compareKey": ">",
                              "compareValue": "55"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "<=55 且 >=28",
                      "conditions": [
                          {
                              "compareKey": ">=",
                              "compareValue": "28"
                          },
                          {
                              "compareKey": "<=",
                              "compareValue": "55"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "<28",
                      "conditions": [
                          {
                              "compareKey": "<",
                              "compareValue": "28"
                          }
                      ]
                  }
              ]
          },
          {
              "dataType": "double",
              "dName": "最近6个月同一客户在我行贷款申请次数",
              "name": "ecb2f409aa5c42e2bef7b591bac89002",
              "type": "index",
              "nodeType": "INDEX_FIELD",
              "description": null,
              "conditionsGroup": [
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "小于3次",
                      "conditions": [
                          {
                              "compareKey": "<",
                              "compareValue": "3"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "大于等于3次",
                      "conditions": [
                          {
                              "compareKey": ">=",
                              "compareValue": "3"
                          }
                      ]
                  }
              ]
          }
      ],
      "Y": [
          {
              "dataType": "string",
              "dName": "借款人年收入",
              "name": "S_DC_VB_ANNUINCO",
              "type": "field",
              "nodeType": "SYSTEM_FIELD",
              "description": null,
              "conditionsGroup": [
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "大于100万",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "100"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": ">50 且 <=100 ",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "80"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": ">10 且 <=50",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "30"
                          }
                      ]
                  },
                  {
                      "connector": "all",
                      "type": "new",
                      "conditionsDesc": "<=10",
                      "conditions": [
                          {
                              "compareKey": "equals",
                              "compareValue": "5"
                          }
                      ]
                  }
              ]
          }
      ]
  },
  "data": [
      [
          1,
          44,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          3,
          33,
          4,
          4,
          5
      ],
      [
          2,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          11,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          3,
          3,
          33,
          5,
          5
      ],
      [
          3,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          22,
          3,
          3,
          3,
          5,
          5
      ],
      [
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          3,
          3,
          5,
          5
      ]
  ]
}