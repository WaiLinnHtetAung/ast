<template>
  <div class="p-0 m-0">
    <Nav />
    <Carousel />
    <ComapnyInfo />
    <AboutUs />
    <Banner />
    <Question />
  </div>
</template>

<script>


import Banner from '../components/main/Banner'
import Question from '../components/main/Question'
import AboutUs from '../components/main/AboutUs'
import ComapnyInfo from '../components/main/ComapnyInfo'
import Carousel from '../components/main/Carousel'
import Nav from '../components/main/Nav'
export default {
  components: {
    Banner,
    Question,
    AboutUs,
    ComapnyInfo,
    Carousel, Nav },

}
</script>
