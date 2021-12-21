<template>
  <v-app dark>
    <navi-bar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="align-center justify-center"
    >
      <span class="footer-text">&copy; {{ new Date().getFullYear() }} - Lukas Stauersbøl</span>
    </v-footer>
  </v-app>
</template>

<script>
import NaviBar from '~/components/NaviBar.vue'
export default {
  components: {
    NaviBar
  },
  data () {
    return {
      fixed: true,
      title: 'Lukas Stauersbøl'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.v-footer {
  background-color: transparent;
}

.v-main {
  background-color: #1F1F1F;
    overflow-y: hidden;
}

.footer-text {
  font-family: 'Neue Montreal', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFF;
  letter-spacing: 2px;
}
</style>
