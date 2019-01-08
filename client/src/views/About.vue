<template>
  <v-container grid-list-md fill-height text-xs-center>
    <v-layout column>
      <h4 class="display-1 mt-5">Step 2: About You</h4>
      <v-layout align-center justify-center>
        <form>
          <div class="radio-group">
            <label for="male">Male</label>
            <input id="male" type="radio" name="gender" v-model="gender" value="male">
            <label for="female">Female</label>
            <input id="female" type="radio" name="gender" v-model="gender" value="female">
          </div>
          <input v-model.number="weight" type="number" placeholder="Weight" min="0" required>
          <v-btn type="submit" color="primary" round @click.prevent="submit">Get My Plan</v-btn>
        </form>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gender: null,
      weight: null
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('updateUser', {
        gender: this.gender,
        weight: this.weight
      });
      this.$router.push('/prep');
    }
  }
};
</script>

<style scoped>
</style>
