<template>
  <v-footer padless color="#9E9E9E">
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center mt-3">
          <span class="fontFooter white--text">Web Budsamalee Madjarean</span>
          <p class="text-center white--text">
            © Copyright 2022, Internet Thailand Public Company Limited. | Thai
            CAC | Privacy Notice |
          </p>
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-col>
    <!--<v-card class="flex" flat title color="white--text" :elevation="10">
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>-->
  </v-footer>
</template>

<script>
export default {
  name: "FooterOneBina",
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    }
  },
}
</script>

<style>
.footer {
  background-color: rgb(24, 20, 20);
}
.fontFooter {
  font-size: 25px;
  font-weight: bold;
}
</style>
