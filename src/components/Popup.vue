<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn outlined color="teal lighten-3" dark v-on="on">
            Add new project
          </v-btn>
        </template>
        <v-card>
          <br />
          <v-card-title>
            <span class="headline">New Project</span>
          </v-card-title>
          <v-form class="px-3 pb-5" ref="form">
            <v-card-text>
              <v-text-field
                label="Title"
                v-model="title"
                outlined
                prepend-icon="mdi-folder"
                :rules="inputRules"
              ></v-text-field>
              <v-textarea
                label="Infomation"
                v-model="content"
                outlined
                prepend-icon="mdi-pencil"
                :rules="inputRules"
              ></v-textarea>
              <v-col cols="12" lg="6">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Date"
                      hint="MM/DD/YY format"
                      prepend-icon="mdi-calendar"
                      @blure="date = parsedate(dateFormatted)"
                      v-on="on"
                    >
                      <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="mr-2"
                color="blue darken-1"
                outlined
                text
                @click="dialog = false"
                >Close</v-btn
              >
              <v-btn color="green" text outlined @click="submit()">Save</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: (vm) => {
    return {
      dialog: false,
      title: "",
      content: "",
      menu1: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      inputRules: [(v) => v.length >= 3 || "Minimum lenght is 3 charachters"],
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null
      const [yaer, month, day] = date.split("-")
      return `${yaer}/${month}/${day}`
    },
    parseDate(date) {
      if (!date) return null
      const [yaer, month, day] = date.split("-")
      return `${yaer}-${month.padStart(2, 0)}/${day.padStart(2, 0)}`
    },
    submit() {
      console.log("---- submit ----")
    },
  },
}
</script>
