<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="headline teal white--text">
          From product
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
              <v-text-field
                v-model="formData.mfd"
                label="วันผลิต"
                placeholder="กรุณากรอกวันผลิด"
                outlined
                dense
                >วันผลิต</v-text-field
              >
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
          <v-btn class="mt-3" color="success" block @click="save()">
            Save
          </v-btn>
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
        mfd: "",
        description: "",
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
      }
      //เรียก fn ที่เรียกหน้า js
      //  this.SET_DATA_USER(payload)
      this.$store.dispatch("SET_DATA_PRODUCT", payload)
    },
  },
}
</script>
