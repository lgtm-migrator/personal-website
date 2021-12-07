<template>
  <div v-if="loading" class="loading-page">
    <div ref="loading" class="loading" />
  </div>
</template>

<script>
import Lottie from 'lottie-web/build/player/lottie'
export default {
  data () {
    return {
      loading: false
    }
  },

  mounted () {
    Lottie.loadAnimation({
      container: this.$refs.loading,
      renderer: 'svg',
      loop: true,
      path: ''
    })
  },

  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
