const API_KEY = "d2077e5a9eabd2513518d1da671f9bb0";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results; // ✅ ini penting!
};

// Search movies
export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.results; // ✅ penting juga!
};

// Movie detail
export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};
