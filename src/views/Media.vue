<template>
  <div class="mt-5">
    <Navbar />
    <v-container>
      <v-layout row wrap fill-height align-center justify-center pa-10>
        <v-flex xs6 lg6>
          <v-card class="elevation-0" outlined color="transparent">
            <v-card-title>
              <v-avatar color="grey">
                <v-icon dark>mdi-image</v-icon>
              </v-avatar>
              <b>&nbsp;Media</b>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 lg6 pr-10></v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center mt-n5>
        <v-flex xs6 lg6>
          <v-card v-for="(list, index) in listMedia" :key="index" flat>
            <v-img
              src="list.url_image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
            <div class="text-left mx-4">
              <p>Entity : {{ list.entity }}</p>
              <p>createdAt : {{ list.createdAt }}</p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../layouts/Navbar.vue"
export default {
  name: "Media",
  components: {
    Navbar,
  },
  data() {
    return {
      listMedia: null,
    }
  },
  mounted() {
    this.getMedia()
  },
  methods: {
    getMedia() {
      this.axios
        .get(`${process.env.VUE_APP_API_TEST}/media`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          //  console.log("RES Media =>", res.data.data)
          this.listMedia = res.data.data
          console.log(this.listMedia)
        })
    },
  },
}
</script>

<style lang=""></style>
