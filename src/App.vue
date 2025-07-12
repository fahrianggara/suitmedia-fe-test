<script setup>
import { RouterView, useRoute  } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();
</script>

<template>
  <template v-if="!route.meta.hideNavbar">
    <Navbar />
  </template>

  <main class="flex flex-col">
    <RouterView />
  </main>
</template>
