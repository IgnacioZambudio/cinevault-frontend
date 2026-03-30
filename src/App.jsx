import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WatchlistPage from "./pages/WatchlistPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;