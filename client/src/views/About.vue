<template>
  <v-container grid-list-md fill-height text-xs-center class="v-container">
    <v-layout column class="about-you">
      <h4 class="display-1 my-5">Step 2: About You</h4>
      <v-layout justify-center class="about">
        <v-form @submit.prevent="getPlan" class="about-form">
          <div class="about-form-inputs">
            <v-radio-group v-model="gender" row>
              <v-radio name="gender" label="Male*" value="male" required></v-radio>
              <v-radio name="gender" label="Female*" value="female"></v-radio>
            </v-radio-group>
            <v-text-field
              label="Weight"
              type="number"
              v-model.number="weight"
              min="0"
              outline
            />
            <v-btn type="submit" color="primary" round @click.prevent="getPlan">Get My Plan</v-btn>
          </div>
        </v-form>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
      weight: null
    };
  },
  methods: {
    getPlan() {
      const form = document.querySelector('.about-form');
      if (form.checkValidity()) {
        const user = {
          gender: this.gender,
          weight: this.weight
        };
        this.$store.dispatch('calculateAndUpdateUserNutritionPlan', user);
        this.$router.push('/prep');
      } else {
        alert('Please fill out all form fields');
      }
    }
  }
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}

.about-form-inputs {
  max-width: 500px;
  padding: 20px 40px 30px;
  border-radius: 10px;
  font: 15px Arial, Helvetica, sans-serif;
  background: white;
}
</style>
