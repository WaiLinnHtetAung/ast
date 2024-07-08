<template>
    <div class="content-wrapper mt-20 bg-[#f7f7f7]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
            <div class="col-span-1">
                <div class="flex flex-col items-start gap-8">
                    <div class="flex items-center gap-5">
                        <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
                        <h2 class="text-lg font-bold">ABOUT US</h2>
                    </div>
                    <div class="flex flex-col items-start gap-2">
                        <h2 class="text-4xl font-bold">We are Best construction</h2>
                        <h2 class="text-4xl font-bold">in <span class="text-[#DD9D3C]">Myanmar</span></h2>
                    </div>
                    <p class="text-start">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores similique veritatis laudantium id quas modi a iste delectus earum.
                    </p>
                    <Button name="Contact Us" />
                </div>
            </div>
            <div class="col-spans-1">
                <div>
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
