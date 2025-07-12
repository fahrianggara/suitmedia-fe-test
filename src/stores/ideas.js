// stores/ideas.js
import { defineStore } from "pinia";
import apiClient from "@/composables/axios";
import { ref } from "vue";

export const useIdeasStore = defineStore("ideas", () => {
  const loading = ref(false);
  const ideas = ref([]);
  const links = ref({});
  const meta = ref({});

  const fetchData = async ({
    page = 1,
    perPage = 10,
    sortBy = '-published_at',
    appendImage = 'medium_image'
  }) => {
    ideas.value = [];
    loading.value = true;
    try {
      const response = await apiClient.get("/ideas", {
        params: {
          'page[number]': page,
          'page[size]': perPage,
          'append[]': appendImage,
          'sort': sortBy,
        },
      });

      ideas.value = response.data.data;
      links.value = response.data.links;
      meta.value = response.data.meta;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    ideas,
    links,
    meta,
    fetchData,
  };
});
