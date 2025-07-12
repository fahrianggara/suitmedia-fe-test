<script setup>
import Banner from '@/components/Ideas/Banner.vue'
import Filtering from '@/components/Ideas/Filtering.vue'
import { ref, onMounted } from 'vue'

const perPage = ref(10)
const sortBy = ref('newest')

// Simulasi loading data
const isLoading = ref(true)
const items = ref([])

onMounted(() => {
  setTimeout(() => {
    items.value = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      img: 'https://placehold.co/600x400?text=Idea',
      date: '11 Juli 2025',
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, magnam.'
    }))
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <Banner />

  <div class="wrapper z-10">
    <div class="container pt-12 py-6">
      <Filtering v-model:perPage="perPage" v-model:sortBy="sortBy" />

      <div class="grid lg:grid-cols-4 md:grid-cols-3 hpmd:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div v-for="i in (isLoading ? 10 : items.length)" :key="i" 
          class="bg-white rounded-lg shadow hover:shadow-lg transition-all hover:text-primary">
          
          <!-- Skeleton atau gambar -->
          <div class="w-full h-40 rounded-t-lg overflow-hidden">
            <div v-if="isLoading" class="animate-pulse bg-gray-200 w-full h-full"></div>
            <img v-else :src="items[i - 1].img" alt="Idea" loading="lazy"
              class="w-full h-40 object-cover" />
          </div>

          <div class="p-4">
            <!-- Skeleton atau time -->
            <div v-if="isLoading" class="animate-pulse h-4 bg-gray-200 w-24 mb-2 rounded"></div>
            <time v-else class="text-gray-500 text-[14px] mb-1 block uppercase">
              {{ items[i - 1].date }}
            </time>

            <!-- Skeleton atau h2 -->
            <div v-if="isLoading" class="space-y-1">
              <div class="animate-pulse h-4 bg-gray-200 w-full rounded"></div>
              <div class="animate-pulse h-4 bg-gray-200 w-4/5 rounded"></div>
              <div class="animate-pulse h-4 bg-gray-200 w-3/5 rounded"></div>
            </div>
            <h2 v-else class="text-[16px] line-clamp-3">
              {{ items[i - 1].title }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8 mb-5">
        <nav class="flex items-center gap-1">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            :disabled="perPage <= 1" @click="perPage--">Previous</button>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">1</span>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">2</span>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">5</span>
          <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            @click="perPage++">Next</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: improve skeleton pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
