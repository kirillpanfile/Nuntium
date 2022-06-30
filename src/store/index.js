import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    tagPosts: [],
    user: null,
  },
  getters: {
    featuredPost: (state) => {
      //return posts with highest samount of views
      // return state.posts.sort((a, b) => b.views - a.views).slice(0, 1)[0];
    },
    featuredPosts: (state) => {
      // return state.posts.sort(() => 0.5 - Math.random()).slice(0, 4);
    },
    tagPosts: (state) => {
      return state.tagPosts;
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setTagPosts(state, posts) {
      state.tagPosts = [];
      state.tagPosts = posts;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch(
        "http://localhost:1337/api/posts?populate=*"
      );
      const posts = await response.json();
      commit("setPosts", posts);
    },
    async logIn({ commit }, userData) {
      let data = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      // console.log(data.json());
      commit("setUser", await data.json());
    },
    getItemsByTag({ commit }, tag) {
      // commit(
      //   "setTagPosts",
      //   this.state.posts.filter((post) => post.tag.includes(tag))
      // );
      console.log(this.state.posts.data[0].attributes);
    },
  },
  modules: {},
});
