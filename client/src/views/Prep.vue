<template>
  <v-container grid-list-md fill-height fluid text-xs-center class="v-container">
    <v-layout row v-if="!user.nutritionPlan">Loading...</v-layout>
    <v-layout row wrap v-else class="meal-prep">
      <v-flex d-flex xs12 md8 class="recipe-list">
        <v-layout justify-center>
          <div class="meal-prep-header">
            <h4 class="display-1 my-3">
              Your {{user.selectedProgram.name}} Nutrition Plan is:
              <strong>Plan {{user.nutritionPlan.id}}</strong>
            </h4>
            <h4 class="display-1 my-3">Step 3: Meal Prep</h4>

            <!-- **************** RECIPES SECTION **************** -->
            <!-- BREAKFAST RECIPES -->
            <h6 class="title mt-5 mb-2">Breakfast</h6>
            <RecipeList :recipe-list="breakfastRecipes"/>

            <!-- SOUP & SALAD RECIPES -->
            <h6 class="title mt-5 mb-2">Soups & Salads</h6>
            <RecipeList :recipe-list="soupSaladRecipes"/>

            <!-- ENTREE RECIPES -->
            <h6 class="title mt-5 mb-2">Entrees</h6>
            <RecipeList :recipe-list="entreeRecipes"/>

            <!-- SNACK RECIPES -->
            <h6 class="title mt-5 mb-2">Sides & Snacks</h6>
            <RecipeList :recipe-list="snackRecipes"/>
          </div>
        </v-layout>
      </v-flex>

      <!-- **************** MEAL PLANNING SECTION **************** -->
      <v-flex class="meal-plan" xs12 md4>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-layout justify-center>
              <v-flex xs10 offset-xs1>
                <h4 class="display-1 my-2">My Meal Plan</h4>
                <v-layout column>
                  <!-- MY MEAL PLAN -->
                  <MyMealPlan/>
                  <!-- REMAINING CONTAINERS -->
                  <RemainingContainers/>
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
import RecipeList from '@/components/RecipeList.vue';
import MyMealPlan from '@/components/MyMealPlan.vue';
import RemainingContainers from '@/components/RemainingContainers.vue';

export default {
  components: {
    RecipeList,
    MyMealPlan,
    RemainingContainers
  },
  computed: {
    ...mapState({
      user: 'user',
      breakfastRecipes: state =>
        state.recipes.filter(r => r.type === 'breakfast'),
      snackRecipes: state =>
        state.recipes.filter(r => r.type === 'side & snack'),
      soupSaladRecipes: state =>
        state.recipes.filter(r => r.type === 'soup & salad'),
      entreeRecipes: state => state.recipes.filter(r => r.type === 'entree')
    })
  }
};
</script>

<style scoped>
strong {
  color: #1976d2;
}

.v-container {
  max-height: 100vh;
}

.meal-prep {
  padding: 70px 0 10px 0;
}

.recipe-list {
  overflow: auto;
}

.meal-plan {
  border-left: 3px solid #1976d2;
  overflow: auto;
}
</style>
