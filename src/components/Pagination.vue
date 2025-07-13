<script setup>
import { useLenis } from '@/composables/useLenis'

const props = defineProps({
  meta: Object,
})
const emit = defineEmits(['update:page'])
const { lenis } = useLenis()

const navigate = (url) => {
  if (!url) return
  
  try {
    let pageNumber
    
    if (url.startsWith('http')) { // Full URL
      const parsed = new URL(url)
      pageNumber = parsed.searchParams.get('page[number]') || parsed.searchParams.get('page')
    } 
    
    else { // Relative URL
      const urlParams = new URLSearchParams(url.split('?')[1])
      pageNumber = urlParams.get('page[number]') || urlParams.get('page')
    }

    emit('update:page', Number(pageNumber))

    // scroll to ideas-list - 100
    const target = document.getElementById('ideas-list')
    if (target && lenis.value) {
      lenis.value.scrollTo(target, {
        offset: -50,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      })
    }

    // fallback for browsers without Lenis
    else if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth',
      })
    }
  } 

  catch (error) {
    console.error('Error parsing URL:', error)
    
    // Fallback: try to extract number from URL string
    const match = url.match(/page(?:\[number\])?[=\[](\d+)/)
    if (match) emit('update:page', Number(match[1]))
  }
}

const formatLabel = (label) => {
  if (label.includes('&laquo;')) return '«'
  if (label.includes('&raquo;')) return '»'
  if (label.includes('&hellip;')) return '...'
  return label
}
</script>

<template>
  <div v-if="meta?.links?.length" class="flex justify-center mt-8 mb-5">
    <nav class="flex flex-wrap justify-center items-center gap-1">
      <button
        v-for="(link, i) in meta.links"
        :key="i"
        :disabled="!link.url"
        :readonly="link.active"
        @click="navigate(link.url)"
        v-html="formatLabel(link.label)"
        :class="[
          'h-[40px] w-[40px] border rounded-md text-sm transition-all transform translate-y-0 duration-300 ease-in-out ',
          link.active
            ? 'bg-primary text-white border-primary cursor-default'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer hover:-translate-y-[3px]',
          !link.url && 'disabled:opacity-50 disabled:hover:-translate-y-0 disabled:cursor-default',
        ]"
      />
    </nav>
  </div>
</template>

<style scoped>

</style>