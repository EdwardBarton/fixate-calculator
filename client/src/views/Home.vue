<template>
  <v-container grid-list-md fill-height text-xs-center class="v-container">
    <v-layout column>
      <v-flex xs12>
        <v-layout row align-center justify-center fill-height>
          <div class="get-started pa-5">
            <h2 class="display-3 mb-3">Plan and Prep in Just Three Steps!</h2>
            <v-btn
              round
              large
              color="primary"
              @click="() => this.$router.push('/programs')"
            >Get Started</v-btn>
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
  min-width: 100vw;
  background: url('../assets/bb.jpg') no-repeat center center fixed;
  background-size: cover;
}

.get-started {
  background: rgba(0, 0, 0, 0.85);
  border-radius: 15px;
  color: #fff;
}
</style>
