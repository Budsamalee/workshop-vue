<template>
  <v-app-bar app color="black" flat class="px-12" dark>
    <v-btn text class="white--text mr-2" @click="$router.push('/listEmployee')">
      <v-icon color="yellow" left class="mr-2">mdi-account</v-icon>
      OneBinar
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="yellow--text">หมวดหมู่</v-btn>
    <v-btn text @click="scroll('about')" class="white--text"
      >หัวข้อทั้งหมด</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      home: true,
    }
  },
  methods: {
    scroll(refName) {
      console.log(refName)
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: "smooth" })
    },
  },
}
</script>
