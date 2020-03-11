import Vue from 'vue';
import Vuex from 'vuex';
import storage from '@/utils/storage';

// Vuex 模块
import router from './modules/router';

import {
  SET_ACCESS_TOKEN,
  SET_CURRENT_USER,
  SET_ROLES,
  SET_AUTHORITIES,
} from './types';

Vue.use(Vuex);

const state = {
  accessToken: storage.get('accessToken'),
  currentUser: {},
  roles: [],
  authorities: [],
};
const getters = {};
const mutations = {
  [SET_ACCESS_TOKEN](state, { accessToken, expire }) {
    storage.set('accessToken', accessToken, expire);
    state.accessToken = accessToken;
  },
  [SET_CURRENT_USER](state, { currentUser }) {
    state.currentUser = Object.assign(state.currentUser, currentUser);
  },
  [SET_ROLES](state, { roles }) {
    state.roles = roles;
  },
  [SET_AUTHORITIES](state, { authorities }) {
    state.authorities = authorities || [];
  },
};
const actions = {
  setAccessToken({ commit }, { accessToken, expire }) {
    commit(SET_ACCESS_TOKEN, { accessToken, expire });
  },
  setCurrentUser({ commit }, { currentUser }) {
    commit(SET_CURRENT_USER, { currentUser });
  },
  setRoles({ commit }, { roles }) {
    commit(SET_ROLES, { roles });
  },
  setAuthorities({ commit }, { authorities }) {
    commit(SET_AUTHORITIES, { authorities });
  },
};

export default new Vuex.Store({
  modules: {
    router,
  },
  state,
  getters,
  mutations,
  actions,
});
