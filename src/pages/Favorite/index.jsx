import MoviesContainer from "components/MoviesContainer";
import styles from "./Favorite.module.css";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";

const Favorite = () => {
  const { movies } = useContext(MoviesContext);
  const favoriteMovies = movies.filter((movie) => movie.favorito === true);

  return (
    <section className={styles["favorite"]}>
      <h2 className={styles["favorite__title"]}>Meus Favoritos</h2>
      <MoviesContainer movies={favoriteMovies} />
    </section>
  );
};

export default Favorite;
