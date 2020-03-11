import Login from '@/views/Login.vue';
import Exception from '@/views/Exception.vue';

import ExceptionImage403 from '@/assets/exception_403.png';
import ExceptionImage404 from '@/assets/exception_404.png';
import ExceptionImage500 from '@/assets/exception_500.png';

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/403',
    name: '403',
    component: Exception,
    props: {
      sourceData: {
        imageUrl: ExceptionImage500,
        type: 403,
        title: '抱歉，你无权访问该页面',
        showHomeButton: true,
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: Exception,
    props: {
      sourceData: {
        imageUrl: ExceptionImage404,
        type: 404,
        title: '抱歉，你访问的页面找不到了',
        showHomeButton: true,
      },
    },
  },
  {
    path: '/500',
    name: '500',
    component: Exception,
    props: {
      sourceData: {
        imageUrl: ExceptionImage403,
        type: 500,
        title: '抱歉，服务器出错了',
        showHomeButton: true,
      },
    },
  },
];
