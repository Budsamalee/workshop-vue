<template>
  <v-container class="my-15" id="contect">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <span class="text-center text-h4"> Contect </span>
        <p>
          Lorem ipsum dolor sit amir, yum yellow text ant a umbella. edit email
          qury
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5180922649224!2d100.56502881483047!3d13.7476007903502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef116c92c5b%3A0xe916568426b92304!2sThai%20Summit%20Tower!5e0!3m2!1sen!2sth!4v1663924992447!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col lg="6">
        <form>
          <v-text-field
            v-model="name"
            label="ชื่อ"
            placeholder="กรุณากรอกชื่อ"
            outlined
            clearable
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            placeholder="กรุณากรอก email"
            outlined
            clearable
            required
          ></v-text-field>
          <v-textarea
            outlined
            v-model="massage"
            name="input-7-4"
            label="Message"
            placeholder="กรุณากรอกข้อความ"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          <v-btn color="success" class="mr-4"> Send </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      massage: "",
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
