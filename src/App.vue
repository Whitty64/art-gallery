<template>
  <div id="app">
    <Nav/>
    <main class="min-h-screen m-auto">
      <Gallery/>
      <Home />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Home,
    Gallery,
  },
    data() {
    return {
      currentPage:"home",
    }
  },
  methods: {
    random : function() {
      this.l = this.art[Math.floor(Math.random() * this.art.length)];
      this.r = this.art[Math.floor(Math.random() * this.art.length)];
    },

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
