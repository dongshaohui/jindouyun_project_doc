define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./android_output/main.js",
    "group": "D__Project___________________________android_output_main_js",
    "groupTitle": "D__Project___________________________android_output_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./ios_output/main.js",
    "group": "D__Project___________________________ios_output_main_js",
    "groupTitle": "D__Project___________________________ios_output_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user_serv/search_dishes",
    "title": "菜品搜索接口",
    "name": "______1",
    "group": "Dish_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shop_id",
            "description": "<p>店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dish_search_term",
            "description": "<p>菜品搜索关键词</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "dish_info_list",
            "description": "<p>返回店铺菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.dish_id",
            "description": "<p>菜品id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.dish_type",
            "description": "<p>菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_img",
            "description": "<p>菜品图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_cn_name",
            "description": "<p>菜品中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_en_name",
            "description": "<p>菜品英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.current_month_order",
            "description": "<p>菜品当月订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "dish_info_list.dish_price",
            "description": "<p>菜品价格（如果<code>dish_type</code>为<code>0</code>）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndish_info_list:[\n\t\t{\n\t\t\tdish_id:12,\t\n\t\t\tdish_type:0,\n\t\t\tdish_img:\"http://XXX.jpg\",\n\t\t\tdish_name:\"XX牛肉面\",\n\t\t\tcurrent_month_order:11,\n\t\t\tdish_price:13.2\n\t\t},\n\t\t{\n\t\t\tdish_id:13,\t\n\t\t\tdish_type:1,\n\t\t\tdish_img:\"http://XXX.jpg\",\n\t\t\tdish_name:\"麻辣烫\",\n\t\t\tcurrent_month_order:41,\n\t\t}\n    ]\n }",
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
            "description": "<p>shopid无效</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'shopid无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Dish_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_dish_detail",
    "title": "获取菜品详情信息",
    "name": "________2122222221",
    "group": "Dish_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_id",
            "description": "<p>菜品id</p>"
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
            "field": "dish_id",
            "description": "<p>菜品id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_type",
            "description": "<p>菜品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_name_cn",
            "description": "<p>中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_name_en",
            "description": "<p>英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_img",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_price",
            "description": "<p>菜品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "current_month_order",
            "description": "<p>本月订单量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndish_id: 1,\ndish_type:0,\ndish_name_cn:\"XXXX\",\ndish_name_en:\"xxx\",\ndish_img:\"XXX.jpg\",\ndish_price:11.2,\ncurrent_month_order:3\n}",
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
            "description": "<p>dish_id无效</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'dish_id无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Dish_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_all_side_dishes",
    "title": "获取某菜品所有配菜接口",
    "name": "___________1",
    "group": "Dish_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_id",
            "description": "<p>菜品id</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "side_dish_info_list",
            "description": "<p>返回菜品包含配菜数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "side_dish_info_list.side_dish_id",
            "description": "<p>配菜id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side_dish_info_list.side_dish_cn_name",
            "description": "<p>中文配菜名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side_dish_info_list.side_dish_en_name",
            "description": "<p>英文配菜名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "side_dish_info_list.side_dish_price",
            "description": "<p>配菜价格</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nside_dish_info_list:[\n\t\t{\n\t\t\tside_dish_id:12,\t\n\t\t\tside_dish_name:\"花生米\",\n\t\t\tside_dish_price:3\n\t\t},\n\t\t{\n\t\t\tside_dish_id:13,\t\n\t\t\tside_dish_name:\"海带\",\n\t\t\tside_dish_price:4\n\t\t}\n    ]\n }",
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
            "description": "<p>dish_id无效</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'dish_id无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Dish_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/upload_order",
    "title": "用户提交订单",
    "name": "______1",
    "group": "Order_Module",
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
            "field": "shop_id",
            "description": "<p>店家id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "paytype_id",
            "description": "<p>支付方式id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "consume_type",
            "description": "<p>消费方式（0-配送，1-到店消费）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tip_type",
            "description": "<p>小费方式（0-小费比率，1-现金小费）</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "tip_ratio",
            "description": "<p>小费百分比（如果tip_type为0）</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "dish_order_list",
            "description": "<p>点餐列表</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.dish_id",
            "description": "<p>菜品id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.dish_type",
            "description": "<p>菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.order_number",
            "description": "<p>菜品点了多少份</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "dish_order_list.side_dish_list",
            "description": "<p>配菜列表（如果dish_type为1的话）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.side_dish_list.order_number",
            "description": "<p>配菜点了多少份</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.side_dish_list.side_dish_id",
            "description": "<p>配菜id</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "distance",
            "description": "<p>商户距离用户的距离（调用接口，如果用户或商户没有传递地址信息，返回值为0，单位KM）</p>"
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
            "description": "<p>shop_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>delivery_address_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-4",
            "description": "<p>paytype_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Order_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_order_detail_info",
    "title": "获取订单详情信息",
    "name": "________1",
    "group": "Order_Module",
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
            "field": "order_id",
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
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "paytype_id",
            "description": "<p>支付方式id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "consume_type",
            "description": "<p>消费方式（0-配送，1-到店消费）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tip_type",
            "description": "<p>小费方式（0-小费比率，1-现金小费）</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "tip_ratio",
            "description": "<p>小费百分比（如果tip_type为0）</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "dish_order_list",
            "description": "<p>点餐列表</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.dish_id",
            "description": "<p>菜品id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.dish_type",
            "description": "<p>菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.order_number",
            "description": "<p>菜品点了多少份</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "dish_order_list.side_dish_list",
            "description": "<p>配菜列表（如果dish_type为1的话）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.side_dish_list.order_number",
            "description": "<p>配菜点了多少份</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_order_list.side_dish_list.side_dish_id",
            "description": "<p>配菜id</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "freight",
            "description": "<p>运费</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "distance",
            "description": "<p>商户距离用户的距离（调用接口，如果用户或商户没有传递地址信息，返回值为0，单位KM）</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "tax",
            "description": "<p>税费</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_create_time",
            "description": "<p>订单建立时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndelivery_address_id:1,\npaytype_id:1,\nconsume_type:0,\ntip_type:0,\ntip_ratio:0.15,\nremark:\"no salt please!\",\n\ndish_order_list:[\n  {\n\t\tdish_id:1,\n\t\tdish_type:1,\n\t\torder_number:1,\n\t\tside_dish_list:\n\t\t[\n\t\t\t{\n\t \t\t\torder_number:1,\n\t\t\t\tside_dish_id:1\n\t\t\t\n\t\t]\n\n  }\n ],\n\t\n\tfreight:19,\n\tdistance:12,\n\ttax:10.1,\n\torder_create_time:\"2016-12-01 10:12:23\"\n\n }",
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
            "description": "<p>order_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Order_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_all_orders",
    "title": "获取用户所有的订单信息",
    "name": "___________1",
    "group": "Order_Module",
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
            "type": "object[]",
            "optional": false,
            "field": "order_list",
            "description": "<p>订单数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "order_list.order_status",
            "description": "<p>订单状态（0-订单进行中，1-订单已完成，2-订单已取消）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "order_list.shop_id",
            "description": "<p>订单从属的商户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_list.shop_cn_name",
            "description": "<p>订单从属的商户中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_list.shop_en_name",
            "description": "<p>订单从属的商户英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_list.shop_img",
            "description": "<p>订单从属的商户图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "order_list.total_price",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_list.order_create_time",
            "description": "<p>订单建立时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\norder_list:[\n  {\n\t\torder_status:0,\n\t\tshop_id:1,\n\t\tshop_name:\"兰州拉面\",\n\t\tshop_img:\"XXX.jpg\",\n\t\ttotal_price:23.1,\n\t\torder_create_time:\"2016-12-11 19:00:00\"\n  }\n]\n }",
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
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'shop_id无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Order_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/calculate_distance",
    "title": "计算商户到收货地址之间的距离",
    "name": "______________1",
    "group": "Order_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shop_id",
            "description": "<p>商户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
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
            "type": "float",
            "optional": false,
            "field": "distance",
            "description": "<p>距离（单位km）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndistance:'4.5',\n }",
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
            "description": "<p>shop_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>delivery_address_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>商户尚没有上传地址</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-4",
            "description": "<p>收货地址无法计算距离</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'shop_id无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Order_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/calculate_distance",
    "title": "计算商户到收货地址之间的距离",
    "name": "______________1",
    "group": "Order_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shop_id",
            "description": "<p>商户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
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
            "type": "float",
            "optional": false,
            "field": "distance",
            "description": "<p>距离（单位km）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndistance:'4.5',\n }",
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
            "description": "<p>shop_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>delivery_address_id无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>商户尚没有上传地址</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-4",
            "description": "<p>收货地址无法计算距离</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'shop_id无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Order_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_banner_list",
    "title": "获取轮播图像",
    "name": "______111",
    "group": "Other_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
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
            "type": "Object[]",
            "optional": false,
            "field": "banner_list",
            "description": "<p>轮播图集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "banner_list.img",
            "description": "<p>轮播图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "banner_list.link",
            "description": "<p>轮播图超链接</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "banner_list.priority",
            "description": "<p>轮播图优先级（优先级高的先显示）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nbanner_list:[\n\t{\n\t\timg:'a.jpg',\n\t\tlink :'http://www.baidu.com/',\n\t\tpriority: 3 \n},\n],\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Other_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/search_shop_infos",
    "title": "搜索所有的店铺",
    "name": "_______111",
    "group": "Shop_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_search_term",
            "description": "<p>店铺搜索条件</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "shop_info_list",
            "description": "<p>返回店铺信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "shop_info_list.shop_id",
            "description": "<p>店铺id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "shop_info_list.status",
            "description": "<p>店铺状态（0-已关闭，1-营业中）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.img",
            "description": "<p>店铺图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.name_cn",
            "description": "<p>店铺中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.name_en",
            "description": "<p>店铺英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.shop_feature",
            "description": "<p>店铺中文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.shop_feature_en",
            "description": "<p>店铺英文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.address",
            "description": "<p>店铺地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.current_month_order",
            "description": "<p>当月订单数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nshop_info_list:[\n\t\t{\n\t\t\tshop_id:12,\t\n\t\t\timg:\"http://XXX.img\",\n\t\t\tname:\"XX牛肉面\",\n\t\t\taddress:\"XXX Street\",\n\t\t\tcurrent_month_order:\"112\"\n\t\t}\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Not Found\n {\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Shop_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_shop_detail_info",
    "title": "获取店铺信息详情",
    "name": "________1",
    "group": "Shop_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shop_id",
            "description": "<p>店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageno",
            "description": "<p>分页码，不填默认为第1页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pagelength",
            "description": "<p>页长，不填默认为全部</p>"
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
            "field": "status",
            "description": "<p>店铺状态（0-已关闭，1-营业中）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_img",
            "description": "<p>商铺图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name_cn",
            "description": "<p>商铺中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name_en",
            "description": "<p>商铺英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_feature",
            "description": "<p>商铺中文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_feature_en",
            "description": "<p>商铺英文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "min_distribution_cost",
            "description": "<p>最低配送费用</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "dish_info_list",
            "description": "<p>返回店铺菜品信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.dish_id",
            "description": "<p>菜品id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.dish_type",
            "description": "<p>菜品类型（0-单品菜，1-含配菜）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_img",
            "description": "<p>菜品图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_name_cn",
            "description": "<p>中文菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_info_list.dish_name_en",
            "description": "<p>英文菜品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "dish_info_list.current_month_order",
            "description": "<p>菜品当月订单数</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "dish_info_list.dish_price",
            "description": "<p>菜品价格（如果<code>dish_type</code>为<code>0</code>）</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "shop_detail_info",
            "description": "<p>店铺详情信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_detail_info.delivery_time",
            "description": "<p>可配送时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_detail_info.phone",
            "description": "<p>商家电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_detail_info.address",
            "description": "<p>商家地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\ndish_info_list:[\n\t\t{\n\t\t\tdish_id:12,\t\n\t\t\tdish_type:0,\n\t\t\tdish_img:\"http://XXX.jpg\",\n\t\t\tdish_name:\"XX牛肉面\",\n\t\t\tcurrent_month_order:11,\n\t\t\tdish_price:13.2\n\t\t},\n\t\t{\n\t\t\tdish_id:13,\t\n\t\t\tdish_type:1,\n\t\t\tdish_img:\"http://XXX.jpg\",\n\t\t\tdish_name:\"麻辣烫\",\n\t\t\tcurrent_month_order:41,\n\t\t}\n    ],\n   shop_detail_info:\n\t  {\n\t\t  delivery_time:'9:00-22:00',\n\t\t  phone:'55642220',\n\t\t  address:'XXX Street'\n\t  }\n }",
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
            "description": "<p>shopid无效</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'shopid无效',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Shop_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_all_shop_infos",
    "title": "获取所有正在营业中店铺的信息",
    "name": "______________11",
    "group": "Shop_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageno",
            "description": "<p>分页码，不填默认为第1页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pagelength",
            "description": "<p>页长，不填默认为全部</p>"
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
            "field": "total_shop_number",
            "description": "<p>商店总数</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "shop_info_list",
            "description": "<p>返回店铺信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "shop_info_list.status",
            "description": "<p>店铺状态（0-已关闭，1-营业中）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.shop_id",
            "description": "<p>店铺id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.img",
            "description": "<p>店铺图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.name_cn",
            "description": "<p>店铺中文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.name_en",
            "description": "<p>店铺英文名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.shop_feature",
            "description": "<p>店铺中文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.shop_feature_en",
            "description": "<p>店铺英文特色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.address",
            "description": "<p>店铺地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_info_list.current_month_order",
            "description": "<p>当月订单数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nshop_info_list:[\n\t\t{\n\t\t\tshop_id:12,\t\n\t\t\timg:\"http://XXX.img\",\n\t\t\tname:\"XX牛肉面\",\n\t\t\taddress:\"XXX Street\",\n\t\t\tcurrent_month_order:\"112\"\n\t\t}\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "Shop_Module"
  },
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/get_addr",
    "title": "获取商户地址",
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
    "filename": "./android_docfile/doc.js",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_id",
            "description": "<p>极光推送设备标记</p>"
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
    "filename": "./android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/user_serv/site_search",
    "title": "地点搜索接口",
    "name": "______1111",
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
            "field": "address",
            "description": "<p>输入的地址</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "address_list",
            "description": "<p>返回地址信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address_list.detail_address",
            "description": "<p>返回的详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "address_list.longitude",
            "description": "<p>返回地址的经度</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "address_list.latitude",
            "description": "<p>返回地址的纬度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\naddress_list:[\n\t\t{\n\t\t\tdetail_address:\"New york XXX Street\",\n\t\t\tlongitude:123.41,\n\t\t\tlatitude:32.90,\n\t\t},\n\t\t{\n\t\t\tdetail_address:\"New york XXX Building\",\n\t\t\tlongitude:123.11,\n\t\t\tlatitude:32.30,\n\t\t}\t \n\t  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shop_serv/upload_addr",
    "title": "上传商户地址",
    "name": "______11111",
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
            "field": "searched_addr",
            "description": "<p>搜索选择的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detailed_addr",
            "description": "<p>具体地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>具体地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>具体地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
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
    "filename": "./android_docfile/doc.js",
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageno",
            "description": "<p>分页码，不填默认为第1页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pagelength",
            "description": "<p>页长，不填默认为全部</p>"
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageno",
            "description": "<p>分页码，不填默认为第1页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pagelength",
            "description": "<p>页长，不填默认为全部</p>"
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageno",
            "description": "<p>分页码，不填默认为第1页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pagelength",
            "description": "<p>页长，不填默认为全部</p>"
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
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
    "filename": "./android_docfile/doc.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
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
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user_serv/add_delivery_addres",
    "title": "新增收货地址",
    "name": "______1",
    "group": "User_Address_Module",
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
            "field": "receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_phone",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searched_address",
            "description": "<p>搜索地址（google生成，见<code>地点搜索接口</code>）</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "searched_address_longitude",
            "description": "<p>搜索地址的经度（google生成，见<code>地点搜索接口</code>）</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "searched_address_latitude",
            "description": "<p>搜索地址的纬度（google生成，见<code>地点搜索接口</code>）</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "detail_address",
            "description": "<p>补充详细地址（如:XX小区16楼26号）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
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
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/site_search",
    "title": "地点搜索接口",
    "name": "______111",
    "group": "User_Address_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>输入的地址</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "address_list",
            "description": "<p>返回地址信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address_list.detail_address",
            "description": "<p>返回的详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "address_list.longitude",
            "description": "<p>返回地址的经度</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "address_list.latitude",
            "description": "<p>返回地址的纬度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\naddress_list:[\n\t\t{\n\t\t\tdetail_address:\"New york XXX Street\",\n\t\t\tlongitude:123.41,\n\t\t\tlatitude:32.90,\n\t\t},\n\t\t{\n\t\t\tdetail_address:\"New york XXX Building\",\n\t\t\tlongitude:123.11,\n\t\t\tlatitude:32.30,\n\t\t}\t \n\t  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/delivery_address_infos",
    "title": "获取收货地址信息",
    "name": "________1",
    "group": "User_Address_Module",
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
            "type": "Object",
            "optional": false,
            "field": "delivery_address_infos",
            "description": "<p>用户支付方式信息对象封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "delivery_address_infos.infos.delivery_address_id",
            "description": "<p>收货地址id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delivery_address_infos.receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delivery_address_infos.receiver_phone",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delivery_address_infos.postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delivery_address_infos.address",
            "description": "<p>收货地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\t  code:0,\n   msg:'success',\n   delivery_address_infos:{\n\t  count:2,\n\t  infos:[\n\t\t{\n\t\t\tdelivery_address_id:12,\n\t\t\treceiver_name:'董绍辉',\n\t\t\treceiver_phone:\"18922112441\",\n\t\t\tpostcode:\"100000\",\n\t\t\taddress:\"北京市四惠\"\n\t\t},\n\t\t{\n\t\t\tdelivery_address_id:13,\n\t\t\treceiver_name:'刘惠',\n\t\t\treceiver_phone:\"18922100141\",\n\t\t\tpostcode:\"100000\",\n\t\t\taddress:\"北京市亚运村\"\n\t\t}\n\t  ]\n\t}\n}",
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/select_delivery_address",
    "title": "用户选取收货地址",
    "name": "________11122",
    "group": "User_Address_Module",
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
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
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
            "description": "<p>delivery_address_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/delete_delivery_address",
    "title": "用户删除收货地址",
    "name": "________1221",
    "group": "User_Address_Module",
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
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
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
            "description": "<p>delivery_address_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_user_delivery_address",
    "title": "获取用户默认送货地址",
    "name": "__________111",
    "group": "User_Address_Module",
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
            "field": "delivery_address_id",
            "description": "<p>收货地址id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>取货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>取货人手机</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>取货人地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>取货人邮编</p>"
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
          "content": "HTTP/1.1 400 Not Found\n{\n code:-1,\n msg:'token失效，需重新登录',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Address_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/login",
    "title": "用户登录接口",
    "name": "______",
    "group": "User_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneno",
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
            "description": "<p>用户名或密码错误</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/register",
    "title": "用户注册",
    "name": "______1",
    "group": "User_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneno",
            "description": "<p>用户注册手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>手机验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "re_password",
            "description": "<p>再次输入的密码</p>"
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
            "description": "<p>系统分配给用户的token</p>"
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
            "description": "<p>phoneno已经注册过</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>两次输入密码不一致</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>验证码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'两次输入密码不一致',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/register",
    "title": "用户注册",
    "name": "______1",
    "group": "User_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneno",
            "description": "<p>用户注册手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>手机验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "re_password",
            "description": "<p>再次输入的密码</p>"
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
            "description": "<p>phoneno已经注册过</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-2",
            "description": "<p>两次输入密码不一致</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>验证码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'两次输入密码不一致',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/personal_info",
    "title": "获取用户个人信息",
    "name": "________1",
    "group": "User_Module",
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
            "field": "phoneno",
            "description": "<p>用户的手机号码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nphoneno:'18399192221',\n }",
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/send_verification_code",
    "title": "发送手机验证码接口",
    "name": "_________",
    "group": "User_Module",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneno",
            "description": "<p>用户注册手机号码</p>"
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
            "field": "verification_code",
            "description": "<p>手机验证码（4位数字）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\nverification_code:'1234',\n }",
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
            "description": "<p>超出今天发出次数（<code>5次</code>）</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>其他错误（短信通道、内部错误等）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n code:-2,\n msg:'超出今天发出次数（5次）',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/delete_paytype",
    "title": "删除支付方式",
    "name": "______2121",
    "group": "User_Pay_Type_Module",
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
            "field": "paytype_id",
            "description": "<p>支付方式id</p>"
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
            "description": "<p>paytype_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Pay_Type_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/add_credit_card",
    "title": "新增信用卡接口",
    "name": "_______1",
    "group": "User_Pay_Type_Module",
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
            "field": "credit_card_no",
            "description": "<p>信用卡卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pin_code",
            "description": "<p>PIN码（3-4位）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expire_year",
            "description": "<p>过期年份（YYYY）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expire_month",
            "description": "<p>过期月份（MM）</p>"
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
            "field": "pay_type_id",
            "description": "<p>pay_type的id</p>"
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
            "description": "<p>此信用卡已经添加过</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-3",
            "description": "<p>PIN码格式错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-4",
            "description": "<p>过期年份格式错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "-5",
            "description": "<p>过期月份格式错误</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Pay_Type_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/select_paytype",
    "title": "用户选取支付方式",
    "name": "________11",
    "group": "User_Pay_Type_Module",
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
            "field": "paytype_id",
            "description": "<p>支付方式id</p>"
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
            "description": "<p>paytype_id无效</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Pay_Type_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/paytype_infos",
    "title": "获取用户支付管理信息",
    "name": "__________1",
    "group": "User_Pay_Type_Module",
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
            "type": "Object",
            "optional": false,
            "field": "paytype_infos",
            "description": "<p>用户支付方式信息对象封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "paytype_infos.count",
            "description": "<p>用户支付方式的种类数量</p>"
          },
          {
            "group": "Success 200",
            "type": "objcet[]",
            "optional": false,
            "field": "paytype_infos.infos",
            "description": "<p>用户支付方式信息数组</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "paytype_infos.infos.paytype_id",
            "description": "<p>支付方式id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "paytype_infos.infos.type",
            "description": "<p>用户支付方式（0-信用卡，1-货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "paytype_infos.infos.cardno",
            "description": "<p>（当type为0）信用卡卡号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\npaytype_infos:{\n\tcount:2,\n\tinfos:[\n\t\t{\n\t\t\ttype:0,\n\t\t\tcardno:\"1231436462\"\n\t\t},\n\t\t{\n\t\t\ttype:1\n\t\t}\n\t  ]\n\t}\n}",
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Pay_Type_Module"
  },
  {
    "type": "get",
    "url": "/user_serv/get_paytype",
    "title": "获取用户默认支付方式",
    "name": "__________11",
    "group": "User_Pay_Type_Module",
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
            "field": "paytype_id",
            "description": "<p>支付方式id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付方式（0-信用卡，1-货到付款）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "credit_card",
            "description": "<p>信用卡号（当pay_type为0）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pin_code",
            "description": "<p>pin码（当pay_type为0）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expire_year",
            "description": "<p>信用卡到期年份（YYYY）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expire_month",
            "description": "<p>信用卡到期月份（MM）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\ncode:0,\nmsg:'success',\npay_type:0,\npin_code：3412,\nexpire_year:'1987',\nexpire_month:'12'\n }",
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
            "description": "<p>用户还未指定支付方式</p>"
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
    "filename": "./ios_docfile/doc.js",
    "groupTitle": "User_Pay_Type_Module"
  }
] });
