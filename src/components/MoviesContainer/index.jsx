import MoviesCard from "components/MovieCard";
import style from "./MoviesContainer.module.css";

const MoviesContainer = () => {
  return (
    <>
      <h2 className={style["movies__title"]}>
        Um lugar para guardar seus vídeos e filmes!
      </h2>
      <section className={style["movies__container"]}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
    </>
  );
};

export default MoviesContainer;
