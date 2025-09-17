import { createWebHistory, createRouter } from "vue-router";

import DemoList from '../pages/demo-list/index.vue';
import DemoListDetail from '../pages/demo-list-detail/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/demo-list'
  },
  {
    path: '/demo-list',
    component: DemoList,
  },
  {
    path: '/demo-list-detail',
    component: DemoListDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;