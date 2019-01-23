<template>
  <v-container grid-list-md fill-height text-xs-center class="v-container">
    <v-layout column class="about-you">
      <h4 class="display-1 my-5">Step 2: About You</h4>
      <v-layout justify-center class="about">
        <form @submit.prevent="getPlan">
          <label for="gender">
            <v-radio-group v-model="gender" row>
              <v-radio name="gender" label="Male*" value="male" required></v-radio>
              <v-radio name="gender" label="Female*" value="female"></v-radio>
            </v-radio-group>
          </label>
          <label for="weight">
            <input
              type="number"
              class="input-field"
              name="weight"
              v-model.number="weight"
              min="0"
              placeholder="Weight*"
              required
            >
          </label>
          <label>
            <v-btn type="submit" color="primary" round @click.prevent="getPlan">Get My Plan</v-btn>
          </label>
        </form>
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
      const form = document.getElementsByTagName('form')[0];
      if (form.checkValidity()) {
        this.$store.dispatch('calculateNutritionPlan', {
          gender: this.gender,
          weight: this.weight
        });
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
.about-you {
  padding-top: 70px;
}
form {
  max-width: 500px;
  padding: 40px;
  border-radius: 10px;
  font: 15px Arial, Helvetica, sans-serif;
  background: white;
  height: 100%;
}
form label {
  display: block;
  margin: 0px 0px 15px 0px;
}

form input.input-field {
  width: 90%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 1px 1px 4px #ebebeb;
  -moz-box-shadow: 1px 1px 4px #ebebeb;
  -webkit-box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 7px;
  outline: none;
}
form .input-field:focus {
  border: 1px solid #1976d2;
}
</style>
