<template>
  <v-container grid-list-md fill-height fluid text-xs-center class="v-container">
    <v-layout row wrap class="meal-prep">
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
            <draggable
              :move="onMove"
              :options="dragOptions"
              :value="breakfastRecipes"
              @start="isDragging=true"
              @end="isDragging=false"
            >
              <v-card v-for="r in breakfastRecipes" :key="r._id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r._id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>

            <!-- SOUP & SALAD RECIPES -->
            <h6 class="title mt-5 mb-2">Soups & Salads</h6>
            <draggable
              :move="onMove"
              :options="dragOptions"
              :value="soupSaladRecipes"
              @start="isDragging=true"
              @end="isDragging=false"
            >
              <v-card v-for="r in soupSaladRecipes" :key="r._id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r._id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>

            <!-- ENTREE RECIPES -->
            <h6 class="title mt-5 mb-2">Entrees</h6>
            <draggable
              :move="onMove"
              :options="dragOptions"
              :value="entreeRecipes"
              @start="isDragging=true"
              @end="isDragging=false"
            >
              <v-card v-for="r in entreeRecipes" :key="r._id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r._id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>

            <!-- SNACK RECIPES -->
            <h6 class="title mt-5 mb-2">Sides & Snacks</h6>
            <draggable
              :move="onMove"
              :options="dragOptions"
              :value="snackRecipes"
              @start="isDragging=true"
              @end="isDragging=false"
            >
              <v-card v-for="r in snackRecipes" :key="r._id" class="recipe my-1 pa-2">
                <router-link :to="`/recipes/${r._id}`">{{r.name}}</router-link>
              </v-card>
            </draggable>
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
                  <v-flex class="my-meal-plan pa-2">
                    <draggable
                      :move="onMove"
                      v-model="mealPlan"
                      :options="dragOptions"
                      @start="isDragging=true"
                      @end="isDragging=false"
                      class="grey--text"
                    >
                      {{mealPlan.length === 0 ? 'Drag Recipes Here' : null}}
                      <v-card v-for="recipe in mealPlan" :key="recipe._id" class="meal my-1 pa-2">
                        <router-link :to="`/recipes/${recipe._id}`">{{recipe.name}}</router-link>
                        <span class="remove-meal" @click="removeRecipe(recipe._id)">X</span>
                      </v-card>
                    </draggable>
                    <v-btn
                      round
                      v-if="mealPlan.length > 0"
                      small
                      color="red"
                      class="white--text"
                      @click="resetMealPlan"
                    >Reset</v-btn>
                  </v-flex>

                  <!-- REMAINING CONTAINERS -->
                  <v-flex>
                    <h6 class="title my-2">Remaining Containers:</h6>
                    <v-flex xs8 offset-xs2>
                      <v-card class="container my-1 pa-1 white--text" color="green">
                        Veggies -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.green)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.green}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1 white--text" color="purple">
                        Fruits -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.purple)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.purple}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1" color="yellow">
                        Carbs -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.yellow)), 0)}} /
                        <strong
                          class="black--text"
                        >{{user.nutritionPlan.containers.yellow}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1 white--text" color="red">
                        Proteins -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.red)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.red}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1 white--text" color="blue">
                        Healthy Fats -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.blue)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.blue}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1 white--text" color="orange">
                        Seeds & Dressings -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.orange)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.orange}}</strong>
                      </v-card>
                      <v-card class="container my-1 pa-1 white--text" color="grey">
                        Oils & Nut Butters -- {{mealPlan.reduce((acc, recipe) => acc = this.$math.eval(acc + this.$math.fraction(recipe.containers.tsp)), 0)}} /
                        <strong
                          class="white--text"
                        >{{user.nutritionPlan.containers.tsp}}</strong>
                      </v-card>

                      <!-- EXPORT SHOPPING LIST -->
                      <form class="mt-5" @submit.prevent="emailShoppingList(prepDays)">
                        <input
                          type="number"
                          class="input-field"
                          name="days"
                          default="5"
                          v-model.number="prepDays"
                          min="1"
                          max="30"
                          placeholder="# Prep Days*"
                          required
                        >
                        <v-btn
                          color="primary"
                          type="submit"
                          @click.prevent="emailShoppingList(prepDays)"
                        >Shopping List</v-btn>
                      </form>
                    </v-flex>
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
      prepDays: null,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    onMove({ relatedContext }) {
      const relatedElement = relatedContext.element;
      return !relatedElement;
    },
    resetMealPlan() {
      this.mealPlan = [];
    },
    removeRecipe(recipeID) {
      this.mealPlan = this.mealPlan.filter(recipe => recipe._id !== recipeID);
    },
    emailShoppingList(numDays) {
      const form = document.getElementsByTagName('form')[0];
      if (form.checkValidity()) {
        this.$router.push(`/list?days=${numDays}`);
      } else {
        alert('You must enter # prep days, ranging from 1-30');
      }
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'mealPlan',
        ghostClass: 'ghost'
      };
    },
    mealPlan: {
      get() {
        return this.$store.state.user.mealPlan;
      },
      set(value) {
        this.$store.dispatch('updateMealPlan', value);
      }
    },
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
  padding: 80px 0 10px 0;
}

.recipe-list {
  overflow: auto;
}

.meal-plan {
  border-left: 3px solid #1976d2;
  overflow: auto;
}

.meal,
.recipe,
.my-meal-plan {
  border: 1px solid #1976d2;
  border-radius: 5px;
  background: #fff;
}

.recipe,
.meal {
  cursor: move;
}

.container {
  border-radius: 5px;
}

a {
  text-decoration: none;
  display: inline;
}

.remove-meal {
  position: absolute;
  left: 93%;
  color: red;
  cursor: pointer;
  font-weight: bold;
}

input.input-field {
  width: 70%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 1px 1px 4px #ebebeb;
  -moz-box-shadow: 1px 1px 4px #ebebeb;
  -webkit-box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 7px;
  outline: none;
}
.input-field:focus {
  border: 1px solid #1976d2;
}
</style>
