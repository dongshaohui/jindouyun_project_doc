/**
 * 此接口不要去实现，仅作为输出api文档用的
 * @author xumin
 *
 */
@Deprecated
public interface ApiDoc {

	/**
	 * 
	 * @api {post} /shop_serv/login 商户登录接口
	 * @apiName 商户登录接口11
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} username 商户手机号码 
	 * @apiParam {String} password 商户登录密码（明文） 
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 登录成功后分配给用户的token（session）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * token:'u1bv1b2308jnikibn213u',
	 *  }
	 *  
	 *  @apiError -1 用户名不存在
	 *  @apiError -2 密码错误
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'用户名不存在',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */


	/**
	 * 
	 * @api {get} /user_serv/site_search 地点搜索接口
	 * @apiName 地点搜索接口111
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} address 输入的地址
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {object[]} address_list 返回地址信息数组
	 * @apiSuccess {String} address_list.detail_address 返回的详细地址
	 * @apiSuccess {float} address_list.longitude 返回地址的经度
	 * @apiSuccess {float} address_list.latitude 返回地址的纬度
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * address_list:[
	 *		{
	 *			detail_address:"New york XXX Street",
	 *			longitude:123.41,
	 *			latitude:32.90,
	 * 		},
	 *		{
	 *			detail_address:"New york XXX Building",
	 *			longitude:123.11,
	 *			latitude:32.30,
	 * 		}	 
	 *	  ]
	 *  }
	 *  
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */

