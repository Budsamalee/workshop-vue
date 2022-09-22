<template>
  <v-app-bar
    v-scroll="onScroll"
    app
    fixed
    flat
    :color="!isScrolling ? 'transparent' : 'white black--text'"
    class="px-12 white--text"
  >
    <div @click="$router.push('/listEmployee')" class="wait">
      <v-icon color="#ffba00" left class="mr-2">mdi-account</v-icon>
      OneBinar
    </div>
    <v-spacer></v-spacer>
    <!-- flex ทำให้ต่อกัน -->
    <v-list
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
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
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
        { title: "Home", router: "home" },
        { title: "Aboute us", router: "aboute-us" },
        { title: "Protfolio", router: "protfolio" },
        { title: "Project", router: "project" },
        { title: "Gallery", router: "gallery" },
        { title: "Contact", router: "contact" },
      ],
    }
  },
  methods: {
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
