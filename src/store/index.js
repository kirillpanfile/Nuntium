import { createStore } from "vuex";
export default createStore({
  state: {
    allPosts: [],
    allTags: [],
    tag: "Minimalism",
  },
  getters: {
    featuredPost: (state) => {
      return state.allPosts[0];
    },
    featuredPosts: (state) => {
      return state.allPosts.slice(-3);
    },
    tagPosts: (state) => {
      return state.allPosts.filter((post) =>
        post.categories.includes(state.tag)
      );
    },
  },
  mutations: {
    setAllPosts(state, posts) {
      state.allPosts = posts;
    },
    setAllTags(state, tags) {
      state.allTags = tags;
    },
    setTag(state, tag) {
      state.tag = tag;
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
    setTag({ commit }, tag) {
      commit("setTag", tag);
    },
  },
  modules: {},
});
