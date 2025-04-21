import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import MenuLink from "components/MenuLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style["header"]}>
      <Link to="/">
        <img src={logo} alt="Logo da Cine Tag" className="header__logo" />
      </Link>
      <nav className={style["header__nav"]}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">Favoritos</MenuLink>
      </nav>
    </header>
  );
};

export default Header;
