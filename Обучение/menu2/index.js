Vue.component("menunav", {
  props: ["basa"],
  template: `
  <div class="nav nav-pills nav-justified">
    <nav v-for="a in basa" >
      <a
        :href="a.link"
        class="nav-item nav-link linkMyClass"
        :class=""
        @click="addActiv"
        >{{a.name}}</a
      >
    </nav>
  </div>
  `,
  //По какому элементу клик
  methods: {
    addActiv(event) {
      console.log(event.srcElement.innerText);
    },
  },
});

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

  methods: {},
});
