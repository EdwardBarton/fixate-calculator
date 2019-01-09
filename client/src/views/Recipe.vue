<template>
  <div>RECIPE PAGE
    <p>Recipe Detail page ID:{{this.$route.params.recipeID}}</p>
    <p>{{recipe.name}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    recipe() {
      const { recipes } = this.$store.state;
      const { recipeID } = this.$route.params;
      return recipes.filter(r => r.id === Number(recipeID))[0];
    }
  }
};
</script>

<style scoped>
</style>
