import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    allPosts: [],
    allTags: [],
    tag: "Minimalism",
    isAuth: false,
    user: {},
    currentUserProfile: {},
    userPosts: [],
  },
  getters: {
    featuredPost: (state) => {
      return [...state.allPosts].sort((a, b) => b.createdAt - a.createdAt)[0];
    },
    featuredPosts: (state) => {
      return [...state.allPosts].sort(() => 0.5 - Math.random()).slice(0, 3);
    },
    userFeaturedPost: (state) => {
      return state.userPosts.filter((post) => post.featured)[0];
    },
    tagPosts: (state) => {
      return state.allPosts.filter((post) =>
        post.categories.some((cat) => {
          return cat.toLowerCase().includes(state.tag.toLowerCase());
        })
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
    setIsAuth(state, auth) {
      state.isAuth = auth;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUserProfile(state, profile) {
      state.currentUserProfile = profile;
    },
    setUserPosts(state, posts) {
      state.userPosts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch(process.env.VUE_APP_POSTS);
      commit("setAllPosts", await response.json());
    },
    async fetchTags({ commit }) {
      const response = await fetch(process.env.VUE_APP_CATEGORIES);
      commit("setAllTags", await response.json());
    },
    setTag({ commit }, tag) {
      commit("setTag", tag);
    },
    async createUser(ctx, user) {
      try {
        const response = await fetch(process.env.VUE_APP_REGISTER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const userData = await response.json();
        if (userData.errors) throw new Error(userData.message);
        if (userData.code == 11000) throw new Error("User already exists");
        router.push("/login");
      } catch (error) {
        alert(error);
      }
    },
    async login({ commit }, data) {
      try {
        const response = await fetch(process.env.VUE_APP_LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.user),
        });
        const userData = await response.json();
        if (userData.errors || userData.message)
          throw new Error(userData.message);
        if (userData.code == 11000) throw new Error("User already exists");

        commit("setIsAuth", true);
        commit("setUser", userData);
        if (data.remember == true) document.cookie = `token=${userData.jwt}`;
        router.push("/");
      } catch (error) {
        alert(error);
      }
    },
    async loginByJwt({ commit }, jwt) {
      commit("setIsAuth", true);
      const response = await fetch(process.env.VUE_APP_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      commit("setUser", await response.json());
    },
    async getUser({ commit }, id) {
      console.log(id);

      const response = await fetch(process.env.VUE_APP_USERS + "?name=" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      commit("setUserProfile", await response.json());
    },
    async getUserPosts({ commit }, name) {
      const response = await fetch(process.env.VUE_APP_POSTS + "?user=" + name);
      console.log(name);
      commit("setUserPosts", await response.json());
    },
  },
  modules: {},
});
