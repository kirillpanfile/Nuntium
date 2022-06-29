import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    featuredPost: (state) => {
      //return posts with highest samount of views
      return state.posts.sort((a, b) => b.views - a.views).slice(0, 1)[0];
    },
    featuredPosts: (state) => {
      return state.posts.sort((a, b) => 0.5 - Math.random()).slice(0, 4);
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch("api/posts");
      const posts = await response.json();
      commit("setPosts", posts);
    },
  },
  modules: {},
});
