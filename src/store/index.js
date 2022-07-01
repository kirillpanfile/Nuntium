import { createStore } from "vuex";
import router from "../router";
export default createStore({
  state: {
    allPosts: [],
    allTags: [],
    tag: "Minimalism",
    isAuth: false,
    user: {},
  },
  getters: {
    featuredPost: (state) => {
      return state.allPosts.sort((a, b) => b.createdAt - a.createdAt)[0];
    },
    featuredPosts: (state) => {
      return state.allPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
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
    async createUser(ctx, user) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const userData = await response.json();
        if (userData.errors) throw new Error(userData.message);
        else if (userData.code == 11000) throw new Error("User already exists");
        else router.push("/login");
      } catch (error) {
        alert(error);
      }
    },
    async login({ commit }, data) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.user),
        });
        const userData = await response.json();
        if (userData.errors || userData.message)
          throw new Error(userData.message);
        else if (userData.code == 11000) throw new Error("User already exists");
        else {
          commit("setIsAuth", true);
          commit("setUser", userData);
          if (data.remember == true) {
            localStorage.setItem("token", `${userData.email}`);
          }
          router.push("/");
        }
      } catch (error) {
        alert(error);
      }
    },
  },
  modules: {},
});
