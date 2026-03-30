import api from "./api";

export const getWatchlist = () => api.get("/watchlist");
export const addToWatchlist = (data) => api.post("/watchlist", data);
export const removeFromWatchlist = (id) => api.delete(`/watchlist/${id}`);