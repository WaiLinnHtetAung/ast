<template>
    <div class="content-wrapper my-32">
        <div class="flex flex-col items-start gap-5">
            <div class="flex items-center gap-5">
                <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
                <h2 class="text-lg font-bold">WHAT WE DO</h2>
            </div>
            <div class="flex flex-col items-start gap-2">
                <h2 class="text-4xl font-bold">Our <span class="text-[#DD9D3C]">Projects</span></h2>
            </div>
        </div>
        <div class="mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="col-span-1" v-for="(image, i) in images" :key="i">
                    <div class="flex flex-col items-start gap-3">
                        <div class="group overflow-hidden">
                            <img class="group-hover:scale-110 duration-500" :src="image.img" alt="">
                        </div>
                        <h2 class="text-2xl font-bold">Construction Site 1</h2>
                        <div class="w-full h-[2px] bg-slate-300"></div>
                        <div class="flex justify-between  w-full">
                            <div class="flex">
                                <svg class="w-6 h-6 text-[#DD9D3C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                  </svg>
                                  <span>No.23, AungSatanar 3 St, Group A</span>
                            </div>
                            <div class="flex">
                                <router-link to="#" class="font-bold text-[#DD9D3C]">More</router-link>
                            <svg class="w-6 h-6 text-[#DD9D3C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                              </svg>
                            </div>
                              
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const images = [
                {
                    img: require('@/assets/images/projects/p1.webp')
                },
                {
                    img: require('@/assets/images/projects/p2.webp')
                },
                {
                    img: require('@/assets/images/projects/p3.webp')
                },
                {
                    img: require('@/assets/images/projects/p4.webp')
                },
            ];

            return {images}
        }
    }
</script>

