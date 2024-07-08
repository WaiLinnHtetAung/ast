<template>
    <div class="content-wrapper mt-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20">
            <div class="col-spans-1">
                <div class="flex flex-col items-start gap-8">
                    <div class="flex items-center gap-5">
                        <div class="w-[60px] h-[2px] bg-[#DD9D3C]"></div>
                        <h2 class="text-lg font-bold">DEALING WITH YOUR WORRIES</h2>
                    </div>
                    <div class="flex flex-col items-start gap-2">
                        <h2 class="text-4xl font-bold">If Your Question Is Not </h2>
                        <h2 class="text-4xl font-bold">Here <span class="text-[#DD9D3C]">Contact Us</span></h2>
                    </div>
                    <p class="text-start pe-10">
                        If you have concerns or queries that are not addressed on this page, feel free to reach out to us using the contact form below. We are here to help you with any questions you may have.
                    </p>
                    <Button name="Contact Us" />
                </div>
            </div>
            <div class="col-spans-1">
                <div class="ms-0 lg:ms-5">
                    <div class="border border-slate-300 px-5 py-6 rounded-lg mb-3 h-20 overflow-hidden duration-300" 
                        :class="{'h-48': index == currentIndex}" 
                        v-for="(question, index) in questions" 
                        :key="index" @click="toggleQuestion(index)"
                    >
                        <div class="question flex justify-between cursor-pointer">
                            <h2 class="text-lg lg:text-xl font-bold">{{question.title}}</h2>
                            <svg class="w-6 h-6 text-gray-800 font-bold dark:text-white" :class="{'hidden': index == currentIndex}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7 7V5"/>
                              </svg>

                              <svg class="w-6 h-6 text-gray-800 dark:text-white" :class="{'hidden': index != currentIndex}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14"/>
                              </svg>
                              
                        </div>

                        <p class="text-start mt-7">
                            {{ question.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../usable/Button.vue';

    export default {
        components: { Button },
        setup() {
            const questions = [
                {
                    title: "Where is Company Located ?",
                    answer: "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor",
                },
                {
                    title: "Where is a Structural Engineer ?",
                    answer: "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor",
                },
                {
                    title: "Where are the Service Provided by Company ?",
                    answer: "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor",
                },
                {
                    title: "How Long Does It Take to Build a Building ?",
                    answer: "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor",
                },
            ];

            const currentIndex = ref(null);

            const toggleQuestion = (index) => {
                currentIndex.value = currentIndex.value == index ? null : index;
            }

            return {questions, toggleQuestion, currentIndex}
        }
    }
</script>

