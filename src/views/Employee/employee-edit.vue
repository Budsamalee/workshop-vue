<template>
  <div class="mt-5">
    <Navbar></Navbar>
    <v-container grid-list-md fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap fill-height align-center justify-center>
          <v-flex x11 lg9>
            <v-row>
              <v-col cols="12">
                <v-icon
                  large
                  class="float-left mx-2 mr-4"
                  color="black"
                  @click="$router.push('/listEmployee')"
                >
                  mdi-chevron-left
                </v-icon>
                <span class="float-left fontHead">แก้ไขรายชื่อพนักงาน</span>
              </v-col>
            </v-row>
            <v-card class="cardCreate mx-auto mt-2" elevation="5" outlined>
              <v-card-text>
                <v-row class="mt-2">
                  <v-col cols="6">
                    <v-text-field
                      v-model="employById.fname"
                      :rules="[(v) => !!v || '* กรุณากรอกชื่อจริง']"
                      label="ชื่อจริง"
                      placeholder="ชื่อจริง"
                      dense
                      clearable
                      outlined
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="employById.lname"
                      :rules="[(v) => !!v || '* กรุณากรอกนามสกุล']"
                      label="นามสกุล"
                      placeholder="นามสกุล"
                      dense
                      clearable
                      outlined
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="employById.username"
                      :rules="[(v) => !!v || '* กรุณากรอก username']"
                      label="Username"
                      placeholder="Username"
                      dense
                      clearable
                      outlined
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <!-- :rules="inputRulesEmail" -->
                    <v-text-field
                      v-model="employById.email"
                      label="Email"
                      placeholder="Email"
                      dense
                      clearable
                      outlined
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="employById.avatar"
                      label="Profile"
                      placeholder="Profile"
                      dense
                      clearable
                      outlined
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      color="success darken-1"
                      class="text-center mr-2"
                      justify-center
                      @click="editEmployee(employById)"
                    >
                      แก้ไข
                    </v-btn>
                    <v-btn
                      color="error darken-1"
                      class="text-center"
                      justify-center
                      @click="cancelEmployee()"
                    >
                      ยกเลิก
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <br />
            <v-btn outlined class="teal--text mt-2" color="teal">
              <span>DATA</span>
            </v-btn>
            <br />
            <div class="mt-2">
              <span>
                {{ employById }}
              </span>
            </div>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "/Users/budsamalee/vue-vuetify-demo/src/layouts/Navbar.vue"
import Footer from "/Users/budsamalee/vue-vuetify-demo/src/layouts/Footer.vue"
import { mapGetters, mapActions } from "vuex"
import swal from "sweetalert"

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      id: this.$route.params.id,
      getEmployee: [],
      valid: true,
      inputRulesEmail: [
        (v) => !!v || "กรุณากรอก Email",
        (v) => /.+@.+/.test(v) || "รูปแบบ E-mail ไม่ถูกต้อง",
      ],
    }
  },
  computed: {
    ...mapGetters(["employById"]),
    getEmployeeById: {
      get() {
        return this.employById
      },
    },
  },
  created() {
    //console.log("BY ID ->", typeof this.employById)
    if (this.employById === "") {
      this.$router.push("/listEmployee")
    }
  },
  methods: {
    ...mapActions(["SET_EMPLOYEE_BYID"], "index/ememployByIdp"),
    cancelEmployee() {
      //this.getEmployeeById()
      this.$router.push("/listEmployee")
    },
    //getEmployeeById() {
    //  console.log("GET DATA")
    //  console.log("Id ->", this.id)
    //  this.axios
    //    .get("https://www.mecallapi.com/api/users/" + this.id)
    //    .then((res) => {
    //      console.log("RES--->", res.data.user)
    //      this.getEmployee = res.data.user
    //    })
    //},
    editEmployee(item) {
      console.log("ก่อน", item)
      if (this.$refs.form.validate()) {
        console.log("Complete")
        this.putEditEmployee(item)
      } else {
        console.log("No complete")
      }
    },
    putEditEmployee(item) {
      var payload = {
        id: item.id,
        fname: item.fname,
        lname: item.lname,
        email: item.email,
        username: item.username,
      }
      if (item.avatar == null) {
        payload["avatar"] =
          "https://altrolaw.com/wp-content/uploads/2021/07/default-profile-picture-png-1-Transparent-Images.png"
      } else {
        payload["avatar"] = item.avatar
      }
      console.log(payload)
      this.axios
        .put("https://www.mecallapi.com/api/users/update", payload)
        .then((res) => {
          console.log("EDIT ->", res)

          swal("แก้ไขสำเร็จแล้ว", {
            icon: "success",
          })
          //this.$router.push("/listEmployee")
        })
    },
    gotoPage() {
      this.$router.push("/")
    },
  },
}
</script>
<style scoped>
.color {
  background-color: #e4eee9;
}
</style>
