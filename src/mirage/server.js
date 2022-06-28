import { Server } from "miragejs/server";

export default {
  install: () => {
    new Server({
      environment: "development",
      seeds: true,
      seeds(server) {
        server.createList("user", 10);
      },
    });
  },
};
