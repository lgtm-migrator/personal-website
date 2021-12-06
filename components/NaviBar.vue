<template>
  <div>
    <div class="main">
      <div class="bars" />
    </div>
    <div class="menu">
      <div class="navBefore" />
      <div class="nav">
        <ul class="navigation">
          <li class="nav-item">
            <nuxt-link to="/" class="link-item">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="link-item">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact" class="link-item">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data () {
    return {
    }
  },

  mounted () {
    window.onload = function () {
      const bars = document.querySelector('.bars')
      const navitem = document.querySelectorAll('.nav-item')
      const linkitem = document.querySelectorAll('.link-item')
      bars.addEventListener('click', function (e) {
        this.classList.toggle('active')
        if (this.classList.contains('active')) {
          gsap.to('.menu', {
            duration: 0.1,
            display: 'flex',
            ease: 'expo.in'
          })
          gsap.to('.navBefore', {
            duration: 0.6,
            marginLeft: '0',
            ease: 'expo.in'
          })
          gsap.to('.nav', {
            duration: 0.8,
            marginLeft: '0',
            delay: 0.05,
            ease: 'expo.in'
          })
          gsap.to('.navigation', {
            duration: 0.7,
            opacity: '1',
            delay: 0.6,
            ease: 'expo.in'
          })
        } else {
          gsap.to('.navigation', {
            duration: 0.2,
            opacity: '0',
            ease: 'expo.in'
          })
          gsap.to('.nav', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.3,
            ease: 'expo.in'
          })
          gsap.to('.navBefore', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.5,
            ease: 'expo.in'
          })
          gsap.to('.menu', {
            duration: 1,
            display: 'none',
            delay: 1,
            ease: 'expo.in'
          })
        }
      })
      navitem.forEach((item) => {
        item.addEventListener('click', function (e) {
          bars.classList.remove('active')
          gsap.to('.navigation', {
            duration: 0.2,
            opacity: '0',
            ease: 'expo.in'
          })
          gsap.to('.nav', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.3,
            ease: 'expo.in'
          })
          gsap.to('.navBefore', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.5,
            ease: 'expo.in'
          })
          gsap.to('.menu', {
            duration: 1,
            display: 'none',
            delay: 1,
            ease: 'expo.in'
          })
        })
      })
      for (let i = 0; i < linkitem.length; i++) {
        if (linkitem[i] === linkitem[0]) {
          linkitem[0].addEventListener('mouseover', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#3f66a2',
              ease: 'ease.in'
            })
          })
          linkitem[0].addEventListener('mouseout', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#fff',
              ease: 'ease.in'
            })
          })
        }
        if (linkitem[i] === linkitem[1]) {
          linkitem[1].addEventListener('mouseover', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#D4C1EC',
              ease: 'ease.in'
            })
          })
          linkitem[1].addEventListener('mouseout', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#fff',
              ease: 'ease.in'
            })
          })
        }
        if (linkitem[i] === linkitem[2]) {
          linkitem[2].addEventListener('mouseover', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#98B9F2',
              ease: 'ease.in'
            })
          })
          linkitem[2].addEventListener('mouseout', function (e) {
            gsap.to('.nav', {
              duration: 0.3,
              backgroundColor: '#fff',
              ease: 'ease.in'
            })
          })
        }
      }
    }
  },

  methods: {
    hoverEffect (linkitem) {
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~vuetify/src/styles/styles.sass';

$sm-breakpoint: map-get($grid-breakpoints, 'sm');
$md-breakpoint: map-get($grid-breakpoints, 'md');
$lg-breakpoint: map-get($grid-breakpoints, 'lg');
$xl-breakpoint: map-get($grid-breakpoints, 'xl');

.main {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.main .bars {
  position: fixed;
  height: 30px;
  width: 50px;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999999999;
  cursor: pointer;
}

.main .bars::before {
  position: absolute;
  content: "";
  height: 2px;
  width: 90%;
  background: #fff;
  transition: 0.3s linear;
}
.main .bars.active::before {
  transform: rotate(45deg);
  width: 50%;
  top: 5%;
  background: #000;
}
.main .bars::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 90%;
  background: #fff;
  top: 35%;
  transition: 0.3s linear;
}
.main .bars.active::after {
  transform: rotate(-45deg);
  width: 50%;
  top: 5%;
  background: #000;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;
  overflow: hidden;
  display: none;
}
.menu .navBefore {
  position: absolute;
  margin-left: 100%;
  width: 100%;
  height: 100%;
  background: #5d58ee;
}
.menu .nav {
  position: relative;
  margin-left: 100%;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu .nav ul {
  opacity: 0;
}
.menu .nav ul li {
  list-style: none;
}
.menu .nav ul li a {
  position: relative;
  font-size: 4.5rem;
  text-decoration: none;
  text-align: center;
  color: #000;
  transition: 0.2s linear;
}

ul {
  padding-left: 0;
}

li {
  text-align: center;
}

.menu .nav ul li a:hover,
.menu .nav ul li.active a {
  color: #fff;
}
</style>
