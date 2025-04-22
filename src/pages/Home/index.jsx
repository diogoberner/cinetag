import MoviesContainer from "components/MoviesContainer";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style["home"]}>
      <h2 className={style["home__title"]}>
        Um lugar para guardar seus vídeos e filmes!
      </h2>
      <MoviesContainer />
    </main>
  );
};

export default Home;
