import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer__text"]}>
        Desenvolvido por Diogo (Projeto da Alura)
      </p>
    </footer>
  );
};

export default Footer;
