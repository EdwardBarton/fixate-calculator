<template>
  <v-container grid-list-md fill-height fluid text-xs-center>
    <v-layout row wrap class="meal-prep">
      <v-flex d-flex xs12 md8 class="recipe-list">
        <v-layout justify-center>
          <div>
            <h4 class="display-1 mt-2">
              Your {{user.selectedProgram.name}} Nutrition Plan is:
              <strong>Plan {{user.nutritionPlan.id}}</strong>
            </h4>
            <h4 class="display-1 my-3">Step 3: Meal Prep</h4>
            <h6 class="title mt-5 mb-2">Breakfast</h6>
            <draggable v-model="breakfastRecipes" :options="{handle:'.handle'}">
              <v-card v-for="r in breakfastRecipes" :key="r.id" class="handle recipe my-1 pa-2">
                <router-link :to="`/recipes/${r.id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>
            <h6 class="title mt-5 mb-2">Lunch</h6>
            <draggable v-model="lunchRecipes">
              <v-card v-for="r in lunchRecipes" :key="r.id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r.id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>
            <h6 class="title mt-5 mb-2">Dinner</h6>
            <draggable v-model="dinnerRecipes">
              <v-card v-for="r in dinnerRecipes" :key="r.id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r.id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>
            <h6 class="title mt-5 mb-2">Snacks</h6>
            <draggable v-model="snackRecipes">
              <v-card v-for="r in snackRecipes" :key="r.id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r.id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>
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
                    <v-card class="meal mt-1 pa-2">Dinner</v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12>
            <v-layout justify-center>
              <v-flex xs6 offset-xs1>
                <h6 class="title mb-2">Remaining:</h6>
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
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data() {
    return {
      mealPlan: {
        breakfast: {},
        snackA: {},
        lunch: {},
        snackB: {},
        dinner: {}
      }
    };
  },
  computed: mapState({
    user: 'user',
    breakfastRecipes: state =>
      state.recipes.filter(r => r.type === 'breakfast'),
    snackRecipes: state => state.recipes.filter(r => r.type === 'snack'),
    lunchRecipes: state => state.recipes.filter(r => r.type === 'lunch'),
    dinnerRecipes: state => state.recipes.filter(r => r.type === 'dinner')
  })
};
</script>

<style scoped>
strong {
  color: #1976d2;
}
.meal-prep {
  display: flex;
  position: relative;
  min-height: 100vh;
}
.recipe-list {
  overflow: auto;
  min-height: 100vh;
}
.meal-plan {
  border-left: 3px solid #1976d2;
  position: sticky;
  top: 0px;
  height: 90vh;
}

.meal,
.recipe {
  border: 1px solid #1976d2;
}
.recipe {
  cursor: move;
}
</style>
