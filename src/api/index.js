import axios from "axios";

export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: process.env.VUE_APP_API_TOKEN,
    include_adult: false
  }
});
