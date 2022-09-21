<template>
  <div>
    <Navbar />
    <v-container>
      <v-card class="pt-2">
        <v-layout justify-center row wrap class="mt-3">
          <v-flex xs6 md6>
            <A />
          </v-flex>
        </v-layout>
        <v-layout justify-center row wrap class="mt-3">
          <v-flex xs4 ma-3>
            <B />
          </v-flex>
          <v-flex xs6 ma-3>
            <C />
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../layouts/Navbar.vue"
import Footer from "../layouts/Footer.vue"
import A from "../components/A.vue"
import B from "../components/B.vue"
import C from "../components/C.vue"
export default {
  components: {
    Navbar,
    Footer,
    A,
    B,
    C,
  },
}
</script>
