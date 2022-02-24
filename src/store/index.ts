// 把 useStore 重命名为 baseUseStore 后面封装简单 useStore 使用
import { createStore, Store, useStore as baseUseStore } from "vuex";
//各模块store
//main模块
import mainStore from "./main.store";

/**
 * 为避免每次在组件中使用 store 时候都要注入injection key，这里封装一个自己的 useStore 方法
 */
export function useStore(): Store<IStoreStateType> {
  return baseUseStore();
}
// 导出创建的 store
export const store = createStore({
  modules: {
    mainStore: mainStore,
  },
});
