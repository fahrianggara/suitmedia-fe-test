<script setup>
import { RouterView } from 'vue-router'
import { useHideNavbar } from './composables/hideNavbar'
import Navbar from './components/Navbar.vue'

const { routeReady, showNavbar } = useHideNavbar()
</script>

<template>
  <template v-if="routeReady && showNavbar">
    <Navbar />
  </template>

  <main class="flex flex-col">
    <RouterView />
  </main>
</template>
