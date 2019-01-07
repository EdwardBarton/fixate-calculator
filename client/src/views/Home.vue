<template>
  <v-container grid-list-md fill-height>
    <v-layout column>
      <v-flex xs12>
        <v-layout row align-center justify-center fill-height>
          <h4 class="display-1">Plan and Prep in Just Three Steps!</h4>
          <v-btn round color="primary" @click="getStarted">Get Started</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    getStarted() {
      this.$router.push('/programs');
    }
  }
};
</script>

<style scoped>
</style>
