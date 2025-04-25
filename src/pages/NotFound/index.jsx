import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles["not-found"]}>
      <h1>Ops!</h1>
      <p>O conteúdo que você procura não foi encontrado!</p>
    </section>
  );
};

export default NotFound;
