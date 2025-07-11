<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerRef = ref(null)
const textRef = ref(null)

const handleScroll = () => {
  const scrollY = window.scrollY
  if (bannerRef.value) bannerRef.value.style.backgroundPositionY = `${scrollY * 0.5}px`
  if (textRef.value) textRef.value.style.transform = `translateY(-${scrollY * 0.15}px)`
}

onMounted(() => {
  if (bannerRef.value) bannerRef.value.style.backgroundPositionY = '0px'
  if (textRef.value) textRef.value.style.transform = 'translateY(0px)'
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <div ref="bannerRef" class="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/banner.png'); clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);">

    <div class="absolute inset-0 bg-black/55 backdrop-blur-[0px]"></div>

    <div ref="textRef" class="relative text-center text-white z-10 transition-transform duration-300 ease-out">
      <h1 class="text-3xl font-bold mb-1">Ideas</h1>
      <p class="text-lg">Where all our great things begin.</p>
    </div>
  </div>
</template>

<style scoped>

</style>