const ApiKey = "5cde98f78026f3a591337738922b5a48";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};
