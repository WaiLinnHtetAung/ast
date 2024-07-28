<template>
    <div class="">
        <div class="banner relative">
            <img class="h-[300px] w-full brightness-[.3]" src="@/assets/images/about/about-us-banner.jpg" alt="">
            <h2 data-aos="fade-down" class="absolute text-center top-[50%] left-[40%] sm:left-[48%] text-white text-4xl font-extrabold">About Us</h2>
        </div>
        <div class="content-wrapper mt-[80px]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="col-span-1">
                   <div class="flex w-full h-full">
                        <img class="object-cover" src="@/assets/images/about/site.jpg" alt="">
                   </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col justify-center h-full gap-3">
                        <h3 class="text-xl font-bold">Welcome to Aung Shan Toe</h3>
                        <h2 class="text-4xl font-bold">30 Years of Experience in Industry</h2>
                        <h2 class="my-3">We are ready to build your dream home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, beatae.</h2>
                        <p class="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repudiandae odit dolorum quis laudantium impedit beatae perferendis natus, hic libero sed atque quibusdam possimus error, voluptate est molestiae doloremque necessitatibus illum rerum sunt! Ad sunt obcaecati voluptatem sint sequi quos, qui non deleniti a praesentium, sapiente accusantium odit.
                        </p>
                        <Button name="Contact"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrapper mt-[80px] bg-[#f7f7f7]">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-[100px]">
                <div class="col-span-1 mb-4 lg:mb-0" v-for="(grade, index) in grades" :key="index">
                    <div class="flex items-start gap-3">
                        <img class="object-contain" :src="grade.img" alt="">
                        <div>
                            <h2 class="mb-2 text-xl font-bold">{{grade.title}}</h2>
                            <p class="text-sm pe-10 leading-6">
                                {{ grade.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-wrapper mt-[80px]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="col-span-1">
                    <div class="flex flex-col justify-center h-full items-start gap-8">
                        <div class="flex items-center gap-5" data-aos="fade-right">
                            <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
                            <h2 class="text-lg font-bold">ABOUT US</h2>
                        </div>
                        <div class="flex flex-col items-start gap-2" data-aos="fade-right">
                            <h2 class="text-4xl font-bold">About our <span class="text-[#DD9D3C]">CEO</span></h2>
                        </div>
                        <p class="text-start leading-9" data-aos="fade-right">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores similique veritatis laudantium id quas modi a iste delectus earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum beatae magni odit atque voluptatem sapiente quod consequuntur labore repudiandae sunt veritatis reprehenderit deleniti, quo enim cumque odio. Distinctio nam deleniti accusamus perspiciatis id veritatis at repellat maxime dolor ducimus laborum itaque, quia, perferendis, cupiditate quisquam fuga quam excepturi nobis corporis.
                        </p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex justify-center items-center h-full bg-gray-300">
                        <img class="w-[50%]" src="@/assets/images/about/ceo.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-[100px]">
            <div class="relative h-[400px] bg-[url('@/assets/images/about/funfact-bg.jpg')] bg-cover bg-center" data-aos="fade-up">
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 content-wrapper h-full">
                <div class="col-span-1" v-for="(item, index) in success" :key="index">
                    <div class="flex flex-col w-full items-center justify-center h-full gap-5">
                        <img class="w-[50px] md:w-[80px] h-[50[px] md:h-[80px] object-contain" :src="item.img" alt="">
                        <h2 class="text-white text-4xl font-bold">{{item.count}}</h2>
                        <span class="text-white font-bold">{{item.title}}</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div class="my-[80px] content-wrapper">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="col-span-1">
                    <div class="flex flex-col justify-center h-full gap-7 pe-7">
                        <h2 class="text-4xl font-white"><span class="text-5xl font-bold">30</span> Years of Experience</h2>
                        <p>
                            ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                        </p>
                    </div>
                </div>
                <div class="col-span-1 mb-[120px] md:mb-0">
                    <img class="w-full h-[500px] object-cover" src="@/assets/images/about/site1.jpg" alt="">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 -mt-20">
                <div class="col-span-1">
                    <img class="w-full h-[500px] object-cover" src="@/assets/images/about/site2.jpeg" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col justify-center h-full gap-7 ps-7">
                        <p>
                            ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                        </p>
                        <div>
                            <Button name="Contact Us"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted } from 'vue';
    import Button from '../components/usable/Button'
    export default {
        components: { Button },
        setup() {
            const grades = [
                {
                    img: require('@/assets/images/about/top.png'),
                    title: 'Top Rated',
                    content: "Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Officia odio eum corporis consequatur."
                },
                {
                    img: require('@/assets/images/about/quality.png'),
                    title: 'Best Quality',
                    content: "Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Officia odio eum corporis consequatur."
                },
                {
                    img: require('@/assets/images/about/cost.png'),
                    title: 'Low Cost',
                    content: "Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Officia odio eum corporis consequatur."
                },
            ];

            const success = [
                {
                    img: require('@/assets/images/about/funfact-project.png'),
                    count: 200,
                    title: 'Projects'
                },
                {
                    img: require('@/assets/images/about/funfact-clients.png'),
                    count: 100,
                    title: 'Clients'
                },
                {
                    img: require('@/assets/images/about/funfact-success.png'),
                    count: 150,
                    title: 'Success'
                },
                {
                    img: require('@/assets/images/about/funfact-award.png'),
                    count: 200,
                    title: 'Awards'
                },
            ];

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {grades, success}
        }
    }
</script>

<style>
</style>


