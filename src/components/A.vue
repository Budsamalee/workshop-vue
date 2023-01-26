<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <p class="text-center">Component A</p>
        </v-flex>
      </v-layout>
      <v-card>
        <v-card-title class="font-weight-bold teal white--text">
          รายละเอียดสินค้า
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex lg="4" xs="6" class="mt-2">
              <p class="b float-left">ชื่อสินค้า : {{ getList.product }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">ชื่อเจ้าของ : {{ getList.owner }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">วันผลิต : {{ getList.date }}</p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex lg="4" xs="6">
              <p class="b float-left">รายละเอียด : {{ getList.description }}</p>
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
    ...mapGetters(["getProduct", "currentCounter", "dataList"]),
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
    getList: {
      get() {
        console.log("dataList ->", this.dataList)
        return this.dataList
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
