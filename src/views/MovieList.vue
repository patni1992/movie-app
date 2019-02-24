<template>
  <div>
    <b-alert variant="danger" :show="!!error">{{ error }}</b-alert>
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
      movies: [],
      error: ""
    };
  },
  methods: {
    async submit(e) {
      const query = e.target.value.trim();

      if (query.length) {
        try {
          const response = await HTTP.get("/search/movie", {
            params: { query }
          });
          this.movies = response.data.results;
        } catch (error) {
          this.error = error.response.data.status_message;
        }
      }
    }
  },

  async created() {
    try {
      const response = await HTTP.get("/discover/movie");
      this.movies = response.data.results;
    } catch (error) {
      this.error = error.response.data.status_message;
    }
  }
};
</script>
