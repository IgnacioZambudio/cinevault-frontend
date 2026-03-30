import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../services/movieService";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies()
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎬 All Movies</h1>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className={styles.grid}>
          {movies.map((movie) => (
            <div
              key={movie._id}
              className={styles.card}
              onClick={() => navigate(`/movies/${movie._id}`)}
            >
              {movie.poster ? (
                <img src={movie.poster} alt={movie.title} className={styles.poster} />
              ) : (
                <div className={styles.noPoster}>🎬</div>
              )}
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{movie.title}</h2>
                <p className={styles.cardMeta}>{movie.genre} — {movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;