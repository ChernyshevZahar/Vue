Vue.component("slaid", {
  data: function () {
    return {
      num: 0, // переменная дл работы с функциями
    };
  },
  props: ["slaid"],
  template: `
  <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner" v-for="(im,index) in slaid">
            <div
              v-bind:class="[(num==index) ? 'active,carousel-item' : 'carousel-item', errorClass]"
            >
              <img :src="im.link" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            @click="minus"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            @click="plus"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
  `,
  methods: {
    //перелистываение слайды назад
    minus() {
      if (this.num != 0) {
        this.num -= 1;
        console.log(num);
      }
    },
    //перелистываение слайды вперёд
    plus() {
      if (this.num < this.slaid.length - 1) {
        this.num++;
        console.log();
      }
    },
  },
});

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

  methods: {},
});
