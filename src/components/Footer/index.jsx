import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style["footer__text"]}>
        Desenvolvido por Diogo (Projeto da Alura)
      </p>
    </footer>
  );
};

export default Footer;
