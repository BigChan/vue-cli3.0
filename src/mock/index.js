// eslint-disable-next-line
import Mock from 'mockjs';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: '200 - 400',
});

const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;

Mock.mock(`${apiBaseUrl}/login/`, 'post', (request) => {
  const { username, password } = JSON.parse(request.body);
  if (username === 'admin' && password === 'admin') {
    return {
      token: 'jwttoken',
      expire: new Date().valueOf() + 1 * 24 * 60 * 60 * 1000,
    };
  }
  return {};
});

Mock.mock(`${apiBaseUrl}/user/current/`, 'get', () => ({
  userInfo: {
    id: 1,
  },
  roles: [],
  authorities: ['HOME', 'ABOUT'],
}));
