<script lang="ts" setup>

import NavBlog from "~/components/ui/navBlog.vue";
import FootBlog from "~/components/ui/footBlog.vue";
</script>

<template>
  <nav-blog/>
  <section class="antialiased fondo  min-h-screen  object-cover bg-bottom ">
    <section class=" md:scroll-ml-60 h-full pt-8 px-14   md:container md:mx-auto sm:container ">
      <slot/>
    </section>
  </section>
    <foot-blog/>
</template>

<style scoped>
.fondo{
    background-color: #FAE7F4;
    opacity: 1;
    background-image:  linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, #FAE7F4 1px);
    background-size: 20px 20px;
}


</style>