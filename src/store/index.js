import { createStore } from "vuex";
import { login } from "@/service/user";
import Cookies from 'js-cookie'
import get from "lodash/get";
export default createStore({
  state: {
    userInfo: {
      username: "",
    },
  },
  getters: {},
  mutations: {
    SAVE_USER_INFO(state, username) {
      state.userInfo.username = username;
      Cookies.set("username", username);
    },
    CLEAR() {
      Cookies.set("username", '');
      Cookies.set("token", '');
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit("SAVE_USER_INFO", username);
      const res = await login(username, password);
      if (get(res.data, "token", "")) {
        Cookies.set("token", get(res.data, "token", ""));
      }
      return res;
    },
    loginout({ commit }) {
      commit("CLEAR");
    },
  },
  modules: {},
});