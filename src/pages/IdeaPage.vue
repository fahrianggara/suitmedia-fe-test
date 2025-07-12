<script setup>
import Pagination from '@/components/Pagination.vue'
import Banner from '@/components/Ideas/Banner.vue'
import Filtering from '@/components/Ideas/Filtering.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { useIdeasStore } from '@/stores/ideas'
import { formatDate } from '@/composables/date'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const ideasStore = useIdeasStore()

const page = ref(Number(route.query.page) || 1)
const perPage = ref(Number(route.query.perPage) || 10)
const sortBy = ref(route.query.sortBy || '-published_at')

const fetch = () => {
  ideasStore.fetchData({ 
    page: page.value, 
    perPage: perPage.value, 
    sortBy: sortBy.value 
  })
}

// Handle page change from pagination
const handlePageChange = (newPage) => {
  page.value = newPage
}

// Watch & sync URL
watch([page, perPage, sortBy], () => {
  router.replace({
    query: {
      page: page.value,
      perPage: perPage.value,
      sortBy: sortBy.value,
    }
  })
})

// Watch filter changes → reset page
watch([perPage, sortBy], () => {
  page.value = 1
  fetch()
})

// Watch page change
watch(page, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    fetch()
  }
})

// Fetch on mount
onMounted(fetch)

// Format ideas with computed property
const formattedIdeas = computed(() => {
  return ideasStore.ideas.map((idea, index) => {
    const pickImage = (group) =>
      Array.isArray(group)
        ? group.find(item => item.mime?.startsWith('image/'))?.url
        : null

    const imageUrl =
      pickImage(idea.medium_image) ||
      pickImage(idea.small_image) ||
      (index % 2 === 0 ? '/thumbnail-1.jpg' : '/thumbnail-2.jpg')

    return {
      ...idea,
      formattedDate: formatDate(idea.published_at),
      imageUrl,
    };
  });
});

// Dummy data for skeletons
const loadings = computed(() => Array.from({ length: perPage.value }))
</script>

<template>
  <Banner />

  <div class="wrapper z-10" id="ideas-list">
    <div class="container pt-12 py-6">
      <Filtering v-model:perPage="perPage" v-model:sortBy="sortBy">
        <template #pagination-info>
          <p>
            Showing {{ ideasStore.meta.from ?? '0' }} - 
            {{ ideasStore.meta.to ?? '0'  }} of 
            {{ ideasStore.meta.total ?? '0' }}
          </p>
        </template>
      </Filtering>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 hpmd:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div
          v-for="(idea, index) in ideasStore.loading ? loadings : formattedIdeas"
          :key="ideasStore.loading ? index : idea.id"
          class="bg-white rounded-lg shadow hover:shadow-lg transition-all hover:text-primary cursor-pointer
          transfrom translate-0 hover:-translate-y-1 duration-300 ease-in-out overflow-hidden"
        >
          <!-- Gambar -->
            <div class="w-full h-40 rounded-t-lg overflow-hidden">
            <div v-if="ideasStore.loading" class="animate-pulse bg-gray-200 w-full h-full"></div>
            <img v-else
              v-lazy="idea.imageUrl"
              :alt="`Image for ${idea.title}`"
              loading="lazy"
              class="w-full h-40 object-cover"
              @error="(e) => e.target.src = (index % 2 === 0 ? '/thumbnail-1.jpg' : '/thumbnail-2.jpg')"
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
      <Pagination 
        :meta="ideasStore.meta"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
</style>