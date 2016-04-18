/**
 * 此接口不要去实现，仅作为输出api文档用的
 * @author xumin
 *
 */
@Deprecated
public interface ApiDoc {

	/**
	 * 
	 * @api {get} /user_serv/login 用户登录接口
	 * @apiName 用户登录接口
	 * @apiGroup User_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} phoneno 商户手机号码 
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
	 *  @apiError -2 用户名或密码错误
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

	//发送手机验证码
	/**
	 * 
	 * @api {get} /user_serv/send_verification_code 发送手机验证码接口
	 * @apiName 发送手机验证码接口
	 * @apiGroup User_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} phoneno 用户注册手机号码 
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} verification_code 手机验证码（4位数字）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * verification_code:'1234',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 超出今天发出次数（<code>5次</code>）
	 *  @apiError -3 其他错误（短信通道、内部错误等）
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'超出今天发出次数（5次）',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /user_serv/register 用户注册
	 * @apiName 用户注册接口1
	 * @apiGroup User_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} phoneno 用户注册手机号码
	 * @apiParam {String} verification_code 手机验证码
	 * @apiParam {String} password 密码
	 * @apiParam {String} re_password 再次输入的密码
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} token 系统分配给用户的token
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 phoneno已经注册过
	 *  @apiError -2 两次输入密码不一致
	 *  @apiError -3 验证码错误
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'两次输入密码不一致',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /user_serv/register 用户注册
	 * @apiName 用户注册接口1
	 * @apiGroup User_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} phoneno 用户注册手机号码
	 * @apiParam {String} verification_code 手机验证码
	 * @apiParam {String} password 密码
	 * @apiParam {String} re_password 再次输入的密码
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
	 *  @apiError -1 phoneno已经注册过
	 *  @apiError -2 两次输入密码不一致
	 *  @apiError -3 验证码错误
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-2,
	 *   msg:'两次输入密码不一致',
	 *   }
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

	/**
	 * 
	 * @api {get} /user_serv/personal_info 获取用户个人信息
	 * @apiName 获取用户个人信息1
	 * @apiGroup User_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {String} phoneno 用户的手机号码
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * phoneno:'18399192221',
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
	 * @api {get} /user_serv/paytype_infos 获取用户支付管理信息
	 * @apiName 获取用户支付管理信息1
	 * @apiGroup User_Pay_Type_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {Object} paytype_infos 用户支付方式信息对象封装
	 * @apiSuccess {int} paytype_infos.count 用户支付方式的种类数量
	 * @apiSuccess {objcet[]} paytype_infos.infos 用户支付方式信息数组
	 * @apiSuccess {int} paytype_infos.infos.paytype_id 支付方式id
	 * @apiSuccess {int} paytype_infos.infos.type 用户支付方式（0-信用卡，1-货到付款）
	 * @apiSuccess {String} paytype_infos.infos.cardno （当type为0）信用卡卡号
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * paytype_infos:{
	 *	count:2,
	 *	infos:[
	 *		{
	 *			type:0,
	 *			cardno:"1231436462"
	 *		},
	 *		{
	 *			type:1
	 *		}
	 *	  ]
	 *	}
	 * }				
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
	 * @api {get} /user_serv/select_paytype 用户选取支付方式
	 * @apiName 用户选取支付方式11
	 * @apiGroup User_Pay_Type_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} paytype_id 支付方式id
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
	 *  @apiError -2 paytype_id无效
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
	 * @api {get} /user_serv/delete_paytype 删除支付方式
	 * @apiName 删除支付方式2121
	 * @apiGroup User_Pay_Type_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} paytype_id 支付方式id
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
	 *  @apiError -2 paytype_id无效
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
	 * @api {get} /user_serv/get_paytype 获取用户默认支付方式
	 * @apiName 获取用户默认支付方式11
	 * @apiGroup User_Pay_Type_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} pay_type 支付方式（0-信用卡，1-货到付款）
	 * @apiSuccess {String} credit_card 信用卡号（当pay_type为0）
	 * @apiSuccess {String} pin_code pin码（当pay_type为0）
	 * @apiSuccess {String} expire_year 信用卡到期年份（YYYY）
	 * @apiSuccess {String} expire_month 信用卡到期月份（MM）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * pay_type:0,
	 * pin_code：3412,
	 * expire_year:'1987',
	 * expire_month:'12'
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 用户还未指定支付方式
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
	 * @api {get} /user_serv/add_credit_card 新增信用卡接口
	 * @apiName 新增信用卡接口1
	 * @apiGroup User_Pay_Type_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} credit_card_no 信用卡卡号
	 * @apiParam {String} pin_code PIN码（3-4位） 
	 * @apiParam {String} expire_year 过期年份（YYYY） 
	 * @apiParam {String} expire_month 过期月份（MM）
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} pay_type_id pay_type的id
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 此信用卡已经添加过
	 *  @apiError -3 PIN码格式错误
	 *  @apiError -4 过期年份格式错误
	 *  @apiError -5 过期月份格式错误
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
	 * @api {get} /user_serv/delivery_address_infos 获取收货地址信息
	 * @apiName 获取收货地址信息1
	 * @apiGroup User_Address_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {Object} delivery_address_infos 用户支付方式信息对象封装
	 * @apiSuccess {int} delivery_address_infos.infos.delivery_address_id 收货地址id
	 * @apiSuccess {String} delivery_address_infos.receiver_name 收货人姓名
	 * @apiSuccess {String} delivery_address_infos.receiver_phone 收货人电话
	 * @apiSuccess {String} delivery_address_infos.postcode 邮编
	 * @apiSuccess {String} delivery_address_infos.address 收货地址
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * 	  code:0,
	 *    msg:'success',
	 *    delivery_address_infos:{
	 *	  count:2,
	 *	  infos:[
	 *		{
	 *			delivery_address_id:12,
	 *			receiver_name:'董绍辉',
	 *			receiver_phone:"18922112441",
	 *			postcode:"100000",
	 *			address:"北京市四惠"
	 *		},
	 *		{
	 *			delivery_address_id:13,
	 *			receiver_name:'刘惠',
	 *			receiver_phone:"18922100141",
	 *			postcode:"100000",
	 *			address:"北京市亚运村"
	 *		}
	 *	  ]
	 *	}
	 * }				
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
	 * @api {get} /user_serv/add_delivery_addres 新增收货地址
	 * @apiName 新增收货地址1
	 * @apiGroup User_Address_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {String} receiver_name 收货人姓名
	 * @apiParam {String} receiver_phone 收货人电话 
	 * @apiParam {String} searched_address 搜索地址（google生成，见<code>地点搜索接口</code>）
	 * @apiParam {float} searched_address_longitude 搜索地址的经度（google生成，见<code>地点搜索接口</code>）
	 * @apiParam {float} searched_address_latitude 搜索地址的纬度（google生成，见<code>地点搜索接口</code>）
	 * @apiParam {text} detail_address 补充详细地址（如:XX小区16楼26号）
	 * @apiParam {String} postcode 邮编
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
	 *   msg:'token失效，需重新登录',
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
	 * @apiGroup User_Address_Module
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

	/**
	 * 
	 * @api {get} /user_serv/select_delivery_address 用户选取收货地址
	 * @apiName 用户选取收货地址11122
	 * @apiGroup User_Address_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {int} delivery_address_id 收货地址id
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
	 *  @apiError -2 delivery_address_id无效
	 *
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
	 * @api {get} /user_serv/delete_delivery_address 用户删除收货地址
	 * @apiName 用户删除收货地址1221
	 * @apiGroup User_Address_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {int} delivery_address_id 收货地址id
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
	 *  @apiError -2 delivery_address_id无效
	 *
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
	 * @api {get} /user_serv/get_user_delivery_address 获取用户默认送货地址
	 * @apiName 获取用户默认邮寄地址111
	 * @apiGroup User_Address_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} delivery_address_id 收货地址id
	 * @apiSuccess {String} username 取货人姓名
	 * @apiSuccess {String} phone 取货人手机
	 * @apiSuccess {String} address 取货人地址
	 * @apiSuccess {String} postcode 取货人邮编
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 *  }
	 *  
	 *  @apiError -1 token失效，需重新登录
	 *
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
	 * @api {get} /user_serv/get_all_shop_infos 获取所有正在营业中店铺的信息
	 * @apiName 获取所有正在营业中店铺的信息11
	 * @apiGroup Shop_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} pageno 分页码，不填默认为第1页
	 * @apiParam {int} pagelength  页长，不填默认为全部
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} total_shop_number 商店总数
	 * @apiSuccess {object[]} shop_info_list 返回店铺信息数组
	 * @apiSuccess {int} shop_info_list.status 店铺状态（0-已关闭，1-营业中）
	 * @apiSuccess {String} shop_info_list.shop_id 店铺id
	 * @apiSuccess {String} shop_info_list.img 店铺图片
	 * @apiSuccess {String} shop_info_list.name_cn 店铺中文名称
	 * @apiSuccess {String} shop_info_list.name_en 店铺英文名称
	 * @apiSuccess {String} shop_info_list.shop_feature 店铺中文特色
	 * @apiSuccess {String} shop_info_list.shop_feature_en 店铺英文特色
	 * @apiSuccess {String} shop_info_list.address 店铺地址
	 * @apiSuccess {String} shop_info_list.current_month_order 当月订单数
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * shop_info_list:[
	 *		{
	 *			shop_id:12,	
	 *			img:"http://XXX.img",
	 *			name:"XX牛肉面",
	 *			address:"XXX Street",
	 *			current_month_order:"112"
	 * 		}
	 *    ]
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


	/**
	 * 
	 * @api {get} /user_serv/search_shop_infos 搜索所有的店铺
	 * @apiName 搜索所有的店铺111
	 * @apiGroup Shop_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {String} shop_search_term 店铺搜索条件
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {object[]} shop_info_list 返回店铺信息数组
	 * @apiSuccess {int} shop_info_list.shop_id 店铺id
	 * @apiSuccess {int} shop_info_list.status 店铺状态（0-已关闭，1-营业中）
	 * @apiSuccess {String} shop_info_list.img 店铺图片
	 * @apiSuccess {String} shop_info_list.name_cn 店铺中文名称
	 * @apiSuccess {String} shop_info_list.name_en 店铺英文名称
	 * @apiSuccess {String} shop_info_list.shop_feature 店铺中文特色
	 * @apiSuccess {String} shop_info_list.shop_feature_en 店铺英文特色
	 * @apiSuccess {String} shop_info_list.address 店铺地址
	 * @apiSuccess {String} shop_info_list.current_month_order 当月订单数
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * shop_info_list:[
	 *		{
	 *			shop_id:12,	
	 *			img:"http://XXX.img",
	 *			name:"XX牛肉面",
	 *			address:"XXX Street",
	 *			current_month_order:"112"
	 * 		}
	 *    ]
	 *  }
	 *  
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   }
	 * ]
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	 

	/**
	 * 
	 * @api {get} /user_serv/get_shop_detail_info 获取店铺信息详情
	 * @apiName 获取店铺信息详情1
	 * @apiGroup Shop_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} shop_id 店铺id
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} status 店铺状态（0-已关闭，1-营业中）
	 * @apiSuccess {String} shop_img 商铺图片
	 * @apiSuccess {String} name_cn 商铺中文名称
	 * @apiSuccess {String} name_en 商铺英文名称
	 * @apiSuccess {String} shop_feature 商铺中文特色
	 * @apiSuccess {String} shop_feature_en 商铺英文特色
	 * @apiSuccess {object[]} dish_info_list 返回店铺菜品信息数组
	 * @apiSuccess {int} dish_info_list.dish_id 菜品id
	 * @apiSuccess {int} dish_info_list.dish_type 菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {String} dish_info_list.dish_img 菜品图片地址
	 * @apiSuccess {String} dish_info_list.dish_name_cn 中文菜品名称
	 * @apiSuccess {String} dish_info_list.dish_name_en 英文菜品名称
	 * @apiSuccess {int} dish_info_list.current_month_order 菜品当月订单数
	 * @apiSuccess {float} dish_info_list.dish_price 菜品价格（如果<code>dish_type</code>为<code>0</code>）
	 * @apiSuccess {object} shop_detail_info 店铺详情信息对象
	 * @apiSuccess {String} shop_detail_info.delivery_time 可配送时间
	 * @apiSuccess {String} shop_detail_info.phone 商家电话
	 * @apiSuccess {String} shop_detail_info.address 商家地址
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * dish_info_list:[
	 *		{
	 *			dish_id:12,	
	 *			dish_type:0,
	 *			dish_img:"http://XXX.jpg",
	 *			dish_name:"XX牛肉面",
	 *			current_month_order:11,
	 *			dish_price:13.2
	 * 		},
	 *		{
	 *			dish_id:13,	
	 *			dish_type:1,
	 *			dish_img:"http://XXX.jpg",
	 *			dish_name:"麻辣烫",
	 *			current_month_order:41,
	 * 		}
	 *     ],
	 *    shop_detail_info:
	 * 	  {
	 *		  delivery_time:'9:00-22:00',
	 *		  phone:'55642220',
	 *		  address:'XXX Street'
	 *	  }
	 *  }
	 *  @apiError -1 shopid无效
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'shopid无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	 

	/**
	 * 
	 * @api {get} /user_serv/search_dishes 菜品搜索接口
	 * @apiName 菜品搜索接口1
	 * @apiGroup Dish_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} shop_id 店铺id 
	 * @apiParam {String} dish_search_term 菜品搜索关键词 
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {object[]} dish_info_list 返回店铺菜品信息数组
	 * @apiSuccess {int} dish_info_list.dish_id 菜品id
	 * @apiSuccess {int} dish_info_list.dish_type 菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {String} dish_info_list.dish_img 菜品图片地址
	 * @apiSuccess {String} dish_info_list.dish_cn_name 菜品中文名称
	 * @apiSuccess {String} dish_info_list.dish_en_name 菜品英文名称
	 * @apiSuccess {int} dish_info_list.current_month_order 菜品当月订单数
	 * @apiSuccess {float} dish_info_list.dish_price 菜品价格（如果<code>dish_type</code>为<code>0</code>）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * dish_info_list:[
	 *		{
	 *			dish_id:12,	
	 *			dish_type:0,
	 *			dish_img:"http://XXX.jpg",
	 *			dish_name:"XX牛肉面",
	 *			current_month_order:11,
	 *			dish_price:13.2
	 * 		},
	 *		{
	 *			dish_id:13,	
	 *			dish_type:1,
	 *			dish_img:"http://XXX.jpg",
	 *			dish_name:"麻辣烫",
	 *			current_month_order:41,
	 * 		}
	 *     ]
	 *  }
	 *  @apiError -1 shopid无效
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'shopid无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	 


	/**
	 * 
	 * @api {get} /user_serv/get_all_side_dishes 获取某菜品所有配菜接口
	 * @apiName 获取某菜品所有配菜接口1
	 * @apiGroup Dish_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} dish_id 菜品id 
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {object[]} side_dish_info_list 返回菜品包含配菜数组
	 * @apiSuccess {int} side_dish_info_list.side_dish_id 配菜id
	 * @apiSuccess {String} side_dish_info_list.side_dish_cn_name 中文配菜名称
	 * @apiSuccess {String} side_dish_info_list.side_dish_en_name 英文配菜名称
	 * @apiSuccess {float} side_dish_info_list.side_dish_price 配菜价格
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * side_dish_info_list:[
	 *		{
	 *			side_dish_id:12,	
	 *			side_dish_name:"花生米",
	 *			side_dish_price:3
	 * 		},
	 *		{
	 *			side_dish_id:13,	
	 *			side_dish_name:"海带",
	 *			side_dish_price:4
	 * 		}
	 *     ]
	 *  }
	 *  @apiError -1 dish_id无效
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'dish_id无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	 

	/**
	 * 
	 * @api {get} /user_serv/get_dish_detail 获取菜品详情信息
	 * @apiName 获取菜品详情信息2122222221
	 * @apiGroup Dish_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} dish_id 菜品id 
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} dish_id 菜品id
	 * @apiSuccess {int} dish_type 菜品类型
	 * @apiSuccess {String} dish_name_cn 中文名称
	 * @apiSuccess {String} dish_name_en 英文名称
	 * @apiSuccess {String} dish_img 图片地址
	 * @apiSuccess {String} dish_price 菜品价格
	 * @apiSuccess {String} current_month_order 本月订单量
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * dish_id: 1,
	 * dish_type:0,
	 * dish_name_cn:"XXXX",
	 * dish_name_en:"xxx",
	 * dish_img:"XXX.jpg",
	 * dish_price:11.2,
	 * current_month_order:3
	 * }
	 *  @apiError -1 dish_id无效
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'dish_id无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	 


	/**
	 * 
	 * @api {get} /user_serv/upload_order 用户提交订单
	 * @apiName 用户提交订单1
	 * @apiGroup Order_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {int} shop_id 店家id
	 * @apiParam {int} delivery_address_id 收货地址id
	 * @apiParam {int} paytype_id 支付方式id
	 * @apiParam {int} consume_type 消费方式（0-配送，1-到店消费） 
	 * @apiParam {int} tip_type 小费方式（0-小费比率，1-现金小费）
	 * @apiParam {float} tip_ratio 小费百分比（如果tip_type为0）
	 * @apiParam {text} remark 备注
	 * @apiParam {object[]} dish_order_list 点餐列表
	 * @apiParam {int} dish_order_list.dish_id 菜品id
	 * @apiParam {int} dish_order_list.dish_type 菜品类型（0-单品菜，1-含配菜）
	 * @apiParam {int} dish_order_list.order_number 菜品点了多少份
	 * @apiParam {object[]} dish_order_list.side_dish_list 配菜列表（如果dish_type为1的话）
	 * @apiParam {int} dish_order_list.side_dish_list.order_number 配菜点了多少份
	 * @apiParam {int} dish_order_list.side_dish_list.side_dish_id 配菜id
	 * @apiParam {float} freight 运费
	 * @apiParam {float} distance 商户距离用户的距离（调用接口，如果用户或商户没有传递地址信息，返回值为0，单位KM）
	 * @apiParam {float} tax 税费

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
	 *  @apiError -2 shop_id无效
	 *  @apiError -3 delivery_address_id无效
	 *  @apiError -4 paytype_id无效
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
	 * @api {get} /user_serv/calculate_distance 计算商户到收货地址之间的距离
	 * @apiName 计算商户到收货地址之间的距离1
	 * @apiGroup Order_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} shop_id 商户id 
	 * @apiParam {int} delivery_address_id 收货地址id 
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {float} distance 距离（单位km）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * distance:'4.5',
	 *  }
	 *  @apiError -1 shop_id无效
	 *  @apiError -2 delivery_address_id无效
	 *  @apiError -3 商户尚没有上传地址
	 *  @apiError -4 收货地址无法计算距离
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'shop_id无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	/**
	 * 
	 * @api {get} /user_serv/calculate_distance 计算商户到收货地址之间的距离
	 * @apiName 计算商户到收货地址之间的距离1
	 * @apiGroup Order_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {int} shop_id 商户id 
	 * @apiParam {int} delivery_address_id 收货地址id 
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {float} distance 距离（单位km）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * distance:'4.5',
	 *  }
	 *  @apiError -1 shop_id无效
	 *  @apiError -2 delivery_address_id无效
	 *  @apiError -3 商户尚没有上传地址
	 *  @apiError -4 收货地址无法计算距离
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'shop_id无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	/**
	 * 
	 * @api {get} /user_serv/get_all_orders 获取用户所有的订单信息
	 * @apiName 获取用户所有的订单信息1
	 * @apiGroup Order_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {String} token 系统分配的token
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {object[]} order_list 订单数组
	 * @apiSuccess {int} order_list.order_status 订单状态（0-订单进行中，1-订单已完成，2-订单已取消）
	 * @apiSuccess {int} order_list.shop_id 订单从属的商户id
	 * @apiSuccess {String} order_list.shop_cn_name 订单从属的商户中文名称
	 * @apiSuccess {String} order_list.shop_en_name 订单从属的商户英文名称
	 * @apiSuccess {String} order_list.shop_img 订单从属的商户图片地址
	 * @apiSuccess {float} order_list.total_price 订单金额
	 * @apiSuccess {String} order_list.order_create_time 订单建立时间
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * order_list:[
	 *   {
	 * 		order_status:0,
	 *		shop_id:1,
	 *		shop_name:"兰州拉面",
	 *		shop_img:"XXX.jpg",
	 *		total_price:23.1,
	 *		order_create_time:"2016-12-11 19:00:00"
	 *   }
	 * ]
	 *  }
	 *  @apiError -1 token失效，需重新登录
	 *  @apiErrorExample {json} Error-Response:
	 *  HTTP/1.1 400 Not Found
	 *  {
	 *   code:-1,
	 *   msg:'shop_id无效',
	 *   }
	 *      
	 * @param param
	 * @return
	 * @throws Exception
	 */	

