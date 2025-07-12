<script setup>
import Banner from '@/components/Ideas/Banner.vue'
import Filtering from '@/components/Ideas/Filtering.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { useIdeasStore } from '@/stores/ideas'
import { formatDate } from '@/composables/date'

const perPage = ref(10)
const sortBy = ref('-published_at')
const page = ref(1)

const ideasStore = useIdeasStore()

const fetch = () => {
  ideasStore.fetchData({ page: page.value, perPage: perPage.value, sortBy: sortBy.value })
}

// Fetch on mount
onMounted(fetch)

// Fetch when filters or page change
watch([perPage, sortBy], () => {
  page.value = 1
  fetch()
})

watch(page, fetch)

const formattedIdeas = computed(() => {
  return ideasStore.ideas.map((idea) => ({
    ...idea,
    formattedDate: formatDate(idea.published_at), // pakai helper kamu sendiri
  }))
})

// Dummy data for skeletons
const loadings = computed(() => Array.from({ length: perPage.value }))
</script>

<template>
  <Banner />

  <div class="wrapper z-10">
    <div class="container pt-12 py-6">
      <Filtering v-model:perPage="perPage" v-model:sortBy="sortBy" />

      <div class="grid lg:grid-cols-4 md:grid-cols-3 hpmd:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div
          v-for="(idea, index) in ideasStore.loading ? loadings : formattedIdeas"
          :key="ideasStore.loading ? index : idea.id"
          class="bg-white rounded-lg shadow hover:shadow-lg transition-all hover:text-primary"
        >
          <!-- Gambar -->
          <div class="w-full h-40 rounded-t-lg overflow-hidden">
            <div v-if="ideasStore.loading" class="animate-pulse bg-gray-200 w-full h-full"></div>
            <img v-else
              :src="'https://placehold.co/600x400?text=' + idea.title"
              :alt="`Image for ${idea.title}`"
              loading="lazy"
              class="w-full h-40 object-cover"
            />
          </div>

          <!-- Konten -->
          <div class="p-4">
            <!-- Tanggal -->
            <div v-if="ideasStore.loading" class="animate-pulse h-4 bg-gray-200 w-24 mb-2 rounded"></div>
            <time v-else class="text-gray-500 text-[14px] mb-1 block uppercase">
              {{ idea.formattedDate }}
            </time>

            <!-- Judul -->
            <div v-if="ideasStore.loading" class="space-y-1">
              <div class="animate-pulse h-4 bg-gray-200 w-full rounded"></div>
              <div class="animate-pulse h-4 bg-gray-200 w-4/5 rounded"></div>
              <div class="animate-pulse h-4 bg-gray-200 w-3/5 rounded"></div>
            </div>
            <h2 v-else class="text-[16px] line-clamp-3">
              {{ idea.title }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8 mb-5" v-if="!ideasStore.loading && ideasStore.meta.total > perPage">
        <nav class="flex items-center gap-1">
          <button
            class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            :disabled="page === 1"
            @click="page--"
          >
            Previous
          </button>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">
            {{ page }}
          </span>
          <button
            class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            :disabled="page === ideasStore.meta.last_page"
            @click="page++"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