	 // 商户端获取已完成订单接口
	/**
	 * 
	 * @api {get} /shop_serv/get_all_finish_orders 获取所有已完成订单
	 * @apiName 获取所有已完成订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 用户token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配的token
	 * @apiSuccess {Object} orders 订单数据封装
	 * @apiSuccess {int} orders.count 总订单数
	 * @apiSuccess {Object[]} orders.list 订单数据对象数组
	 * @apiSuccess {int} orders.list.orderid 订单id
	 * @apiSuccess {int} orders.list.order_status 订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）
	 * @apiSuccess {String} orders.list.ordertime 当单建立时间（YYYY-MM-DD hh:mm:ss）
	 * @apiSuccess {Object} orders.list.userinfo 订单发起者信息对象
	 * @apiSuccess {String} orders.list.userinfo.name 订单发起者姓名
	 * @apiSuccess {String} orders.list.userinfo.phoneno 订单发起者电话
	 * @apiSuccess {String} orders.list.orderaddr 订单送餐地址
	 * @apiSuccess {int} orders.list.sendtype 订单配送方式（1：配送，2：自取）
	 * @apiSuccess {int} orders.list.paytype 订单支付方式（1：信用卡，2：货到付款）
	 * @apiSuccess {Object} orders.list.creditcard_info 信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）
	 * @apiSuccess {String} orders.list.creditcard_info.cardno 信用卡卡号
	 * @apiSuccess {String} orders.list.creditcard_info.pin 信用卡pin码（3或4位）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_year 信用卡有效期年份（YYYY）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_month 信用卡有效期月份（MM）
	 * @apiSuccess {Object[]} orders.list.dishinfos 订单菜品信息数组
	 * @apiSuccess {String} orders.list.dishinfos.dish_name 订单菜品名称
	 * @apiSuccess {int} orders.list.dishinfos.dish_number 订单菜品数量
	 * @apiSuccess {int} orders.list.dishinfos.dish_type 订单菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {Object[]} orders.list.dishinfos.sub_dish_list 子菜品列表
	 * @apiSuccess {String} orders.list.dishinfos.sub_dish_list.name 子菜品名称
	 * @apiSuccess {float} orders.list.dishinfos.sub_dish_list.price 子菜品价格
	 * @apiSuccess {float} orders.list.dishinfos.dish_price 订单菜品价格
	 * @apiSuccess {Object} orders.list.price_detail 订单价格明细
	 * @apiSuccess {float} orders.list.price_detail.dish_total_price 订单菜品总价
	 * @apiSuccess {float} orders.list.price_detail.tax_price 订单税费
	 * @apiSuccess {float} orders.list.price_detail.freight_price 订单运费
	 * @apiSuccess {float} orders.list.price_detail.tip_price 订单小费
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 *{
	 *    "code": 0,
	 *    "token": "u1bv1b2308jnikibn213u",
	 *    "msg": "success",
	 *    "orders": {
	 *        "count": 1,
	 *        "list": [
	 *            {
	 *                "orderid": 1,
	 *                "ordertime": "2014-12-01 12:00:00",
	 *                "userinfo": {
	 *                    "name": "董绍辉",
	 *                    "phoneno": "18310702213"
	 *                },
	 *                "orderaddr": "New York XXXX Street",
	 *                "sendtype": 1,
	 *                "paytype": 1,
	 *                "creditcard_info": {
	 *                    "cardno": "123123",
	 *                    "pin": "123",
	 *                    "validate_year": "2020",
	 *                    "validate_month": "12"
	 *                },
	 *                "dishinfos": [
	 *                    {
	 *                        "dish_name": "京酱肉丝",
	 *                        "dish_price": 23.2
	 *                    },
	 *                    {
	 *                        "dish_name": "鸡蛋饼",
	 *                        "dish_price": 3.1
	 *                    }
	 *                ],
	 *                "price_detail": {
	 *                    "dish_total_price": 26.3,
	 *                    "tax_price": 3,
	 *                    "freight_price": 10,
	 *                    "tip_price": 2
	 *                }
	 *            }
	 *        ]
	 *    }
	 *}
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /shop_serv/get_history_orders 获取所有历史订单
	 * @apiName 获取所有历史订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 用户token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配的token
	 * @apiSuccess {Object} orders 订单数据封装
	 * @apiSuccess {int} orders.count 总订单数
	 * @apiSuccess {Object[]} orders.list 订单数据对象数组
	 * @apiSuccess {int} orders.list.orderid 订单id
	 * @apiSuccess {int} orders.list.order_status 订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）
	 * @apiSuccess {String} orders.list.ordertime 当单建立时间（YYYY-MM-DD hh:mm:ss）
	 * @apiSuccess {Object} orders.list.userinfo 订单发起者信息对象
	 * @apiSuccess {String} orders.list.userinfo.name 订单发起者姓名
	 * @apiSuccess {String} orders.list.userinfo.phoneno 订单发起者电话
	 * @apiSuccess {String} orders.list.orderaddr 订单送餐地址
	 * @apiSuccess {int} orders.list.sendtype 订单配送方式（1：配送，2：自取）
	 * @apiSuccess {int} orders.list.paytype 订单支付方式（1：信用卡，2：货到付款）
	 * @apiSuccess {Object} orders.list.creditcard_info 信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）
	 * @apiSuccess {String} orders.list.creditcard_info.cardno 信用卡卡号
	 * @apiSuccess {String} orders.list.creditcard_info.pin 信用卡pin码（3或4位）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_year 信用卡有效期年份（YYYY）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_month 信用卡有效期月份（MM）
	 * @apiSuccess {Object[]} orders.list.dishinfos 订单菜品信息数组
	 * @apiSuccess {String} orders.list.dishinfos.dish_name 订单菜品名称
	 * @apiSuccess {int} orders.list.dishinfos.dish_number 订单菜品数量
	 * @apiSuccess {int} orders.list.dishinfos.dish_type 订单菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {Object[]} orders.list.dishinfos.sub_dish_list 子菜品列表
	 * @apiSuccess {String} orders.list.dishinfos.sub_dish_list.name 子菜品名称
	 * @apiSuccess {float} orders.list.dishinfos.sub_dish_list.price 子菜品价格
	 * @apiSuccess {float} orders.list.dishinfos.dish_price 订单菜品价格
	 * @apiSuccess {Object} orders.list.price_detail 订单价格明细
	 * @apiSuccess {float} orders.list.price_detail.dish_total_price 订单菜品总价
	 * @apiSuccess {float} orders.list.price_detail.tax_price 订单税费
	 * @apiSuccess {float} orders.list.price_detail.freight_price 订单运费
	 * @apiSuccess {float} orders.list.price_detail.tip_price 订单小费
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 *{
	 *    "code": 0,
	 *    "token": "u1bv1b2308jnikibn213u",
	 *    "msg": "success",
	 *    "orders": {
	 *        "count": 1,
	 *        "list": [
	 *            {
	 *                "orderid": 1,
	 *                "ordertime": "2014-12-01 12:00:00",
	 *                "userinfo": {
	 *                    "name": "董绍辉",
	 *                    "phoneno": "18310702213"
	 *                },
	 *                "orderaddr": "New York XXXX Street",
	 *                "sendtype": 1,
	 *                "paytype": 1,
	 *                "creditcard_info": {
	 *                    "cardno": "123123",
	 *                    "pin": "123",
	 *                    "validate_year": "2020",
	 *                    "validate_month": "12"
	 *                },
	 *                "dishinfos": [
	 *                    {
	 *                        "dish_name": "京酱肉丝",
	 *                        "dish_price": 23.2
	 *                    },
	 *                    {
	 *                        "dish_name": "鸡蛋饼",
	 *                        "dish_price": 3.1
	 *                    }
	 *                ],
	 *                "price_detail": {
	 *                    "dish_total_price": 26.3,
	 *                    "tax_price": 3,
	 *                    "freight_price": 10,
	 *                    "tip_price": 2
	 *                }
	 *            }
	 *        ]
	 *    }
	 *}
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */


