<template>
  <v-app>
    <v-toolbar color="primary" app>
      <router-link to="/">
        <v-toolbar-title class="headline text-uppercase white--text">
          <span>Fixate</span>
          <span class="font-weight-light">Calculator</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn>
        <span class="mr-2">Containers Key</span>
      </v-btn>
      <v-btn v-if="this.$store.state.user.selectedProgram" @click="reset">
        <span class="mr-2">Start Over</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchPrograms');
    this.$store.dispatch('fetchRecipes');
  },
  methods: {
    reset() {
      this.$store.dispatch('reset');
      this.$router.push('/programs');
    }
  }
};
</script>
