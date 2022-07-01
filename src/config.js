const host = "http://localhost:5000";

export default {
  login: host + "/api/auth/login",
  register: host + "/api/auth/register",
  users: host + "/api/users",
  posts: host + "/api/posts",
  categories: host + "/api/categories",
};
