import AOS from "aos"
import "aos/dist/aos.css"
import axios from "axios"
import Vue from "vue"
import VueAxios from "vue-axios"
import VueRecaptcha from "vue-recaptcha"
import App from "./App.vue"
import { i18n } from "./plugins/i18n.js"
import vuetify from "./plugins/vuetify"
import router from "./router"
import store from "./store"
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component("vue-recaptcha", VueRecaptcha)
new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app")
