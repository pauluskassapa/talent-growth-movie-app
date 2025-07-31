import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const movieList = await fetchPopularMovies();
      setMovies(movieList);
    };

    loadMovies();
  }, []);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Popular Movies</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={query}
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 8, width: 250, marginRight: 10 }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
          Search
        </button>
      </div>

      {/* Movie List */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              margin: 10,
              width: 200,
              border: "1px solid #ddd",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: 5 }}
            />
            <p style={{ fontWeight: "bold", margin: "10px 0 5px" }}>
              {movie.title}
            </p>
            <p style={{ margin: 0 }}>📅 {movie.release_date}</p>
            <p style={{ margin: 0 }}>⭐ {movie.vote_average}</p>
            <p style={{ fontSize: 12, color: "#555" }}>
              {movie.overview ? movie.overview.substring(0, 100) + "..." : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
