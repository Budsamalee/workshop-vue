<template>
  <v-container id="about">
    <v-row class="mt-3">
      <v-col xs="4" md="6" lg="6" sm="6" class="align-item">
        <div class="mr-4 ma-0" data-aos="fade-up">
          <img
            width="100%"
            src="../assets/Screen_Shot_2565-09-22_at_12.01.42-removebg-preview.png"
            alt=""
          />
        </div>
      </v-col>
      <v-col xs="7" md="6" lg="6" sm="6" class="align-item">
        <h1 class="intro-text text-left mb-2">Aboute Vue</h1>
        <v-divider></v-divider>
        <br />
        <p class="text-left discription">
          ซึ่งข้อดีของ Vue.js คือ จะช่วยให้เราสามารถจัดการกับ element ที่นำมา
          render บนหน้าเว็บของเราได้ง่ายๆ เช่น
        </p>
        <div>
          <v-layout>
            <v-flex>
              <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            </v-flex>
            <v-flex>
              <p class="text-left discription">
                โดยปกติถ้าเราใช้เพียง JavaScript เวลาต้องการจัดการกับ element
                ในหน้าเว็บ เราจะต้องเขียน JS ไปแก้ไข DOM โดยตรงเพื่อจัดการกับ
                element ตาม id หรือ class ก็ว่ากันไป
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            </v-flex>
            <v-flex>
              <p class="text-left discription">
                แล้วถ้าต้องการแก้ไขกับ element อื่นอีก ก็ต้องเขียน JS ไปแก้ไข
                DOM เพิ่มอีก 1 บรรทัด
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            </v-flex>
            <v-flex>
              <p class="text-left discription">
                แต่ถ้าเราใช้ Vue เราสามารถใช้สิ่งที่เรียกว่า “component”
                ซึ่งช่วยให้เราจัดการกับ element ได้โดยไม่ต้องเข้าไปแก้ไข DOM
                โดยตรง
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            </v-flex>
            <v-flex>
              <p class="text-left discription">
                ทำให้เราจัดการกับ Element ได้ง่ายและช่วยให้อ่านโค้ดได้ง่ายขึ้น
                ลดขั้นตอนที่ต้องไป get element มาจาก DOM ทุกครั้งที่จะแก้ไข
                ด้วยการเปลี่ยนค่าใน component แทน
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <p class="text-left discription">
                Vue มี sandbox ให้เราได้ไปลองเล่นได้
                ซึ่งเวลาลองเล่นถ้าเราลองเปลี่ยนโค้ดแล้วลองเซฟดู
                ก็จะเห็นผลที่เปลี่ยนแปลงทันที
              </p>
            </v-flex>
          </v-layout>
        </div>
        <!--<v-list>
          <v-list-item>
            <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            <p class="text-left discription">
              โดยปกติถ้าเราใช้เพียง JavaScript เวลาต้องการจัดการกับ element
              ในหน้าเว็บ เราจะต้องเขียน JS ไปแก้ไข DOM โดยตรงเพื่อจัดการกับ
              element ตาม id หรือ class ก็ว่ากันไป
            </p>
          </v-list-item>
          <v-list-item>
            <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            <p class="text-left discription">
              แล้วถ้าต้องการแก้ไขกับ element อื่นอีก ก็ต้องเขียน JS ไปแก้ไข DOM
              เพิ่มอีก 1 บรรทัด
            </p>
          </v-list-item>
          <v-list-item>
            <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            <p class="text-left discription">
              แต่ถ้าเราใช้ Vue เราสามารถใช้สิ่งที่เรียกว่า “component”
              ซึ่งช่วยให้เราจัดการกับ element ได้โดยไม่ต้องเข้าไปแก้ไข DOM
              โดยตรง
            </p>
          </v-list-item>
          <v-list-item>
            <v-icon color="success" class="mb-15 mr-2">mdi-check-all</v-icon>
            <p class="text-left discription">
              ทำให้เราจัดการกับ Element ได้ง่ายและช่วยให้อ่านโค้ดได้ง่ายขึ้น
              ลดขั้นตอนที่ต้องไป get element มาจาก DOM ทุกครั้งที่จะแก้ไข
              ด้วยการเปลี่ยนค่าใน component แทน
            </p>
          </v-list-item>
          <p class="text-left discription">
            Vue มี sandbox ให้เราได้ไปลองเล่นได้
            ซึ่งเวลาลองเล่นถ้าเราลองเปลี่ยนโค้ดแล้วลองเซฟดู
            ก็จะเห็นผลที่เปลี่ยนแปลงทันที
          </p>
        </v-list>-->
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
.listAbout {
  background-color: #bbdeff;
}
</style>
