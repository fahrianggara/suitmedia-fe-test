<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { useLenis } from './composables/useLenis'
import { onMounted, onUnmounted } from 'vue';

let lenis

onMounted(() => {
  const isDesktop = window.innerWidth >= 768
  if (isDesktop) lenis = useLenis()
})

onUnmounted(() => { if (lenis) lenis.destroy() })
</script>

<template>
  <Navbar />

  <main class="flex flex-col">
    <RouterView class="" />
  </main>
</template>
