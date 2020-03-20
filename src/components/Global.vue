<template>
  <v-container>
    <v-row class="text-center">

      <v-col cols="12">
        <v-card
          elevation="5"
          class="mx-auto"
          outlined
          dark
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Active Cases</div>
              <v-skeleton-loader
                v-if="loading"
                ref="skeleton"
                type="text"
                class="mx-auto"
              >
              </v-skeleton-loader>
              <v-list-item-title class="headline mb-1" v-else>
                {{ Number(reports.cases).toLocaleString() }}
              </v-list-item-title>
              <v-list-item-subtitle>Number of Active Cases of Corona Virus</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
            >
              <v-icon x-large>
                mdi-plus
              </v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card
          dark
          elevation="5"
          class="mx-auto"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Deaths</div>
              <v-skeleton-loader
                v-if="loading"
                ref="skeleton"
                type="text"
                class="mx-auto"
              >
              </v-skeleton-loader>
              <v-list-item-title class="headline mb-1" v-else>
                {{ Number(reports.deaths).toLocaleString() }}
              </v-list-item-title>
              <v-list-item-subtitle>People died from the Corona Virus</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
            >
              <v-icon x-large>
                mdi-emoticon-dead
              </v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card
          dark
          class="mx-auto"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Recovered</div>
              <v-skeleton-loader
                v-if="loading"
                ref="skeleton"
                type="text"
                class="mx-auto"
              >
              </v-skeleton-loader>
              <v-list-item-title class="headline mb-1" v-else>
                {{ Number(reports.recovered).toLocaleString() }}
              </v-list-item-title>
              <v-list-item-subtitle>People recovered from Corona Virus</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
            >
              <v-icon x-large>
                mdi-heart
              </v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    created() {
      this.fetchCovidResults();
    },

    data: () => ({
      loading: false,
      reports: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      }
    }),

  methods: {
    fetchCovidResults() {
      this.loading = true;
      this.$axios.get('https://coronavirus-19-api.herokuapp.com/all')
        .then((response) => {
          this.loading = false;
          this.reports = response.data
        })
        .catch((error) => {
          this.loading = false;
          console.warn(error);
        })
    }
  }
  }
</script>
