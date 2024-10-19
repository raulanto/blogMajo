<script setup lang="ts">

import Poe from "~/components/ui/poe.vue";
import poemas from "~/assets/poemas.json";

definePageMeta({
    layout: 'dasboradlyt',

});
</script>

<template>

        <article class="flex flex-col justify-center items-center  ">
            <Poe
                v-for="(poema, index) in poemas.poemas"
                :key="index"
                :conten="poema.contenido"
                :titulo="poema.titulo"
                :img="poema.img"
            />
        </article>

</template>

