<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-combobox
          solo
          :loading="loading"
          elevation="5"
          color="info"
          v-model="selectedCountry"
          :items="countries"
          :label="(loading) ? 'Fetching Countries....' : 'Select a Country'"
        ></v-combobox>
      </v-col>

      <template v-if="selectedCountry">
        <v-col cols="12">
          <p class="display-1 font-weight-light" v-if="selectedCountry">
            {{ selectedCountry.text }}
          </p>
        </v-col>

        <v-col cols="12">
          <v-card
            elevation="5"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Total Cases</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.cases).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            class="mx-auto"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Active</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.active).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            class="mx-auto"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Deaths</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.deaths).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Critical</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.critical).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Recovered</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.recovered).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            outlined
            dark
            class="mb-10"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Cases Today</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.todayCases).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="5"
            outlined
            dark
            class="mb-10"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Deaths Today</div>
                <v-list-item-title class="headline mb-1">
                  {{ Number(selectedCountry.todayDeaths).toLocaleString() }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </template>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    created() {
      this.fetchCountries();
    },

    data: () => ({
      loading: false,
      countries: [],
      selectedCountry: null,
    }),

  methods: {
    fetchCountries() {
      this.loading = true;
      this.countries = [];
      this.$axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then((response) => {
          this.loading = false;
          this.countries = response.data.map((country) => ({
            text: country.country,
            value: country.country,
            ...country,
          }))
        })
        .catch((error) => {
          console.warn(error);
        })
    },
  },

  }
</script>
