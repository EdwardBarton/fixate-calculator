<template>
  <v-container grid-list-md fill-height text-xs-center class="v-container">
    <v-layout column>
      <v-flex xs12>
        <v-layout row align-center justify-center fill-height>
          <div>
            <h4 class="display-1">Plan and Prep in Just Three Steps!</h4>
            <v-btn round color="primary" @click="() => this.$router.push('/programs')">Get Started</v-btn>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}
</style>
