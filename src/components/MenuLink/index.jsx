import { Link } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles["header__nav-link"]}>
      {children}
    </Link>
  );
};

export default MenuLink;
