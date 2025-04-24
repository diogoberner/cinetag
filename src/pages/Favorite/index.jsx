import MoviesContainer from "components/MoviesContainer";
import styles from "./Favorite.module.css";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";
import SectionTitle from "components/SectionTitle";

const Favorite = () => {
  const { movies } = useContext(MoviesContext);
  const favoriteMovies = movies.filter((movie) => movie.favorito === true);

  return (
    <section className={styles["favorite"]}>
      <SectionTitle>
        <h1>Meus Favoritos</h1>
      </SectionTitle>
      <MoviesContainer movies={favoriteMovies} />
    </section>
  );
};

export default Favorite;
