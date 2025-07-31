import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch detail:", err);
        setError("Failed to load movie detail.");
      }
    };

    loadDetail();
  }, [id]);

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  if (!movie) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-600 mb-2">
            Release Date: {movie.release_date}
          </p>
          <p className="mb-4">{movie.overview}</p>
          <p className="italic text-sm text-gray-500">
            Rating: {movie.vote_average} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
