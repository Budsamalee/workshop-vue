<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <p class="text-right">Component C</p>
        </v-flex>
      </v-layout>
      <v-card>
        <v-card-title class="font-weight-bold teal white--text">
          กรอกรายละเอียดสินค้า
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs="6" ma-2>
              <v-text-field
                v-model="formData.product"
                label="ชื่อสินค้า"
                placeholder="กรุณากรอกชื่อสินค้า"
                outlined
                dense
                >ชื่อสินค้า</v-text-field
              >
            </v-flex>
            <v-flex xs="6" ma-2>
              <v-text-field
                v-model="formData.owner"
                label="ชื่อเจ้าของ"
                placeholder="กรุณากรอกชื่อเจ้าของ"
                outlined
                dense
                >ชื่อเจ้าของ</v-text-field
              >
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs="6" ma-2>
              <!--<v-text-field
                v-model="formData.mfd"
                label="วันผลิต"
                placeholder="กรุณากรอกวันผลิด"
                outlined
                dense
                >วันผลิต</v-text-field
              >-->
              <v-menu
                ref="menu"
                v-model="formData.mfd"
                :close-on-content-click="false"
                :return-value.sync="formData.date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <!--prepend-icon="mdi-calendar"-->
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.date"
                    label="Picker in menu"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="formData.date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(formData.date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs="6" ma-2>
              <v-text-field
                v-model="formData.description"
                label="คำอธิบาย"
                placeholder="กรุณากรอกคำอธิบาย"
                outlined
                dense
                >คำอธิบาย</v-text-field
              >
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <div class="text-right">
            <v-btn class="mt-2 mr-2" color="error" @click="cancelForm()">
              Cancel
            </v-btn>
            <v-btn class="mt-2 mr-2" color="success" @click="save()">
              Save
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
//import { mapActions } from "vuex"
export default {
  data() {
    return {
      formData: {
        product: "",
        owner: "",
        mfd: false,
        description: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
    }
  },
  methods: {
    //...mapActions({ SET_DATA_USER: "index" }),
    save() {
      let payload = {
        product: this.formData.product,
        owner: this.formData.owner,
        mfd: this.formData.mfd,
        description: this.formData.description,
        date: this.formData.date,
      }
      console.log("--->", payload)
      //เรียก fn ที่เรียกหน้า js
      //  this.SET_DATA_USER(payload)
      this.$store.dispatch("SET_DATA_PRODUCT", payload)
    },
    cancelForm() {
      console.log("cancelForm")
      this.formData = {
        product: "",
        owner: "",
        mfd: false,
        description: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      }
      console.log("clear ->", this.formData)
    },
  },
}
</script>
