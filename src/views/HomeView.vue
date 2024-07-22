<template>
  <div class="p-0 m-0">
    <Nav />
    <Carousel />
    <ComapnyInfo />
    <AboutUs />
    <OurService />
    <Banner />
    <Question />
    <ProjectImageShow />
    <OurProjects />
    <Footer />
  </div>
</template>

<script>


import OurProjects from '../components/main/OurProjects'
import ProjectImageShow from '../components/main/ProjectImageShow'
import Footer from '../components/main/Footer'
import OurService from '../components/main/OurService'
import Banner from '../components/main/Banner'
import Question from '../components/main/Question'
import AboutUs from '../components/main/AboutUs'
import ComapnyInfo from '../components/main/ComapnyInfo'
import Carousel from '../components/main/Carousel'
import Nav from '../components/main/Nav'
export default {
  components: {
    OurProjects,
    ProjectImageShow,
    Footer,
    OurService,
    Banner,
    Question,
    AboutUs,
    ComapnyInfo,
    Carousel, Nav },

}
</script>
