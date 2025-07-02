<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    this.language()
  },
  methods: {
    language: function () {
      if (localStorage.getItem("lang")) {
        this.$i18n.locale = localStorage.getItem("lang")
        return localStorage.getItem("lang")
      } else {
        localStorage.setItem("lang", "th")
        this.$i18n.locale = localStorage.getItem("lang")
        return localStorage.getItem("lang")
      }
    },
  },
}
</script>

<style scope>
@import url("https://fonts.googleapis.com/css?family=Prompt:300,600&display=swap&subset=latin-ext,thai");
#app {
  /* font-family: 'Prompt', sans-serif; */
  /* font-family: 'Sarabun', Helvetica, Arial, sans-serif; */
  font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: linear-gradient(red, yellow); */
  background-color: #f3f3f4;
  /*background-image: linear-gradient(315deg, #e4eee9 0%, #93a5ce 74%);*/
}

@media only screen and (max-width: 600px) {
  img {
    width: 210px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media only screen and (min-width: 601px) {
    img {
      width: 450px;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }
}
</style>
