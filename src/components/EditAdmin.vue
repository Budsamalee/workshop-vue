<template>
  <div>
    <v-dialog v-model="modalEditAdmin" persistent max-width="600px">
      <v-card>
        <v-card-title> EDIT ADMIN </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            {{ dataEditAdmin.birthday }}
            <v-form ref="form" v-model="valid" lazy-validation>
              <!-- Firsname / LastName -->
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataEditAdmin.fname"
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
                    v-model="dataEditAdmin.lname"
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
              <!-- BirthDay / Age -->
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
                        v-model="dataEditAdmin.birthday"
                        label="Birthday"
                        hint="* กรุณากรอก Birthday"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        clearable
                        persistent-hint
                        dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                  <!--<v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
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
                        :value="birthday"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = ''"
                    ></v-date-picker>
                  </v-menu>-->
                </v-col>
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataEditAdmin.age"
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
              <!-- Email / Address -->
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataEditAdmin.email"
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
                    v-model="dataEditAdmin.contact"
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
              <v-row>
                <v-col lg="12" xs="6">
                  <v-text-field
                    v-model="dataEditAdmin.address"
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
          <v-btn color="error" class="white--text" @click="closeEditAdmin()">
            Close
          </v-btn>
          <v-btn color="teal" class="white--text" @click="saveEditAdmin()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
//import moment from "moment"
import { mapGetters } from "vuex"
import { mask } from "vue-the-mask"
import { format } from "date-fns"

export default {
  name: "EditAdmin",
  props: ["modalEditAdmin", "role"],
  directives: {
    mask,
  },
  data() {
    return {
      date: "",
      menu2: false,
      valid: true,
      masknumber: "###-###-####",
    }
  },
  computed: {
    ...mapGetters(["listEditAdmin"]),
    dataEditAdmin: {
      get() {
        return this.listEditAdmin
      },
    },
    //getBirthday() {
    //  console.log("Comput ::", this.dataEditAdmin.birthday)
    //  return moment(new Date(this.dataEditAdmin.birthday)).format("DD-MM-YYYY")
    //},
  },
  watch: {
    date(value, oldvalue) {
      //console.log(value, oldvalue)
      if (value !== oldvalue && value) {
        const timedata = format(new Date(this.date), "yyyy-MM-dd")
        this.dataEditAdmin.birthday = timedata
        //console.log("watch date :", this.dataEditAdmin)
      }
    },
  },
  mounted() {
    //console.log("Edit Admin", this.modalEditAdmin)
  },
  methods: {
    closeEditAdmin() {
      this.$emit("closeEditAdmin")
    },
    saveEditAdmin() {
      if (this.$refs.form.validate()) {
        console.log("***", this.dataEditAdmin)
        this.putAdmin()
      }
    },
    putAdmin() {
      //console.log(data)
      var payload = {
        fname: this.dataEditAdmin.fname,
        lname: this.dataEditAdmin.lname,
        age: parseInt(this.dataEditAdmin.age),
        email: this.dataEditAdmin.email,
        contact: this.dataEditAdmin.contact,
        birthday: this.dataEditAdmin.birthday,
        address: this.dataEditAdmin.address,
        //role: this.role,
      }
      if (this.role === "admin") {
        //console.log("---- แก้ไขได้ ----")
        payload["role"] = this.role
      }
      //console.log("PAY ::", payload)
      this.axios
        .put(
          `${process.env.VUE_APP_API_TEST}/users/${this.dataEditAdmin.id}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        )
        .then((res) => {
          console.log("RES ->", res)
          this.$emit("closeEditAdmin")
          this.$emit("getAdmins")
          this.$refs.form.reset()
        })
    },
  },
}
</script>
