// composables/useBannerScroll.js
import { ref, watch, onMounted, onUnmounted } from 'vue'

export function useBannerScroll() {
  const bannerRef = ref(null)
  const textRef = ref(null)
  const isMobile = ref(window.innerWidth < 768)

  const handleScroll = () => {
    const scrollY = window.scrollY

    if (bannerRef.value) {
      bannerRef.value.style.backgroundPositionY = `${scrollY * 0.5}px`

      if (!isMobile.value) {
        const size = Math.min(100 + scrollY * 0.1, 200)
        bannerRef.value.style.backgroundSize = `${size}%`
      } else {
        bannerRef.value.style.backgroundSize = 'cover'
      }
    }

    if (textRef.value) {
      textRef.value.style.transform = `translateY(-${scrollY * 0.15}px)`
    }
  }

  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }

  watch(isMobile, (newVal) => {
    if (bannerRef.value) {
      bannerRef.value.style.backgroundSize = newVal ? 'cover' : '100%'
    }
  })

  onMounted(() => {
    if (bannerRef.value) {
      bannerRef.value.style.backgroundPositionY = '0px'
      bannerRef.value.style.backgroundSize = isMobile.value ? 'cover' : '100%'
    }

    if (textRef.value) {
      textRef.value.style.transform = 'translateY(0px)'
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })

  return {
    bannerRef,
    textRef,
    isMobile,
  }
}
