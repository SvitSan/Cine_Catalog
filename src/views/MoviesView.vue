<script setup>
import { movies } from '@/data/movies';     
</script>

<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <RouterLink :to="{
          name: 'movie-detail',
          params: {
            id: movie.id
          }
        }">
          {{ movie.title }}
        </RouterLink>
      </li>
    </ul>

  </div>
</template>