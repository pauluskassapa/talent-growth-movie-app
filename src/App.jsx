import { useEffect, useState } from "react";
import { fetchPopularMovies } from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movieList = await fetchPopularMovies();
      setMovies(movieList);
    };

    loadMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
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
