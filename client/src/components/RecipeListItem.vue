<template>
  <v-card class="recipe my-1 pa-2">
    <router-link class="mr-1" :to="`/recipes/${recipe._id}`">{{recipe.name}}</router-link>
    <div
      v-for="(val, key, index) in recipe.containers"
      :style="{background: key === 'tsp' ? 'grey' : key, color: key === 'yellow' ? 'black' : 'white'}"
      :key="index"
      class="recipe-container-label mx-1"
      v-show="val !== '0'"
    ></div>
  </v-card>
</template>

<script>
export default {
  props: ['recipeItem'],
  data() {
    return {
      recipe: this.recipeItem
    };
  }
};
</script>

<style scoped>
.recipe {
  border: 1px solid #1976d2;
  border-radius: 5px;
  background: #fff;
  cursor: move;
}

.recipe-container-label {
  height: 10px;
  width: 10px;
  display: inline-block;
  background: blue;
  border-radius: 50%;
}
</style>
