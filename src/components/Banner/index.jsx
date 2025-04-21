import style from "./Banner.module.css";

const Banner = ({ img }) => {
  return (
    <div className={style["banner__container"]}>
      <img
        src={img}
        alt="Banner do Cine Tag"
        className={style["banner__img"]}
      />
    </div>
  );
};

export default Banner;
