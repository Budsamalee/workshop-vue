<template>
  <v-app id="home">
    <NavbarOnebinar />
    <div class="head">
      <v-row>
        <v-col cols="5">
          <div style="position: relative" class="mt-16">
            <h1 class="text-grey">Hello,</h1>
            <h1 class="text-white">Budsamalee Madjarean</h1>
            <span class="text-grey">Web Designer & Developer</span><br />
            <v-btn
              tile
              dark
              class="yellow--text mt-8"
              text
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
            <v-icon>mdi-account</v-icon>
          </div>
        </v-col>
        <v-col cols="5">
          <div style="position: relative; z-index: 9999" class="mt-16">
            <v-img src="i1.png" contain max-height="300"></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import { defineComponent } from "vue"
import NavbarOnebinar from "/Users/budsamalee/vue-vuetify-demo/src/layouts/NavbarOnebinar.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    NavbarOnebinar,
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
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  transform: translate(0px, -60px);
  height: 400px;
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
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #fbdf7e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
.imgHover {
  padding: 0 200px;
}
.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}
</style>
