import styles from "./Player.module.css";

const Player = ({ url }) => {
  return (
    <div className={styles["player"]}>
      <iframe
        style={{ width: "100%", aspectRatio: "16/9" }}
        src={`${url}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Player;
