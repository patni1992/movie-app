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
        <b-col sm="6" lg="3" v-for="movie in movies" :key="movie.id">
          <router-link
            class="link"
            :to="{ name: 'MovieDetail', params: { id: movie.id } }"
          >
            <b-card
              :img-src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              img-alt="Movie poster card"
              img-top
              class="p-0 border-0"
            >
              <b-card-text>
                <h2>{{ movie.title }}</h2>
              </b-card-text>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api";
export default {
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
