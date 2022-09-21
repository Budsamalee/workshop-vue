//import axios from "axios"
//import * as types from "./mutation-types"

export default {
  state: {
    namespaced: true,
    token: null,
    user: null,
  },

  mutations: {
    //
  },

  actions: {
    //signIn(_, payload) {
    //  console.log("--->", payload)
    //  axios
    //    .post(" https://www.melivecode.com/api/login", payload)
    //    .then((res) => {
    //      console.log(res)
    //      console.log("DATA ==>", res.data)
    //      //  localStorage.setItem("userToken", res.data.accessToken)
    //      //  this.$store.dispatch("setDetailUser", res.data)
    //      //  this.$router.push("/listEmployee")
    //    })
    //    .catch((err) => {
    //      console.log("ERR ->", err)
    //    })
    //},
  },
}

//export default new Vuex.Store({
//  // use the plugin
//  plugins: [pathify.plugin],

//  // properties
//  state,
//  actions,
//  mutations,
//})
