/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'weixin-js-sdk';

interface ImportMetaEnv {
  readonly VITE_APP_API_BASEURL: string;
}
//import.meta.env 的定义
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  BridgeNative: any;
}
