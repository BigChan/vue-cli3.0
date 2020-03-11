import Vue from 'vue';
import store from '@/store';

/**
 * 权限控制
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <i-button v-action:add >添加用户</a-button>
 *    <a-button v-action="['admin', 'delete']">删除用户</a-button>
 *    <a v-action:edit @click="edit(record)">修改</a>
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 */
Vue.directive('action', {
  inserted(el, binding) {
    const { permissionList } = store.state.authorities;
    const permissionKey = binding.arg;
    const permissionKeys = [permissionKey].concat(binding.value || []);
    const hasAction = permissionList.some(item => permissionKeys.includes(item));
    if (!hasAction) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } else {
        el.style.display = 'none';
      }
    }
  },
});