	/**
	 * 
	 * @api {get} /shop_serv/get_all_new_orders 获取所有新订单
	 * @apiName 获取所有新订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 用户token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配的token
	 * @apiSuccess {Object} orders 订单数据封装
	 * @apiSuccess {int} orders.count 总订单数
	 * @apiSuccess {Object[]} orders.list 订单数据对象数组
	 * @apiSuccess {int} orders.list.orderid 订单id
	 * @apiSuccess {int} orders.list.order_status 订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）
	 * @apiSuccess {String} orders.list.ordertime 当单建立时间（YYYY-MM-DD hh:mm:ss）
	 * @apiSuccess {Object} orders.list.userinfo 订单发起者信息对象
	 * @apiSuccess {String} orders.list.userinfo.name 订单发起者姓名
	 * @apiSuccess {String} orders.list.userinfo.phoneno 订单发起者电话
	 * @apiSuccess {String} orders.list.orderaddr 订单送餐地址
	 * @apiSuccess {int} orders.list.sendtype 订单配送方式（1：配送，2：自取）
	 * @apiSuccess {int} orders.list.paytype 订单支付方式（1：信用卡，2：货到付款）
	 * @apiSuccess {Object} orders.list.creditcard_info 信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）
	 * @apiSuccess {String} orders.list.creditcard_info.cardno 信用卡卡号
	 * @apiSuccess {String} orders.list.creditcard_info.pin 信用卡pin码（3或4位）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_year 信用卡有效期年份（YYYY）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_month 信用卡有效期月份（MM）
	 * @apiSuccess {Object[]} orders.list.dishinfos 订单菜品信息数组
	 * @apiSuccess {String} orders.list.dishinfos.dish_name 订单菜品名称
	 * @apiSuccess {int} orders.list.dishinfos.dish_number 订单菜品数量
	 * @apiSuccess {int} orders.list.dishinfos.dish_type 订单菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {Object[]} orders.list.dishinfos.sub_dish_list 子菜品列表
	 * @apiSuccess {String} orders.list.dishinfos.sub_dish_list.name 子菜品名称
	 * @apiSuccess {float} orders.list.dishinfos.sub_dish_list.price 子菜品价格
	 * @apiSuccess {float} orders.list.dishinfos.dish_price 订单菜品价格
	 * @apiSuccess {Object} orders.list.price_detail 订单价格明细
	 * @apiSuccess {float} orders.list.price_detail.dish_total_price 订单菜品总价
	 * @apiSuccess {float} orders.list.price_detail.tax_price 订单税费
	 * @apiSuccess {float} orders.list.price_detail.freight_price 订单运费
	 * @apiSuccess {float} orders.list.price_detail.tip_price 订单小费
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 *{
	 *    "code": 0,
	 *    "token": "u1bv1b2308jnikibn213u",
	 *    "msg": "success",
	 *    "orders": {
	 *        "count": 1,
	 *        "list": [
	 *            {
	 *                "orderid": 1,
	 *                "ordertime": "2014-12-01 12:00:00",
	 *                "userinfo": {
	 *                    "name": "董绍辉",
	 *                    "phoneno": "18310702213"
	 *                },
	 *                "orderaddr": "New York XXXX Street",
	 *                "sendtype": 1,
	 *                "paytype": 1,
	 *                "creditcard_info": {
	 *                    "cardno": "123123",
	 *                    "pin": "123",
	 *                    "validate_year": "2020",
	 *                    "validate_month": "12"
	 *                },
	 *                "dishinfos": [
	 *                    {
	 *                        "dish_name": "京酱肉丝",
	 *                        "dish_price": 23.2
	 *                    },
	 *                    {
	 *                        "dish_name": "鸡蛋饼",
	 *                        "dish_price": 3.1
	 *                    }
	 *                ],
	 *                "price_detail": {
	 *                    "dish_total_price": 26.3,
	 *                    "tax_price": 3,
	 *                    "freight_price": 10,
	 *                    "tip_price": 2
	 *                }
	 *            }
	 *        ]
	 *    }
	 *}
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */


