<script setup>
import Menu from './Menu.vue';
</script>

<template>
  <header class="fixed w-full z-[999] bg-primary">
    <nav class="container h-[70px] flex items-center justify-between">
      <div>
        <img src="/logo.png" alt="Logo" class="h-17 object-contain" />
      </div>
      
      <div>
        <Menu />
      </div>
      <!-- <ul class="flex items-center gap-6 text-white">
        <li class=""><a href="/">Work</a></li>
        <li class=""><a href="/about">About</a></li>
        <li class=""><a href="/services">Services</a></li>
        <li class=""><a href="/ideas">Ideas</a></li>
        <li class=""><a href="/careers">Careers</a></li>
        <li class=""><a href="/contact">Contact</a></li>
      </ul> -->
    </nav>
  </header>
</template>

<style scoped>

</style>