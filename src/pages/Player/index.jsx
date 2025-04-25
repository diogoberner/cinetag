import Video from "components/Video";
import styles from "./Player.module.css";
import SectionTitle from "components/SectionTitle";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "context/MoviesContext/MoviesContext";
import NotFound from "pages/NotFound";

const Player = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <NotFound />;
  }

  return (
    <div className={styles["player"]}>
      <SectionTitle>
        <h1>Player</h1>
      </SectionTitle>
      {movie ? <Video url={movie.link} /> : null}
    </div>
  );
};

export default Player;
