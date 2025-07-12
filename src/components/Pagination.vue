<script setup>
const props = defineProps({
  meta: Object,
})
const emit = defineEmits(['update:page'])

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
    const ideasList = document.getElementById('ideas-list')
    if (ideasList) {
      const offsetTop = ideasList.offsetTop - 50
      window.scrollTo({
        top: offsetTop,
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
          'px-4 py-2 border rounded-md text-sm transition-colors',
          link.active
            ? 'bg-primary text-white border-primary cursor-default'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer',
          !link.url && 'opacity-50 cursor-not-allowed',
        ]"
      />
    </nav>
  </div>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>