<template>
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
        <div
          v-for="(val, key, index) in recipe.containers"
          :style="{background: key === 'tsp' ? 'grey' : key, color: key === 'yellow' ? 'black' : 'white'}"
          :key="index"
          class="recipe-container-label mx-1"
          v-show="val !== '0'"
        ></div>
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
</template>

<script>
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      isDragging: false,
      delayedDragging: false
    };
  },
  components: { draggable },
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
        this.$store.dispatch('updateUserMealPlan', value);
      }
    }
  }
};
</script>

<style scoped>
.meal,
.my-meal-plan {
  border: 1px solid #1976d2;
  border-radius: 5px;
  background: #fff;
}

.meal {
  cursor: move;
}

.remove-meal {
  position: absolute;
  left: 93%;
  color: red;
  cursor: pointer;
  font-weight: bold;
}

.recipe-container-label {
  height: 10px;
  width: 10px;
  display: inline-block;
  background: blue;
  border-radius: 50%;
}
</style>
