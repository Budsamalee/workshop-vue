<template>
  <div>
    <v-dialog v-model="dialogs" persistent max-width="600px">
      <v-card>
        <v-card-title> Create Company</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataCompany.name"
                    required
                    label="* ชื่อ"
                    hint="* กรุณากรอกชื่อ"
                    :rules="[(v) => !!v || '* กรุณากรอก username']"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataCompany.email"
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
              </v-row>
              <v-row justify="center" class="mt-1">
                <v-col lg="12" xs="12">
                  <v-text-field
                    v-model="dataCompany.contact"
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
            </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="white--text" @click="closeCompany()">
            Close
          </v-btn>
          <v-btn color="teal" class="white--text" @click="saveCompany()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mask } from "vue-the-mask"
export default {
  name: "CreateCompany",
  props: ["dialogs", "idUser"],
  directives: {
    mask,
  },
  data() {
    return {
      dataCompany: {
        name: "",
        email: "",
        contact: "",
      },
      valid: true,
      rules: {
        required: (value) => !!value || "กรุณากรอกข้อมูล",
      },
      masknumber: "###-###-####",
    }
  },
  created() {
    this.getToken = localStorage.getItem("userToken")
  },
  mounted() {
    //console.log("DIALOG ->", this.dialogs)
    //console.log("idUser _>", this.idUser)
  },
  methods: {
    saveCompany() {
      if (this.$refs.form.validate()) {
        //console.log("DATA ->", this.dataCompany)
        this.postCompany(this.dataCompany)
      }
    },
    closeCompany() {
      this.$refs.form.reset()
      this.$emit("close")
    },
    postCompany(data) {
      var payload = {
        name: data.name,
        email: data.email,
        contact: data.contact,
      }
      payload["image"] = "6316c4a1b407ef2368bff0fd"
      payload["manager"] = this.idUser
      payload["type"] = ""
      //console.log("PAYLOAD CREATE ->", payload)

      this.axios
        .post(`${process.env.VUE_APP_API_TEST}/company`, payload, {
          headers: {
            Authorization: `Bearer ${this.getToken}`,
          },
        })
        .then((res) => {
          console.log("RESPONE ->", res)
          this.dialogs = true
          this.$emit("close")
          this.$emit("getListCompany")
          this.$refs.form.reset()
        })
    },
  },
}
</script>