	/**
	 * 
	 * @api {get} /user_serv/get_order_detail_info 获取订单详情信息
	 * @apiName 获取订单详情信息1
	 * @apiGroup Order_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiParam {String} token 系统分配的token
	 * @apiParam {int} order_id 订单id
	 *
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {int} delivery_address_id 收货地址id
	 * @apiSuccess {int} paytype_id 支付方式id
	 * @apiSuccess {int} consume_type 消费方式（0-配送，1-到店消费） 
	 * @apiSuccess {int} tip_type 小费方式（0-小费比率，1-现金小费）
	 * @apiSuccess {float} tip_ratio 小费百分比（如果tip_type为0）
	 * @apiSuccess {text} remark 备注
	 * @apiSuccess {object[]} dish_order_list 点餐列表
	 * @apiSuccess {int} dish_order_list.dish_id 菜品id
	 * @apiSuccess {int} dish_order_list.dish_type 菜品类型（0-单品菜，1-含配菜）
	 * @apiSuccess {int} dish_order_list.order_number 菜品点了多少份
	 * @apiSuccess {object[]} dish_order_list.side_dish_list 配菜列表（如果dish_type为1的话）
	 * @apiSuccess {int} dish_order_list.side_dish_list.order_number 配菜点了多少份
	 * @apiSuccess {int} dish_order_list.side_dish_list.side_dish_id 配菜id
	 * @apiSuccess {float} freight 运费
	 * @apiSuccess {float} distance 商户距离用户的距离（调用接口，如果用户或商户没有传递地址信息，返回值为0，单位KM）
	 * @apiSuccess {float} tax 税费
	 * @apiSuccess {String} order_create_time 订单建立时间
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * delivery_address_id:1,
	 * paytype_id:1,
	 * consume_type:0,
	 * tip_type:0,
	 * tip_ratio:0.15,
	 * remark:"no salt please!",
	 *
	 * dish_order_list:[
	 *   {
	 * 		dish_id:1,
	 *		dish_type:1,
	 *		order_number:1,
	 *		side_dish_list:
	 *		[
	 *			{
     *	 			order_number:1,
     *				side_dish_id:1
	 *			
	 *		]
	 *
	 *   }
	 *  ],
	 *	
	 *	freight:19,
	 *	distance:12,
	 *	tax:10.1,
	 *	order_create_time:"2016-12-01 10:12:23"
	 *
	 *  }
	 *  @apiError -1 token失效，需重新登录
	 *  @apiError -2 order_id无效
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
	 * @api {get} /user_serv/get_banner_list 获取轮播图像
	 * @apiName 获取轮播图像111
	 * @apiGroup Other_Module
	 * @apiVersion 0.1.0
	 * @apiDescription 接口详细描述
	 * 
	 * 
	 * @apiSuccess {String} code 结果码
	 * @apiSuccess {String} msg 消息说明
	 * @apiSuccess {Object[]} banner_list 轮播图集合
	 * @apiSuccess {String} banner_list.img 轮播图地址
	 * @apiSuccess {int} banner_list.priority 轮播图优先级（优先级高的先显示）
	 * @apiSuccessExample Success-Response:
	 *  HTTP/1.1 200 OK
	 * {
	 * code:0,
	 * msg:'success',
	 * banner_list:[
	 *	{
	 *		img:'a.jpg',
	 *		priority: 3 
	 * },
	 *],
	 *  }
	 *  
	 *   
	 * @param param
	 * @return
	 * @throws Exception
	 */

}
