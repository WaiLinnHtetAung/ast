<template>
  <div class="carousel overflow-hidden relative">
    <div class="carousel-image w-full h-[350px] md:h-[500px] lg:h-[700px] bg-slate-300">
        <img class="w-full h-full brightness-[.6]" :src="currentImage" alt="" id="carouselImage">
    </div>
    <div class="absolute inset-0 top-[15%] md:top-[25%] flex flex-col items-center gap-5">
        <div data-aos="fade-right">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">Build Your Dream</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">With Us</h1>
        </div>
        <p class="px-[5%] sm:px-[15%] md:px-[30%] text-gray-200 mb-5" data-aos="zoom-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis sint eligendi voluptatum recusandae sed exercitationem consequatur amet veritatis aliquid.
        </p>
        <router-link to="/contact">
            <button data-aos="fade-up" class="text-sm border border-gray-100 text-white p-2 lg:p-3 px-14 lg:px-16 rounded-full hover:bg-[#DD9D3C] hover:border-[#DD9D3C] duration-500">
                GET START
            </button>
        </router-link>
      </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    setup() {
        const images = [
                require('@/assets/images/carousel/1.jpg'),
                require('@/assets/images/carousel/2.jpg'),
                require('@/assets/images/carousel/3.jpg'),
                require('@/assets/images/carousel/4.jpg'),
            ];

            const currentImageIndex = ref(0);
            const currentImage = ref(images[currentImageIndex.value]);

            const slider = () => {
                if(currentImageIndex.value < images.length -1) {
                    currentImageIndex.value++;
                } else {
                    currentImageIndex.value = 0;
                }

                currentImage.value = images[currentImageIndex.value];
            }

            onMounted(() => {
                setInterval(slider, 6000);
            })

            return {currentImage}
    }
};
</script>

<style scoped>
    #carouselImage {
        animation: zoom 6s linear infinite;
    }

    @keyframes zoom {
        0% {
            transform: scale(1.3);
        }
        15% {
            transform: scale(1);
        }
        85% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.3);
        }
    }
</style>
