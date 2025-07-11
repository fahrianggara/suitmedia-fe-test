<script setup>
import Menu from './Menu.vue';
import { ref } from 'vue';
</script>

<template>
  <header class="fixed w-full z-[999] bg-primary">
    <nav class="container h-[70px] flex items-center justify-between">
      <div>
        <img src="/logo.png" alt="Logo" class="h-17 object-contain" />
      </div>
      
      <div class="menu">
        <Menu class="flex items-center gap-6 text-white" />
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>