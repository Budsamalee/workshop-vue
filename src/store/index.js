import Vue from "vue"
import Vuex from "vuex"
import pathify, { make } from "vuex-pathify"
import * as auth from "./auth"
import axios from "axios"

// store
Vue.use(Vuex)

// properties
const state = {
  greeting: "Hello",
  name: "World",
  dataUser: {},
  profile: {},
  data_profile: {},
  dataProduct: {},
  currentCounter: 0,
}

const mutations = {
  ...make.mutations(state),
  // no 1
  //setDetailUser(state, payload) {
  //  state.dataUser = payload
  //},
  // no 2
  //SET_PROFILE(state, data) {
  //  state.dataUser = data
  //},
  // no 3
  SET_LOGIN_CHECKING(state, data) {
    state.data_profile = data
  },
  // no 4
  SET_LOGIN_SUCCESS(state, data) {
    console.log("STATE ::", state)
    state.data_profile = data
    console.log("AFTER =>", data)
  },
  // no 5
  SET_PRODUCT_SUCCESS(state, data) {
    console.log("ก่อน ->", state)
    console.log("หลัง ->", data)
    state.dataProduct = data
    console.log("Data Product ->", state.dataProduct)
  },
  SET_COUNTER_SUCCESS(state) {
    state.currentCounter++
  },
}
const actions = {
  // no 1
  //setDetailUser({ commit }, payload) {
  //  commit("setDetailUser", payload)
  //},
  // no 2
  //SET_PROFILE({ commit }, payload) {
  //  console.log("DATA ::", payload)
  //  //context.commit("SET_PROFILE", payload)
  //  commit("SET_PROFILE", payload)
  //},
  // no 3
  SET_LOGIN_CHECKING({ commit }) {
    console.log("Token ->", localStorage.getItem("userToken"))
    const token = localStorage.getItem("userToken")
    if (token !== null) {
      axios
        .get("https://www.melivecode.com/api/auth/user", {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          //console.log("RES=>", res.data)
          if (res.data.status == "ok") {
            // no 4
            commit("SET_LOGIN_SUCCESS", res.data)
          }
        })
    }
  },
  // no 4
  SET_DATA_PRODUCT({ commit }, payload) {
    console.log("payload")
    // no 5
    commit("SET_PRODUCT_SUCCESS", payload)
  },
  // no 5
  SET_COUNTER_PRODUCT({ commit }) {
    commit("SET_COUNTER_SUCCESS")
  },
}

const getters = {
  profile: (state) => state.profile,
  getProfile: (state) => state.data_profile,
  getProduct: (state) => state.dataProduct,
  currentCounter: (state) => state.currentCounter,
}

export default new Vuex.Store({
  // use the plugin
  plugins: [pathify.plugin],

  // properties
  state,
  auth,
  getters,
  actions,
  mutations,
})
