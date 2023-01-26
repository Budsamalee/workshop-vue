<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal darken-1"
          class="mr-2 white--text"
          fab
          small
          v-on="on"
          v-bind="attrs"
          @click="editDetailEmpl()"
        >
          <v-icon small center class="ma-1"> mdi-pencil </v-icon>
          <!--แก้ไข-->
        </v-btn>
        <!--<v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>-->
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">แก้ไขรายชื่อพนักงาน</span>
        </v-card-title>
        <v-card-text>
          <v-row class="mt-2">
            <v-col cols="6">
              <v-text-field
                v-model="employById.fname"
                label="ชื่อจริง"
                placeholder="ชื่อจริง"
                dense
                clearable
                outlined
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="employById.lname"
                label="นามสกุล"
                placeholder="นามสกุล"
                dense
                clearable
                outlined
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="employById.username"
                label="Username"
                placeholder="Username"
                dense
                clearable
                outlined
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="employById.email"
                label="Email"
                placeholder="Email"
                dense
                clearable
                outlined
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="employById.avatar"
                label="Profile"
                placeholder="Profile"
                dense
                clearable
                outlined
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                color="success darken-1"
                class="text-center mr-2"
                justify-center
                @click="editEmployee(employById)"
              >
                แก้ไข
              </v-btn>
              <v-btn
                color="error darken-1"
                class="text-center"
                justify-center
                @click="cancelEmployee()"
              >
                ยกเลิก
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  props: ["data"],
  data: () => ({
    dialog: false,
  }),
  mounted() {
    console.log("DATA DIALOG ->", this.data)
  },
  computed: {
    ...mapGetters(["employById"]),
    getEmployeeById: {
      get() {
        console.log("Product ->", this.employById)
        return this.employById
      },
    },
  },
  methods: {
    editDetailEmpl() {
      console.log("EDIT")
    },
  },
}
</script>
