<template>
  <div class="mt-5">
    <Navbar />
    <v-container fluid grid-list-md>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex xs6 lg6>
          <v-card class="elevation-0" outlined color="transparent">
            <v-card-title>
              <v-avatar color="grey">
                <v-icon dark>mdi-image</v-icon>
              </v-avatar>
              <b class="mx-3">&nbsp;My Resume</b>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 lg6 pr-10></v-flex>
      </v-layout>

      <v-card color="#CFD8DC" style="border-radius: 10px" class="ma-5">
        <v-layout row wrap align-center justify-start class="mt-6">
          <v-flex lg6 md6 sm6 xs6>
            <p><b> WORK EXPERIENCE </b></p>
            <p class="mx-16" data-aos="fade-right">
              <span class="ma-2 content">
                Internet Thailand Public Company Limited. ( Feb 2020 - Present )
                Local life Platform (Onechat food version2) **November 2020 -
                Present - Frontend developer - Skill: Nuxt.js - Improve the old
                system to be more efficient. - Coordinate and receive
                requirement. - Create new features. - Connect API with Backend
                and other services. - Assign tasks to team members and follow up
                on the results of work. - Testing and follow-up. Customer Survey
                Platform **August - November 2020 - Frontenddeveloper - Skill:
                Angular 9 - Coordinate and receive requirement. - System
                analysis and design. - Create a project and design. - Connect
                API with Back-end. - Create new features. - Testing and
                follow-up and deploy to Production. Local life Platform (Nooim
                Food) **April - July 2020 - Frontend developer - Skill: Vue.js -
                Improve the old system to be more efficient. - Connect API with
                Backend and other services. - Create new features. - Testing and
                follow-up and deploy to Production.
              </span>
            </p>
            <!--<p><b> EDUCATION 2017 </b></p>
            <p class="mx-16" data-aos="fade-right">
              <span class="ma-2 content">
                – 2019Prince of Songkhla University, Songkhla Thailand Bachelor
                of Science in Information Technology PROJECT : Website notes the
                data of patients with colorectal cancer GPA : 2.46 2011 –
                2016Hatyai Commercial Technological College Business Computer
                GPA : 3.43
              </span>
            </p>
            <p><b> TECHNICAL SKILLS </b></p>
            <p class="mx-16" data-aos="fade-right">
              <span class="ma-2 content">
                JavaScript , Vue.js / Nuxt.js , React.js / Next.js , Angular ,
                Wordpress , HTML , CSS , Go , PHP , Git , Docker , Nginx ,
                Kubernetes Database (MySQL, MongoDB) Operating Systems (Windows,
                Linux, Mac) SOFT SKILLS Active listening , Adaptability,
                Problem-solving, Creativity, Accountability, Confidence, Time
                and project management
              </span>
            </p>-->

            <!--<p class="mx-16" data-aos="fade-right">
              <span class="ma-2 content">
                "Looking back on a childhood filled with events and memories, I
                find it rather difficult to pick one that leaves me with the
                fabled 'warm and fuzzy feelings.' As the daughter of an Air
                Force major, I had the pleasure of traveling across America in
                many moving trips. I have visited the monstrous trees of the
                Sequoia National Forest, stood on the edge of the Grand Canyon
                and have jumped on the beds at Caesar's Palace in Lake Tahoe."
                "Looking for houses was supposed to be a fun and exciting
                process. Unfortunately, none of the ones that we saw seemed to
                match the specifications that we had established. They were too
                small, too impersonal, too close to the neighbors. After days of
                finding nothing even close, we began to wonder: was there really
                a perfect house out there for us?" "The day I picked my dog up
                from the pound was one of the happiest days of both of our
                lives. I had gone to the pound just a week earlier with the idea
                that I would just 'look' at a puppy. Of course, you can no more
                just look at those squiggling little faces so filled with hope
                and joy than you can stop the sun from setting in the evening. I
                knew within minutes of walking in the door that I would get a
                puppy… but it wasn't until I saw him that I knew I had found my
                puppy."
              </span>
            </p>-->
            <!--<v-card v-for="(list, index) in listMedia" :key="index" flat>
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
        </v-card>-->
          </v-flex>
          <v-flex lg6 md6 sm6 xs6 class="mt-6">
            <iframe
              src="CV_20039_BUDSAMALEE MADJAREAN.pdf"
              frameborder="0"
              height="700"
              width="500"
              data-aos="fade-up"
            ></iframe>
            <!--src="functionalsample.pdf"-->
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../layouts/Navbar.vue"
//import pdf from "pdfvuer"
//import testPdf from "./Test.pdf"
export default {
  name: "Media",
  components: {
    Navbar,
    //pdf,
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

<style>
p {
  line-height: 28px;
  text-indent: 10%;
  /*text-align: justify-all;*/
  text-align: left;
  text-transform: capitalize;
  overflow: scroll;
}
</style>
