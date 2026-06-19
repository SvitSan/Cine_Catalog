import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieOverview from "../components/MovieOverview.vue";
import MovieCast from "../components/MovieCast.vue";
import { auth } from "../auth.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/MoviesView.vue"),
  },

  {
    path: "/movies/:id",
    name: "movie-detail",
    component: () => import("../views/MovieDetailView.vue"),
    
    children: [
      {
        path: "overview",
        name: "movie-overview",
        component: MovieOverview,
      },
      {
        path: "cast",
        name: "movie-cast",
        component: MovieCast,
      },
    ],
  },
  
  {
    path: "/watchlist",
    name: "watchlist",
    component: () => import("../views/WatchlistView.vue"),

    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import('../views/NotFoundView.vue')
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return {
      name: "home",
    };
  }
});

export default router;
