import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";

// Router
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    component: () => import("../views/Login"),
    name: "login",
  },
  {
    path: "/screenlock",
    component: () => import("../views/ScreenLock"),
    name: "screenlock"
  },
  {
    path: "/tags",
    component: () => import("../views/Tags"),
    name: "tags"
  },
  {
    path: "/profile",
    component: () => import("../views/Profile"),
    name: "profile"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
