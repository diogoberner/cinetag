import style from "./MoviesCard.module.css";

const MoviesCard = () => {
  return (
    <div className={style["card"]}>
      <img
        src="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png"
        alt="Capa do vídeo praticando React"
        className={style["card__img"]}
      />
      <div className={style["card__info"]}>
        <h3 className={style["card__title"]}>Praticando React</h3>
        <div className={style["card__favorite"]}>S2</div>
      </div>
    </div>
  );
};

export default MoviesCard;
