<template>
  <v-container class="d-flex align-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text-center">
          Lukas Stauersbøl
        </h1>
        <p class="text-center text">
          Web Developer
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      chars: '!<>-_\\/[]{}—=+*^?#________',
      el: null,
      interval: null,
      text: '',
      phrases: ['Web Developer', 'Frontend Developer', 'UI/UX Designer']
    }
  },

  mounted () {
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    let counter = 0
    const next = () => {
      const phrases = this.phrases
      const phrase = phrases[counter]
      const delay = phrase.split('').length * 350
      fx.setText(phrase)
      counter = (counter + 1) % phrases.length
      setTimeout(next, delay)
    }
    next()
  }
}

// Class for text scrambling
class TextScramble {
  constructor (el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }

  // Set the text
  setText (newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => { (this.resolve = resolve) })
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  // Update the text
  update () {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class='dud'>${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }

  // Generate a random character
  randomChar () {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
