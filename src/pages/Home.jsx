import React, { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const data = query
        ? await searchMovies(query, page)
        : await fetchPopularMovies(page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("⚠️ Failed to fetch movies. Please try again later.");
      setMovies([]); // Kosongkan daftar movie jika gagal
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPage(1); // Reset ke halaman pertama saat user mengetik
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="home-container">
      <h1>🎬 Movie Explorer</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearchChange}
        className="search-input"
      />

      {loading && <p className="info">⏳ Loading movies...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="info">🔍 No movies found for "{query}".</p>
      )}

      <div className="movies-grid">
        {!loading &&
          !error &&
          movies.map((movie) => (
            <Link to={`/detail/${movie.id}`} key={movie.id} className="movie-card">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
              <h3>{movie.title}</h3>
            </Link>
          ))}
      </div>

      {/* Pagination */}
      {!loading && !error && movies.length > 0 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={handlePrev}>
            ⬅ Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button disabled={page === totalPages} onClick={handleNext}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
