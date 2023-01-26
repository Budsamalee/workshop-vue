<template>
  <div class="background">
    <v-container>
      <v-layout row wrap align-center justify-center pa-0 pt-16>
        <v-flex xs10 md9 lg7 pt-16>
          <v-card class="cardCreate mx-auto mt-2" elevation="5" outlined>
            <v-avatar class="mt-5 justify-center" color="indigo" size="100">
              <v-icon dark large> mdi-account </v-icon>
            </v-avatar>
            <h1 class="subheading float-center mt-2">Login System</h1>
            <v-row
              row
              wrap
              no-gutters
              justify-start
              class="mx-3 hidden-sm-and-down"
            >
              <v-col cols="4" md="4" class="float-right ma-3">
                <v-divider />
              </v-col>
              <v-col cols="3" md="3" class="text-center">
                Please Login System
              </v-col>
              <v-col cols="4" md="4" class="float-right ma-3">
                <v-divider />
              </v-col>
            </v-row>

            <v-form>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="11" sm="11" xs="12" lg="11">
                    <v-text-field
                      v-model="userLogin.username"
                      label="Email"
                      placeholder="Email"
                      prepend-icon="mdi-account"
                      :rules="inputRules"
                      >Email</v-text-field
                    >
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="11" sm="11" xs="12" lg="11">
                    <v-text-field
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="passwordShow ? 'text' : 'password'"
                      name="input-10-2"
                      label="Password"
                      hint="มากกว่า 8 ตัว"
                      value="wqfasds"
                      class="input-group--focused"
                      prepend-icon="mdi-key"
                      v-model="userLogin.password"
                      @click:append="passwordShow = !passwordShow"
                    ></v-text-field>
                    <v-switch
                      v-model="switch1"
                      color="indigo"
                      label="Remember me"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
            <v-card-actions class="justify-center">
              <v-row justify="center">
                <v-col cols="12" md="5" sm="5" xs="5" lg="5">
                  <v-btn
                    block
                    color="success"
                    class="mr-3 mb-5 white--text"
                    @click="openDialog.dialog = true"
                    type="submit"
                    elevation="3"
                    depressed
                  >
                    <span> Register </span>
                  </v-btn>
                  <div class="mt-3">
                    <Register
                      :dialogs="openDialog.dialog"
                      @close="openDialog.dialog = false"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="5" sm="5" xs="5" lg="5">
                  <v-btn
                    block
                    :loading="loading"
                    color="indigo"
                    class="mr-3 mb-5 white--text"
                    @click="submit()"
                    type="submit"
                    elevation="3"
                    depressed
                  >
                    <span> Login </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-row v-if="loading == true">
              <v-col>
                <!--{{ value }}-->
                <v-progress-linear
                  :active="loader"
                  v-model="value"
                  :indeterminate="query"
                  :query="true"
                ></v-progress-linear>
                <!--<v-progress-circular
                      :rotate="-90"
                      :size="100"
                      :width="15"
                      :value="value"
                      color="primary"
                    >
                      {{ value }}
                    </v-progress-circular>-->
              </v-col>
            </v-row>
          </v-card>
          <v-snackbar v-model="snackbar" color="green white--text">
            Login success
          </v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
//import { mapActions } from "vuex"
//import swal from "sweetalert"
import Register from "../components/Register.vue"

export default {
  components: {
    Register,
  },
  data() {
    return {
      userLogin: {
        username: "karn.yong@melivecode.com",
        password: "melivecode",
        expiresIn: 60000,
      },
      //userLogin: {
      //  username: "testJena10",
      //  password: "123",
      //  expiresIn: 60000,
      //},
      inputRules: [(v) => v.length >= 3 || "กรุณากรอกข้อมูล"],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 3 || "Min 8 characters",
        emailMatch: () => `กรุณากรอก Email`,
      },
      switch1: false,
      loading: false,
      snackbar: false,
      passwordShow: true,
      password: "Password",
      from: {
        username: "",
        password: "",
        expiresIn: "",
      },
      openDialog: {
        dialog: false,
      },
      value: 0,
      query: false,
      loader: true,
      interval: 0,
    }
  },
  methods: {
    showDialog() {
      this.$refs.dialog.open()
    },
    submit() {
      this.loading = true
      this.loader = true
      this.query = true
      this.value = 0
      setTimeout(() => {
        this.query = false
        this.interval = setInterval(() => {
          if (this.value === 100) {
            this.loading = false
            //this.postLogin_2()
            this.postLogin()
            this.value = 0
            clearInterval(this.interval)
          }
          this.value += 10
        }, 500)
      }, 500)
      //this.postLogin()
      //this.postLogin_2()
    },
    //postLogin_2() {
    //  var payload = {
    //    username: this.userLogin.username,
    //    password: this.userLogin.password,
    //  }
    //  console.log("PAY ->", payload)
    //  this.axios
    //    .post(`${process.env.VUE_APP_API_TEST}/auth/login`, payload)
    //    .then((res) => {
    //      //console.log("RES LOGIN", res)
    //      this.snackbar = true
    //      this.loader = false
    //      localStorage.setItem("userToken", res.data.data.access_token)
    //      this.$store.dispatch("SET_LOGIN_CHECKING")
    //      this.$router.push({ path: "/listEmployee" })
    //    })
    //    .catch((err) => {
    //      console.log(err)
    //      this.loader = false
    //      swal({
    //        title: "Password ไม่ถูกต้อง",
    //        icon: "warning",
    //      })
    //      this.loading = false
    //    })
    //},
    postLogin() {
      //console.log(this.userLogin)
      var payload = {
        username: this.userLogin.username,
        password: this.userLogin.password,
        expiresIn: this.userLogin.expiresIn,
      }
      //console.log(this.$store.state)
      this.axios
        .post(" https://www.melivecode.com/api/login", payload)
        .then((res) => {
          console.log("DATA ==>", res.data)
          localStorage.setItem("userToken", res.data.accessToken)
          //console.log(localStorage.userToken)
          //this.$store.dispatch("setDetailUser", res.data)
          this.$store.dispatch("SET_LOGIN_CHECKING")
          this.$router.push({ path: "/listEmployee" })

          //this.$store.dispatch("SET_PROFILE", res.data)
        })
        .catch((err) => {
          console.log("ERR ->", err)
        })
    },
  },
}
</script>
<style scope>
/*@import url("./assets/css/bootstrap.min.css");*/

.background {
  background-image: linear-gradient(315deg, #b5e8ee 0%, #93a5ce 74%);
  /*background-image: url("~@/assets/fram_bg.jpg");*/
  /*background-image: url("~@/assets/Frame.png");*/
  background-position: right;
  transform: translate(0px, -65px);
  transform: translate(1px, -50px);
  height: 50%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.cardCreate {
  text-align: center;
}
.progress {
  cursor: pointer;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
