<template>
  <v-container class="v-container">
    <v-layout row mb-5 class="recipe-detail">
      <v-btn round fixed color="primary" @click="() => this.$router.go(-1)">Back</v-btn>
      <v-flex d-flex xs12 md4 offset-md2>
        <v-layout align-center>
          <div>
            <h4 class="display-1">{{recipe.name}}</h4>
            <h3>Serves: {{recipe.servings}}</h3>
            <h3>Prep Time: {{recipe.prepTime}}</h3>
            <h3>Cook Time: {{recipe.cookTime}}</h3>
          </div>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-layout column text-xs-center>
          <h2>Nutritional Info</h2>
          <ul style="list-style-type: none;" class="ma-0 pa-0">
            <li>Calories: {{recipe.nutritionInfo.calories}}</li>
            <li
              v-if="recipe.nutritionInfo.fat.quantity !== 0"
            >Fat: {{recipe.nutritionInfo.fat.quantity}}{{recipe.nutritionInfo.fat.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.cholesterol.quantity !== 0"
            >Cholesterol: {{recipe.nutritionInfo.cholesterol.quantity}}{{recipe.nutritionInfo.cholesterol.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.sodium.quantity !== 0"
            >Sodium: {{recipe.nutritionInfo.sodium.quantity}}{{recipe.nutritionInfo.sodium.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.carbs.quantity !== 0"
            >Carbs: {{recipe.nutritionInfo.carbs.quantity}}{{recipe.nutritionInfo.carbs.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.fiber.quantity !== 0"
            >Fiber: {{recipe.nutritionInfo.fiber.quantity}}{{recipe.nutritionInfo.fiber.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.sugars.quantity !== 0"
            >Sugars: {{recipe.nutritionInfo.sugars.quantity}}{{recipe.nutritionInfo.sugars.unit}}</li>
            <li
              v-if="recipe.nutritionInfo.protein.quantity !== 0"
            >Protein: {{recipe.nutritionInfo.protein.quantity}}{{recipe.nutritionInfo.protein.unit}}</li>
          </ul>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center>
      <v-flex d-flex xs12 md4>
        <v-layout class="mx-2" column text-xs-left>
          <h2 style="text-align: center;">Instructions</h2>
          <ol>
            <li v-for="(instruction, index) in recipe.instructions" :key="index">{{instruction}}</li>
          </ol>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-layout class="mx-2" column text-xs-left>
          <h2 style="text-align: center;">Ingredients</h2>
          <ul>
            <li
              v-for="ingredient in recipe.ingredients"
              :key="ingredient._id"
            >{{ingredient.quantity ? ingredient.quantity : ''}} {{ingredient.unit ? ingredient.unit : ''}} {{ingredient.item}}</li>
          </ul>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-layout justify-center>
          <v-flex xs6 offset-xs1>
            <h2>Containers</h2>
            <v-layout column>
              <v-flex>
                <v-card
                  v-if="recipe.containers.green !== 0"
                  class="container my-1 pa-1 white--text"
                  color="green"
                >Veggies - {{recipe.containers.green}}</v-card>
                <v-card
                  v-if="recipe.containers.purple !== 0"
                  class="container my-1 pa-1 white--text"
                  color="purple"
                >Fruits - {{recipe.containers.purple}}</v-card>
                <v-card
                  v-if="recipe.containers.yellow !== 0"
                  class="container my-1 pa-1"
                  color="yellow"
                >Carbs - {{recipe.containers.yellow}}</v-card>
                <v-card
                  v-if="recipe.containers.red !== 0"
                  class="container my-1 pa-1 white--text"
                  color="red"
                >Proteins - {{recipe.containers.red}}</v-card>
                <v-card
                  v-if="recipe.containers.blue !== 0"
                  class="container my-1 pa-1 white--text"
                  color="blue"
                >Healthy Fats - {{recipe.containers.blue}}</v-card>
                <v-card
                  v-if="recipe.containers.orange !== 0"
                  class="container my-1 pa-1 white--text"
                  color="orange"
                >Seeds & Dressings - {{recipe.containers.orange}}</v-card>
                <v-card
                  v-if="recipe.containers.tsp !== 0"
                  class="container my-1 pa-1 white--text"
                  color="grey"
                >Oils & Nut Butters - {{recipe.containers.tsp}}</v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    recipe() {
      const { recipes } = this.$store.state;
      const { recipeID } = this.$route.params;
      return recipes.filter(r => r._id === recipeID)[0];
    }
  }
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}

.recipe-detail {
  padding-bottom: 10px;
}

.recipe-img {
  border-radius: 50%;
}
</style>
