new Vue({
  el: "#nav",
  data: {
    navMenu: [
      { name: "Home", link: "#" },
      { name: "Shop", link: "#" },
      { name: "About", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },

  methods: {
    addActiv() {
      console.log(this);
    },
  },
});
