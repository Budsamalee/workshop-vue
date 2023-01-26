<template>
  <v-container class="my-15" id="project">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <h1 class="intro-text text-center mb-2">Project</h1>
        <p>
          บทความนี้เป็นเพียงบทความแนะนำเครื่องมือเท่านั้น เลยจะไม่สอนติดตั้งนะ!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12">
        <div class="text-center">
          <v-layout>
            <v-flex lg12>
              <v-chip
                class="mx-5"
                @click="activeProtfolio = 'webapp'"
                :color="activeProtfolio === 'webapp' ? 'success' : ''"
              >
                Web-app
              </v-chip>
              <v-chip
                @click="activeProtfolio = 'mobileapp'"
                :color="activeProtfolio === 'mobileapp' ? 'warning' : ''"
              >
                Mobile-app
              </v-chip>
            </v-flex>
          </v-layout>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <slot v-if="activeProtfolio === 'webapp'">
        <v-col lg="4" md="4" v-for="web in webApps" :key="web.title">
          <v-card data-aos="fade-up">
            <v-img
              :src="web.imag"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
            <v-card-title class="font-weight-bold">
              {{ web.title }}
            </v-card-title>
            <v-card-text class="text-left">
              {{ web.discription }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-layout>
                <v-flex lg3 class="text-left">
                  <v-btn color="teal" rounded class="white--text">
                    <span> Views Detail </span>
                  </v-btn>
                </v-flex>
                <v-spacer />
                <v-flex lg9 class="text-right">
                  <v-rating
                    color="amber"
                    dense
                    half-increments
                    size="15"
                    class="mx-0 ma-2"
                    v-model="web.rating"
                    background-color="orange lighten-3"
                    small
                  >
                  </v-rating>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeProtfolio === 'mobileapp'">
        <v-col lg="4" md="4" v-for="mobile in mobileApps" :key="mobile.title">
          <v-card data-aos="fade-up">
            <v-img
              :src="mobile.imag"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
            <v-card-title class="font-weight-bold">
              {{ mobile.title }}
            </v-card-title>
            <v-card-text class="text-left">
              {{ mobile.discription }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-layout>
                <v-flex lg3 class="text-left">
                  <v-btn color="teal" rounded class="white--text">
                    <span> Views Detail </span>
                  </v-btn>
                </v-flex>
                <v-spacer />
                <v-flex lg9 class="text-right">
                  <v-rating
                    color="amber"
                    dense
                    half-increments
                    size="15"
                    class="mx-0 ma-2"
                    v-model="mobile.rating"
                    background-color="orange lighten-3"
                    small
                  >
                  </v-rating>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-col>
      </slot>
    </v-row>
    <!--</v-row>-->
  </v-container>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      activeProtfolio: "webapp",
      webApps: [
        {
          title: "Onechat",
          imag: "data:image/jpeg;base64,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",
          discription: "edkfkemimci dkwfn kdfowiekmkcoe",
          rating: 4.5,
        },
        {
          title: "Onebinar",
          imag: "data:image/png;base64,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",
          discription: "dkfmoewk ;alsmdooweppppp",
          rating: 1.5,
        },
        {
          title: "Oneprotal",
          imag: "data:image/png;base64,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",
          discription: "lekowekke dswflk",
          rating: 3,
        },
      ],
      mobileApps: [
        {
          title: "mobile app 1",
          imag: "https://www.kindpng.com/picc/m/9-93993_transparent-mobile-apps-png-mobile-app-development-png.png",
          discription: "edkfkemimci dkwfn kdfowiekmkcoe kdsfiewi",
          rating: 3,
        },
        {
          title: "mobile app 2",
          imag: "https://www.skylark.com.sg/blog/wp-content/uploads/2021/07/Cost-of-Mobile-App-Development-in-Singapore.jpg",
          discription: "dkfmoewk ;alsmdooweppppp",
          rating: 1,
        },
        {
          title: "mobile app 3",
          imag: "https://www.mobileapplications.online/wp-content/uploads/2021/08/Mobile-applications-Mobile-app.jpg",
          discription: "lekowekke dswflk",
          rating: 5,
        },
      ],
    }
  },
}
</script>

<style scope>
@import url("https://fonts.googleapis.com/css?family=Prompt:300,600&display=swap&subset=latin-ext,thai");

h1.intro-text {
  font-size: 30px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  color: #444;
}
p.discription {
  font-size: 15px;
  font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444444ba;
}
</style>
