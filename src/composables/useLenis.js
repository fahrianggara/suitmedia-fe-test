// composables/useLenis.js
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

export function useLenis({ duration = 1.5 } = {}) {
  const isMobile = ref(window.innerWidth < 768)
  const lenis = ref(null)

  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }

  const raf = (time) => {
    lenis.value?.raf(time)
    requestAnimationFrame(raf)
  }

  onMounted(() => {
    if (!isMobile.value) {
      lenis.value = new Lenis({
        duration,
        smooth: true,
      })
      requestAnimationFrame(raf)
    }

    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)

    if (lenis.value) {
      lenis.value.destroy()
      lenis.value = null
    }
  })

  // Watch for change between mobile <=> desktop
  watch(isMobile, (mobile) => {
    if (mobile && lenis.value) {
      lenis.value.destroy()
      lenis.value = null
    }

    if (!mobile && !lenis.value) {
      lenis.value = new Lenis({
        duration,
        smooth: true,
      })
      requestAnimationFrame(raf)
    }
  })

  return {
    lenis,
    isMobile,
  }
}
