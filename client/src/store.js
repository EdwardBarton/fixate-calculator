import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      selectedProgram: null,
      gender: null,
      weight: null,
      nutritionPlan: null
    },
    programs: [],
    recipes: {}
  },
  getters: {
    getUser: state => state.user
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
      state.user.selectedProgram = null;
      state.user.gender = null;
      state.user.weight = null;
      state.user.nutritionPlan = null;
    },
    UPDATE_USER(state, { getters, user }) {
      // Set user's gender and weight
      state.user.gender = user.gender;
      state.user.weight = user.weight;

      // Determine user's nutrition plan
      const stateUser = getters.getUser;
      state.user.nutritionPlan = stateUser.selectedProgram.nutritionPlans.filter(
        plan =>
          plan.weight[user.gender].min <= stateUser.weight &&
          plan.weight[user.gender].max >= stateUser.weight
      )[0];
    }
  },
  actions: {
    fetchPrograms({ commit }) {
      fetch('http://localhost:8001/programs').then(async programs => {
        commit('FETCH_PROGRAMS', await programs.json());
      });
    },
    fetchRecipes({ commit }) {
      fetch('http://localhost:8001/recipes').then(async recipes => {
        commit('FETCH_RECIPES', await recipes.json());
      });
    },
    selectProgram({ commit }, program) {
      commit('SELECT_PROGRAM', program);
    },
    resetUser({ commit }) {
      commit('RESET_USER');
    },
    updateUser({ commit, getters }, user) {
      commit('UPDATE_USER', { getters, user });
    }
  }
});
