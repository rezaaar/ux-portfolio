<template>
    <div class="rounded-2xl bg-[#1C1C1C] text-[#ECECEC] w-full hover:shadow hover:shadow-[#C9C9C930] cursor-pointer" @click="downloadPDF()">
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
const props = defineProps({
    image: String,
    title: String,
    category: String,
    download: String
})

const downloadPDF = () => {
    const filePath = `/` + props.download; // Static files are served from the root in Nuxt
    const link = document.createElement('a');
    link.href = filePath;
    link.download = props.download; // This sets the suggested filename
    link.click()
}
</script>