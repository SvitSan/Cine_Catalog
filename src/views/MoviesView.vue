<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { movies } from '../data/movies'

const route = useRoute()
const router = useRouter()

const filteredMovies = computed(() => {
  const genre = route.query.genre

  if (!genre) {
    return movies
  }

  return movies.filter(
    movie => movie.genre === genre
  )
})

function filterGenre(genre) {
  router.push({
    query: {
      genre
    }
  })
}
</script>

<template>
  <div>
    <h1>Movies</h1>

    <button @click="filterGenre('Drama')">
      Drama
    </button>

    <button @click="filterGenre('Sci-Fi')">
      Sci-Fi
    </button>

    <button @click="filterGenre('Romance')">
      Romance
    </button>
    
    <hr>

    <ul>
      <li
        v-for="movie in filteredMovies"
        :key="movie.id"
      >
        <RouterLink
          :to="{
            name: 'movie-detail',
            params: {
              id: movie.id
            }
          }"
        >
          {{ movie.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>