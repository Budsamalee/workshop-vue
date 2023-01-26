<template>
  <v-row justify="center">
    <v-dialog v-model="dialogs" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5 headline">Register Member</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-3">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.fname"
                    required
                    label="* ชื่อ"
                    hint="* กรุณากรอกชื่อจริง"
                    :rules="[(v) => !!v || '* กรุณากรอก firstname']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.lname"
                    required
                    label="* นามสกุล"
                    hint="* กรุณากรอกนามสกุล"
                    :rules="[(v) => !!v || '* กรุณากรอก lastname']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.username"
                    :rules="[(v) => !!v || '* กรุณากรอก username']"
                    required
                    label="User name*"
                    hint="* กรุณากรอก username"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.password"
                    :rules="[(v) => !!v || '* กรุณากรอก password']"
                    required
                    label="Password"
                    hint="* กรุณากรอก password"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.age"
                    required
                    label="Age"
                    hint="* กรุณากรอก age"
                    :rules="[(v) => !!v || '* กรุณากรอกอายุ']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Birthday"
                        hint="* กรุณากรอก Birthday"
                        :rules="[(v) => !!v || '* กรุณากรอกวันเกิด']"
                        persistent-hint
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        clearable
                        dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.contact"
                    v-mask="masknumber"
                    :rules="[(v) => !!v || 'เบอร์โทรศัพท์ไม่ถูกต้อง']"
                    class="my-input-checkout"
                    required
                    label="* เบอร์ติดต่อ"
                    hint="* กรุณากรอกเบอร์ติดต่อ"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="dataRegis.email"
                    required
                    label="Email"
                    hint="* กรุณากรอก email"
                    placeholder="xxxxxx@gmail.com"
                    :rules="[
                      (v) => !!v || 'กรุณากรอก Email',
                      (v) => /.+@.+/.test(v) || 'รูปแบบ E-mail ไม่ถูกต้อง',
                    ]"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="dataRegis.address"
                    required
                    label="* ที่อยู่่"
                    hint="* กรุณากรอกที่อยู่"
                    :rules="[(v) => !!v || '* กรุณากรอกที่อยู่']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="white--text" @click="closeDialogs()">
            Close
          </v-btn>
          <v-btn color="teal" class="white--text" @click="save()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {
  format,
  //addDays,
  //addMonths,
  //addYears,
  //parseISO,
  //subHours,
} from "date-fns"
import swal from "sweetalert"
import moment from "moment"
import { mask } from "vue-the-mask"
export default {
  name: "Register",
  props: ["dialogs"],
  directives: {
    mask,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "กรุณากรอกข้อมูล",
      },
      menu2: false,
      dataRegis: {
        fname: "",
        lname: "",
        username: "",
        password: "",
        birthday: "",
        age: Number,
        email: "",
        contact: "",
        address: "",
      },
      date: moment(new Date()).format("YYYY-M-D"),
      valid: true,
      masknumber: "###-###-####",
    }
  },
  mounted() {
    console.log(this.date)
    console.log(this.dialogs)
  },
  //computed: {
  //  show: {
  //    get() {
  //      if (this.dialogs == true) {
  //        console.log("------ OPEN ------")
  //      }
  //      return this.dialogs
  //    },
  //    set(value) {
  //      console.log("value ->", value)
  //      if (!value) {
  //        this.$emit("close")
  //      }
  //    },
  //  },
  //},
  methods: {
    closeDialogs() {
      this.$refs.form.reset()
      this.date = moment(new Date()).format("YYYY-M-D")
      console.log("close", this.date)
      this.$emit("close")
    },
    save() {
      if (this.$refs.form.validate()) {
        console.log("DATA COMPLETE")
        const newDate = format(new Date(this.date), "dd-MM-yyyy")
        this.dataRegis.birthday = newDate
        console.log(this.dataRegis)
        this.postRegister()
      } else {
        console.log("NO COMPLETE")
      }
    },
    postRegister() {
      console.log("DATA REGIS ->", this.dataRegis)
      swal({
        title: "ยืนยันการสมัคร",
        text: "",
        icon: "warning",
        buttons: true,
      }).then((willConfirm) => {
        if (willConfirm) {
          console.log("--- Confirm ----")
          var payload = {
            username: this.dataRegis.username,
            password: this.dataRegis.password,
            email: this.dataRegis.email,
            age: this.dataRegis.age,
            birthday: this.dataRegis.birthday,
            contact: this.dataRegis.contact,
            address: this.dataRegis.address,
            fname: this.dataRegis.fname,
            lname: this.dataRegis.lname,
          }
          console.log("PAY ->", payload)
          this.axios
            .post(`${process.env.VUE_APP_API_TEST}/auth/register`, payload)
            .then((res) => {
              console.log("RES->", res.data.data)
              this.$emit("close")
            })
        }
      })
    },
  },
}
</script>
