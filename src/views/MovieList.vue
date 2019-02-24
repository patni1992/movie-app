<template>
  <b-row>
    <b-col sm="6" lg="3" v-for="movie in movies" :key="movie.id">
      <b-card
        :title="movie.title"
        :img-src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        img-alt="Movie poster card"
        img-top
        class=" m-3 p-0 border-0"
      >
        <b-card-text> Rating {{ movie.vote_average }} / 10 </b-card-text>
      </b-card>
    </b-col>
  </b-row>
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
