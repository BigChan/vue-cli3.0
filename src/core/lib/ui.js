/**
 * 引入UI库使用
 */

import Vue from 'vue';

import {
  Modal,
  notification,
  message,
  Button,
} from 'ant-design-vue';


Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;

Vue.use(Button);
