Vue.component("listen", {
  props: ["users"],
  template: `
      <div>   <!-- обертка для элемента Vue -->
       <ul v-for="user in users" class="list-group">
          <li class="list-group-item list-group-item-action">
            {{user}}
          </li>
        </ul>
      </div>
  `,
});

new Vue({
  el: "#listen",
  data: {
    users: ["one", "two", "three"],
  },

  methods: {},
});
