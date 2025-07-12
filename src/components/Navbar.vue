<script setup>
import Menu from './Menu.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOpen = ref(false)
const isScrollingDown = ref(false)
const isAtTop = ref(true)

const useIsMobile = window.innerWidth < 768
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  isAtTop.value = isOpen.value || window.scrollY <= 10
}

const closeMenu = () => isOpen.value = false
const handleResize = () => { 
  if (useIsMobile) closeMenu()
  closeMenu() // optional
}
let lastScrollY = window.scrollY

const handleScroll = () => {
  const currentY = window.scrollY
  isScrollingDown.value = currentY > lastScrollY
  isAtTop.value = currentY <= 10
  lastScrollY = currentY
  closeMenu() // optional
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

// prevent body overflow when menu is open
watch(isOpen, (newVal) => {
  document.body.classList.toggle('overflow-hidden', newVal)
})
</script>

<template>
  <header
    class="fixed w-full z-[999] transition-all duration-300 "
    :class="[
      isScrollingDown ? '-translate-y-[101%]' : 'translate-y-0',
      isAtTop ? 'bg-primary' : 'bg-primary/87'
    ]"
  >
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
header {
  will-change: transform, background-color;
}
</style>
