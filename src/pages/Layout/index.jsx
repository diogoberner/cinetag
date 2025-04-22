import Header from "components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import bannerHome from "../../assets/images/banner-home.png";
import bannerFavorite from "../../assets/images/banner-favoritos.png";
import bannerPlayer from "../../assets/images/banner-player.png";
import Banner from "components/Banner";
import Footer from "components/Footer";

const Layout = () => {
  const location = useLocation();
  const getBanner = (path) => {
    switch (path) {
      case "/":
        return bannerHome;
      case "/favoritos":
        return bannerFavorite;
      case "/player":
        return bannerPlayer;

      default:
        return bannerHome;
    }
  };

  return (
    <>
      <Header />
      <Banner img={getBanner(location.pathname)} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
