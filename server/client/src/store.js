import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      selectedProgram: {},
      gender: '',
      weight: 0,
      nutritionPlan: {},
      mealPlan: []
    },
    programs: [],
    recipes: []
  },
  mutations: {
    FETCH_PROGRAMS(state, programs) {
      state.programs = programs;
    },
    FETCH_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SELECT_PROGRAM(state, program) {
      state.user.selectedProgram = program;
    },
    RESET_USER(state) {
      state.user.selectedProgram = {};
      state.user.gender = '';
      state.user.weight = 0;
      state.user.nutritionPlan = {};
      state.user.mealPlan = [];
    },
    CALCULATE_USER_NUTRITION_PLAN(state, user) {
      // Set user's gender and weight
      state.user.gender = user.gender;
      state.user.weight = user.weight;

      // Determine user's nutrition plan
      // 80 Day Obsession plans based off calorie targets, not user's weight
      if (state.user.selectedProgram.id === 3) {
        const calorieTarget = state.user.weight * 11 + 50;

        // Target calories outside calorie range for all plans
        const planA = state.user.selectedProgram.nutritionPlans.filter(
          plan => plan.id === 'A'
        )[0];
        const planF = state.user.selectedProgram.nutritionPlans.filter(
          plan => plan.id === 'F'
        )[0];

        // Target calories below Plan A min
        if (calorieTarget < planA.minCalories) {
          state.user.nutritionPlan = planA;
        }
        // Target calories above Plan F max
        else if (calorieTarget > planF.maxCalories) {
          state.user.nutritionPlan = planF;
        } else {
          state.user.nutritionPlan = state.user.selectedProgram.nutritionPlans.filter(
            plan =>
              plan.minCalories <= calorieTarget &&
              plan.maxCalories >= calorieTarget
          )[0];
        }
      }
      // LIIFT 4 and Transform:20 plans based off user's weight
      else {
        state.user.nutritionPlan = state.user.selectedProgram.nutritionPlans.filter(
          plan =>
            plan.weight[user.gender].min <= state.user.weight &&
            plan.weight[user.gender].max >= state.user.weight
        )[0];
      }
    },
    UPDATE_USER_MEAL_PLAN(state, mealPlan) {
      state.user.mealPlan = mealPlan;
    }
  },
  actions: {
    fetchPrograms({ commit }) {
      fetch('http://localhost:8001/api/programs').then(async programs => {
        commit('FETCH_PROGRAMS', await programs.json());
      });
    },
    fetchRecipes({ commit }) {
      fetch('http://localhost:8001/api/recipes').then(async recipes => {
        commit('FETCH_RECIPES', await recipes.json());
      });
    },
    selectProgram({ commit }, program) {
      commit('SELECT_PROGRAM', program);
    },
    resetUser({ commit }) {
      commit('RESET_USER');
    },
    calculateNutritionPlan({ commit }, user) {
      commit('CALCULATE_USER_NUTRITION_PLAN', user);
    },
    updateMealPlan({ commit }, mealPlan) {
      commit('UPDATE_USER_MEAL_PLAN', mealPlan);
    }
  }
});
