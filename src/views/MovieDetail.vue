<template>
  <div>
    <b-row v-if="movie" class="m-3">
      <b-col sm="6" lg="3">
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
// import { HTTP } from "@/api";
export default {
  data() {
    return {
      movie: null,
      error: ""
    };
  },
  methods: {},

  async created() {
    const movie = JSON.parse(sessionStorage.getItem("movie"));
    if (movie && movie.id == this.$route.params.id) {
      this.movie = movie;
    }
    // HTTP.get("/movies/get-movie-credits").then(resp => {
    //   console.log(resp.data);
    // });
  }
};
</script>
