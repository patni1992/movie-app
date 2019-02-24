<template>
  <div>
    <b-alert variant="danger" :show="!!error">{{ error }}</b-alert>
    <div class="m-3">
      <b-form-input
        v-on:keyup.enter="submit"
        style="width: 100%"
        class="d-block p-2 search"
        type="text"
        placeholder="Search for a movie"
      />
    </div>
    <app-spinner v-if="loading" />
    <div v-else>
      <b-row class="m-3">
        <app-movie-card
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </b-row>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api";
import AppMovieCard from "@/components/AppMovieCard.vue";
export default {
  components: {
    AppMovieCard
  },
  data() {
    return {
      movies: [],
      error: "",
      loading: true
    };
  },
  methods: {
    async submit(e) {
      this.loading = true;
      const query = e.target.value.trim();

      if (query.length) {
        try {
          const response = await HTTP.get("/search/movie", {
            params: { query }
          });
          this.movies = response.data.results;
          this.cacheData("movies", this.movies);
        } catch (error) {
          this.error = error.response.data.status_message;
        }
      }
      this.loading = false;
    },
    cacheData(key, data) {
      sessionStorage.setItem(key, JSON.stringify(data));
    }
  },
  async created() {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    if (movies) {
      this.movies = movies;
    } else {
      try {
        const response = await HTTP.get("/discover/movie");
        this.movies = response.data.results;
        this.cacheData("movies", this.movies);
      } catch (error) {
        this.error = error.response.data.status_message;
      }
    }
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
.search {
  max-width: 22rem;
  margin: 0 auto;
}
</style>
