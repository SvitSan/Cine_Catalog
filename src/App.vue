<script setup lang="ts">

</script>



<template>
  <div>
    <h1>CineCatalog</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>

      |

      <RouterLink to="/movies">
        Movies
      </RouterLink>

      |

      <RouterLink to="/watchlist">Watchlist</RouterLink>
    </nav>

    <hr>

    <RouterView />
    
  </div>
</template>