<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="headline teal white--text"> PRODUCT </v-card-title>
        <v-container>
          <v-layout>
            <v-flex lg="4" xs="6" class="mt-2">
              <p class="b float-left">ชื่อสินค้า : {{ product.product }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">ชื่อเจ้าของ : {{ product.owner }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">วันผลิต : {{ product.mfd }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">รายละเอียด : {{ product.description }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">จำนวน : {{ getCounter }}</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    //...mapState({ dataProduct: (store) => store.index.dataProduct }),
    //...mapState({ dataProduct: (store) => store.dataProduct }),
    ...mapGetters(["getProduct", "currentCounter"]),
    product: {
      get() {
        console.log("Product ->", this.getProduct)
        return this.getProduct
      },
    },
    getCounter: {
      get() {
        console.log("Current ->", this.currentCounter)
        return this.currentCounter
      },
    },
  },
  watch: {
    show: function (params) {
      console.log("PARAMS ->", params)
    },
  },
}
</script>
