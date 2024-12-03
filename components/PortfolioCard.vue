<template>
    <div class="rounded-2xl bg-[#1C1C1C] text-[#ECECEC] w-full hover:shadow hover:shadow-[#C9C9C930] cursor-pointer"
        @click="goToDetail">
        <NuxtImg :src="image" class="w-full h-[275px] object-cover rounded-2xl"></NuxtImg>

        <div class="py-6 px-4 space-y-3">
            <div class="rounded-full py-1 px-3 bg-[#ececec10] border border-[#C9C9C950] w-fit text-xs">
                {{ category }}
            </div>
            <h3 class="text-2xl">{{ title }}</h3>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    image: String,
    title: String,
    category: String,
});

const goToDetail = () => {
    const routeName = props.title.replace(/\s+/g, '-').toLowerCase();
    // console.log(routeName)
    router.push(`/detail/${routeName}`);
};
</script>