import { createContext, useEffect, useState } from "react";
import { api } from "services/api";
// import moviesDB from "../../json/db.json";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getMovies();
        setMovies(data.videos);
      } catch (error) {
        console.error("Erro ao buscar filmes: ", error);
      }
    };

    fetchData();
  }, [setMovies]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
