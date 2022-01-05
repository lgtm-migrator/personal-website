<template>
  <v-app dark>
    <navi-bar />
    <v-main style="padding: 0;">
      <Nuxt />
    </v-main>
    <cursor-fx
      color="#FFF"
      color-hover="#FFDAAD"
    ></cursor-fx>
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
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import NaviBar from '~/components/NaviBar.vue'
export default {
  components: {
    NaviBar,
    'cursor-fx': CursorFx
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
.v-footer {
  background-color: transparent;
}

.v-main {
  background-color: #1F1F1F;
}

.footer-text {
  font-family: 'Neue Montreal', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFF;
  letter-spacing: 2px;
}
</style>
