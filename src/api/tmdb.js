const API_KEY = "d2077e5a9eabd2513518d1da671f9bb0"; // ganti dengan API Key TMDB kamu
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return await res.json();
};

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
  if (!res.ok) throw new Error("Failed to search movies");
  return await res.json();
};
export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return await response.json();
};