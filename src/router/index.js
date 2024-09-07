import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NsfwView from '../views/NsfwView.vue'
import BookView from '../views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/bookachoose', name: 'book', component: BookView },
    { path: '/nsfwclothes', name: 'nsfw', component: NsfwView },
  ]
})

export default router
