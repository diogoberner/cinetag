import { Link } from "react-router-dom";
import style from "./MenuLink.module.css";

const MenuLink = ({ url, children }) => {
  return (
    <Link to={url} className={style["header__nav-link"]}>
      {children}
    </Link>
  );
};

export default MenuLink;
