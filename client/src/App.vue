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
      <v-btn color="#FFF" v-if="Object.keys(user.selectedProgram).length !== 0" @click="resetUser">
        <span class="mr-2">Start Over</span>
      </v-btn>
    </v-toolbar>

    <v-content class="app">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchPrograms');
    this.$store.dispatch('fetchRecipes');
  },
  computed: mapState({
    user: 'user'
  }),
  methods: {
    resetUser() {
      this.$store.dispatch('resetUser');
      this.$router.push('/programs');
    }
  }
};
</script>

<style>
.app {
  background: #eeeded;
}
</style>
