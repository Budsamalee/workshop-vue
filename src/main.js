import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import VueAxios from "vue-axios"
import vuetify from "./plugins/vuetify"
import store from "./store"
import AOS from "aos"
import "aos/dist/aos.css"

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app")
