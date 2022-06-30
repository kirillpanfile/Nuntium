import { createStore } from "vuex";
export default createStore({
  state: {
    allPosts: [],
    allTags: [],
  },
  getters: {
    featuredPost: (state) => {
      return state.allPosts[0];
    },
    featuredPosts: (state) => {
      return state.allPosts.slice(-3);
    },
  },
  mutations: {
    setAllPosts(state, posts) {
      state.allPosts = posts;
    },
    setAllTags(state, tags) {
      state.allTags = tags;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch(`http://localhost:5000/api/posts`);
      const posts = await response.json();
      commit("setAllPosts", posts);
    },
    async fetchTags({ commit }) {
      const response = await fetch(`http://localhost:5000/api/categories`);
      const tags = await response.json();
      commit("setAllTags", tags);
    },
  },
  modules: {},
});
