import React, { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching popular movies:", err);
        setError("Failed to load movies.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const data = await searchMovies(searchTerm);
      setMovies(data.results || []);
      setError(null);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Search failed. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        🎬 Movie Explorer
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="mb-6 flex justify-center items-center gap-2"
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-64 sm:w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="text-center text-red-500 font-medium mb-4">{error}</div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="text-center text-gray-500">Loading movies...</div>
      ) : movies.length === 0 ? (
        <div className="text-center text-gray-500">No movies found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleDetail(movie.id)}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer transition transform hover:scale-105"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-80 object-cover"
                />
              ) : (
                <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No Image</span>
                </div>
              )}
              <div className="p-2">
                <p className="text-center font-semibold text-sm">
                  {movie.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
