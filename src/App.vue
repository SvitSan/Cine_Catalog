

<template>
  <div>
    <h1>CineCatalog</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>

      |

      <RouterLink to="/movies">
        Movies
      </RouterLink>
    </nav>

    <hr>

    <RouterView />
  </div>
</template>