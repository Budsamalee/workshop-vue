<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="headline teal white--text">
          Number Counter
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
            <v-flex xs10 md9 lg7>
              <v-btn class="mt-3" block color="primary" @click="numberCounter()"
                >counter</v-btn
              >
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
