<template>
    <div class="flex flex-wrap md:flex-nowrap">
        <div class="w-[50%] md:w-25 relative group" v-for="(image, i) in images" :key="i"> 
            <div class="opacity-100 md:opacity-0 group-hover:opacity-100 duration-300 absolute bg-opacity-80 bg-gray-900 w-full h-full"></div>
            <div class="opacity-100 md:opacity-0 group-hover:opacity-100 duration-300 absolute bottom-28 left-10 flex flex-col items-start gap-3">
                <h2 class="text-3xl text-white">Construction Project in Minbu</h2>
                <h2 class="text-3xl text-white">at 2024</h2>
                <router-link to="#" class="text-[#DD9D3C] font-bold text-xl">View More Projects</router-link>
            </div>
            <img class="w-full h-[500px] md:h-[600px] lg:h-[700px] " :src="image.img" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const images = [
                {
                    img: require('@/assets/images/projects/4.webp')
                },
                {
                    img: require('@/assets/images/projects/2.webp')
                },
                {
                    img: require('@/assets/images/projects/1.webp')
                },
                {
                    img: require('@/assets/images/projects/3.webp')
                },
            ];

            return {images}
        }
    }
</script>


