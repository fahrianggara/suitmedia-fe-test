<script setup>
import { RouterView } from 'vue-router'
import { useHideNavbar } from './composables/hideNavbar'
import { useLenis } from './composables/useLenis'
import Navbar from './components/Navbar.vue'

const { routeReady, showNavbar } = useHideNavbar()

useLenis({
  duration: 1.1,
})
</script>

<template>
  <template v-if="routeReady && showNavbar">
    <Navbar />
  </template>

  <main class="flex flex-col">
    <RouterView />
  </main>
</template>
