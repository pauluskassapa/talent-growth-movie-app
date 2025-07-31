import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const movieList = await fetchPopularMovies();
      setMovies(movieList);
      setIsLoading(false);
    };

    loadMovies();
  }, []);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    setIsLoading(true);
    const searchResult = await searchMovies(query);
    setMovies(searchResult);
    setNoResults(searchResult.length === 0);
    setIsLoading(false);
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

      {/* Loading / No Results Info */}
      {isLoading && <p>Loading movies...</p>}
      {noResults && <p>No movies found. Try another title.</p>}

      {/* Movie Grid */}
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
