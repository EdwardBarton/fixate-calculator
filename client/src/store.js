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
    async fetchPrograms({ commit }) {
      const resp = await fetch('/api/programs');
      const programs = await resp.json();
      commit('FETCH_PROGRAMS', programs);
    },
    async fetchRecipes({ commit }) {
      const resp = await fetch('/api/recipes');
      const recipes = await resp.json();
      commit('FETCH_RECIPES', recipes);
    },
    async fetchUser({ commit }) {
      const resp = await fetch('/api/user');
      const user = await resp.json();
      commit('FETCH_USER', user);
    },
    async updateUserProgram({ commit }, program) {
      const resp = await fetch('/api/user/program', {
        method: 'PUT',
        body: JSON.stringify(program),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const updatedUser = await resp.json();
      commit('UPDATE_USER', updatedUser);
    },
    resetUser({ commit }) {
      commit('RESET_USER');
    },
    async calculateAndUpdateUserNutritionPlan({ commit }, userInfo) {
      const resp = await fetch('/api/user/about', {
        method: 'PUT',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const updatedUser = await resp.json();
      commit('UPDATE_USER', updatedUser);
    },
    async updateUserMealPlan({ commit }, mealPlan) {
      const resp = await fetch('/api/user/meals', {
        method: 'PUT',
        body: JSON.stringify(mealPlan),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const updatedUser = await resp.json();
      commit('UPDATE_USER', updatedUser);
    }
  }
});
