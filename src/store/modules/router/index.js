const SET_ACCESSED_ROUTES = 'SET_ACCESSED_ROUTES';

const state = {
  accessedRoutes: [],
};
const getters = {};
const mutations = {
  [SET_ACCESSED_ROUTES](state, { accessedRoutes }) {
    state.accessedRoutes = accessedRoutes;
  },
};
const actions = {
  setAccessedRoutes({ commit }, { accessedRoutes }) {
    commit(SET_ACCESSED_ROUTES, { accessedRoutes });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
