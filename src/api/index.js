import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: process.env.VUE_APP_API_TOKEN
  }
});
