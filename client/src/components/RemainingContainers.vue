<template>
  <v-flex>
    <h6 class="title my-2">Remaining Containers:</h6>
    <v-flex xs8 offset-xs2>
      <v-card class="fixate-container my-1 pa-1 white--text" color="green">
        Veggies -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.green)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.green}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1 white--text" color="purple">
        Fruits -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.purple)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.purple}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1" color="yellow">
        Carbs -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.yellow)), 0)}} /
        <strong
          class="black--text"
        >{{user.nutritionPlan.containers.yellow}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1 white--text" color="red">
        Proteins -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.red)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.red}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1 white--text" color="blue">
        Healthy Fats -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.blue)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.blue}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1 white--text" color="orange">
        Seeds & Dressings -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.orange)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.orange}}</strong>
      </v-card>
      <v-card class="fixate-container my-1 pa-1 white--text" color="grey">
        Oils & Nut Butters -- {{user.mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.tsp)), 0)}} /
        <strong
          class="white--text"
        >{{user.nutritionPlan.containers.tsp}}</strong>
      </v-card>

      <!-- EXPORT SHOPPING LIST -->
      <PrintShoppingList/>
    </v-flex>
  </v-flex>
</template>

<script>
import PrintShoppingList from '@/components/PrintShoppingList.vue';

export default {
  components: { PrintShoppingList },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.fixate-container {
  border-radius: 5px;
}
</style>
