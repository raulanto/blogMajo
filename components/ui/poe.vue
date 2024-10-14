<script setup lang="ts">
const props = defineProps({
    conten: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    img:{
        type:String
    }
});
</script>

<template>
    <div class="card bg-base-100 w-96 shadow-xl my-3">
        <figure>
            <div class="group relative m-0 flex w-96 shadow-xl sm:mx-auto sm:max-w-lg">
                <div
                    class="z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                >
                    <img
                        :src="img"
                        class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                    />
                </div>
                <div
                    class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"
                >
                    <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
                        {{ titulo }}
                    </h1>
                </div>
            </div>
        </figure>
        <div class="card-body">
            <!-- Aplica el estilo preserve-whitespace para respetar los saltos de línea -->
            <p class="preserve-whitespace font-serif">
                {{ conten }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.preserve-whitespace {
    white-space: pre-wrap;
}
</style>
