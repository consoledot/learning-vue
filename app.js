const app = Vue.createApp({
  data() {
    return {
      url: "twitter.com/consoledot",
      books: [
        { title: "the way of kings", author: "patrick rofus" },
        { title: "I love for the slander", author: "den mark" },
        { title: "game of throne", author: "white dude" },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
