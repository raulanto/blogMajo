<script setup lang="ts">
useHead({
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    htmlAttrs: {
        lang: 'en'
    }
});

const title = 'Poemario';
const description = 'lugar seguro';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    // ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterCard: 'summary_large_image'
});



</script>

<template>
        <div
            class="hero  min-h-screen"
            style="background-image: url(https://jetnews.com.mx/wp-content/uploads/2017/05/pl-201437841722.png);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Poemario</h1>
                    <p class="mb-5">
                        Lugar donde se subiran todos los pemas dedicados a majo
                    </p>
                    <NuxtLink  to="blog/">
                        <button class="btn btn-primary">Empezar a leer</button>
                    </NuxtLink >
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>