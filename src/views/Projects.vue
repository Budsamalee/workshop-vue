<!-- eslint-disable vue/valid-v-bind -->
<template>
  <div class="projects">
    <Navbar></Navbar>
    <v-container grid-list-md fluid>
      <h1 class="subheading header4 text-left">Projects</h1>
      <v-divider></v-divider>
      <v-container>
        <v-layout row wrap class="mb-4 mt-2">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                outlined
                color="green"
                @click="sortBy('title')"
                class="mr-2"
                dark
                v-on="on"
              >
                <v-icon left small> mdi-folder </v-icon>
                <span class="caption text-lowercase"> By project title</span>
              </v-btn>
            </template>
            <span>sort project</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                outlined
                color="green"
                @click="sortBy('title')"
                class="mr-2"
                dark
                v-on="on"
              >
                <v-icon left small> mdi-folder </v-icon>
                <span class="caption text-lowercase"> By name </span>
              </v-btn>
            </template>
            <span>sort person</span>
          </v-tooltip>
        </v-layout>
        <v-card
          elevation="2"
          outlined
          flat
          v-for="project in projects"
          :key="project.text"
          class="ma-3 mt-2"
        >
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption grey--text">Poject title</div>
              <div>{{ project.text }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>
                {{ project.person }}
              </div>
            </v-flex>
            <v-flex xs-6 sm4 md2>
              <div class="caption grey--text">Due</div>
              <div>
                {{ project.due }}
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../layouts/Navbar.vue"
import Footer from "../layouts/Footer.vue"
export default {
  components: { Navbar, Footer },
  name: "projects",
  data() {
    return {
      projects: [
        {
          text: "Site web",
          person: "Jena",
          due: "10/12/1996",
          status: "complete",
        },
        {
          text: "App mobile",
          person: "Nee",
          due: "15/02/1996",
          status: "no",
        },
        {
          text: "Gestion de stock",
          person: "Mayah",
          due: "3/05/1996",
          status: "yes",
        },
        {
          text: "Concrption",
          person: "Mile",
          due: "10/08/1996",
          status: "up",
        },
      ],
    }
  },
  methods: {
    sortBy(prop) {
      console.log("Prop ->", prop)
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    },
  },
}
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.up {
  border-left: 4px solid orange;
}
.project.no {
  border-left: 4px solid red;
}
.project.yes {
  border-left: 4px solid yellow;
}
.v.chip.complete {
  color: #3cd1c2;
}
.p.ovnored {
  color: orange;
}
.p.up {
  color: red;
}
.p.yes {
  color: yellow;
}

.header4 {
  color: #5d6d7e;
  font-size: 30px;
  font-weight: bold;
}
</style>
