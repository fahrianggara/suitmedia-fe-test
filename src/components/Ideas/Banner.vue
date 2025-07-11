<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerRef = ref(null)

const handleScroll = () => {
  const scrollY = window.scrollY
  if (bannerRef.value) {
    bannerRef.value.style.backgroundPositionY = `${scrollY * 0.5}px`
  }
}

onMounted(() => {
  if (bannerRef.value) bannerRef.value.style.backgroundPositionY = '0px'
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
<div ref="bannerRef" class="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center "
  style="background-image: url('/banner.png'); clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);">

  <div class="absolute inset-0 bg-black/55 backdrop-blur-[0px]"></div>

  <div class="relative text-center text-white z-10">
    <h1 class="text-3xl font-bold mb-1">Ideas</h1>
    <p class="text-lg">Where all our great things begin.</p>
  </div>
</div>
</template>

<style scoped>

</style>