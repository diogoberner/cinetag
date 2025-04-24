import MoviesContainer from "components/MoviesContainer";
import styles from "./Home.module.css";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";
import SectionTitle from "components/SectionTitle";

const Home = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <main className={styles["home"]}>
      <SectionTitle>Um lugar para guardar seus vídeos e filmes!</SectionTitle>
      <MoviesContainer movies={movies} />
    </main>
  );
};

export default Home;
