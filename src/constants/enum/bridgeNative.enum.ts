export const EXhgBridgeUrlType = {
  /**
   * type=1：跳转H5页面，此时后面要跟上参数params，加上url链接 例：XHG://native?type=1&params="http://www.baidu.com" !!#ff0000 注意：如链接"http://www.xxx.com"后带有"?"(%3f)、"&"(%26)、"%"(%25)等特殊字符，必须进行url编码转换!!
   */
  type_1: 1,

  /**
   * type=2：跳转到APP的主页面（HomeFragment）
   */
  type_2: 2,

  /**
   * type=3：跳转到登录页面，跳转此页面返回后会刷新H5页面（CheckPhoneActivity）
   */
  type_3: 3,

  /**
   * type=4：跳转到"我的"界面（ProfileFragment）
   */
  type_4: 4,

  /**
   * type=5：跳转到扫码页面，跳转此页面返回后会刷新H5页面（QrCodeActivity）
   */
  type_5: 5,

  /**
   * type=6：跳转到附近回收机页面（MachineMapActivity）
   */
  type_6: 6,

  /**
   * type=7：跳转到消息中心页面（MessageListActivity）
   */
  type_7: 7,

  /**
   * type=8：跳转到我的钱包界面（UserMoneyActivity）
   */
  type_8: 8,

  /**
   * type=9：跳转到我的收入明细界面（UserWithdrawalRecordsActivity）
   */
  type_9: 9,

  /**
   * type=10：跳转到我的投递记录页面（UserRecycleRecordsActivity）
   */
  type_10: 10,

  /**
   * type=11：跳转到绑定银行卡页面（BindBankActivity）
   */
  type_11: 11,

  /**
   * type=12：跳转到手机回收选择页面（v1.4.3版本开始支持）
   */
  type_12: 12,

  /**
   * type=13：跳转到客户服务页面（v2.0.0版本开始支持）
   */
  type_13: 13,

  /**
   * type=14：跳转到"发现"页面（DiscoverFragment v2.0.0版本开始支持）
   */
  type_14: 14,

  /**
   * type=15：跳转到"商城"页面（MallFragment v2.0.0版本开始支持）
   */
  type_15: 15,

  /**
   * type=16：跳转到个人信息页面（v2.1.0版本开始支持）
   */
  type_16: 16,

  /**
   * type=17：跳转到会员中心页面（v2.1.0版本开始支持）
   */
  type_17: 17,

  /**
   * type=18：跳转到活动专区页面（v2.1.0版本开始支持）
   */
  type_18: 18,

  /**
   * type=19：跳转到实名认证页面（v2.1.0版本开始支持）
   */
  type_19: 19,

  /**
   * type=20：跳转到我的环保数据页（v2.2.0版本开始支持）
   */
  type_20: 20,

  /**
   * type=21：跳转到我的礼券中心页（v2.3.0版本开始支持）
   */
  type_21: 21,

  /**
   * type=22：跳转到回收订单页面（OrderFragment v2.4.0版本开始支持）
   */
  type_22: 22,

  /**
   * type=23：跳转提现方式管理页面（v2.5.0版本开始支持）
   */
  type_23: 23,

  /**
   * type=100：调用原生的分享面板，需要添加params参数
   */
  type_100: 100,

  /**
   * type=101：返回网页的上一个网页，当无上一个网页时，返回原生页面
   */
  type_101: 101,

  /**
   * type=102：跳转到勋章展示动效页面，需要添加params参数（HomePopActivity）
   */
  type_102: 102,

  /**
   * type=103：直接关闭所有网页，返回到原生界面（v1.4.0版本开始支持）
   */
  type_103: 103,

  /**
   * type=104：刷新用户环保金（v2.0.0版本开始支持）
   */
  type_104: 104,

  /**
   * type=105：返回网页的上一个网页并清除WebView缓存重新加载上一个网页，当无上一个网页时，返回原生页面（iOSv2.1.0版本开始支持）
   */
  type_105: 105,

  /**
   * type=106：展示/关闭原生Loading动画。（params=1/0 [打开/关闭])（v2.2.0版本开始支持）
   */
  type_106: 106,

}
