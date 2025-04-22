import { Link } from "react-router-dom";
import style from "./MoviesCard.module.css";

const MoviesCard = ({ title, image, url }) => {
  return (
    <div className={style["card"]}>
      <Link to={url} className={style["card__link"]}>
        <img
          src={image}
          alt={`Capa do vídeo ${title}`}
          className={style["card__img"]}
        />
      </Link>
      <div className={style["card__info"]}>
        <h3 className={style["card__title"]}>{title}</h3>
        <div className={style["card__favorite"]}>S2</div>
      </div>
    </div>
  );
};

export default MoviesCard;
