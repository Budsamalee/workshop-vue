<template>
  <v-app-bar
    v-scroll="onScroll"
    app
    fixed
    flat
    :color="!isScrolling ? 'transparent' : 'white black--text'"
    class="px-12 white--text"
  >
    <v-container grid-list-xs>
      <v-layout row wrap align-center justify-center>
        <v-layout row justify-center align-center>
          <v-flex xs10 lg10 md10 sm10 class="text-left">
            <div @click="$router.push('/listEmployee')" class="wait">
              <v-icon color="#ffba00" left class="mr-2">mdi-account</v-icon>
              OneBinar
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center align-center>
          <v-flex
            xs12
            lg11
            md12
            offset-y
            bottom
            open-on-hover
            transition="slide-y-transition"
            class="toolbarDesktop text-right white--text"
          >
            <v-row justify="center" class="mr-3" v-if="isBtnWhite">
              <v-menu bottom>
                <template v-slot:activator="{ on }">
                  <div v-for="menu in menus" :key="menu.title">
                    <v-btn
                      v-on="on"
                      text
                      class="white--text"
                      @click="windowRoute(menu.title)"
                    >
                      {{ menu.title }}
                    </v-btn>
                  </div>
                </template>
              </v-menu>
              <v-btn text class="white--text">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn color="#ffba00" class="white--text"> GET STARTED </v-btn>
            </v-row>
            <v-row justify="center" class="mr-3" v-if="isBtnBlack">
              <v-menu bottom>
                <template v-slot:activator="{ on }">
                  <div v-for="menu in menus" :key="menu.title" :to="menu.route">
                    <v-btn
                      v-on="on"
                      text
                      class="black--text"
                      @click="windowRoute(menu.title)"
                    >
                      {{ menu.title }}
                    </v-btn>
                  </div>
                </template>
              </v-menu>
              <v-btn text class="black--text">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn outlined color="#ffba00"> GET STARTED </v-btn>
            </v-row>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
    <!--<v-list
      class="d-flex align-center"
      :color="!isScrolling ? 'transparent' : 'white black--text'"
      v-if="isBtnWhite"
    >
      <v-list-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.route"
        link
      >
        <v-list-item-title class="white--text">{{
          menu.title
        }}</v-list-item-title>
      </v-list-item>
      <v-btn text class="white--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn outlined color="white" class="white--text"> GET STARTED </v-btn>
    </v-list>
    <v-list
      class="d-flex align-center"
      :color="!isScrolling ? 'transparent' : 'white black--text'"
      v-if="isBtnBlack"
    >
      <v-list-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.route"
        link
      >
        <v-list-item-title class="black--text">
          {{ menu.title }}
        </v-list-item-title>
      </v-list-item>
      <v-btn text class="white--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn outlined color="warning" class="white--text"> GET STARTED </v-btn>
    </v-list>-->
  </v-app-bar>
</template>

<script>
//import Contect from "../components/Contect.vue"

export default {
  //components: {
  //  Contect,
  //},
  data() {
    return {
      isLogoWhite: true,
      isLogoColor: false,
      isBtnWhite: true,
      isBtnBlack: false,
      isScrolling: false,
      drawerLP: null,
      menu: null,
      home: true,
      menus: [
        { title: "Home", route: "/listEmployee" },
        { title: "Aboute vue" },
        { title: "Project" },
        { title: "Contact" },
      ],
    }
  },
  methods: {
    windowRoute(name) {
      if (name === "Home") {
        window.location.href = "#home"
      } else if (name === "Aboute vue") {
        window.location.href = "#about"
      } else if (name === "Contact") {
        window.location.href = "#contect"
      } else {
        window.location.href = "#project"
      }
    },
    onScroll() {
      const offset = window.pageYOffset
      this.isScrolling = offset > 80
      this.isLogoWhite = offset < 80
      this.isLogoColor = offset > 80
      this.isBtnWhite = offset < 80
      this.isBtnBlack = offset > 80
    },
    scroll(refName) {
      console.log(refName)
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: "smooth" })
    },
  },
}
</script>
<style scope>
@import url("https://fonts.googleapis.com/css?family=Prompt:300,600&display=swap&subset=latin-ext,thai");

.wait {
  cursor: wait;
  font-size: 20px;
  font-weight: bold;
  font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffba00;
}
</style>
