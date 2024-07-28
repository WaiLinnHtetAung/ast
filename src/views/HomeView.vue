<template>
  <div class="p-0 m-0">
    <Carousel />
    <ComapnyInfo />
    <AboutUs />
    <OurService />
    <Banner />
    <Question />
    <ProjectImageShow />
    <OurProjects />
  </div>
</template>

<script>


import OurProjects from '../components/main/OurProjects'
import ProjectImageShow from '../components/main/ProjectImageShow'
import OurService from '../components/main/OurService'
import Banner from '../components/main/Banner'
import Question from '../components/main/Question'
import AboutUs from '../components/main/AboutUs'
import ComapnyInfo from '../components/main/ComapnyInfo'
import Carousel from '../components/main/Carousel'
export default {
  components: {
    OurProjects,
    ProjectImageShow,
    OurService,
    Banner,
    Question,
    AboutUs,
    ComapnyInfo,
    Carousel },

}
</script>
