<template>
  <div class="MovieList row justify-content-center ">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="card col-2 m-3 p-0 border-0"
    >
      <img
        class="card-img-top m-0 p-0"
        :src="`http://image.tmdb.org/t/p/w300/${movie.poster_path}`"
        alt="Card image"
      />
      <div class="card-body">
        <h3 class="card-title">{{ movie.title }}</h3>
        <div>
          <p>Rating {{ movie.vote_average }} / 10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api";
export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    HTTP.get("/discover/movie").then(resp => {
      this.movies = resp.data.results;
    });
  }
};
</script>
