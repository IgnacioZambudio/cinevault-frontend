import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWatchlist, removeFromWatchlist } from "../services/watchlistService";
import styles from "./WatchlistPage.module.css";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getWatchlist()
      .then((res) => setWatchlist(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleRemove = async (id) => {
    try {
      await removeFromWatchlist(id);
      setWatchlist(watchlist.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading watchlist...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎬 My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className={styles.empty}>No movies in your watchlist yet.</p>
      ) : (
        <div className={styles.grid}>
          {watchlist.map((entry) => (
            <div key={entry._id} className={styles.card}>
              {entry.movie?.poster ? (
                <img
                  src={entry.movie.poster}
                  alt={entry.movie.title}
                  className={styles.poster}
                  onClick={() => navigate(`/movies/${entry.movie._id}`)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <div className={styles.noPoster}>🎬</div>
              )}
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{entry.movie?.title}</h2>
                <p className={styles.status}>Status: {entry.status}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemove(entry._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;