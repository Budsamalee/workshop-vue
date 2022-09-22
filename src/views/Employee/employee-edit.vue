<template>
  <div class="mt-5">
    <Navbar></Navbar>
    <v-container grid-list-md fluid>
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
              <span class="float-left fontHead"> แก้ไขรายชื่อพนักงาน </span>
            </v-col>
          </v-row>
          <v-card class="cardCreate mx-auto mt-2" elevation="5" outlined>
            <v-card-text>
              <v-row class="mt-2">
                <v-col cols="6">
                  <v-text-field
                    v-model="getEmployee.fname"
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
                    v-model="getEmployee.lname"
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
                    v-model="getEmployee.username"
                    label="Username"
                    placeholder="Username"
                    dense
                    clearable
                    outlined
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="getEmployee.email"
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
                    v-model="getEmployee.avatar"
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
                    @click="editEmployee(getEmployee.id)"
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
      id: this.$route.params.id,
      getEmployee: [],
    }
  },
  mounted() {
    //console.log("ID ->", this.id)
    this.getEmployeeById()
  },
  methods: {
    cancelEmployee() {
      this.getEmployeeById()
    },
    getEmployeeById() {
      console.log("GET DATA")
      console.log("Id ->", this.id)
      this.axios
        .get("https://www.mecallapi.com/api/users/" + this.id)
        .then((res) => {
          console.log("RES--->", res.data.user)
          this.getEmployee = res.data.user
        })
    },
    editEmployee(id) {
      console.log("ก่อน", this.getEmployee)
      var payload = {
        id: id,
        fname: this.getEmployee.fname,
        lname: this.getEmployee.lname,
        email: this.getEmployee.email,
        username: this.getEmployee.username,
      }
      if (this.getEmployee.avatar == null) {
        payload["avatar"] =
          "https://altrolaw.com/wp-content/uploads/2021/07/default-profile-picture-png-1-Transparent-Images.png"
      } else {
        payload["avatar"] = this.getEmployee.avatar
      }
      console.log(payload)
      this.axios
        .put("https://www.mecallapi.com/api/users/update", payload)
        .then((res) => {
          console.log("EDIT ->", res)
          this.$router.push("/listEmployee")
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
