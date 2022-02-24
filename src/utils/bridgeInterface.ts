import { entryUrlQuery } from './tools';
import wx from 'weixin-js-sdk';
import { OsType } from '../constants/enum/constant.enum';
import { EXhgBridgeUrlType } from '../constants/enum/bridgeNative.enum';

const ostype = entryUrlQuery.ostype;

/**
 * Goto app page by type
 * @param type
 */
export function GotoAppPage(type: string | number) {
  console.log('GotoAppPage', type);
  location.href = `XHG://native?type=${type}`;
}

class BridgeInterface {
  /**
   * 关闭webview。app跳转到首页，小程序返回到首页
   */
  GotoOrderList() {
    console.log('GotoOrderList', ostype);
    if (ostype === OsType.iOS) {
      GotoAppPage(EXhgBridgeUrlType.type_10);
    } else if (ostype === OsType.ANDROID) {
      GotoAppPage(EXhgBridgeUrlType.type_10);
    } else if (ostype === OsType.MP) {
      wx.miniProgram.navigateTo({ url: '/pages/record/record' });
    }
  }

  /**
   * 跳转到登录页
   */
  GotoLoginPage() {
    if (ostype === OsType.iOS) {
      GotoAppPage(EXhgBridgeUrlType.type_3);
    } else if (ostype === OsType.ANDROID) {
      GotoAppPage(EXhgBridgeUrlType.type_3);
    } else if (ostype === OsType.MP) {
      wx.miniProgram.navigateTo({ url: '/pages/login/login' });
    }
  }
}

export const bridgeInterface = new BridgeInterface();
