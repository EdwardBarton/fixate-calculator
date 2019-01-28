<template>
  <v-container class="v-container">
    <v-layout row mb-5 class="shopping-list">
      <v-btn fixed round color="primary" @click="() => this.$router.go(-1)">Back</v-btn>
      <v-flex d-flex xs12 md6 offset-md3>
        <v-layout column>
          <h1>Shopping List</h1>
          <ul v-if="Number(days) === 1">
            <li
              v-for="i in ingredients"
              :key="i._id"
            >{{i.quantity ? i.quantity : ''}} {{i.unit ? i.unit : ''}} {{i.item}}</li>
          </ul>
          <ul v-else>
            <li
              v-for="i in ingredients"
              :key="i._id"
            >{{i.quantity ? $math.eval(Number(days) * $math.fraction(i.quantity)) : ''}} {{i.unit ? i.unit : ''}} {{i.item}}</li>
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
  computed: {
    ...mapState({
      ingredients: state =>
        state.user.mealPlan
          ? state.user.mealPlan.reduce(
              (acc, recipe) => acc.concat(recipe.ingredients),
              []
            )
          : null
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
