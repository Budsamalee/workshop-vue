<template>
  <div>
    <div @click="$router.push('/listEmployee')" class="wait">
      <v-icon color="#ffba00" left class="mr-2">mdi-account</v-icon>
      OneBinar
    </div>
    <v-spacer></v-spacer>
    <!-- flex ทำให้ต่อกัน -->
    <v-layout row wrap fill-height align-center justify-center>
      <v-flex offset-y bottom open-on-hover transition="slide-y-transition">
        <v-row justify="center" class="mr-3" v-if="isBtnWhite">
          <v-menu bottom>
            <template v-slot:activator="{ on }">
              <div v-for="menu in menus" :key="menu.title">
                <v-btn
                  v-on="on"
                  text
                  class="white--text"
                  @click="windowRoute(menu.title)"
                >
                  {{ menu.title }}
                </v-btn>
              </div>
            </template>
          </v-menu>
          <v-btn text class="white--text">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn color="#ffba00" class="white--text"> GET STARTED </v-btn>
        </v-row>
        <v-row justify="center" class="mr-3" v-if="isBtnBlack">
          <v-menu bottom>
            <template v-slot:activator="{ on }">
              <div v-for="menu in menus" :key="menu.title" :to="menu.route">
                <v-btn
                  v-on="on"
                  text
                  class="black--text"
                  @click="windowRoute(menu.title)"
                >
                  {{ menu.title }}
                </v-btn>
              </div>
            </template>
          </v-menu>
          <v-btn text class="black--text">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn outlined color="#ffba00"> GET STARTED </v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>
