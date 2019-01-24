import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      selectedProgram: {}
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
    FETCH_USER(state, user) {
      state.user = user;
    },
    UPDATE_USER(state, updatedUser) {
      state.user = updatedUser;
    },
    RESET_USER(state) {
      state.user.selectedProgram = {};
      state.user.gender = '';
      state.user.weight = 0;
      state.user.nutritionPlan = {};
      state.user.mealPlan = [];
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
    fetchUser({ commit }) {
      fetch('http://localhost:8001/api/user').then(async user => {
        commit('FETCH_USER', await user.json());
      });
    },
    updateUserProgram({ commit }, program) {
      fetch('http://localhost:8001/api/user/program', {
        method: 'PUT',
        body: JSON.stringify(program),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async updatedUser => {
        commit('UPDATE_USER', await updatedUser.json());
      });
    },
    resetUser({ commit }) {
      commit('RESET_USER');
    },
    calculateAndUpdateUserNutritionPlan({ commit }, userInfo) {
      fetch('http://localhost:8001/api/user/about', {
        method: 'PUT',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async updatedUser => {
        commit('UPDATE_USER', await updatedUser.json());
      });
    },
    updateUserMealPlan({ commit }, mealPlan) {
      fetch('http://localhost:8001/api/user/meals', {
        method: 'PUT',
        body: JSON.stringify(mealPlan),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async updatedUser => {
        commit('UPDATE_USER', await updatedUser.json());
      });

      // commit('UPDATE_USER_MEAL_PLAN', mealPlan);
    }
  }
});
