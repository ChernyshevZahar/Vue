// Цель показать пример компонента на Vue. Пример не безопастный в использование.
Vue.component("login", {
  data: function () {
    return {
      password: "",
      login: "",
    };
  },
  props: ["users"],
  template: `
  <div> <!-- обертка для элемента Vue -->
    <h3 class="">Авторизация</h3>
    <input type="text" id="login" v-model="login" class="form-control" />
    <input
      type="text"
      id="password"
      v-model="password"
      class="form-control"
    />
    <button @click="onLogin(password,login)" class="btn btn-primary button">
      Login
    </button>
  </div>
  `,
  methods: {
    //Проверка пользователя
    onLogin(password, login) {
      for (us of this.users) {
        if (login == us.user && password == us.password) {
          alert("Успешно!");
        } else {
          alert("Неверный логин или пароль");
        }
      }
    },
  },
});

new Vue({
  el: "#login",
  data: {
    users: [{ user: "Dima", password: "123" }],
  },

  methods: {},
});
