<template>
  <div class="team">
    <Navbar></Navbar>
    <v-container grid-list-md fluid>
      <h1 class="subheading header4 text-left">Dashboard</h1>
      <v-divider></v-divider>
      <v-layout row wrap class="mt-5">
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <!--<v-list-item-avatar tile class="mt-n16">-->
              <v-sheet
                color="teal"
                rounded
                width="70"
                height="70"
                elevation="1"
                class="mt-n16"
              >
                <center>
                  <v-icon dark class="pt-5" large>mdi-account</v-icon>
                </center>
              </v-sheet>
              <!--</v-list-item-avatar>-->
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">
                  523614
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div>
              <v-divider></v-divider>
            </div>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-account</v-icon>
              <div class="overline">Account</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet
                color="#F44336"
                rounded
                width="70"
                height="70"
                elevation="1"
                class="mt-n16"
              >
                <center>
                  <v-icon dark class="pt-5" large>mdi-store</v-icon>
                </center>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Abonné</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >+700</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <div>
              <v-divider></v-divider>
            </div>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-store</v-icon>
              <div class="overline">Store</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet
                color="#03A9F4"
                rounded
                width="70"
                height="70"
                elevation="1"
                class="mt-n16"
              >
                <center>
                  <v-icon dark class="pt-5" large
                    >mdi-account-box-outline</v-icon
                  >
                </center>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Shopping</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >$34,245</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <div>
              <v-divider></v-divider>
            </div>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-account-box-outline</v-icon>
              <div class="overline">VISA Card</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet
                color="#FFC107"
                rounded
                width="70"
                height="70"
                elevation="1"
                class="mt-n16"
              >
                <center>
                  <v-icon dark class="pt-5" large>mdi-shopping</v-icon>
                </center>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Folder shared</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >1730</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <div>
              <v-divider></v-divider>
            </div>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-shopping</v-icon>
              <div class="overline">Product</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-divider></v-divider>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in teams" :key="index">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.fname }} {{ person.lname }}
              </div>
              <div class="grey--text">{{ person.username }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="orange">
                <v-icon small left>mdi-message-text</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../layouts/Navbar.vue"
import Footer from "../layouts/Footer.vue"
export default {
  name: "team",
  components: { Navbar, Footer },
  data: () => ({
    //team: [
    //  {
    //    name: "Jena",
    //    role: "Tiktok ker",
    //    avatar:
    //      "https://charity13.ca/wp-content/uploads/2021/05/adult-women.png",
    //  },
    //  {
    //    name: "Muranee",
    //    role: "Designer",
    //    avatar:
    //      "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
    //  },
    //  {
    //    name: "Mayah",
    //    role: "Developer",
    //    avatar: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    //  },
    //  {
    //    name: "Smile",
    //    role: "Barber",
    //    avatar:
    //      "https://teamgreen.org.in/wp-content/uploads/2021/03/girl-3.png",
    //  },
    //],
    teams: [],
  }),
  mounted() {
    this.getCustomers()
  },
  methods: {
    getCustomers() {
      this.axios.get("https://www.mecallapi.com/api/users").then((res) => {
        this.teams = res.data
        console.log(this.teams)
        var index = 0
        for (var item of this.teams) {
          index += 1
          item["index"] = index
        }
        this.teams.sort((a, b) =>
          a.index < b.index ? 1 : b.index < a.index ? -1 : 0
        )
        console.log(this.teams)
      })
    },
  },
}
</script>
<style>
.header4 {
  color: #5d6d7e;
  font-size: 30px;
  font-weight: bold;
}
</style>
