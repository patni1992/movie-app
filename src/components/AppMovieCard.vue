<template>
  <b-col sm="6" lg="3">
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
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {};
  }
};
</script>