	 // 商户端获取已接订单接口
	/**
	 * 
	 * @api {get} /shop_serv/get_all_accept_orders 获取所有已接订单
	 * @apiName 获取所有已接订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 用户token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配的token
	 * @apiSuccess {Object} orders 订单数据封装
	 * @apiSuccess {int} orders.count 总订单数
	 * @apiSuccess {Object[]} orders.list 订单数据对象数组
	 * @apiSuccess {int} orders.list.orderid 订单id
	 * @apiSuccess {int} orders.list.order_status 订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）
	 * @apiSuccess {String} orders.list.ordertime 当单建立时间（YYYY-MM-DD hh:mm:ss）
	 * @apiSuccess {Object} orders.list.userinfo 订单发起者信息对象
	 * @apiSuccess {String} orders.list.userinfo.name 订单发起者姓名
	 * @apiSuccess {String} orders.list.userinfo.phoneno 订单发起者电话
	 * @apiSuccess {String} orders.list.orderaddr 订单送餐地址
	 * @apiSuccess {int} orders.list.sendtype 订单配送方式（1：配送，2：自取）
	 * @apiSuccess {int} orders.list.paytype 订单支付方式（1：信用卡，2：货到付款）
	 * @apiSuccess {Object} orders.list.creditcard_info 信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）
	 * @apiSuccess {String} orders.list.creditcard_info.cardno 信用卡卡号
	 * @apiSuccess {String} orders.list.creditcard_info.pin 信用卡pin码（3或4位）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_year 信用卡有效期年份（YYYY）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_month 信用卡有效期月份（MM）
	 * @apiSuccess {Object[]} orders.list.dishinfos 订单菜品信息数组
	 * @apiSuccess {String} orders.list.dishinfos.dish_name 订单菜品名称
	 * @apiSuccess {int} orders.list.dishinfos.dish_number 订单菜品数量
	 * @apiSuccess {int} orders.list.dishinfos.dish_type 订单菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {Object[]} orders.list.dishinfos.sub_dish_list 子菜品列表
	 * @apiSuccess {String} orders.list.dishinfos.sub_dish_list.name 子菜品名称
	 * @apiSuccess {float} orders.list.dishinfos.sub_dish_list.price 子菜品价格
	 * @apiSuccess {float} orders.list.dishinfos.dish_price 订单菜品价格
	 * @apiSuccess {Object} orders.list.price_detail 订单价格明细
	 * @apiSuccess {float} orders.list.price_detail.dish_total_price 订单菜品总价
	 * @apiSuccess {float} orders.list.price_detail.tax_price 订单税费
	 * @apiSuccess {float} orders.list.price_detail.freight_price 订单运费
	 * @apiSuccess {float} orders.list.price_detail.tip_price 订单小费
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 *{
	 *    "code": 0,
	 *    "token": "u1bv1b2308jnikibn213u",
	 *    "msg": "success",
	 *    "orders": {
	 *        "count": 1,
	 *        "list": [
	 *            {
	 *                "orderid": 1,
	 *                "ordertime": "2014-12-01 12:00:00",
	 *                "userinfo": {
	 *                    "name": "董绍辉",
	 *                    "phoneno": "18310702213"
	 *                },
	 *                "orderaddr": "New York XXXX Street",
	 *                "sendtype": 1,
	 *                "paytype": 1,
	 *                "creditcard_info": {
	 *                    "cardno": "123123",
	 *                    "pin": "123",
	 *                    "validate_year": "2020",
	 *                    "validate_month": "12"
	 *                },
	 *                "dishinfos": [
	 *                    {
	 *                        "dish_name": "京酱肉丝",
	 *                        "dish_price": 23.2
	 *                    },
	 *                    {
	 *                        "dish_name": "鸡蛋饼",
	 *                        "dish_price": 3.1
	 *                    }
	 *                ],
	 *                "price_detail": {
	 *                    "dish_total_price": 26.3,
	 *                    "tax_price": 3,
	 *                    "freight_price": 10,
	 *                    "tip_price": 2
	 *                }
	 *            }
	 *        ]
	 *    }
	 *}
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */



