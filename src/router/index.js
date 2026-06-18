import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import MovieOverview from '../components/MovieOverview.vue'
import MovieCast from '../components/MovieCast.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },

  {
  path: '/movies/:id',
  name: 'movie-detail',
  component: MovieDetailView,

  children: [
    {
      path: 'overview',
      name: 'movie-overview',
      component: MovieOverview
    },
    {
      path: 'cast',
      name: 'movie-cast',
      component: MovieCast
    }
  ]
}


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router