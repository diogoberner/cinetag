import MoviesCard from "components/MovieCard";
import styles from "./MoviesContainer.module.css";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";

const MoviesContainer = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <section className={styles["movies__container"]}>
        {movies.map((movie) => {
          return <MoviesCard key={movie.id} movie={movie} />;
        })}
      </section>
    </>
  );
};

export default MoviesContainer;
