import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useHideNavbar() {
  const showNavbar = ref(false)
  const routeReady = ref(false)

  const route = useRoute()
  const router = useRouter()

  onMounted(async () => {
    await router.isReady()
    routeReady.value = true
    showNavbar.value = !route.meta?.hideNavbar
  })

  watch(
    () => route.meta,
    (meta) => showNavbar.value = !meta?.hideNavbar
  )

  return { showNavbar, routeReady }
}