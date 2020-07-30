// Создание компонента Галереи
Vue.component("galery", {
  props: ["card"], // Передача Data(card) в компонент
  template: `
      <div class="card" style="width: 18rem;">
        <img :src="card.img" class="card-img-top" alt="card.name" />
        <div class="card-body">
          <h5 class="card-title">{{card.name}}</h5>
          <p class="card-text">
            {{card.text}}
          </p>
          <a :href="card.link" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
  `,
});

new Vue({
  el: "#galery",
  data: {
    cards: [
      {
        name: "Один",
        text:
          "Идейные соображения высшего порядка, а также пстоянный количественный рост и сфера нашей активности в значительной степени обусловливает создание модели развития!",
        img:
          "https://avatars.mds.yandex.net/get-pdb/2905812/b795d6ef-c987-43fd-9795-7daede177f42/s375",
        link: "#",
      },
      {
        name: "Один",
        text:
          "Идейные соображения высшего порядка, а также пстоянный количественный рост и сфера нашей активности в значительной степени обусловливает создание модели развития!",
        img:
          "https://avatars.mds.yandex.net/get-pdb/2905812/b795d6ef-c987-43fd-9795-7daede177f42/s375",
        link: "#",
      },
      {
        name: "Один",
        text:
          "Идейные соображения высшего порядка, а также пстоянный количественный рост и сфера нашей активности в значительной степени обусловливает создание модели развития!",
        img:
          "https://avatars.mds.yandex.net/get-pdb/2905812/b795d6ef-c987-43fd-9795-7daede177f42/s375",
        link: "#",
      },
    ],
  },

  methods: {},
});
