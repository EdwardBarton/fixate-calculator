import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      selectedProgram: null,
      gender: null,
      weight: 0,
      nutritionPlan: null
    },
    programs: [],
    recipes: {}
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
    }
  }
});
