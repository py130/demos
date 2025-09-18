import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';

import DemoList from '../pages/demo-list/index.vue';
import DemoListDetail from '../pages/demo-list-detail/index.vue';

interface DemoDetailQuery {
  componentName: string;
}

const routes: RouteRecordRaw[] = [
  {
    path: '/demos',
    redirect: '/demos/demo-list'
  },
  {
    path: '/demos',
    children: [
      {
        path: 'demo-list',
        component: DemoList,
      },
      {
        path: 'demo-list-detail',
        component: DemoListDetail,
        meta: {
          query: {} as DemoDetailQuery
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;