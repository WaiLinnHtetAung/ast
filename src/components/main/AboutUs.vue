<template>
    <div class="content-wrapper mt-20 bg-[#f7f7f7]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
            <div class="col-span-1">
                <div class="flex flex-col items-start gap-8">
                    <div class="flex items-center gap-5" data-aos="fade-right">
                        <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
                        <h2 class="text-lg font-bold">ABOUT US</h2>
                    </div>
                    <div class="flex flex-col items-start gap-2" data-aos="fade-right">
                        <h2 class="text-4xl font-bold">We are Best construction</h2>
                        <h2 class="text-4xl font-bold">in <span class="text-[#DD9D3C]">Myanmar</span></h2>
                    </div>
                    <p class="text-start" data-aos="fade-right">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores similique veritatis laudantium id quas modi a iste delectus earum.
                    </p>
                    <router-link to="/about">
                        <Button name="About Us" />
                    </router-link>
                </div>
            </div>
            <div class="col-spans-1">
                <div data-aos="fade-left">
                    <img src="@/assets/images/about/about.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../usable/Button'
    export default {
        components: { Button },
            
    }
</script>
