define({ "api": [
  {
    "type": "post",
    "url": "/shop_serv/reject_new_order",
    "title": "拒绝新订单",
    "name": "_____",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>拒单理由</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>订单id不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>订单id不是新订单id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'订单id不存在',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shop_serv/modify_business_status",
    "title": "修改营业状态",
    "name": "_____1",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "business_status",
            "description": "<p>营业状态（0-未营业，1-营业）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录\t',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/search_orders",
    "title": "订单搜索接口",
    "name": "______",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>查询条件（可以是手机号、oriderid或订单发起人姓名）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders",
            "description": "<p>订单数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.count",
            "description": "<p>总订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list",
            "description": "<p>订单数据对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.order_status",
            "description": "<p>订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.ordertime",
            "description": "<p>当单建立时间（YYYY-MM-DD hh:mm:ss）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.userinfo",
            "description": "<p>订单发起者信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.name",
            "description": "<p>订单发起者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.phoneno",
            "description": "<p>订单发起者电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.orderaddr",
            "description": "<p>订单送餐地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.sendtype",
            "description": "<p>订单配送方式（1：配送，2：自取）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.paytype",
            "description": "<p>订单支付方式（1：信用卡，2：货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.creditcard_info",
            "description": "<p>信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.cardno",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.pin",
            "description": "<p>信用卡pin码（3或4位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_year",
            "description": "<p>信用卡有效期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_month",
            "description": "<p>信用卡有效期月份（MM）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos",
            "description": "<p>订单菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.dish_name",
            "description": "<p>订单菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_number",
            "description": "<p>订单菜品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_type",
            "description": "<p>订单菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list",
            "description": "<p>子菜品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.name",
            "description": "<p>子菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.price",
            "description": "<p>子菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.dish_price",
            "description": "<p>订单菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.price_detail",
            "description": "<p>订单价格明细</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.dish_total_price",
            "description": "<p>订单菜品总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tax_price",
            "description": "<p>订单税费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.freight_price",
            "description": "<p>订单运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tip_price",
            "description": "<p>订单小费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"token\": \"u1bv1b2308jnikibn213u\",\n   \"msg\": \"success\",\n   \"orders\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"orderid\": 1,\n\t\t\t\t  \"order_status\":1,\n               \"ordertime\": \"2014-12-01 12:00:00\",\n               \"userinfo\": {\n                   \"name\": \"董绍辉\",\n                   \"phoneno\": \"18310702213\"\n               },\n               \"orderaddr\": \"New York XXXX Street\",\n               \"sendtype\": 1,\n               \"paytype\": 1,\n               \"creditcard_info\": {\n                   \"cardno\": \"123123\",\n                   \"pin\": \"123\",\n                   \"validate_year\": \"2020\",\n                   \"validate_month\": \"12\"\n               },\n               \"dishinfos\": [\n                   {\n                       \"dish_name\": \"京酱肉丝\",\n                       \"dish_price\": 23.2\n                   },\n                   {\n                       \"dish_name\": \"鸡蛋饼\",\n                       \"dish_price\": 3.1\n                   }\n               ],\n               \"price_detail\": {\n                   \"dish_total_price\": 26.3,\n                   \"tax_price\": 3,\n                   \"freight_price\": 10,\n                   \"tip_price\": 2\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shop_serv/upload_addr",
    "title": "上传商户地址",
    "name": "______1",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "searched_addr",
            "description": "<p>搜索选择的地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailed_addr",
            "description": "<p>具体地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:1,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shop_serv/login",
    "title": "商户登录接口",
    "name": "______11",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>商户手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>商户登录密码（明文）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>登录成功后分配给用户的token（session）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ntoken:'u1bv1b2308jnikibn213u',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>用户名不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>密码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'用户名不存在',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/get_all_new_orders",
    "title": "获取所有新订单",
    "name": "_______",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders",
            "description": "<p>订单数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.count",
            "description": "<p>总订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list",
            "description": "<p>订单数据对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.order_status",
            "description": "<p>订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.ordertime",
            "description": "<p>当单建立时间（YYYY-MM-DD hh:mm:ss）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.userinfo",
            "description": "<p>订单发起者信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.name",
            "description": "<p>订单发起者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.phoneno",
            "description": "<p>订单发起者电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.orderaddr",
            "description": "<p>订单送餐地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.sendtype",
            "description": "<p>订单配送方式（1：配送，2：自取）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.paytype",
            "description": "<p>订单支付方式（1：信用卡，2：货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.creditcard_info",
            "description": "<p>信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.cardno",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.pin",
            "description": "<p>信用卡pin码（3或4位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_year",
            "description": "<p>信用卡有效期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_month",
            "description": "<p>信用卡有效期月份（MM）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos",
            "description": "<p>订单菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.dish_name",
            "description": "<p>订单菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_number",
            "description": "<p>订单菜品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_type",
            "description": "<p>订单菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list",
            "description": "<p>子菜品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.name",
            "description": "<p>子菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.price",
            "description": "<p>子菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.dish_price",
            "description": "<p>订单菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.price_detail",
            "description": "<p>订单价格明细</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.dish_total_price",
            "description": "<p>订单菜品总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tax_price",
            "description": "<p>订单税费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.freight_price",
            "description": "<p>订单运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tip_price",
            "description": "<p>订单小费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"token\": \"u1bv1b2308jnikibn213u\",\n   \"msg\": \"success\",\n   \"orders\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"orderid\": 1,\n               \"ordertime\": \"2014-12-01 12:00:00\",\n               \"userinfo\": {\n                   \"name\": \"董绍辉\",\n                   \"phoneno\": \"18310702213\"\n               },\n               \"orderaddr\": \"New York XXXX Street\",\n               \"sendtype\": 1,\n               \"paytype\": 1,\n               \"creditcard_info\": {\n                   \"cardno\": \"123123\",\n                   \"pin\": \"123\",\n                   \"validate_year\": \"2020\",\n                   \"validate_month\": \"12\"\n               },\n               \"dishinfos\": [\n                   {\n                       \"dish_name\": \"京酱肉丝\",\n                       \"dish_price\": 23.2\n                   },\n                   {\n                       \"dish_name\": \"鸡蛋饼\",\n                       \"dish_price\": 3.1\n                   }\n               ],\n               \"price_detail\": {\n                   \"dish_total_price\": 26.3,\n                   \"tax_price\": 3,\n                   \"freight_price\": 10,\n                   \"tip_price\": 2\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/personal_info",
    "title": "获取商户的信息",
    "name": "_______1",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "business_status",
            "description": "<p>是否营业（0-未营业，1-营业）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>店铺用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneno",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "addr",
            "description": "<p>店铺地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:1,\nmsg:'success',\nbusiness_status:1,\nusername:\"18310704435\",\nphoneno:\"18310704435\",\naddr:\"new york\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/get_all_accept_orders",
    "title": "获取所有已接订单",
    "name": "________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders",
            "description": "<p>订单数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.count",
            "description": "<p>总订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list",
            "description": "<p>订单数据对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.order_status",
            "description": "<p>订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.ordertime",
            "description": "<p>当单建立时间（YYYY-MM-DD hh:mm:ss）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.userinfo",
            "description": "<p>订单发起者信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.name",
            "description": "<p>订单发起者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.phoneno",
            "description": "<p>订单发起者电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.orderaddr",
            "description": "<p>订单送餐地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.sendtype",
            "description": "<p>订单配送方式（1：配送，2：自取）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.paytype",
            "description": "<p>订单支付方式（1：信用卡，2：货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.creditcard_info",
            "description": "<p>信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.cardno",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.pin",
            "description": "<p>信用卡pin码（3或4位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_year",
            "description": "<p>信用卡有效期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_month",
            "description": "<p>信用卡有效期月份（MM）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos",
            "description": "<p>订单菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.dish_name",
            "description": "<p>订单菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_number",
            "description": "<p>订单菜品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_type",
            "description": "<p>订单菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list",
            "description": "<p>子菜品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.name",
            "description": "<p>子菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.price",
            "description": "<p>子菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.dish_price",
            "description": "<p>订单菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.price_detail",
            "description": "<p>订单价格明细</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.dish_total_price",
            "description": "<p>订单菜品总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tax_price",
            "description": "<p>订单税费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.freight_price",
            "description": "<p>订单运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tip_price",
            "description": "<p>订单小费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"token\": \"u1bv1b2308jnikibn213u\",\n   \"msg\": \"success\",\n   \"orders\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"orderid\": 1,\n               \"ordertime\": \"2014-12-01 12:00:00\",\n               \"userinfo\": {\n                   \"name\": \"董绍辉\",\n                   \"phoneno\": \"18310702213\"\n               },\n               \"orderaddr\": \"New York XXXX Street\",\n               \"sendtype\": 1,\n               \"paytype\": 1,\n               \"creditcard_info\": {\n                   \"cardno\": \"123123\",\n                   \"pin\": \"123\",\n                   \"validate_year\": \"2020\",\n                   \"validate_month\": \"12\"\n               },\n               \"dishinfos\": [\n                   {\n                       \"dish_name\": \"京酱肉丝\",\n                       \"dish_price\": 23.2\n                   },\n                   {\n                       \"dish_name\": \"鸡蛋饼\",\n                       \"dish_price\": 3.1\n                   }\n               ],\n               \"price_detail\": {\n                   \"dish_total_price\": 26.3,\n                   \"tax_price\": 3,\n                   \"freight_price\": 10,\n                   \"tip_price\": 2\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/get_history_orders",
    "title": "获取所有历史订单",
    "name": "________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders",
            "description": "<p>订单数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.count",
            "description": "<p>总订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list",
            "description": "<p>订单数据对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.order_status",
            "description": "<p>订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.ordertime",
            "description": "<p>当单建立时间（YYYY-MM-DD hh:mm:ss）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.userinfo",
            "description": "<p>订单发起者信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.name",
            "description": "<p>订单发起者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.phoneno",
            "description": "<p>订单发起者电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.orderaddr",
            "description": "<p>订单送餐地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.sendtype",
            "description": "<p>订单配送方式（1：配送，2：自取）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.paytype",
            "description": "<p>订单支付方式（1：信用卡，2：货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.creditcard_info",
            "description": "<p>信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.cardno",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.pin",
            "description": "<p>信用卡pin码（3或4位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_year",
            "description": "<p>信用卡有效期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_month",
            "description": "<p>信用卡有效期月份（MM）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos",
            "description": "<p>订单菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.dish_name",
            "description": "<p>订单菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_number",
            "description": "<p>订单菜品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_type",
            "description": "<p>订单菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list",
            "description": "<p>子菜品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.name",
            "description": "<p>子菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.price",
            "description": "<p>子菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.dish_price",
            "description": "<p>订单菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.price_detail",
            "description": "<p>订单价格明细</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.dish_total_price",
            "description": "<p>订单菜品总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tax_price",
            "description": "<p>订单税费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.freight_price",
            "description": "<p>订单运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tip_price",
            "description": "<p>订单小费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"token\": \"u1bv1b2308jnikibn213u\",\n   \"msg\": \"success\",\n   \"orders\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"orderid\": 1,\n               \"ordertime\": \"2014-12-01 12:00:00\",\n               \"userinfo\": {\n                   \"name\": \"董绍辉\",\n                   \"phoneno\": \"18310702213\"\n               },\n               \"orderaddr\": \"New York XXXX Street\",\n               \"sendtype\": 1,\n               \"paytype\": 1,\n               \"creditcard_info\": {\n                   \"cardno\": \"123123\",\n                   \"pin\": \"123\",\n                   \"validate_year\": \"2020\",\n                   \"validate_month\": \"12\"\n               },\n               \"dishinfos\": [\n                   {\n                       \"dish_name\": \"京酱肉丝\",\n                       \"dish_price\": 23.2\n                   },\n                   {\n                       \"dish_name\": \"鸡蛋饼\",\n                       \"dish_price\": 3.1\n                   }\n               ],\n               \"price_detail\": {\n                   \"dish_total_price\": 26.3,\n                   \"tax_price\": 3,\n                   \"freight_price\": 10,\n                   \"tip_price\": 2\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/get_all_finish_orders",
    "title": "获取所有已完成订单",
    "name": "_________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders",
            "description": "<p>订单数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.count",
            "description": "<p>总订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list",
            "description": "<p>订单数据对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.order_status",
            "description": "<p>订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.ordertime",
            "description": "<p>当单建立时间（YYYY-MM-DD hh:mm:ss）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.userinfo",
            "description": "<p>订单发起者信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.name",
            "description": "<p>订单发起者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.userinfo.phoneno",
            "description": "<p>订单发起者电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.orderaddr",
            "description": "<p>订单送餐地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.sendtype",
            "description": "<p>订单配送方式（1：配送，2：自取）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.paytype",
            "description": "<p>订单支付方式（1：信用卡，2：货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.creditcard_info",
            "description": "<p>信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.cardno",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.pin",
            "description": "<p>信用卡pin码（3或4位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_year",
            "description": "<p>信用卡有效期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.creditcard_info.validate_month",
            "description": "<p>信用卡有效期月份（MM）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos",
            "description": "<p>订单菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.dish_name",
            "description": "<p>订单菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_number",
            "description": "<p>订单菜品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "orders.list.dishinfos.dish_type",
            "description": "<p>订单菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list",
            "description": "<p>子菜品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.name",
            "description": "<p>子菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.sub_dish_list.price",
            "description": "<p>子菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.dishinfos.dish_price",
            "description": "<p>订单菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.list.price_detail",
            "description": "<p>订单价格明细</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.dish_total_price",
            "description": "<p>订单菜品总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tax_price",
            "description": "<p>订单税费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.freight_price",
            "description": "<p>订单运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "orders.list.price_detail.tip_price",
            "description": "<p>订单小费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"token\": \"u1bv1b2308jnikibn213u\",\n   \"msg\": \"success\",\n   \"orders\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"orderid\": 1,\n               \"ordertime\": \"2014-12-01 12:00:00\",\n               \"userinfo\": {\n                   \"name\": \"董绍辉\",\n                   \"phoneno\": \"18310702213\"\n               },\n               \"orderaddr\": \"New York XXXX Street\",\n               \"sendtype\": 1,\n               \"paytype\": 1,\n               \"creditcard_info\": {\n                   \"cardno\": \"123123\",\n                   \"pin\": \"123\",\n                   \"validate_year\": \"2020\",\n                   \"validate_month\": \"12\"\n               },\n               \"dishinfos\": [\n                   {\n                       \"dish_name\": \"京酱肉丝\",\n                       \"dish_price\": 23.2\n                   },\n                   {\n                       \"dish_name\": \"鸡蛋饼\",\n                       \"dish_price\": 3.1\n                   }\n               ],\n               \"price_detail\": {\n                   \"dish_total_price\": 26.3,\n                   \"tax_price\": 3,\n                   \"freight_price\": 10,\n                   \"tip_price\": 2\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/entry_addr_status",
    "title": "判断商户是否录入过地址",
    "name": "___________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码（0：未录入过，1：录入过）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:1,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/entry_addr_status",
    "title": "判断商户是否录入过地址",
    "name": "___________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码（0：未录入过，1：录入过）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:1,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shop_serv/accept_new_order",
    "title": "接新订单",
    "name": "_______________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>订单id不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>订单id不是已接订单id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'订单id不存在',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shop_serv/finish_order",
    "title": "完成订单",
    "name": "_________________",
    "group": "Shop",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>系统分配的token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-1",
            "description": "<p>token失效，需重新登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>订单id不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>订单id不是已接id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'订单id不存在',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "android_docfile/doc.js",
    "groupTitle": "Shop"
  }
] });
