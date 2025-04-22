import styles from "./Banner.module.css";

const Banner = ({ img }) => {
  return (
    <div
      className={styles["banner__container"]}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Banner;
