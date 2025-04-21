import { Link } from "react-router-dom";
import style from "./MenuLink.module.css";

const MenuLink = ({ to, children }) => {
  return (
    <Link to={to} className={style["header__nav-link"]}>
      {children}
    </Link>
  );
};

export default MenuLink;
