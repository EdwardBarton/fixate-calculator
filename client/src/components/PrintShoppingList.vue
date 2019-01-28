<template>
  <form class="mt-5" @submit.prevent="printShoppingList(prepDays)">
    <input
      type="number"
      class="input-field"
      name="days"
      default="5"
      v-model.number="prepDays"
      min="1"
      max="30"
      placeholder="# Prep Days*"
      required
    >
    <v-btn color="primary" type="submit" @click.prevent="printShoppingList(prepDays)">Shopping List</v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      prepDays: null
    };
  },
  methods: {
    printShoppingList(numDays) {
      const form = document.getElementsByTagName('form')[0];
      if (form.checkValidity()) {
        this.$router.push(`/list?days=${numDays}`);
      } else {
        alert('You must enter # prep days, ranging from 1-30');
      }
    }
  }
};
</script>

<style scoped>
input.input-field {
  width: 70%;
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

.input-field:focus {
  border: 1px solid #1976d2;
}
</style>
