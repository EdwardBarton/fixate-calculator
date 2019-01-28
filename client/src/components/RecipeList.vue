<template>
  <draggable
    :move="onMove"
    :options="dragOptions"
    :value="recipes"
    @start="isDragging=true"
    @end="isDragging=false"
  >
    <RecipeListItem v-for="r in recipes" :key="r._id" :recipe-item="r"/>
  </draggable>
</template>

<script>
// import { mapState } from 'vuex';
import draggable from 'vuedraggable';
import RecipeListItem from '@/components/RecipeListItem.vue';

export default {
  props: ['recipeList'],
  data() {
    return {
      recipes: this.recipeList,
      isDragging: false,
      delayedDragging: false
    };
  },
  components: { draggable, RecipeListItem },
  methods: {
    onMove({ relatedContext }) {
      const relatedElement = relatedContext.element;
      return !relatedElement;
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
    }
  }
};
</script>

<style scoped>
</style>
