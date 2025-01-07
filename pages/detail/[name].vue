<template>
    <div class="bg-[#121212] text-[#ECECEC]">
        <NuxtImg src="/img/detail-bg.png" class="absolute top-0 left-0"></NuxtImg>

        <div class="container mx-auto px-0 md:px-36 md:flex min-h-screen pt-10 relative z-10">
            <div class="w-full md:w-1/3 px-8 md:px-0 md:pr-20">
                <div class="relative md:fixed md:w-1/5">
                    <div class="flex gap-2 items-center cursor-pointer" @click="$router.push('/')">
                        <svg width="30" height="9" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM30 4L1 4V5L30 5V4Z"
                                fill="#C9C9C9" />
                        </svg>
                        <p class="text-[#C9C9C9]">Back to home</p>
                    </div>

                    <div class="space-y-8 pt-10">
                        <div class="space-y-4">
                            <TitlePills :title="work.category" />
                            <h1 class="font-bold text-6xl">{{ work.title }}</h1>
                        </div>

                        <div class="space-y-4">
                            <p class="text-[#C9C9C9]">{{ work.description }}</p>
                            <a :href="work.pdf" target="_blank"
                                class="block py-4 px-8 w-full text-center bg-[#ececec] rounded-full text-[#121212] font-semibold">
                                Download PDF
                            </a>
                        </div>

                        <div>
                            <div class="flex justify-between w-full py-2 border-b border-b-[#C9C9C950] text-[#C9C9C9]">
                                <p>Tools</p>
                                <p>{{ work.tools }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="w-full pt-20  md:pt-0 md:w-2/3 pb-20">
                <NuxtImg :src="work.docImg" class="w-full"></NuxtImg>

                <h1 v-show="isLoadingPDF" class="w-full text-center animate-pulse pt-20">Loading file...</h1>
            </div>
        </div>

        <!-- Scroll to Top Button -->
        <button v-if="showScrollToTop" @click="scrollToTop"
            class="fixed bottom-10 right-10 z-50 bg-[#ECECEC] text-[#121212] p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none"
            aria-label="Scroll to top">
            ↑
        </button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useWorksStore } from '@/stores/works';

const route = useRoute();
const worksStore = useWorksStore();
const routeName = route.params.name.replace(/-/g, ' ');
const work = worksStore.getWorkByTitle(routeName);
const showScrollToTop = ref(false);


if (!work) {
    console.error('Work not found');
    // Handle not found case (e.g., redirect or show a message)
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const handleScroll = () => {
    showScrollToTop.value = window.scrollY > 300;
};

watch(() => route.params.name, () => {
    window.scrollTo(0, 0); // Reset scroll position when navigating
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>