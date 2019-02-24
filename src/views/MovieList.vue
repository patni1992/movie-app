<template>
  <div>
    <div class="mt-3" style="maxWidth: 500px; margin: 0 auto;">
      <b-form-input
        v-on:keyup.enter="submit"
        style="width: 100%"
        class="d-block p-2"
        type="text"
        placeholder="Search for a movie"
      />
    </div>
    <b-row class="m-3">
      <b-col sm="6" lg="3" v-for="movie in movies" :key="movie.id">
        <b-card
          :title="movie.title"
          :img-src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          img-alt="Movie poster card"
          img-top
          class="p-0 border-0"
        >
          <b-card-text> Rating {{ movie.vote_average }} / 10 </b-card-text>
        </b-card>
      </b-col>
    </b-row>
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
  methods: {
    submit(e) {
      const query = e.target.value.trim();

      if (query.length) {
        HTTP.get("/search/movie", {
          params: {
            query
          }
        })
          .then(resp => {
            this.movies = resp.data.results;
          })
          .catch(error => console.log(error));
      }
    }
  },

  created() {
    HTTP.get("/discover/movie").then(resp => {
      this.movies = resp.data.results;
    });
  }
};
</script>
