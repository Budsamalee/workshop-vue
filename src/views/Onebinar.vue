<template>
  <v-app id="HomeView">
    <NavbarOnebinar />
    <!-- Sharpe -->
    <div class="bgFirstSection ma-0">
      <v-row no-gutters></v-row>
    </div>
    <!--<div class="head">
      <v-row class="mt-16">
        <v-col cols="5" class="mt-16">
          <div style="position: relative">
            <h1 class="text-grey mt-16">Welcome Onebinar</h1>
            <h1 class="text-white">Budsamalee Madjarean</h1>
            <span class="text-grey">Web Designer & Developer</span><br />
            <v-btn
              tile
              dark
              color="#ffba00"
              class="mt-8"
              outlined
              variant="outlined"
            >
              Contact me
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2">
          <div
            style="
              position: absolute;
              z-index: 9999;
              bottom: 0;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              text-align: center;
            "
            class="mt-16"
          >
            <v-icon class="white--text">mdi-account</v-icon>
          </div>
        </v-col>
        <v-col cols="5">
          <div style="position: relative; z-index: 9999" class="mt-16">
            <v-img src="i1.png" contain max-height="300"></v-img>
          </div>
        </v-col>
      </v-row>
    </div>-->
    <!-- Home -->
    <!--<div>-->
    <Home />
    <!--</div>-->
    <!-- Aboute us -->
    <div class="about">
      <Aboute />
    </div>
    <!-- Protfolio -->
    <Project />
    <!-- Contect -->
    <div class="content">
      <Contect />
    </div>
    <!-- Footer -->
    <div color="about">
      <FooterOneBinar />
    </div>
  </v-app>
</template>

<script>
import { defineComponent } from "vue"
import NavbarOnebinar from "/Users/budsamalee/vue-vuetify-demo/src/layouts/NavbarOnebinar.vue"
import Home from "../components/Home.vue"
import Aboute from "../components/Aboute.vue"
import Project from "../components/Project.vue"
import Contect from "../components/Contect.vue"
import FooterOneBinar from "../layouts/FooterOneBinar.vue"
import Footer from "../layouts/Footer.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    NavbarOnebinar,
    Home,
    Aboute,
    Project,
    Footer,
    Contect,
    FooterOneBinar,
  },
  data() {
    return {
      slider2: 50,

      items: [
        {
          img: "i3.jpg",
        },
        {
          img: "i4.jpg",
        },
        {
          img: "i5.jpg",
        },
        {
          img: "i6.jpeg",
        },
        {
          img: "i9.jpg",
        },
        {
          img: "i8.jpg",
        },
      ],
    }
  },
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Prompt:300,600&display=swap&subset=latin-ext,thai");
#HomeView {
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
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  transform: translate(0px, -120px);
  height: 500px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 8deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -8deg);
}
.about {
  background-color: #bbdeff;
}
.bgFirstSection {
  position: relative;
  background-image: url("../assets/5068978.jpg");
  background-position: center;
  text-align: center;
  transform: translate(0px, -65px);
  height: 400px;
  width: 100%;
  /*color: white;*/
  background-size: cover;
}
.content {
  background-color: #cfd8dc;
}
</style>
