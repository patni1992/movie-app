import Vue from "vue";
import Router from "vue-router";
import MovieList from "./views/MovieList.vue";
import MovieDetail from "./views/MovieDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:id",
      name: "MovieDetail",
      component: MovieDetail
    },
    {
      path: "/",
      name: "MovieList",
      component: MovieList
    }
  ]
});
