<template>
  <div class="mt-5">
    <Navbar></Navbar>
    <v-container>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex xs6 lg6>
          <v-card class="elevation-0" outlined color="transparent">
            <v-card-title>
              <v-avatar color="grey">
                <v-icon dark>mdi-account</v-icon>
              </v-avatar>
              <!--<b>&nbsp;ข้อมูลพนักงาน</b>-->
              <b>&nbsp; {{ $t("landingpagetoolbar.home") }}</b>
            </v-card-title>
          </v-card>
          <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            sitekey="YOUR_RECAPTCHA_SITEKEY"
          ></vue-recaptcha>
        </v-flex>
        <v-flex xs6 lg6>
          <div>
            <v-btn
              color="success darken-1"
              class="float-right ma-3"
              @click="createEmployee()"
            >
              <v-icon center class="mr-1"> mdi-plus </v-icon>
              สร้าง
            </v-btn>
            <v-btn
              color="warning"
              class="float-right ma-3"
              @click="logDataMap()"
              >GET PROFILE JSON</v-btn
            >
          </div>
        </v-flex>
      </v-layout>
      <pre v-if="show == true">{{ userProfile }}</pre>
      <v-card color="white" class="mt-2">
        <v-container>
          <!--<div class="th-stlye table-stlye">-->
          <div>
            <v-data-table
              :headers="headers"
              :items="customers"
              :loading="loading"
              class="fontHeader elevation-0 text-center mt-4 black--text"
              @update:options="loadItems"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar class="avatarImg">
                  <img v-bind:src="item.avatar" alt="" />
                </v-avatar>
              </template>
              <template v-slot:item.action="{ item }">
                <!--<FormDetail :data="item" />-->
                <v-btn
                  color="warning darken-1"
                  class="mr-2"
                  fab
                  small
                  @click="updateEmployee(item)"
                >
                  <v-icon small center class="ma-1"> mdi-pencil </v-icon>
                </v-btn>
                <v-btn
                  color="primary darken-1"
                  fab
                  small
                  @click="deleteEmployee(item.id)"
                >
                  <v-icon small center class="ma-1"> mdi-delete </v-icon>
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
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js"></script>
<script>
import { mapGetters, mapState } from "vuex";
import swal from "sweetalert";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";
import { mapActions } from "vuex";
//import liff from "@line/liff";
//import FormDetail from "../components/FormDetail.vue"

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
      //customers: [],
      customers: [
        {
          index: 1,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 2,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 3,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 4,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 5,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 6,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
        {
          index: 7,
          avatar: null,
          fname: "Jena",
          lname: "Test",
          username: "Banana",
          action: "",
        },
      ],
      //loading: true,
      totalItems: 0,
      itemsPerPage: 5,
      userLogin: [],
      token: "",
      show: false,
    };
  },
  computed: {
    ...mapGetters(["data_profile"]),
    userProfile: {
      get() {
        return this.data_profile;
      },
    },
    // ถ้าต้องการ log data ที่ mapGetters ให้ log ในคัวแปรได้เลยจะไม่สามารถ log ใน created, mounted ได้เพราะมันจะ reload เข้ามาทำ created ก่อน computed
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
  mounted() {
    this.$liff.init(function () {
      console.log("data");
    });
    this.initLine();
    this.getCustomers();
    //this.token = localStorage.getItem("userToken")
    //this.getProfile()
  },
  methods: {
    ...mapActions(["SET_EMPLOYEE_BYID"], "index/employById"),
    onCaptchaVerified(response) {
      // Handle verification success
      console.log("Captcha verified, response:", response);
    },
    onCaptchaExpired() {
      // Handle expiration (optional)
      console.log("Captcha expired");
    },
    initLine() {
      //liff
      //  .init({
      //    liffId: "1234567890-AbcdEfgh", // Use own liffId
      //  })
      //  .then(() => {
      //    console.log("--------");
      //    // start to use LIFF's api
      //  })
      //  .catch((err) => {
      //    console.log(err);
      //  });
    },
    logDataMap() {
      this.show = true;
    },
    getCustomers() {
      this.axios.get("https://www.melivecode.com/api/users").then((res) => {
        this.customers = res.data;
        var index = 0;
        for (var item of this.customers) {
          index += 1;
          item["index"] = index;
        }
        this.customers.sort((a, b) => {
          //console.log("a", a.index, "b", b.index)
          if (a.id < b.id) {
            return 1;
          } else if (b.index < a.index) {
            return -1;
          } else {
            return 0;
          }
          //or
          // this.teams.sort((a, b) =>
          //  a.index < b.index ? 1 : b.index < a.index ? -1 : 0
          //)
        });
        console.log("====>", this.customers);
      });
    },
    createEmployee() {
      //console.log("---- Create Employee -----")
      this.$router.push({ path: "/manage/createemployee" });
    },
    updateEmployee(item) {
      //console.log("item ---->", item)
      this.id = item;
      this.SET_EMPLOYEE_BYID(item);
      this.$router.push({ path: "/manage/editemployee" });
    },
    deleteEmployee(id) {
      swal({
        title: "ยืนยันการลบ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          console.log(id);
          var payload = {
            id: id,
          };
          console.log(payload);
          this.axios
            .delete("https://www.mecallapi.com/api/users/delete", {
              data: payload,
            })
            .then((res) => {
              console.log("RES ->", res.data);
              this.getCustomers();
            });
          swal("ลบสำเร็จแล้ว", {
            icon: "success",
          });
        }
      });
    },
    getProfile() {
      if (this.token === null || this.token === "") {
        this.$router.push("/");
      }
      //this.getUserLogin()
    },
    getUserLogin() {
      console.log("Token ->", this.token);
      this.axios
        .get("https://www.melivecode.com/api/auth/user", {
          headers: { Authorization: `Basic ${this.token}` },
        })
        .then((res) => {
          this.userLogin = res.data.user;
          this.$store.dispatch("SET_PROFILE", this.userLogin);
          //console.log("---->", this.userLogin)
        });
    },
  },
};
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
