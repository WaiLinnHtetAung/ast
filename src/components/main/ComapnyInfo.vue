<template>
    <div class="content-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
        <div class="col-span-1 flex flex-col items-start gap-5" data-aos="fade-up" v-for="(info, index) in infos" :key="index">
            <img class="h-[70px] object-cover" :src="info.img" alt="">
            <h2 class="text-2xl font-bold">{{info.title}}</h2>
            <p class="text-start text-[16px] text-[#5a5a5a] leading-6">
                {{ info.content }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const infos = [
                {
                    img: require("@/assets/images/about/1.png"),
                    title: "Land Surveying",
                    content: "Our Land Surveying service provides precise measurements and mapping of your project site, ensuring accurate data for planning and development. Utilizing the latest technology in GPS and GIS systems, our skilled surveyors deliver detailed topographical maps and boundary surveys, critical for any successful construction project."
                },
                {
                    img: require("@/assets/images/about/2.png"),
                    title: "Project Management",
                    content: "Our Project Management service ensures that your construction projects are completed on time, within budget, and to the highest quality standards. Our experienced project managers oversee all aspects of the project, from initial planning and scheduling to execution and final inspection, ensuring seamless coordination and communication throughout the process."
                },
                {
                    img: require("@/assets/images/about/3.png"),
                    title: "Interior Finishing",
                    content: "Our Interior Finishing service enhances the beauty and functionality of your building's interior spaces. From drywall installation and painting to flooring and trim work, our craftsmen pay attention to every detail to deliver a polished, professional finish. We work closely with clients to understand their vision and bring it to life with precision and care."
                },
                {
                    img: require("@/assets/images/about/4.png"),
                    title: "Heavy Equipment Operation",
                    content: "Our Heavy Equipment Operation service provides skilled operators and well-maintained machinery for excavation, grading, and other earth-moving tasks. We ensure safe and efficient operation of equipment, meeting project timelines and specifications. Our fleet includes excavators, bulldozers, backhoes, and more, ready to tackle any construction challenge."
                },
            ];

            return {infos}
        }
    }
</script>