	// 商户端 接新订单接口
	/**
	 * 
	 * @api {post} /shop_serv/accept_new_order 接新订单
	 * @apiName  新订单接单，新订单变为已接订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} orderid 订单id 
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 订单id不存在
	 *  @apiError -3 订单id不是已接订单id
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'订单id不存在',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */	


	// 商户端 完成订单接口
	/**
	 * 
	 * @api {post} /shop_serv/finish_order 完成订单
	 * @apiName  完成订单接口  已接订单变成完成订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} orderid 订单id 
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 订单id不存在
	 *  @apiError -3 订单id不是已接id
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'订单id不存在',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	// 商户端 拒绝新订单接口
	/**
	 * 
	 * @api {post} /shop_serv/reject_new_order 拒绝新订单
	 * @apiName  拒绝新订单
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} orderid 订单id 
	 * @apiParam {String} reason 拒单理由
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 订单id不存在
	 *  @apiError -3 订单id不是新订单id
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'订单id不存在',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */	


	/**
	 * 
	 * @api {post} /shop_serv/modify_business_status 修改营业状态
	 * @apiName  拒绝新订单1
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {int} business_status 营业状态（0-未营业，1-营业）
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录	 
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录	',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	// 商户端 订单搜索
	/**
	 * 
	 * @api {get} /shop_serv/search_orders 订单搜索接口
	 * @apiName  订单搜索接口
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} condition 查询条件（可以是手机号、oriderid或订单发起人姓名）
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配的token
	 * @apiSuccess {Object} orders 订单数据封装
	 * @apiSuccess {int} orders.count 总订单数
	 * @apiSuccess {Object[]} orders.list 订单数据对象数组
	 * @apiSuccess {int} orders.list.orderid 订单id
	 * @apiSuccess {int} orders.list.order_status 订单状态（1-新订单，2-已接订单，3-已完成订单，4-已取消的订单）
	 * @apiSuccess {String} orders.list.ordertime 当单建立时间（YYYY-MM-DD hh:mm:ss）
	 * @apiSuccess {Object} orders.list.userinfo 订单发起者信息对象
	 * @apiSuccess {String} orders.list.userinfo.name 订单发起者姓名
	 * @apiSuccess {String} orders.list.userinfo.phoneno 订单发起者电话
	 * @apiSuccess {String} orders.list.orderaddr 订单送餐地址
	 * @apiSuccess {int} orders.list.sendtype 订单配送方式（1：配送，2：自取）
	 * @apiSuccess {int} orders.list.paytype 订单支付方式（1：信用卡，2：货到付款）
	 * @apiSuccess {Object} orders.list.creditcard_info 信用卡信息对象（当<code>paytype</code>为<code>1</code>的时候）
	 * @apiSuccess {String} orders.list.creditcard_info.cardno 信用卡卡号
	 * @apiSuccess {String} orders.list.creditcard_info.pin 信用卡pin码（3或4位）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_year 信用卡有效期年份（YYYY）
	 * @apiSuccess {String} orders.list.creditcard_info.validate_month 信用卡有效期月份（MM）
	 * @apiSuccess {Object[]} orders.list.dishinfos 订单菜品信息数组
	 * @apiSuccess {String} orders.list.dishinfos.dish_name 订单菜品名称
	 * @apiSuccess {int} orders.list.dishinfos.dish_number 订单菜品数量
	 * @apiSuccess {int} orders.list.dishinfos.dish_type 订单菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {Object[]} orders.list.dishinfos.sub_dish_list 子菜品列表
	 * @apiSuccess {String} orders.list.dishinfos.sub_dish_list.name 子菜品名称
	 * @apiSuccess {float} orders.list.dishinfos.sub_dish_list.price 子菜品价格
	 * @apiSuccess {float} orders.list.dishinfos.dish_price 订单菜品价格
	 * @apiSuccess {Object} orders.list.price_detail 订单价格明细
	 * @apiSuccess {float} orders.list.price_detail.dish_total_price 订单菜品总价
	 * @apiSuccess {float} orders.list.price_detail.tax_price 订单税费
	 * @apiSuccess {float} orders.list.price_detail.freight_price 订单运费
	 * @apiSuccess {float} orders.list.price_detail.tip_price 订单小费
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 *{
	 *    "code": 0,
	 *    "token": "u1bv1b2308jnikibn213u",
	 *    "msg": "success",
	 *    "orders": {
	 *        "count": 1,
	 *        "list": [
	 *            {
	 *                "orderid": 1,
	 *				  "order_status":1,
	 *                "ordertime": "2014-12-01 12:00:00",
	 *                "userinfo": {
	 *                    "name": "董绍辉",
	 *                    "phoneno": "18310702213"
	 *                },
	 *                "orderaddr": "New York XXXX Street",
	 *                "sendtype": 1,
	 *                "paytype": 1,
	 *                "creditcard_info": {
	 *                    "cardno": "123123",
	 *                    "pin": "123",
	 *                    "validate_year": "2020",
	 *                    "validate_month": "12"
	 *                },
	 *                "dishinfos": [
	 *                    {
	 *                        "dish_name": "京酱肉丝",
	 *                        "dish_price": 23.2
	 *                    },
	 *                    {
	 *                        "dish_name": "鸡蛋饼",
	 *                        "dish_price": 3.1
	 *                    }
	 *                ],
	 *                "price_detail": {
	 *                    "dish_total_price": 26.3,
	 *                    "tax_price": 3,
	 *                    "freight_price": 10,
	 *                    "tip_price": 2
	 *                }
	 *            }
	 *        ]
	 *    }
	 *}
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	/**
	 * 
	 * @api {get} /shop_serv/entry_addr_status 判断商户是否录入过地址
	 * @apiName 判断商户是否录入过地址
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码（0：未录入过，1：录入过）
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:1,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /shop_serv/entry_addr_status 判断商户是否录入过地址
	 * @apiName 判断商户是否录入过地址
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码（0：未录入过，1：录入过）
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:1,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */


	/**
	 * 
	 * @api {post} /shop_serv/upload_addr 上传商户地址
	 * @apiName 上传商户地址1
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} searched_addr 搜索选择的地址
	 * @apiSuccess {String} detailed_addr 具体地址
	 * @apiSuccess {String} postcode 邮编
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:1,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /shop_serv/personal_info 获取商户的信息
	 * @apiName 获取商户的信息1
	 * @apiGroup Shop
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} business_status 是否营业（0-未营业，1-营业）
	 * @apiSuccess {String} username 店铺用户名
	 * @apiSuccess {String} phoneno 联系电话
	 * @apiSuccess {text} addr 店铺地址
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:1,
	 * msg:'success',
	 * business_status:1,
	 * username:"18310704435",
	 * phoneno:"18310704435",
	 * addr:"new york"
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'token失效，需重新登录',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */



}
