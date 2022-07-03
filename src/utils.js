export default {
  data() {
    return {
      DefaultWidth: window.innerWidth,
    };
  },
  computed: {
    sliceText() {
      return this.post.desc.slice(0, this.DefaultWidth / 4) + "...";
    },
    userText() {
      return this.post.desc.slice(0, this.DefaultWidth / 10) + "...";
    },
    isMobile() {
      return this.DefaultWidth < 768;
    },
    currentTime() {
      let created = [...this.post.createdAt];
      created.length = 10;
      return created.join("");
    },
  },
};
