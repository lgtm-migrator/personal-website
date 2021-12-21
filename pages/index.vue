<template>
  <v-container>
    <v-container class="d-flex align-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <h1 class="main-text text-center">
            Lukas Stauersbøl
          </h1>
          <text-scramble />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import textScramble from '~/components/textScramble.vue'
export default {
  components: { textScramble },
  data () {
    return {
    }
  },

  mounted () {
  }
}
</script>

<style lang='scss' scoped>
@import '/assets/main.scss';

.container {
  width: 100%;
  height: 100%;
}

.main-text {
  font-family: 'Neue Montreal', sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  color: #FFF;
  letter-spacing: 2px;
}

</style>
