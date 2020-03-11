import request from '@/utils/request';

/**
 * 登录
 * @param {Object} params 登录参数
 */
export function signIn(params) {
  return request.post('/login/', params);
}

/**
 * 获取当前登录用户信息
 */
export function getCurrentUser() {
  return request.get('/user/current/');
}
