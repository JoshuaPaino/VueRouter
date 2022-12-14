import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import sourceData from '@/data.json'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {

      path: '/destination/:id/:slug',
      name: 'destination.show',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DestinationShow.vue'),
      props: route => ({ ...route.params, id: parseInt(route.params.id) }),
      beforeEnter(to, from) {
        const exists = sourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )
        if (!exists) return {
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        }
      },
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceShow.vue'),
          props: route => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
  ], linkActiveClass: 'vActiveLink'
})

export default router
