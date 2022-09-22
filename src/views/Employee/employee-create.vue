<template>
  <div class="mt-5">
    <Navbar></Navbar>
    <v-container grid-list-md fluid>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex x11 lg9>
          <v-row>
            <v-col cols="12">
              <!--<v-btn class="float-left mx-2 mr-4" small fab dark color="cyan">-->
              <v-icon
                large
                class="float-left mx-2 mr-4"
                color="black"
                @click="$router.push('/listEmployee')"
              >
                mdi-chevron-left
              </v-icon>
              <!--</v-btn>-->
              <span class="float-left fontHead"> เพิ่มรายชื่อพนักงาน </span>
            </v-col>
          </v-row>
          <v-card class="cardCreate mx-auto mt-2" elevation="5" outlined>
            <!--color="transparent"-->
            <v-card-text>
              <v-row class="mt-2">
                <v-col cols="6">
                  <v-text-field
                    v-model="dataEmployee.fname"
                    label="ชื่อจริง"
                    placeholder="ชื่อจริง"
                    dense
                    clearable
                    outlined
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="dataEmployee.lname"
                    label="นามสกุล"
                    placeholder="นามสกุล"
                    dense
                    clearable
                    outlined
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="dataEmployee.username"
                    label="Username"
                    placeholder="Username"
                    dense
                    clearable
                    outlined
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="dataEmployee.email"
                    label="Email"
                    placeholder="Email"
                    dense
                    clearable
                    outlined
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="dataEmployee.avatar"
                    label="Profile"
                    placeholder="link image"
                    dense
                    clearable
                    outlined
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-alert v-if="msg" border="left" colored-border type="error">
                    <span class="float-left" style="color: #ff0000">
                      {{ msg }}
                    </span>
                  </v-alert>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="float-center">
                  <v-btn
                    color="success darken-1"
                    class="text-center mr-2"
                    @click="submitEmployee()"
                  >
                    บันทึก
                  </v-btn>
                  <v-btn
                    color="error darken-1"
                    class="text-center"
                    @click="cancelCreate()"
                  >
                    ยกเลิก
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "/Users/budsamalee/vue-vuetify-demo/src/layouts/Navbar.vue"
import Footer from "/Users/budsamalee/vue-vuetify-demo/src/layouts/Footer.vue"
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      dataEmployee: {
        fname: "",
        lname: "",
        username: "",
        email: "",
        avatar: "",
      },
      msg: "",
      inputRules: [(v) => v.length >= 3 || "กรุณากรอกข้อมูล"],
    }
  },
  created() {
    console.log("-----Create+++++++")
  },
  methods: {
    submitEmployee() {
      console.log("Data ->", this.dataEmployee)
      if (
        this.dataEmployee.fname &&
        this.dataEmployee.lname &&
        this.dataEmployee.email &&
        this.dataEmployee.username
      ) {
        this.msg = ""
        this.createEmployee(this.dataEmployee)
      } else {
        this.msg = "* กรุณากรอกข้อมูลให้ครบถ้วน"
      }
    },
    cancelCreate() {
      this.dataEmployee = {
        fname: "",
        lname: "",
        username: "",
        email: "",
        avatar: "",
      }
    },
    createEmployee(data) {
      var payload = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        username: data.username,
      }
      if (data.avatar == "") {
        console.log("ว่าง")
        payload["avatar"] =
          "https://altrolaw.com/wp-content/uploads/2021/07/default-profile-picture-png-1-Transparent-Images.png"
      } else {
        console.log("ไม่ว่าง")
        payload["avatar"] = data.avatar
      }
      console.log("payload ->", payload)
      this.axios
        .post("https://www.mecallapi.com/api/users/create", payload)
        .then((res) => {
          console.log("RES ->", res.data.user)
          this.$router.push("/listEmployee")
        })
    },
  },
}
</script>
<style>
.cardCreate {
  border-color: #0000;
}
.fontHead {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
