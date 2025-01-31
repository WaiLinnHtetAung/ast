import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/tailwind.css'
import 'flowbite'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    delay: 50,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: true,
});

createApp(App).use(store).use(router).mount('#app')
