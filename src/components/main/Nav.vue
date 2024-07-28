<template>
    <nav class="p-0 m-0">
        <div class="bg-[#DD9D3C] h-[35px] content-wrapper flex justify-between items-center">
            <div class="social flex gap-2 items-center">
                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                  
                  <h2 class="text-sm font-bold">9:00 AM - 5:00 PM</h2>
            </div>
            <div class="content flex gap-2 items-center">
                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                  </svg>
                  
                <h2 class="text-sm font-bold">09-2222222</h2>
            </div>
        </div>
    </nav>
  <nav ref="nav"  :class="{ 'fixed top-0 left-0 right-0 z-50 shadow-lg': isSticky, 'relative': !isSticky }" class="p-0 m-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 z-10">
    <div
      class="content-wrapper flex flex-wrap items-center justify-between mx-auto p-4 h-[90px]"
    >
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="@/assets/images/logo.png"
          class="w-20"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Construction</span
        >
      </router-link>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link to="/"
              class="menu block py-2 px-3 font-bold text-slate-800 rounded md:bg-transparent md:p-0 "
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/about"
              class="menu block py-2 px-3 font-bold text-slate-800 rounded md:bg-transparent md:p-0 "
              aria-current="page"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="projects"
              class="menu block py-2 px-3 font-bold text-slate-800 rounded md:bg-transparent md:p-0 "
              aria-current="page"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link to="/contact"
              class="menu block py-2 px-3 font-bold text-slate-800 rounded md:bg-transparent md:p-0 "
              aria-current="page"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { onMounted, onUnmounted, ref } from 'vue';
  export default {
    setup() {
      const nav = ref(null);
      const isSticky = ref(false);

      const handleScroll = () => {
        if(window.scrollY > nav.value.offsetTop) {
          isSticky.value = true;
        } else {
          isSticky.value = false;
        }
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });

      return {nav, isSticky}
    }
};
</script>

<style scoped></style>
