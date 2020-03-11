import { BasicLayout } from '@/components/layouts';

export default [
  {
    path: '/',
    component: BasicLayout,
    meta: {
      authorities: ['HOME'],
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          authorities: ['HOME'],
        },
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
          authorities: ['ABOUT'],
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
  },
];
