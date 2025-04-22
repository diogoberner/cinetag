import MoviesContainer from "components/MoviesContainer";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style["home"]}>
      <MoviesContainer />
    </main>
  );
};

export default Home;
