import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Favorite from "pages/Favorite";
import Player from "pages/Player";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favorite />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
