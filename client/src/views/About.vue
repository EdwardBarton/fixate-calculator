<template>
  <v-container grid-list-md fill-height text-xs-center>
    <v-layout column>
      <h4 class="display-1 my-5">Step 2: About You</h4>
      <v-layout justify-center>
        <form>
          <label for="gender">
            <v-radio-group v-model="gender" row>
              <v-radio label="Male*" value="male"></v-radio>
              <v-radio label="Female*" value="female"></v-radio>
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
            <v-btn type="submit" color="primary" round @click.prevent="submit">Get My Plan</v-btn>
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
form {
  max-width: 500px;
  padding: 20px 12px 10px 20px;
  font: 13px Arial, Helvetica, sans-serif;
}
form label {
  display: block;
  margin: 0px 0px 15px 0px;
}
form input.input-field {
  width: 90%;
}
form input.input-field {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #c2c2c2;
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
  border: 1px solid #0c0;
}
</style>
