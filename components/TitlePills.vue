<template>
    <a type="button"
        class="transtion w-fit group flex items-center justify-center rounded-full backdrop-blur-xl bg-gradient-to-r from-[#414141] to-[#C9C9C9] p-[1.5px] text-[#C9C9C9] duration-300 hover:shadow-2xl hover:shadow-[#9AE8B470]">
        <div
            class="flex text-sm px-5 py-2.5 h-full w-full items-center justify-center rounded-full bg-[#1d1d1d] backdrop-blur-xl transition duration-300 ease-in-out group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
            {{ title }}</div>
    </a>
</template>

<script setup>

defineProps({
    title: String,
})

</script>