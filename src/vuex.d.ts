import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // 声明自己的 store 的 state 类型，这里只写了一个 projectName，其他复杂的类型可以自己添加
  interface State {
    projectName: string;
    documentTitle: string;
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
