import MoviesContainer from "components/MoviesContainer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles["home"]}>
      <h2 className={styles["home__title"]}>
        Um lugar para guardar seus vídeos e filmes!
      </h2>
      <MoviesContainer />
    </main>
  );
};

export default Home;
