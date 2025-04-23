import { Link } from "react-router-dom";
import styles from "./MoviesCard.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";

const MoviesCard = ({ movie }) => {
  const { movies, setMovies } = useContext(MoviesContext);

  const handleFavorite = (id) => {
    const favoriteMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, favorito: !movie.favorito } : movie
    );
    setMovies(favoriteMovies);
  };

  return (
    <div className={styles["card"]}>
      <Link to={movie.link} className={styles["card__link"]}>
        <img
          src={movie.capa}
          alt={`Capa do vídeo ${movie.titulo}`}
          className={styles["card__img"]}
        />
      </Link>
      <div className={styles["card__info"]}>
        <h3 className={styles["card__title"]}>{movie.titulo}</h3>
        <div
          className={styles["card__favorite"]}
          onClick={() => handleFavorite(movie.id)}
        >
          {movie.favorito ? (
            <MdFavorite size={25} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
