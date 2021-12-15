<template>
  <div class="text-center">
    <button class="about-button">About me</button>
    <v-row justify="center" class="align-center">
      <p class="click-here">Click here for more information!</p>
      <p class="click-icon"/>
    </v-row>
  </div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  mounted () {
    lottie.loadAnimation({
      container: document.querySelector('.click-icon'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://gist.githubusercontent.com/Slash1y/6b4f398457c6375b423c5b19446f1dc7/raw/a9d8f6abadd7325cb88ad8a9bb93219e93e05d97/arrow-up.json'
    })
  }

}
</script>

<style scoped>
.about-button {
  position: relative;
  padding: .3em;
  width: 25%;
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  background: none;
  outline: none;
  border: none;
  mix-blend-mode: screen;
  transition: color background .2s ease-in;
}

.about-button::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-radius: 0.7em;
  border: 3px solid #fff;
  content: '';
  mix-blend-mode: color-burn;
  transition: background .2s ease-in;
}

.about-button:hover {
  color: #fff;
  background: #000;
}

.about-button:hover::before {
  content: '';
  mix-blend-mode: exclusion;
  background: transparent;
}

.click-icon {
  height: 100px;
}

.click-here {
  margin-bottom: 0;
}

.click-wrap {
  width: 100%;
}
</style>
