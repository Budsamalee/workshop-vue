<template>
  <div class="mt-5">
    <Navbar></Navbar>
    <v-container>
      <textarea v-model="text" placeholder="Enter your message"></textarea>
      <button @click="generatePDF">Download PDF</button>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      text: "Hello, this is a sample PDF content! Hello, this is a sample PDF content! Hello, this is a sample PDF content! Hello, this is a sample PDF content!",
    };
  },
  mounted() {},
  methods: {
    generatePDF() {
      console.log("come");
      const doc = new jsPDF();
      doc.text(this.text, 10, 10);
      doc.save("message.pdf");
    },
  },
};
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
