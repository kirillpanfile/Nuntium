import { Server } from "miragejs";
import posts from "./posts";
export default {
  install: () => {
    new Server({
      environment: "development",
      seeds(server) {
        server.db.loadData({ posts: posts });
      },
      routes() {
        this.namespace = "api";
        this.get("/posts", (schema) => schema.db.posts);
      },
    });
  },
};
