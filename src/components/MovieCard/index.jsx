import { Link } from "react-router-dom";
import styles from "./MoviesCard.module.css";

const MoviesCard = ({ title, image, url }) => {
  return (
    <div className={styles["card"]}>
      <Link to={url} className={styles["card__link"]}>
        <img
          src={image}
          alt={`Capa do vídeo ${title}`}
          className={styles["card__img"]}
        />
      </Link>
      <div className={styles["card__info"]}>
        <h3 className={styles["card__title"]}>{title}</h3>
        <div className={styles["card__favorite"]}>S2</div>
      </div>
    </div>
  );
};

export default MoviesCard;
