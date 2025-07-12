import { createRouter, createWebHistory } from 'vue-router'
import IdeaPage from '@/pages/IdeaPage.vue'
import HomePage from '@/pages/HomePage.vue'
import WorkPage from '@/pages/WorkPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import CareerPage from '@/pages/CareerPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicePage,
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: IdeaPage,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareerPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    // not found route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue'),
      meta: { hideNavbar: true }
    }
  ],
})

export default router
