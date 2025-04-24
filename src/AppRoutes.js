import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Favorite from "pages/Favorite";
import Player from "pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorite />} />
          <Route path="/player/:id" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
