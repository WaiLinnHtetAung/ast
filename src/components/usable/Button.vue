<template>
    <button data-aos="zoom-in" class="text-sm border border-[#DD9D3C] bg-[#DD9D3C] hover:bg-[#333] hover:border-[#333] hover:text-[#DD9D3C] text-white font-bold p-3 px-16 rounded-full duration-500">
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: ['name']
    }
</script>