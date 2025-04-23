import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import MenuLink from "components/MenuLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Link to="/" className={styles["header__logo-container"]}>
        <img src={logo} alt="Logo da Cine Tag" className="header__logo" />
      </Link>
      <nav className={styles["header__nav"]}>
        <MenuLink url="/">Home</MenuLink>
        <MenuLink url="/favoritos">Favoritos</MenuLink>
      </nav>
    </header>
  );
};

export default Header;
