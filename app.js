const app = Vue.createApp({
  data() {
    return {
      title: "The final Empire",
      author: "Oladele Hf",
      age: 23,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
