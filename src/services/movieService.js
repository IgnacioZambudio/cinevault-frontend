import api from "./api";

export const getMovies = (params) => api.get("/movies", { params });
export const getMovieById = (id) => api.get(`/movies/${id}`);
export const createMovie = (data) => api.post("/movies", data);
export const updateMovie = (id, data) => api.put(`/movies/${id}`, data);
export const deleteMovie = (id) => api.delete(`/movies/${id}`);