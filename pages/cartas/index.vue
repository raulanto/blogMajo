<script setup lang="ts">

definePageMeta({
    layout: 'dasboradlyt',

});
</script>

<template>
    <div class="max-w-screen-lg mx-auto">
        <main class="mt-10 bg">

            <header class="mb-4 md:mb-0 w-full mx-auto relative">
                <section class="px-4 lg:px-0">
                    <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
                        Cartas para majo
                    </h2>
                </section>
            </header>
            <section class="">
                <div class="gap-8 items-center   xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full hidden dark:block " src="../../assets/img/fondo.jpeg" alt="dashboard image">
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold ">Carta 1</h2>
                        <NuxtLink class="btn" to="/cartas/carta1">Leer</NuxtLink>
                    </div>
                </div>
            </section>
            <section class="">
                <div class="gap-8 items-center  xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full hidden dark:block" src="../../assets/img/fondo2.webp" alt="dashboard image">
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold ">Carta 2</h2>
                        <NuxtLink class="btn" to="/cartas/carta2">Leer</NuxtLink>
                    </div>
                </div>
            </section>



        </main>

    </div>

</template>

