import styles from "./Video.module.css";

const Video = ({ url }) => {
  return (
    <iframe
      style={{ width: "100%", aspectRatio: "16/9" }}
      src={`${url}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={styles["video"]}
    />
  );
};

export default Video;
