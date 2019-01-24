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
    },
    UPDATE_USER_MEAL_PLAN(state, mealPlan) {
      state.user.mealPlan = mealPlan;
    }
  },
  actions: {
    fetchPrograms({ commit }) {
      fetch('/api/programs').then(async programs => {
        commit('FETCH_PROGRAMS', await programs.json());
      });
    },
    fetchRecipes({ commit }) {
      fetch('/api/recipes').then(async recipes => {
        commit('FETCH_RECIPES', await recipes.json());
      });
    },
    fetchUser({ commit }) {
      fetch('/api/user').then(async user => {
        commit('FETCH_USER', await user.json());
      });
    },
    updateUserProgram({ commit }, program) {
      fetch('/api/user/program', {
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
      fetch('/api/user/about', {
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
      fetch('/api/user/meals', {
        method: 'PUT',
        body: JSON.stringify(mealPlan),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async updatedUser => {
        commit('UPDATE_USER', await updatedUser.json());
      });
    }
  }
});
