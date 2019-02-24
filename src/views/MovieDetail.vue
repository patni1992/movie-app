<template>
  <div>
    <app-spinner v-if="loading" />
    <div v-else>
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
        <b-breadcrumb :items="items" />
        <h2>{{ movie.title }}</h2>
        <b-row class="mb-3">
          <b-col sm="12" lg="3"
            ><span class="font-weight-bold">Rating</span>
            {{ movie.vote_average }} / 10
          </b-col>
          <b-col sm="12" lg="3">
            <span class="font-weight-bold"> Date </span>
            {{ movie.release_date }}
          </b-col>
          <b-col sm="12" lg="3">
            <span class="font-weight-bold">length</span> {{ movie.runtime }} min
          </b-col>
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
        <b-row>
          <b-col sm="12" lg="6">
            <b-table striped hover :items="movie.credits.cast" :fields="fields">
              <template slot="profile_path" slot-scope="data">
                <img
                  :src="
                    `http://image.tmdb.org/t/p/w45/${data.item.profile_path}`
                  "
                  alt=""
                />
              </template>
            </b-table>
          </b-col>
          <b-col sm="12" lg="6">
            <b-embed
              class="pb-3"
              v-for="video in movie.videos.results"
              :key="video.id"
              type="iframe"
              aspect="16by9"
              :src="`https://www.youtube.com/embed/${video.key}?rel=0$`"
              allowfullscreen
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api";
export default {
  data() {
    return {
      items: [
        {
          text: "Movies",
          to: "/"
        },
        {
          text: ""
        }
      ],
      fields: [
        {
          key: "name"
        },
        { key: "character" },
        { key: "profile_path", label: "picture" }
      ],
      movie: null,
      loading: true,
      error: ""
    };
  },
  methods: {},

  async created() {
    HTTP.get(`/movie/${this.$route.params.id}`, {
      params: {
        append_to_response: "videos,credits"
      }
    })
      .then(resp => {
        this.movie = resp.data;
      })
      .finally(() => {
        this.items[this.items.length - 1].text = this.movie.title;
        return (this.loading = false);
      });
  }
};
</script>
<style scoped lang="scss">
.movie-header {
  padding-bottom: 22rem;
}
</style>
