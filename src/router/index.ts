import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Layout from '@/layout/index.vue'

Vue.use(VueRouter);

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: {hidden: true}
  },
];

export const asyncRoutes: RouteConfig[] = []

const createRouter = () => new VueRouter({
  // mode: 'history',
  scrollBehavior: (to, from, savePosition) => {
    if(savePosition){
      return savePosition
    } else {
      return {x:0, y:0}
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

const router = createRouter()

export default router;
