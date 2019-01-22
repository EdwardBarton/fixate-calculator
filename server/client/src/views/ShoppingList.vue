<template>
  <v-container class="v-container">
    <v-layout row mb-5 class="shopping-list">
      <v-btn fixed round color="primary" @click="() => this.$router.go(-1)">Back</v-btn>
      <v-flex d-flex xs12 md6 offset-md3>
        <v-layout column>
          <h1>Shopping List</h1>
          <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">{{days}}x - {{ingredient}}</li>
          </ul>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['days'],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ingredients: state =>
        state.user.mealPlan.reduce(
          (acc, recipe) => acc.concat(recipe.ingredients),
          []
        )
    })
  }
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}

.shopping-list {
  padding: 70px 0 10px 0;
}
</style>
