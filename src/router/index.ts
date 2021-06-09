import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Layout from '@/layout/index.vue'

Vue.use(VueRouter);

const routes: RouteConfig[] = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
