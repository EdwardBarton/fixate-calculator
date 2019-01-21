<template>
  <div>
    <v-btn round color="primary" @click="() => this.$router.go(-1)">Back</v-btn>
    <h1>Shopping List</h1>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">{{days}}x - {{ingredient}}</li>
    </ul>
  </div>
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
</style>
