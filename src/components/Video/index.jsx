import { useState } from "react";
import styles from "./Video.module.css";

const Video = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!url) {
    return null;
  }

  return (
    <div className={styles["container"]}>
      {isLoading && (
        <div className={styles["loading"]}>Carregando vídeo...</div>
      )}

      <iframe
        style={{ width: "100%", aspectRatio: "16/9" }}
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles["video"]}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Video;
