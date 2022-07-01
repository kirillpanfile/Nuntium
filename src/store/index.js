import { createStore } from "vuex";
const API_URI = "http://localhost:5000";
const API_POSTS = "/api/posts";
export default createStore({
  state: {
    allPosts: [],
  },
  getters: {},
  mutations: {
    setAllPosts(state, posts) {
      state.allPosts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch(`http://localhost:5000/api/posts`);
      const posts = await response.json();
      commit("setAllPosts", posts);
    },
  },
  modules: {},
});
