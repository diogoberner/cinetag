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
          return (
            <MoviesCard
              key={movie.id}
              title={movie.titulo}
              image={movie.capa}
              url={movie.link}
            />
          );
        })}
      </section>
    </>
  );
};

export default MoviesContainer;
