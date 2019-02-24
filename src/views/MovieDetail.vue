<template>
  <div v-if="!!movie">
    <b-jumbotron
      :style="{
        backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${
          movie.poster_path
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }"
      class="text-light movie-header"
    >
    </b-jumbotron>
    <div class="container">
      <h2>{{ movie.title }}</h2>
      <b-row class="mb-3">
        <b-col sm="12" lg="3">
          {{ movie.release_date }}
        </b-col>
        <b-col sm="12" lg="3"> {{ movie.runtime }} min </b-col>
        <b-col sm="12" lg="3">
          <b-badge
            v-for="genre in movie.genres"
            :key="genre.id"
            variant="secondary"
            class="mr-2"
            >{{ genre.name }}</b-badge
          >
        </b-col>
      </b-row>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api";
export default {
  data() {
    return {
      movie: null,
      error: ""
    };
  },
  methods: {},

  async created() {
    HTTP.get(`/movie/${this.$route.params.id}`, {
      params: {
        append_to_response: "videos,credits"
      }
    }).then(resp => {
      this.movie = resp.data;
    });
  }
};
</script>
<style scoped lang="scss">
.movie-header {
  padding-bottom: 22rem;
}
</style>
