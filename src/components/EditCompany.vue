<template>
  <div>
    <v-dialog v-model="modalEditCom" persistent max-width="600px">
      <v-card>
        <v-card-title> EDIT COMPANY </v-card-title>
        <v-divider></v-divider>
        <!--<pre>{{ dataEditCompany }}</pre>-->
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center" class="mt-1">
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataEditCompany.name"
                    :rules="[(v) => !!v || '* กรุณากรอก username']"
                    required
                    label="* ชื่อ"
                    hint="* กรุณากรอกชื่อ"
                    persistent-hint
                    outlined
                    clearable
                    dense
                  ></v-text-field>
                </v-col>
                <v-col lg="6" xs="6">
                  <v-text-field
                    v-model="dataEditCompany.email"
                    :rules="[
                      (v) => !!v || 'กรุณากรอก Email',
                      (v) => /.+@.+/.test(v) || 'รูปแบบ E-mail ไม่ถูกต้อง',
                    ]"
                    required
                    label="Email*"
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
                    v-model="dataEditCompany.contact"
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
          <v-btn color="error" class="white--text" @click="closeEdit()">
            Close
          </v-btn>
          <v-btn color="teal" class="white--text" @click="saveEdit()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mask } from "vue-the-mask"
export default {
  name: "EditCompany",
  props: ["modalEditCom"],
  directives: {
    mask,
  },
  data() {
    return {
      masknumber: "###-###-####",
      listData: {},
      valid: true,
    }
  },
  computed: {
    ...mapGetters(["listEditCompany"]),
    dataEditCompany: {
      get() {
        return this.listEditCompany
      },
    },
  },
  mounted() {
    console.log("Edit ->", this.modalEditCom)
  },
  methods: {
    saveEdit() {
      if (this.$refs.form.validate()) {
        this.putCompany(this.dataEditCompany)
      }
    },
    closeEdit() {
      this.$emit("closeEdit")
    },
    putCompany(data) {
      var payload = {
        name: data.name,
        contact: data.contact,
        email: data.email,
        type: "",
      }
      if (data.manager) {
        payload["manager"] = data.manager.id
        payload["image"] = data.manager.image
      }
      console.log("PAYLOAD ->", payload)

      this.axios
        .put(`${process.env.VUE_APP_API_TEST}/company/${data.id}`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          console.log("RES ->", res)
          this.$emit("closeEdit", "getCompany")
          this.$refs.form.reset()
        })
    },
  },
}
</script>
