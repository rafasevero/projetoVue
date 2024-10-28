import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Characters from '../views/Characters.vue';
import Favorites from '../views/Favorites.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Stranger Things'
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
      meta: {
        title: 'Characters'
      }
    },
   
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      meta: {
        title: 'Favorites'
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
