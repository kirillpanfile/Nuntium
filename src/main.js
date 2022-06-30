import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "../src/assets/scss/style.scss";
import components from "./components";
// import server from "./mirage/server";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).use(router).mount("#app");
