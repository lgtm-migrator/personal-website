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
      <span class="">&copy; {{ new Date().getFullYear() }} - Lukas Stauersbøl</span>
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
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'About me',
          to: '/about'
        },
        {
          icon: 'mdi-card-account-details-star',
          title: 'Experience',
          to: '/experience'
        },
        {
          icon: 'mdi-apps',
          title: 'Projects',
          to: '/projects'
        }
      ],
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
</style>
