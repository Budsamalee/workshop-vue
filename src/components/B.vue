<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <p class="text-left">Component B</p>
        </v-flex>
      </v-layout>
      <v-card>
        <v-card-title class="font-weight-bold teal white--text">
          จำนวนสินค้า
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex lg="4" xs="6">
              จำนวน: {{ getCounter }}
              <br />
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs10 md5 lg7>
              <v-btn class="mt-3" color="primary" @click="numberCounter()">
                <v-icon>mdi-plus-circle</v-icon> เพิ่มจำนวน
              </v-btn>
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
    return {}
  },
  computed: {
    ...mapGetters(["currentCounter"]),
    getCounter: {
      get() {
        console.log("Current ->", this.currentCounter)
        return this.currentCounter
      },
    },
  },
  methods: {
    numberCounter() {
      this.$store.dispatch("SET_COUNTER_PRODUCT")
    },
  },
}
</script>
