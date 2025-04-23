import MoviesContainer from "components/MoviesContainer";
import styles from "./Home.module.css";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";

const Home = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <main className={styles["home"]}>
      <h2 className={styles["home__title"]}>
        Um lugar para guardar seus vídeos e filmes!
      </h2>
      <MoviesContainer movies={movies} />
    </main>
  );
};

export default Home;
