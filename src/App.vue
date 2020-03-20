<template>
  <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">COVID-19 Tracker</span>
        <v-icon>mdi-eight-track</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-bottom-navigation
      :value="activeBtn"
      grow
      fixed
      color="teal"
    >
      <v-btn value="" @click="navigate('global')">
        <span>Global</span>
        <v-icon>mdi-globe-model</v-icon>
      </v-btn>

      <v-btn value="" @click="navigate('country')">
        <span>Country</span>
        <v-icon>mdi-flag-checkered</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    activeBtn: 0,
  }),

  methods: {
    navigate(tabs) {
      this.$router.push({ name: tabs });
    },
  },

  watch: {
    '$route.path': function() {
      if (this.$route.path === '/') {
        this.activeBtn = 0
      } else {
        this.activeBtn = 1
      }
    }
  }
};
</script>
