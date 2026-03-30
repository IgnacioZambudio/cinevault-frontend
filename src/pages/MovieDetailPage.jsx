import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService";
import { addToWatchlist } from "../services/watchlistService";
import { useAuth } from "../context/AuthContext";
import styles from "./MovieDetailPage.module.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    getMovieById(id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToWatchlist = async () => {
    try {
      await addToWatchlist({ movieId: id, status: "pending" });
      setMessage("Added to watchlist! ✅");
      setIsError(false);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error adding to watchlist");
      setIsError(true);
    }
  };

  if (loading) return <p>Loading movie...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className={styles.container}>
      {movie.poster ? (
        <img src={movie.poster} alt={movie.title} className={styles.poster} />
      ) : (
        <div className={styles.noPoster}>🎬</div>
      )}
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.meta}>{movie.genre} — {movie.year}</p>
        <p className={styles.synopsis}>{movie.synopsis}</p>
        {message && (
          <p className={isError ? styles.errorMessage : styles.message}>{message}</p>
        )}
        {user && (
          <button className={styles.addBtn} onClick={handleAddToWatchlist}>
            + Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;