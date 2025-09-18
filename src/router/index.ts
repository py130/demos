import { createWebHistory, createRouter } from "vue-router";

import DemoList from '../pages/demo-list/index.vue';
import DemoListDetail from '../pages/demo-list-detail/index.vue';

const routes = [
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
      },
    ]
  }, 
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;