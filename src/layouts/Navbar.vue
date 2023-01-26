<template>
  <div class="test">
    <!--<v-app-bar color="blue-grey darken-4" dark app>-->
    <v-app-bar color="white gray--text" dark app elevation="0">
      <v-btn small color="teal" fab elevation="1">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-btn>

      <v-toolbar-title class="text-uppercase ma-3">
        <!--<span class="font-weight-light"> INET | Vue Coruse </span>-->
        <span class="font-weight-light black--text"> INET | Vue Coruse </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="black--text ma-2">
            <v-icon left> mdi-home </v-icon>
            <span>หน้าแรก</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="ma-2 fontDetail black--text" text @click="logout()">
        <v-icon left> mdi-logout </v-icon>
        <span>ออกจากระบบ</span>
      </v-btn>
    </v-app-bar>

    <!-- navigation -->
    <v-navigation-drawer v-model="drawer" app dark color="blue-grey darken-4">
      <v-layout column align-center>
        <v-flex class="mt-5 py-5">
          <v-avatar size="100" class="red lighten-2">
            <img :src="avatar" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">
            Budsamalee Madjarean
          </p>
          <popup />
        </v-flex>
      </v-layout>
      <v-list nav dense flat class="mt-2">
        <v-list-item-group v-model="group" active-class="border">
          <v-list-item
            v-for="list in links"
            :key="list.text"
            router
            :to="list.route"
          >
            <v-list-item-icon>
              <v-icon>{{ list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ list.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Popup from "../components/Popup.vue"
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: true,
      group: null,
      links: [
        {
          icon: "mdi-account-multiple",
          text: "Member",
          route: "/listEmployee",
        },
        { icon: "mdi-widgets", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-folder", text: "My Project", route: "/projects" },
        { icon: "mdi-cube-outline", text: "Onebinar", route: "/onebinar" },
        { icon: "mdi-tag", text: "Vuex", route: "/vuex" },
        { icon: "mdi-lan", text: "Company", route: "/company" },
        { icon: "mdi-image", text: "Media", route: "/media" },
      ],
      lists: [
        { text: "แดชบอร์ด", icon: "mdi-widgets", route: "/" },
        { text: "โปรไฟล์", icon: "mdi-account", route: "/profile" },
        { text: "โปรเจค", icon: "mdi-folder", route: "/folder" },
        { text: "การเงิน", icon: "mdi-minus-circle", route: "/money" },
      ],
      userLogin: [],
      avatar: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
      keep: {},
    }
  },
  computed: {
    ...mapGetters(["getProfile"]),
    listProfile: {
      get() {
        console.log("Product ->", this.getProfile)
        return this.getProfile
      },
    },
  },
  methods: {
    gotoPage() {
      this.$router.push("/")
    },
    logout() {
      this.$router.push("/")
      localStorage.clear("userToken")
    },
  },
}
</script>
<style>
.colorNavbar {
  background-image: linear-gradient(315deg, #0a76ba 0%, #031a4f 74%);
}
.font1 {
  color: antiquewhite;
}
.fontHeader {
  color: #ffffff;
}
.fontDetail {
  color: #ffffff;
}
.border {
  border-left: 5px solid #0ba518;
}
</style>
