import Vue from "vue"
import Vuex from "vuex"
//import pathify, { make } from "vuex-pathify"
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
  dataList: {},
  employById: "",
  listEditCompany: {},
  listEditAdmin: {},
}

const mutations = {
  //...make.mutations(state),
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
  // no 7
  SET_PRODUCT_DETAIL(state, data) {
    console.log("ก่อน ->", state)
    console.log("หลัง ->", data)
    state.dataList = data
    console.log("Data Product ->", state.dataProduct)
  },
  SET_EMPLOYEE_BIID_SUCCESS(state, data) {
    state.employById = data
    console.log("STATE =====>", state.employById)
  },
  SET_COMPANY_EDIT_SUCCESS(state, data) {
    state.listEditCompany = data
    console.log("STATE LIST ->", state.listEditCompany)
  },
  SET_ADMIN_EDIT_SUCCESS(state, data) {
    state.listEditAdmin = data
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
    //console.log("Token ->", localStorage.getItem("userToken"))
    const token = localStorage.getItem("userToken")
    console.log(token)
    // ของอาจารย์ใน youtube
    //if (token !== null) {
    //  axios
    //    .get("https://www.melivecode.com/api/auth/user", {
    //      headers: {
    //        Authorization: `Basic ${token}`,
    //      },
    //    })
    //    .then((res) => {
    //      //console.log("RES=>", res.data)
    //      if (res.data.status == "ok") {
    //        // no 4
    //        commit("SET_LOGIN_SUCCESS", res.data)
    //      }
    //    })
    //}

    // ของ P'Reef
    if (token !== null) {
      axios
        .get(`${process.env.VUE_APP_API_TEST}/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //console.log("RES=>", res.data.data)
          let status = res.data.code
          let data = res.data.data
          //console.log("Data User :", data)
          if (status == 200) {
            // no 4
            commit("SET_LOGIN_SUCCESS", data)
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
  // no 6
  SET_PRODUCT({ commit }, data) {
    // no 7
    commit("SET_PRODUCT_DETAIL", data)
  },
  SET_EMPLOYEE_BYID({ commit }, data) {
    console.log("Stor ->", data)
    commit("SET_EMPLOYEE_BIID_SUCCESS", data)
  },
  // company edit
  SET_EDIT_COMPANY({ commit }, data) {
    console.log("EDIT DATA ->", data)
    commit("SET_COMPANY_EDIT_SUCCESS", data)
  },
  //Admin edit
  SET_EDIT_ADMIN({ commit }, data) {
    console.log("EDIT ADMIN", data)
    commit("SET_ADMIN_EDIT_SUCCESS", data)
  },
}

const getters = {
  profile: (state) => state.profile,
  getProfile: (state) => state.data_profile,
  getProduct: (state) => state.dataProduct,
  currentCounter: (state) => state.currentCounter,
  dataList: (state) => state.dataList,
  employById: (state) => state.employById,
  listEditCompany: (state) => state.listEditCompany,
  listEditAdmin: (state) => state.listEditAdmin,
}

export default new Vuex.Store({
  // use the plugin
  //plugins: [pathify.plugin],

  // properties
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
