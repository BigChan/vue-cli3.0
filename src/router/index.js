import Vue from 'vue';
import Router from 'vue-router';
import { notification } from 'ant-design-vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';
import storage from '@/utils/storage';
import { getAuthRoutes } from '@/utils/helpers/authority';
import basicRoutes from './routes/basic';
import asyncRoutes from './routes/async';

import { getCurrentUser } from '@/services/modules/common';

NProgress.configure({
  showSpinner: false,
});

Vue.use(Router);

const routes = basicRoutes;

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const whiteList = ['Login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  // 加载进度开始
  NProgress.start();
  if (storage.get('accessToken')) {
    if (to.path === '/login') {
      next('/');
    } else if (!store.state.currentUser.id) {
      getCurrentUser()
        .then((res) => {
          // 保存用户信息
          store.dispatch('setCurrentUser', { currentUser: res.userInfo || {} });

          // 保存角色
          store.dispatch('setRoles', { roles: res.roles || [] });

          // 保存权限
          store.dispatch('setAuthorities', { authorities: res.authorities || [] });
          const accessedRoutes = getAuthRoutes(asyncRoutes, res.authorities);
          router.options.routes = router.options.routes.concat(accessedRoutes);
          router.addRoutes(accessedRoutes);

          // 保存拥有权限的路由
          store.dispatch('router/setAccessedRoutes', { accessedRoutes });

          const redirect = decodeURIComponent(from.query.redirect || to.path);
          if (to.path === redirect) {
            /**
             * hack方法 确保addRoutes已完成
             * set the replace: true so the navigation will not leave a history record
             */
            next({ ...to, replace: true });
          } else {
            // 跳转到目的路由
            next({ path: redirect });
          }
        })
        .catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试',
          });
          store.dispatch('setAccessToken', { accessToken: undefined, expire: undefined });
          next({ name: 'Login', query: { redirect: to.fullPath } });
        });
    } else {
      next();
    }
  } else if (whiteList.includes(to.name)) {
    next();
  } else {
    next({ path: '/login', query: { redirect: to.fullPath } });
  }
});

router.afterEach(() => {
  // 加载进度完成
  NProgress.done();
});

export default router;
