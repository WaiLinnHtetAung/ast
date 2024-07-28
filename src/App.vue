<template>
  <Nav />
  <router-view/>
  <Footer />
</template>

<script>
  import Nav from './components/main/Nav'
  import Footer from './components/main/Footer'
  export default {
    components: { Footer, Nav },

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

</style>
