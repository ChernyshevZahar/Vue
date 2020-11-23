import Vue from 'vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from './directives/tooltip.directive'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyCMgbwGr7zJ7JkpRoAs-QxljYaT6ZX5-Vs',
  authDomain: 'vue-learn-base-5d70b.firebaseapp.com',
  databaseURL: 'https://vue-learn-base-5d70b.firebaseio.com',
  projectId: 'vue-learn-base-5d70b',
  storageBucket: 'vue-learn-base-5d70b.appspot.com',
  messagingSenderId: '320698195402',
  appId: '1:320698195402:web:74cc44d239622bd46b4333',
  measurementId: 'G-Q0MLGS98W6'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
