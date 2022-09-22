<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <h1 class="intro-text text-left mb-2">Welcome to Vue</h1>
        <p class="text-left discription">
          Vue อ่านว่า “วิว” เหมือนกับคำว่า view เลย โดยเป็น “progressive
          framework” สำหรับสร้าง user interface ซึ่ง progressive ก็คือการที่
          Vue.js นั้นใช้เป็นเหมือนส่วนเพิ่มความสามารถที่เอาไปใช้งานกับ HTML
          ซึ่งชื่อ Vue นั้นก็มีที่มาจากการที่ library
          นี้จะโฟกัสที่การจัดการในส่วนของ view เท่านั้น เพื่อให้สามารถนำ Vue
          ไปใช้งานร่วมกับ Library อื่นๆได้สะดวก และยังเหมาะกับการทำ Single-Page
          Applications (SPA) หรือเว็บที่ไม่ต้องเปลี่ยนหน้าบ่อยๆนั่นเอง
        </p>
        <br />
        <div class="text-left">
          <v-btn color="success" class="white--text ma-2" rounded>
            Get started
          </v-btn>
          <v-btn color="indigo" class="white--text" rounded>
            <v-icon>mdi-play-circle</v-icon>Watch Video
          </v-btn>
        </div>
      </v-col>
      <v-col lg="6" class="px-5">
        <div class="mr-4 mt-3 center">
          <img
            width="100%"
            src="../assets/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks.gif"
            alt=""
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
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
