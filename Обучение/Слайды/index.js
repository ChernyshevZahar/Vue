new Vue({
  el: "#slaid",
  data: {
    imgs: [
      {
        link:
          "https://avatars.mds.yandex.net/get-pdb/2905812/b795d6ef-c987-43fd-9795-7daede177f42/s375",
        name: "dog",
      },
      {
        link:
          "https://avatars.mds.yandex.net/get-pdb/2301590/a92c498e-7910-4b77-b246-2afa0e5943fd/s375",
        name: "dog",
      },
      {
        link:
          "https://st.depositphotos.com/1757583/2169/i/450/depositphotos_21696885-stock-photo-yin-yang-symbol.jpg",
        name: "dog",
      },
    ],
    num: 0,
  },

  methods: {
    minus() {
      if (this.num != 0) {
        this.num -= 1;
        console.log(num);
      }
    },
    plus() {
      if (this.num < this.imgs.length - 1) {
        this.num++;
        console.log();
      }
    },
  },
});
