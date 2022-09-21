<template>
  <div class="mt-5">
    <!--<span class="mt-5 font2">Employee</span>-->
    <Navbar></Navbar>
    <v-container grid-list-md>
      <v-card color="white">
        <v-container>
          <v-row class="mt-3">
            <!--<v-col cols="12"> Store -> {{ $store.getters.token }} </v-col>-->
            <v-col cols="12">
              <v-btn
                color="success darken-1"
                class="float-right"
                @click="createEmployee()"
              >
                <v-icon center class="mr-1"> mdi-plus </v-icon>
                สร้าง
              </v-btn>
              <v-btn
                color="warning"
                class="float-right mr-3"
                @click="logDataMap()"
                >logDataMap</v-btn
              >
            </v-col>
          </v-row>
          <pre v-if="show == true">{{ userProfile }}</pre>
          <!--<div class="th-stlye table-stlye">-->
          <div>
            <v-data-table
              :headers="headers"
              :items="customers"
              class="fontHeader elevation-0 text-center mt-4 black--text"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar class="avatarImg">
                  <img v-bind:src="item.avatar" alt="" />
                </v-avatar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-btn
                  color="warning darken-1"
                  class="mr-2"
                  fab
                  small
                  @click="updateEmployee(item.id)"
                >
                  <v-icon small center class="ma-1"> mdi-pencil </v-icon>
                  <!--แก้ไข-->
                </v-btn>
                <v-btn
                  color="primary darken-1"
                  fab
                  small
                  @click="deleteEmployee(item.id)"
                >
                  <v-icon small center class="ma-1"> mdi-delete </v-icon>
                  <!--ลบ-->
                </v-btn>
              </template>
              <!--<template v-slot:header="{ props: { headers } }">
            <thead>
              <tr>
                <th class="text-center">ลำดับ</th>
                <th class="text-center">รูปโปรไฟล์</th>
                <th class="text-center">ชื่อจริง</th>
                <th class="text-center">นามสกุล</th>
                <th class="text-center">ชื่อเล่น</th>
              </tr>
            </thead>
          </template>-->
              <!--<template v-slot:body="{ items }">
            <tbody>
              <tr v-for="(list, index) in items" :key="index">
                <td class="text-center">
                  {{ index + 1 }}
                </td>
                <td class="text-center">
                  <v-avatar>
                    <img v-bind:src="list.avatar" alt="" />
                  </v-avatar>
                </td>
                <td class="text-center">
                  {{ list.fname }}
                </td>
                <td class="text-center">
                  {{ list.lname }}
                </td>
                <td class="text-center">
                  {{ list.username }}
                </td>
              </tr>
            </tbody>
          </template>-->
            </v-data-table>
          </div>
        </v-container>
      </v-card>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import swal from "sweetalert"
import Navbar from "../layouts/Navbar.vue"
import Footer from "../layouts/Footer.vue"
//import { sync } from "vue-pathify"

export default {
  name: "app",
  components: { Navbar, Footer },
  //store,
  data() {
    return {
      //headers: [],
      headers: [
        {
          text: "ลำดับ",
          align: "center",
          sortable: false,
          value: "index",
        },
        { text: "รูปโปรไฟล์", value: "avatar", align: "center" },
        { text: "ชื่อจริง", value: "fname", align: "center" },
        { text: "นามสกุล", value: "lname", align: "center" },
        { text: "ชื่อเล่น", value: "username", align: "center" },
        { text: "Action", value: "action", align: "center" },
      ],
      customers: [],
      userLogin: [],
      token: "",
      show: false,
    }
  },
  computed: {
    //...mapState({
    //  profile: (state) => state.profile,
    //}),
    ...mapGetters(["getProfile"]),
    userProfile: {
      get() {
        console.log("GETPRO ->", this.getProfile)
        return this.getProfile
      },
    },
    // ถ้าต้องการ log data ที่ mapGetters ให้ log ในคัวแปรได้เลยจะไม่สามารถ log ใน created, mounted ได้เพราะมันจะ reload เข้ามาทำ created ก่อน computed
  },
  mounted() {
    //this.token = localStorage.getItem("userToken")
    this.getCustomers()
    //this.getProfile()
  },
  methods: {
    logDataMap() {
      this.show = true
      console.log("DATA >>", this.userProfile)
    },
    getCustomers() {
      //console.log("----- WELL COME -----")
      this.axios.get("https://www.mecallapi.com/api/users").then((res) => {
        this.customers = res.data
        var index = 0
        for (var item of this.customers) {
          index += 1
          item["index"] = index
        }
        this.customers.sort((a, b) => {
          //console.log("a", a.index, "b", b.index)
          if (a.id < b.id) {
            return 1
          } else if (b.index < a.index) {
            return -1
          } else {
            return 0
          }
          //or
          // this.teams.sort((a, b) =>
          //  a.index < b.index ? 1 : b.index < a.index ? -1 : 0
          //)
        })
        console.log("====>", this.customers)
      })
    },
    createEmployee() {
      //console.log("---- Create Employee -----")
      this.$router.push({ path: "/manage/createemployee" })
    },
    updateEmployee(id) {
      console.log("id ->", id)
      this.$router.push({ path: "/manage/editemployee/" + id })
    },
    deleteEmployee(id) {
      swal({
        title: "ยืนยันการลบ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          console.log(id)
          var payload = {
            id: id,
          }
          console.log(payload)
          this.axios
            .delete("https://www.mecallapi.com/api/users/delete", {
              data: payload,
            })
            .then((res) => {
              console.log("RES ->", res.data)
              this.getCustomers()
            })
          swal("ลบสำเร็จแล้ว", {
            icon: "success",
          })
        }
      })
    },
    //getProfile() {
    //  if (this.token === null || this.token === "") {
    //    this.$router.push("/")
    //  }
    //  //this.getUserLogin()
    //},
    //getUserLogin() {
    //  console.log("Token ->", this.token)
    //  this.axios
    //    .get("https://www.melivecode.com/api/auth/user", {
    //      headers: { Authorization: `Basic ${this.token}` },
    //    })
    //    .then((res) => {
    //      this.userLogin = res.data.user
    //      this.$store.dispatch("SET_PROFILE", this.userLogin)
    //      //console.log("---->", this.userLogin)
    //    })
    //},
  },
}
</script>

<style scoped>
.fontHeader {
  /*color: #000000;*/
  font-size: 20px;
}
.font2 {
  font-size: 25px;
  text-align: left;
}
.avatarImg img {
  padding: 4px;
}
.table-stlye >>> .v-data-table th {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  background-color: #313737 !important;
  color: rgb(255, 255, 255) !important;
}
.th-stlye >>> th {
  border: 1px solid white;
  text-align: center !important;
  border-collapse: collapse !important;
  height: 3px !important;
}
</style>
