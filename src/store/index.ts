import { InjectionKey, State } from 'vue';
// 把 useStore 重命名为 baseUseStore 后面封装简单 useStore 使用
import { createStore, useStore as baseUseStore, Store } from 'vuex';
//各模块store
//main模块
import mainStore from './main.store';

/**
 * injection key
 * 通过 vue 的 provide/inject 特性给 store 添加使用时的类型提示
 * 官网文档没有说明为什么用这个 key 可以添加类型提示
 * Store 和 State 的声明在 src/vuex.d.ts 文件中
 */
export const storeKey: InjectionKey<Store<State>> = Symbol();

/**
 * 为避免每次在组件中使用 store 时候都要注入injection key，这里封装一个自己的 useStore 方法
 */
export function useStore() {
  return baseUseStore(storeKey);
}
// 导出创建的 store
export const store = createStore<State>({
  modules: {
    mainStore: mainStore,
  }
});
