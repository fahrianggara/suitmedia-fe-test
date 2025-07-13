<script setup>
import { useBannerScroll } from '@/composables/useBannerScroll'

const { bannerRef, textRef } = useBannerScroll()
</script>

<template>
  <div ref="bannerRef" class="banner relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-image: url('/banner.png');">

    <div class="absolute inset-0 bg-black/65 backdrop-blur-[0px]"></div>

    <div ref="textRef" class="relative text-center text-white z-10 transition-transform duration-300 ease-out">
      <h1 class="text-3xl font-bold mb-1">Ideas</h1>
      <p class="text-lg">Where all our great things begin.</p>
    </div>
  </div>
</template>

<style scoped>

</style>