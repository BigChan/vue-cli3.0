import axios from 'axios';
import { Modal, message } from 'ant-design-vue';
import storage from '@/utils/storage';

// 配置
const instanceAxios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
});

// 请求异常处理
const err = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status >= 400) {
      switch (true) {
        case status === 401:
          Modal.confirm({
            title: '系统提示',
            content: '身份验证已过期，请重新登录。',
            onOk() {
              // TODO: 跳转单点登录
              window.location.href = `${process.env.VUE_APP_SIGN_IN_URL}/?redirect=${window.location.href}`;
            },
            onCancel() {},
          });
          break;
        case status === 403:
          message.error('暂无权限，请联系管理员。');
          break;
        default:
          message.warning((data && data.message) || '系统繁忙，请稍后再试。');
          break;
      }
    }
  } else if (error.message.indexOf('timeout') !== -1) {
    message.error('请求超时，请稍后再试。');
  } else {
    message.error('请求错误，请刷新页面再试。');
  }
  return Promise.reject(error);
};

// 请求拦截器
instanceAxios.interceptors.request.use((config) => {
  const accessToken = storage.get('accessToken');
  if (accessToken && accessToken.token) {
    config.headers.Authorization = `Bearer ${accessToken.token}`;
  }
  return config;
}, err);

// 响应拦截器
instanceAxios.interceptors.response.use((res) => {
  const { data } = res;
  return data;
}, err);

export default instanceAxios;
