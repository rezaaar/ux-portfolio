<template>
    <div class="bg-[#121212] text-[#ECECEC] min-h-screen font-['Inter']">
        <section id="hero" class="relative w-full h-screen">
            <NuxtImg src="/img/hero-bg.png" class="absolute top-0 right-0"></NuxtImg>

            <div class="w-full h-full flex flex-col justify-center items-center gap-10 relative z-20">
                <TitlePills title="Hello, I'm Reza 👋" href="#about" />

                <div
                    class="text-center text-transparent bg-clip-text text-4xl md:text-6xl lg:text-8xl bg-gradient-to-b from-[#ECECEC] from-50% to-[#ececec00]">
                    Crafting thoughtful, <br> research-driven solutions
                </div>
                <div class="flex flex-col md:flex-row items-center gap-4">
                    <a href="#contact"
                        class="py-4 px-8 w-fit bg-[#ececec]/10 rounded-full border border-[#ececec]/25 backdrop-blur-[20px] ">Contact
                        Me</a>

                    <a href="#works" class="py-4 px-8 w-fit bg-[#ececec] rounded-full text-[#121212] font-semibold">View
                        My
                        Works</a>
                </div>
            </div>
        </section>

        <section id="works" class="py-20 container mx-auto px-8">

            <div class="flex flex-col items-center gap-8">

                <TitlePills title="Portfolio" />

                <div
                    class="text-center text-transparent bg-clip-text text-5xl bg-gradient-to-b from-[#ECECEC] from-50% to-[#ececec00]">
                    My Works
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 mt-4">
                    <PortfolioCard v-for="work in works" :key="work.title" :image="work.cover" :title="work.title"
                        :category="work.category" />
                </div>

            </div>
        </section>

        <section id="about" class="py-20 container mx-auto px-8">
            <div
                class="flex flex-col md:flex-row items-center justify-center h-full space-y-6 md:space-y-0 md:space-x-8">
                <NuxtImg src="/img/reza.png" class="w-full md:w-1/2 max-w-md md:max-w-none"></NuxtImg>

                <div class="text-center md:text-left space-y-4">
                    <h3 class="text-5xl font-medium">Reza Athallah Rasendriya</h3>
                    <p class="text-[#C9C9C9] leading-relaxed">
                        I craft user-centered solutions that are innovative, practical, and seamlessly bridge concept
                        and
                        implementation. With a research-driven approach, I uncover unique insights to design engaging,
                        functional experiences that elevate user interaction.
                    </p>
                </div>
            </div>
        </section>

        <section id="contact" class="py-20 container mx-auto px-8">
            <div>
                <div
                    class="text-left text-transparent bg-clip-text text-7xl md:text-9xl bg-gradient-to-b from-[#ECECEC] from-50% to-[#ececec00] mb-8">
                    Contact Me
                </div>
                <div class="block md:flex gap-8 text-[#C9C9C9]">
                    <p>+62895604823044</p>
                    <p>rezaa.ath@gmail.com</p>
                    <a href="https://www.linkedin.com/in/rezaaar/" target="_blank"
                        class="hover:text-[#ECECEC] underline">LinkedIn</a>
                </div>
            </div>
        </section>

    </div>
</template>


<script setup>

const worksStore = useWorksStore();
const works = worksStore.works;


</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>