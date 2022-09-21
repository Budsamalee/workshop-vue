<template>
  <div class="background">
    <!-- Vuex -->
    <!--<div>
      <h1>{{ $store.state.food }}</h1>
      <v-btn @click="testVuex()"></v-btn>
    </div>-->
    <v-container
      ><v-layout row wrap align-center justify-center pa-0 pt-16>
        <v-flex xs10 md9 lg7 pt-16>
          <!--<v-row class="mt-5">-->
          <!--<v-col cols="12" md="4" sm="12" xs="12"></v-col>-->
          <!--<v-col cols="12" md="4" sm="12" xs="12">-->
          <v-card class="cardCreate mx-auto mt-2" elevation="5" outlined>
            <v-avatar class="mt-5 justify-center" color="indigo" size="100">
              <v-icon dark large> mdi-account </v-icon>
            </v-avatar>
            <h1 class="subheading float-center mt-2">Login System</h1>
            <v-form>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="4" sm="11" xs="12" lg="11">
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
                  <v-col cols="12" md="4" sm="11" xs="12" lg="11">
                    <v-text-field
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="passwordShow ? 'text' : 'password'"
                      name="input-10-2"
                      label="Visible"
                      hint="At least 8 characters"
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
                <v-col cols="12" md="4" sm="5" xs="5" lg="5">
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
                </v-col></v-row
              >
            </v-card-actions>
          </v-card>
          <!--</v-col>-->
          <!--<v-col cols="12" md="4" sm="12" xs="12"></v-col>-->
          <!--</v-row>-->
          <v-snackbar v-model="snackbar" color="green white--text">
            Login success
          </v-snackbar>
        </v-flex>
      </v-layout></v-container
    >
  </div>
</template>

<script>
//import { mapActions } from "vuex"
//import { sync } from "vuex-pathify"
export default {
  data() {
    return {
      userLogin: {
        username: "karn.yong@melivecode.com",
        password: "melivecode",
        expiresIn: 60000,
      },
      inputRules: [(v) => v.length >= 3 || "กรุณากรอกข้อมูล"],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
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
    }
  },
  //computed: {
  //  greeting: sync("index/greeting"),
  //},
  methods: {
    //testVuex() {
    //  this.$store.dispatch("setFood", "5555555")
    //},
    // eslint-disable-next-line no-undef
    //...mapActions("dialog", [setDetailUser]),
    //...mapActions({
    //  signIn: "auth/signIn",
    //}),
    submit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbar = true
      }, 30000)
      this.postLogin()
    },
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
<style>
.background {
  background-image: linear-gradient(315deg, #b5e8ee 0%, #93a5ce 74%);
  background-size: auto;
  height: 300px;
  width: 100%;
  display: block;
}
.cardCreate {
  text-align: center;
}
</style>
