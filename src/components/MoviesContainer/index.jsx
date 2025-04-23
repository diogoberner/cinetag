import MoviesCard from "components/MovieCard";
import styles from "./MoviesContainer.module.css";

const MoviesContainer = ({ movies }) => {
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
