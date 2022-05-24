import axios from "axios";
export const baseURL: any = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
