<template>
  <div class="mt-5">
    <Navbar />
    <v-container fluid>
      <v-layout row wrap fill-height align-center justify-center pa-10>
        <v-flex xs6 lg6>
          <v-card class="elevation-0" outlined color="transparent">
            <v-card-title>
              <v-avatar color="grey">
                <v-icon dark>mdi-account</v-icon>
              </v-avatar>
              <b>&nbsp;ข้อมูลรายละเอียด ( API P'REEF )</b>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 lg6 pr-10>
          <v-btn
            v-if="tabs == 1"
            class="float-right ma-3"
            color="warning darken-1"
            @click="dialogAdmin = true"
            :disabled="close == true"
          >
            <v-icon center class="mr-1"> mdi-plus </v-icon>
            สร้าง Admin
          </v-btn>
          <v-btn
            v-else
            class="float-right ma-3"
            color="success darken-1"
            @click="openDialog.dialog = true"
          >
            <v-icon center class="mr-1"> mdi-plus </v-icon>
            สร้างบริษัท
          </v-btn>
          <div>
            <CreateCompany
              :dialogs="openDialog.dialog"
              @close="closeCompany()"
              @getListCompany="getCompanys()"
            />
          </div>
          <div>
            <CreateAdmin
              :dialogs="dialogAdmin"
              @closeCreateAdmin="closeCreateAdmin()"
              @getListUsers="getAdmins()"
              :role="role"
            />
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap fill-height align-center justify-center mt-n5>
        <v-flex xs12 lg11>
          <v-card>
            <v-toolbar flat>
              <template v-slot:extension>
                <v-tabs v-model="tabs" fixed-tabs>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab
                    v-for="item in itemsTab"
                    :key="item.tab"
                    class="gray--text"
                    @click="logTab(tabs)"
                  >
                    <b>{{ item.content }}</b>
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>

            <v-tabs-items v-model="tabs">
              <!-- Company -->
              <v-tab-item>
                <v-card flat>
                  <v-card color="white">
                    <v-data-table
                      :headers="headersCompany"
                      :items="listCompanys"
                      class="fontHeader elevation-0 text-center mt-4 black--text"
                    >
                      <template v-slot:item.action="{ item }">
                        <v-btn
                          color="warning darken-1"
                          class="mr-2"
                          fab
                          x-small
                          @click="updateCompany(item)"
                        >
                          <v-icon small center class="ma-1">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                        <v-btn
                          color="primary darken-1"
                          fab
                          x-small
                          @click="deleteCompany(item.id)"
                        >
                          <v-icon small center class="ma-1">
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </template>
                    </v-data-table>
                  </v-card>
                </v-card>
              </v-tab-item>
              <!-- Admins -->
              <v-tab-item>
                <v-card flat>
                  <v-card color="white">
                    <v-data-table
                      :headers="headersUser"
                      :items="listUsers"
                      class="fontHeader elevation-0 text-center mt-4 black--text"
                    >
                      <template v-slot:item.image="{ item }">
                        <v-avatar v-if="item.image" class="avatarImg">
                          <img v-bind:src="item.image" alt="" />
                        </v-avatar>
                        <v-avatar v-else class="avatarImg">
                          <p>-</p>
                        </v-avatar>
                      </template>
                      <template v-slot:item.action="{ item }">
                        <v-btn
                          color="warning darken-1"
                          class="mr-2"
                          fab
                          x-small
                          @click="updateListAdmin(item)"
                          :disabled="close == true"
                        >
                          <v-icon small center class="ma-1">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                        <v-btn
                          color="primary darken-1"
                          fab
                          x-small
                          @click="deleteListAdmin(item.id)"
                          :disabled="close == true"
                        >
                          <v-icon small center class="ma-1">
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </template>
                      <template v-slot:item.birthday="{ item }">
                        <span v-if="item.birthday != 'Invalid date' || ''">{{
                          item.birthday
                        }}</span>
                      </template>
                      <template v-slot:item.role="{ item }">
                        <v-chip
                          v-if="item.role == 'admin'"
                          color="success"
                          class="ml-0 mr-2 white--text"
                          label
                          small
                        >
                          {{ item.role }}
                        </v-chip>
                        <v-chip
                          v-else
                          color="primary"
                          class="ml-0 mr-2 white--text"
                          label
                          small
                        >
                          {{ item.role }}
                        </v-chip>
                      </template>
                    </v-data-table>
                  </v-card>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <!-- Edit Company -->
            <EditCompany
              :modalEditCom="modalEdit"
              @closeEdit="closeEdit()"
              @getCompany="getCompanys()"
            />
            <!-- Edit Admin -->
            <EditAdmin
              :modalEditAdmin="modalEditAdmin"
              @closeEditAdmin="closeEditAdmin()"
              @getAdmins="getAdmins()"
              :role="role"
            />
          </v-card>
        </v-flex>
      </v-layout>
      <br />
      <!--<pre><b> ข้อมูล user login come </b>
        {{ userProfile }}
      </pre>-->
    </v-container>
    <Footer />
  </div>
</template>

<script>
import { mask } from "vue-the-mask"
import Navbar from "../layouts/Navbar.vue"
import Footer from "../layouts/Footer.vue"
import CreateCompany from "@/components/CreateCompany.vue"
import EditCompany from "../components/EditCompany.vue"
import CreateAdmin from "../components/CreateAdmin.vue"
import EditAdmin from "../components/EditAdmin.vue"
import { mapGetters, mapActions } from "vuex"
import swal from "sweetalert"
import moment from "moment"

//import { format } from "date-fns"
export default {
  name: "Company",
  directives: {
    mask,
  },
  components: {
    Navbar,
    Footer,
    CreateCompany,
    EditCompany,
    CreateAdmin,
    EditAdmin,
  },
  data() {
    return {
      masknumber: "###-###-####",
      listCompanys: [],
      listUsers: [],
      headersCompany: [
        {
          text: "ลำดับ",
          align: "center",
          sortable: false,
          value: "index",
        },
        { text: "ชื่อ", value: "name", align: "center" },
        { text: "email", value: "email", align: "center" },
        { text: "contact", value: "contact", align: "center" },
        { text: "createdAt", value: "createdAt", align: "center" },
        { text: "Action", value: "action", align: "center" },
      ],
      headersUser: [
        {
          text: "ลำดับ",
          align: "center",
          sortable: false,
          value: "index",
          width: "3%",
        },
        //{ text: "รูป", value: "image", align: "center", width: "7%" },
        { text: "ชื่อ", value: "name", align: "center", width: "15%" },
        { text: "email", value: "email", align: "center", width: "10%" },
        {
          text: "เบอร์ติดต่อ",
          value: "contact",
          align: "center",
          width: "20%",
        },
        { text: "วันเกิด", value: "birthday", align: "center", width: "7%" },
        { text: "วันสร้าง", value: "createdAt", align: "center", width: "7%" },
        {
          text: "วันอัพเดท",
          value: "updatedAt",
          align: "center",
          width: "10%",
        },
        { text: "สถานะ", value: "role", align: "center", width: "7%" },
        { text: "Actions", value: "action", align: "center", width: "15%" },
      ],
      itemsTab: [
        { tab: "One", content: "รายชื่อบริษัท" },
        { tab: "Two", content: "รายชื่อ Admin" },
      ],
      tabs: null,
      openDialog: {
        dialog: false,
      },
      dialogAdmin: false,
      modaEditCom: false,
      valid: true,
      modalEdit: false,
      modalEditAdmin: false,
      role: "",
      close: false,
    }
  },
  mounted() {
    this.getCompanys()
    this.getAdmins()
    this.getAuthRole()
    this.tabs = 0
  },
  computed: {
    ...mapGetters(["getProfile"]),
    userProfile: {
      get() {
        console.log("GETPRO ->", this.getProfile)
        return this.getProfile
      },
    },
  },
  methods: {
    ...mapActions(
      ["SET_EDIT_COMPANY", "SET_EDIT_ADMIN"],
      "index/listEditCompany",
      "index/listEditAdmin"
    ),
    // getAuth
    getAuthRole() {
      this.axios
        .get(`${process.env.VUE_APP_API_TEST}/auth/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          //console.log("RES AUTH :", res.data.data)
          console.log("Role :", res.data.data.role)
          this.role = res.data.data.role
          // role
          if (this.role == "user") {
            //console.log("ROLE ::", this.role)
            this.close = true
          }
        })
    },
    // GetCompany
    getCompanys() {
      console.log("--- Company ----")
      //  this.axios.get(`${process.env.VUE_APP_API_TEST}/company`),  {
      //      headers: {
      //        Authorization: `Bearer ${token}`,
      //      },}).then((res) => {
      //    console.log("Company ->", res)
      //  })
      this.axios
        .get(`${process.env.VUE_APP_API_TEST}/company`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          //  console.log("COM", res)
          this.listCompanys = res.data.data.data
          var index = 0
          for (var item of this.listCompanys) {
            //console.log("ITEM ->", item)
            index += 1
            item["index"] = index
            // createdAt
            let createdAt = item["createdAt"]
            if (createdAt) {
              item["createdAt"] = moment(new Date(createdAt)).format(
                "DD/MM/YYYY"
              )
            }
          }
          console.log("--->", this.listCompanys)
        })
        .catch((err) => {
          console.log("=====>", err.message)
          if (err.message == "Request failed with status code 403") {
            console.log("ไม่สามารถดูได้ เนื่องจากคุฯอยู่สถานะ User")
          }
        })
    },
    // GetUser
    getAdmins() {
      console.log()
      this.axios
        .get(`${process.env.VUE_APP_API_TEST}/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          console.log("GET USERS ->", res.data.data.data)
          this.listUsers = res.data.data.data
          var index = 0
          for (var item of this.listUsers) {
            index += 1
            item["index"] = index
            // birthday
            let birthday = item["birthday"]
            if (birthday) {
              item["birthday"] = moment(new Date(birthday)).format("DD/MM/YYYY")
            }
            // createdAt || updatedAt
            let createdAt = item["createdAt"]
            let updatedAt = item["updatedAt"]
            if (createdAt || updatedAt) {
              item["createdAt"] = moment(new Date(createdAt)).format(
                "DD/MM/YYYY"
              )
              item["updatedAt"] = moment(new Date(updatedAt)).format(
                "DD/MM/YYYY"
              )
            }
            // image
            if (item["image"]) {
              //console.log(item["image"])
              let img = item["image"]["image"]
              //console.log(img)
              item["img"] = img
              //console.log("ITEM =>", item)
            }
            // contact
            if (!item["contact"]) {
              item["contact"] = "-"
              //let phone = item["contact"].replace(/\D[^.]/g, "")
              //item["contact"] =
              //  phone.slice(0, 3) +
              //  "-" +
              //  phone.slice(3, 6) +
              //  "-" +
              //  phone.slice(6)
              //console.log("new Contact", item["contact"])
            }
            // firstname & lastname
            if (item["fname"] && item["lname"]) {
              item["name"] = item["fname"] + " " + item["lname"]
            } else {
              item["name"] = "-"
            }
            // role
          }
          console.log("listUsers ---->", this.listUsers)
        })
    },
    // Companys
    updateCompany(data) {
      console.log("---- CLICK EDIT -----")
      this.modalEdit = true
      console.log(data)
      this.SET_EDIT_COMPANY(data)
    },
    deleteCompany(id) {
      console.log(id)
      swal({
        title: "คุณต้องการลบ",
        text: "",
        icon: "warning",
        buttons: true,
      }).then((willConfirm) => {
        if (willConfirm) {
          this.axios
            .delete(`${process.env.VUE_APP_API_TEST}/company/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              },
            })
            .then((res) => {
              console.log("Sucees ->", res)
              this.getCompanys()
            })
            .catch((err) => {
              console.log("ERR ->", err)
            })
        }
      })
    },
    closeCompany() {
      console.log("Cloase Create")
      this.openDialog.dialog = false
    },
    closeEdit() {
      this.modalEdit = false
      //this.modaEditCom = false
      this.getCompanys()
    },
    closeCreateAdmin() {
      this.dialogAdmin = false
    },
    // Users
    updateListAdmin(data) {
      console.log("Admin Edit -->", data)
      this.modalEditAdmin = true
      this.SET_EDIT_ADMIN(data)
    },
    deleteListAdmin(id) {
      console.log("id delete ->", id)
      swal({
        title: "คุณต้องการลบ User",
        text: "",
        icon: "warning",
        buttons: true,
      }).then((willConfirm) => {
        if (willConfirm) {
          this.axios
            .delete(`${process.env.VUE_APP_API_TEST}/users/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              },
            })
            .then((res) => {
              console.log("Sucees ->", res)
              this.getAdmins()
            })
            .catch((err) => {
              console.log("ERR ->", err)
            })
        }
      })
    },
    closeEditAdmin() {
      this.modalEditAdmin = false
      this.getAdmins()
    },
    logTab(data) {
      console.log("tab->", data)
      //if (data == 0) {
      //  this.getAdmins()
      //} else {
      //  this.getCompanys()
      //}
    },
  },
}
</script>

<style scope>
.avatarImg img {
  padding: 4px;
}
.swal-footer {
  text-align: center;
  font-family: "Sarabun", sans-serif;
}
</style>
