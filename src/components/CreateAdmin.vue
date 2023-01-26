<template>
  <div>
    <v-dialog v-model="dialogs" persistent max-width="600px">
      <v-card>
        <v-card-title> Create Admin</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            {{ role }}
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.fname"
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
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.lname"
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
              </v-row>
              <!-- Username / Password -->
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.username"
                    required
                    label="* username"
                    hint="* กรุณากรอก username"
                    :rules="[(v) => !!v || '* กรุณากรอก username']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.password"
                    required
                    label="* password"
                    hint="* กรุณากรอก password"
                    :rules="[(v) => !!v || '* กรุณากรอก password']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- Birth Day / Age -->
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
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
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.age"
                    required
                    label="Age"
                    hint="* กรุณากรอก age"
                    :rules="[(v) => !!v || '* กรุณากรอกอายุ']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- Birth Day / Age -->
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.email"
                    :rules="[
                      (v) => !!v || '* กรุณากรอก Email',
                      (v) => /.+@.+/.test(v) || 'รูปแบบ E-mail ไม่ถูกต้อง',
                    ]"
                    required
                    label="* Email"
                    hint="* กรุณากรอก email"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataAdmin.contact"
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
              </v-row>
              <!-- Address -->
              <v-row justify="center" class="mt-1">
                <v-col lg="12" xs="6">
                  <v-text-field
                    v-model="dataAdmin.address"
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
          <v-btn color="error" class="white--text" @click="closeAdmin()">
            Close
          </v-btn>
          <v-btn color="teal" class="white--text" @click="saveAdmin()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format } from "date-fns"
import { mask } from "vue-the-mask"
import moment from "moment"
export default {
  directives: {
    mask,
  },
  name: "CreateAdmin",
  props: ["dialogs", "role"],
  data() {
    return {
      valid: true,
      dataAdmin: {
        fname: "",
        lname: "",
        username: "",
        email: "",
        birthday: "",
        address: "",
        password: "",
        contact: "",
        age: null,
      },
      date: moment(new Date()).format("YYYY-M-D"),
      menu2: false,
      masknumber: "###-###-####",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    }
  },
  mounted() {
    console.log("Admin", this.dialogs)
    console.log("Role =>", this.role)
  },
  methods: {
    saveAdmin() {
      //console.log("DATA ::", this.dataAdmin)
      if (this.$refs.form.validate()) {
        //console.log("--- COMPLETE ---")
        const newBirthday = format(new Date(this.date), "yyyy-MM-dd")
        this.dataAdmin.birthday = newBirthday
        this.postCreateAdmin(this.dataAdmin)
      } else {
        console.log("---- NOT COMPLETE -----")
      }
    },
    closeAdmin() {
      this.$refs.form.reset()
      this.$emit("closeCreateAdmin")
    },
    postCreateAdmin(data) {
      var payload = {
        fname: data.fname,
        lname: data.lname,
        username: data.username,
        password: data.password,
        email: data.email,
        birthday: data.birthday,
        address: data.address,
        contact: data.contact,
        age: parseInt(data.age),
        role: "staff",
      }
      //console.log(payload)
      this.axios
        .post(`${process.env.VUE_APP_API_TEST}/users`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          console.log(res)
          this.dialogs = true
          this.$emit("closeCreateAdmin")
          this.$emit("getListUsers")
          this.$refs.form.reset()
        })
    },
  },
}
</script>
