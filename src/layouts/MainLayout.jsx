import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>🎬 CineVault</Link>
        <div className={styles.navLinks}>
          {user ? (
            <>
              <Link to="/watchlist">My Watchlist</Link>
              <span className={styles.userName}>Hello, {user.name}</span>
              <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;