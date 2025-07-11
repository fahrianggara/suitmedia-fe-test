<script setup>
import Menu from './Menu.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const useIsMobile = window.innerWidth < 768 // Adjust based on your breakpoint
const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
const handleResize = () => { if (useIsMobile) closeMenu() }

const isScrollingDown = ref(false)
let lastScrollY = window.scrollY
const handleScroll = () => {
  const currentY = window.scrollY
  isScrollingDown.value = currentY > lastScrollY
  lastScrollY = currentY
  closeMenu() // Close menu on scroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="fixed w-full z-[999] bg-primary transition-transform duration-300"
  :class="{ '-translate-y-[101%]': isScrollingDown }">
    <nav class="container h-[70px] flex items-center justify-between">
      <div>
        <img src="/logo.png" alt="Logo" class="h-16 object-contain" />
      </div>

      <!-- Desktop Menu -->
      <div class="menu hidden md:block" v-if="!isOpen">
        <Menu class="flex items-center lg:gap-6 gap-5 text-white" />
      </div>

      <!-- Mobile Hamburger -->
      <div class="md:hidden block">
        <div class="menu-button" :class="{ open: isOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>

  <Transition name="show-mobile-overlay">
    <div v-if="isOpen" class="mobile-overlay" :class="{'height-100': isScrollingDown}" @click="closeMenu"></div>
  </Transition>

  <Transition name="show-mobile-nav">
    <div v-if="isOpen" class="mobile-menu" :class="{ open: isOpen, 'height-100': isScrollingDown }">
      <Menu @close-menu="closeMenu" />
    </div>
  </Transition>
</template>

<style scoped>

</style>
