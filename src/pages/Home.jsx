import React, { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Cek login
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Load dark mode dari localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) setDarkMode(savedTheme === "true");
  }, []);

  // Simpan dark mode ke localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const data = query
        ? await searchMovies(query, page)
        : await fetchPopularMovies(page);

      setMovies((prev) =>
        page === 1 ? data.results : [...prev, ...data.results]
      );
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("⚠️ Failed to fetch movies. Please try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, page]);

  // Scroll pagination
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (
        scrollTop + windowHeight >= fullHeight - 100 &&
        !loading &&
        page < totalPages
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, totalPages]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>
      <div className="top-bar">
        <button onClick={toggleDarkMode} className="toggle-dark">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <button onClick={handleLogout} className="logout-button">
          🚪 Logout
        </button>
      </div>

      <h1 className="title">🎬 Movie Explorer</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearchChange}
        className="search-input"
      />

      {error && <p className="error">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="info">🔍 No movies found for "{query}".</p>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
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

      {loading && <p className="loading-info">⏳ Loading more movies...</p>}
      {!loading && movies.length > 0 && (
        <p className="loading-info">Page {page} of {totalPages}</p>
      )}
    </div>
  );
};

export default Home;
