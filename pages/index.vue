<template>
    <div class="bg-[#121212] text-[#ECECEC] min-h-screen font-['Inter']">
        <section id="hero" class="relative w-full h-screen">
            <NuxtImg src="/img/hero-bg.png" class="absolute top-0 right-0"></NuxtImg>

            <div class="w-full h-full flex flex-col justify-center items-center gap-10 relative z-20">
                <div
                    class="px-5 py-2.5 bg-[#484848]/20 rounded-full border border-[#c9c9c9] backdrop-blur-[50px] text-[#c9c9c9] w-fit">
                    Hello, I'm Reza 👋</div>
                <div
                    class="text-center text-transparent bg-clip-text text-8xl bg-gradient-to-b from-[#ECECEC] from-50% to-[#ececec00]">
                    Crafting thoughtful, <br> research-driven solutions
                </div>
                <div class="flex gap-4">
                    <button
                        class="py-4 px-8 bg-[#ececec]/10 rounded-full border border-[#ececec]/25 backdrop-blur-[20px] ">Contact
                        Me</button>

                    <button class="py-4 px-8 bg-[#ececec] rounded-full text-[#121212] font-semibold">View My
                        Works</button>
                </div>
            </div>
        </section>

        <section id="works" class="py-20 container mx-auto px-8">

            <div class="flex flex-col items-center gap-4">
                <div
                    class="px-5 py-2.5 bg-[#484848]/20 rounded-full border border-[#c9c9c9] backdrop-blur-[50px] text-[#c9c9c9] w-fit flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-[#ececec]"></div>
                    Portfolio
                </div>

                <div
                    class="text-center text-transparent bg-clip-text text-5xl bg-gradient-to-b from-[#ECECEC] from-50% to-[#ececec00]">
                    My Works
                </div>

            </div>


        </section>

    </div>
</template>
