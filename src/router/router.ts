import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { BASE } from "../constants/config";
import { store } from "../store";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '机型选择',
    },
  },
  {
    path: '/home',
    redirect: '/',
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/notFound/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(BASE),
  routes,
});

/**
 * 设置文档title并同步到store
 * @param title
 */
function SetDocumentTitle(title: string) {
  if (title) {
    document.title = title;
    store.commit('SetDocumentTitle', title)
  }
}

router.beforeEach((to: any, from: any, next: any) => {
  SetDocumentTitle(to.meta.title as string);
  if (false/* 需要登陆状态（to.meta.requireAuth） && 未登录 */) {
    // 跳登录
  } else {
    next();
  }
});



export default router;
