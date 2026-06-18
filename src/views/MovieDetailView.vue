<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { movies } from '../data/movies'

const route = useRoute()

const movie = computed(() => {
  return movies.find(
    m => m.id === Number(route.params.id)
  )
})
</script>


<template>

  <div v-if="movie">

    <RouterLink to="/movies">
      Backe to Movies
    </RouterLink>

    <h1>{{ movie.title }}</h1>

    <RouterLink :to="{
      name: 'movie-overview',
      params: {
        id: movie.id
      }
    }">
      Overview
    </RouterLink>

    |

    <RouterLink :to="{
      name: 'movie-cast',
      params: {
        id: movie.id
      }
    }">
      Cast
    </RouterLink>

    <hr>

    <p>
      <strong>Year:</strong>
      {{ movie.year }}
    </p>

    <p>
      <strong>Genre:</strong>
      {{ movie.genre }}
    </p>

    <p>
      {{ movie.overview }}
    </p>

    <hr>

    <RouterView />

  </div>
</template>