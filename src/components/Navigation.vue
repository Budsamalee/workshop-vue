<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="blue-grey darken-4" dark>
      <v-list nav dense class="font">
        <v-list-item-group
          v-model="group"
          active-class="deep-dark--text text--accent-5"
        >
          <v-list-item
            v-for="(data, index) in list"
            :key="index"
            router
            :to="data.route"
          >
            <v-list-item-icon>
              <v-icon>{{ data.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ data.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    group: null,
    list: [
      { text: "แดชบอร์ด", icon: "mdi-widgets", route: "/" },
      { text: "โปรไฟล์", icon: "mdi-account", route: "/profile" },
      { text: "โปรเจค", icon: "mdi-folder", route: "/folder" },
      { text: "การเงิน", icon: "mdi-minus-circle", route: "/money" },
    ],
    //
  }),
}
</script>
<style>
.font {
  color: #fff;
}
</style>
