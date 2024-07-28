<template>
    <div class="content-wrapper my-20 overflow-hidden">
        <div class="flex items-center gap-5">
            <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
            <h2 class="text-lg font-bold">OUR SERVICES</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 mt-10">
            <div class="col-span-1 flex flex-col gap-3">
                <div class="border group border-slate-300 rounded-lg relative
                    flex items-center gap-5 p-5 cursor-pointer 
                    hover:bg-[#DD9D3C] duration-100 before:absolute before:border-[20px] hover:before:border-l-[#DD9D3C] before:border-r-0 before:border-transparent before:left-full
                    " 
                    :class="{'bg-[#DD9D3C] before:border-l-[#DD9D3C]': currentService.slug == service.slug}"
                    v-for="(service, i) in services" :key="i"
                    data-aos="fade-right"
                    @click="toggleService(i)"
                >
                    <img class="w-[35px] md:w-auto" :src="service.img" :class="{'block group-hover:hidden' : currentService.slug != service.slug, 'hidden' : currentService.slug == service.slug}" alt="">
                    <img class="w-[35px] md:w-auto" :src="service.img_white" :class="{'block' : currentService.slug == service.slug, 'hidden group-hover:block' : currentService.slug != service.slug}" alt="">
                    <h2 class="text-xl font-bold group-hover:text-slate-50" :class="{'text-slate-50': currentService.slug == service.slug}">{{service.title}}</h2>
                </div>
            </div>
            <div class="col-span-2 flex flex-col">
                <div class="border flex-grow bg-[url('@/assets/images/services/site.jpg')] bg-cover" data-aos="fade-up">
                    <div class="flex flex-col items-start w-[100%] md:w-[80%] h-[100%] md:h-[70%] mt-14 md:mt-24 ms-0 md:ms-10 py-8 px-12 bg-[#000000d3] opacity-80">
                        <h2 class="text-white text-3xl font-extrabold mb-5">{{currentService.title}}</h2>
                        <span class="text-justify text-white">
                            {{ currentService.desc }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        setup() {
            const services = [
                {
                    slug: 'survey',
                    img: require('@/assets/images/services/survey.png'),
                    img_white: require('@/assets/images/services/survey-white.png'),
                    title: "Land Surveying",
                    desc: "Our Land Surveying service provides precise measurements and mapping of your project site, ensuring accurate data for planning and development. Utilizing the latest technology in GPS and GIS systems, our skilled surveyors deliver detailed topographical maps and boundary surveys, critical for any successful construction project."
                },
                {
                    slug: 'project',
                    img: require('@/assets/images/services/project.png'),
                    img_white: require('@/assets/images/services/project-white.png'),
                    title: "Project Management",
                    desc: "Our Project Management service ensures that your construction projects are completed on time, within budget, and to the highest quality standards. Our experienced project managers oversee all aspects of the project, from initial planning and scheduling to execution and final inspection, ensuring seamless coordination and communication throughout the process."
                },
                {
                    slug: 'paint',
                    img: require('@/assets/images/services/paint.png'),
                    img_white: require('@/assets/images/services/paint-white.png'),
                    title: "Interior Finishing",
                    desc: "Our Interior Finishing service enhances the beauty and functionality of your building's interior spaces. From drywall installation and painting to flooring and trim work, our craftsmen pay attention to every detail to deliver a polished, professional finish. We work closely with clients to understand their vision and bring it to life with precision and care."
                },
                {
                    slug: 'crane',
                    img: require('@/assets/images/services/crane.png'),
                    img_white: require('@/assets/images/services/crane-white.png'),
                    title: "Heavy Equipment Operation",
                    desc: "Our Heavy Equipment Operation service provides skilled operators and well-maintained machinery for excavation, grading, and other earth-moving tasks. We ensure safe and efficient operation of equipment, meeting project timelines and specifications. Our fleet includes excavators, bulldozers, backhoes, and more, ready to tackle any construction challenge."
                },
            ];

            const currentService = ref(services[0]);

            const toggleService = (index) => {
                currentService.value = services[index];
            }

            return {services, currentService, toggleService}
        }
    }
</script>


