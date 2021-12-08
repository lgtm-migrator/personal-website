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
      container: document.getElementsByClassName('loading'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets7.lottiefiles.com/datafiles/0e47bae039bb4398f1a1dc74871ee6fe/data.json'
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
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99999;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1F1F1F;
}
</style>
