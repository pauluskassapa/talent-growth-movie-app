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
          <div key={movie.id} style={{ margin: 10, width: 200 }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
