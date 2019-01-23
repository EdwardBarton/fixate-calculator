<template>
  <v-container grid-list-md fill-height text-xs-center class="v-container">
    <v-layout column class="select-program">
      <h4 class="display-1 my-5">Step 1: Select Your Fitness Program</h4>
      <v-layout align-center justify-space-around wrap>
        <v-hover v-for="(p, i) in programs" :key="i" xs12 md3>
          <v-card
            slot-scope="{ hover }"
            :color="`primary elevation-${hover ? 24 : 2}`"
            class="d-flex align-center program"
            height="250"
            width="250"
            @click="selectProgram(p)"
          >
            <v-img :src="p.image"></v-img>
          </v-card>
        </v-hover>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    programs() {
      return this.$store.state.programs;
    }
  },
  methods: {
    selectProgram(program) {
      this.$store.dispatch('selectProgram', program);
      this.$router.push('/about');
    }
  }
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}

.select-program {
  padding-top: 70px;
}

.program {
  padding: 20px;
  cursor: pointer;
}
</style>
