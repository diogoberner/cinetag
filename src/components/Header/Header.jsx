import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import MenuLink from "components/MenuLink";

const Header = () => {
  return (
    <header className={style["header"]}>
      <div className={style["header__logo-container"]}>
        <img src={logo} alt="Logo da Cine Tag" className="header__logo" />
      </div>
      <nav className={style["header__nav"]}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">Favoritos</MenuLink>
      </nav>
    </header>
  );
};

export default Header;
