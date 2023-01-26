<template>
  <v-footer padless dark app inset class="footer">
    <v-card class="flex" flat title color="white--text" :elevation="10">
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
.footer {
  background-color: rgb(24, 20, 20);
}
</style>
<script>
export default {}
</script>
