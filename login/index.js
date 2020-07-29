new Vue({
  el: "#login",
  data: {
    masseg: "hello world",
    users: [{ user: "Dima", password: "123" }],
  },

  methods: {
    onLogin(password, login) {
      for (us of this.users) {
        console.log(us.user);
        if (login == us.user && password == us.password) {
          alert("Успешно!");
        } else {
          alert("Неверный логин или пароль");
        }
      }
    },
  },
});
