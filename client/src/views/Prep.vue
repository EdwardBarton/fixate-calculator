<template>
  <v-container grid-list-md fill-height fluid text-xs-center>
    <v-layout row wrap>
      <v-flex d-flex xs12 md8>
        <v-layout justify-center>
          <div>
            <h4 class="display-1 mt-2">
              Your {{user.selectedProgram.name}} Nutrition Plan is:
              <strong>Plan {{user.nutritionPlan.id}}</strong>
            </h4>
            <h4 class="display-1 mt-3">Step 3: Meal Prep</h4>
            <p>Recipes</p>
          </div>
        </v-layout>
      </v-flex>
      <v-flex class="meal-plan" d-flex xs12 md4>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-layout justify-center>
              <v-flex xs10 offset-xs1>
                <h4 class="display-1 my-2">Meal Plan</h4>
                <v-layout column>
                  <v-flex>
                    <v-card class="meal my-1 pa-2">Breakfast</v-card>
                    <v-card class="meal my-1 pa-2">Snack A</v-card>
                    <v-card class="meal my-1 pa-2">Lunch</v-card>
                    <v-card class="meal my-1 pa-2">Snack B</v-card>
                    <v-card class="meal my-1 pa-2">Dinner</v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12>
            <v-layout align-end justify-center>
              <v-flex xs6 offset-xs1>
                <h5 class="my-2">Remaining:</h5>
                <v-layout column>
                  <v-flex>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="green"
                    >Veggies - 0/{{user.nutritionPlan.containers.green}}</v-card>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="purple"
                    >Fruits - 0/{{user.nutritionPlan.containers.purple}}</v-card>
                    <v-card
                      class="container my-1 pa-1"
                      color="yellow"
                    >Carbs - 0/{{user.nutritionPlan.containers.yellow}}</v-card>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="red"
                    >Proteins - 0/{{user.nutritionPlan.containers.red}}</v-card>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="blue"
                    >Healthy Fats - 0/{{user.nutritionPlan.containers.blue}}</v-card>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="orange"
                    >Seeds & Dressings - 0/{{user.nutritionPlan.containers.orange}}</v-card>
                    <v-card
                      class="container my-1 pa-1 white--text"
                      color="grey"
                    >Oils & Nut Butters - 0/{{user.nutritionPlan.containers.tsp}}</v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    user: 'user',
    recipes: 'recipes'
  })
};
</script>

<style scoped>
strong {
  color: #1976d2;
}

.meal-plan {
  border-left: 3px solid #1976d2;
}

.meal {
  border: 1px solid #1976d2;
}
</style>
