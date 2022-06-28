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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
