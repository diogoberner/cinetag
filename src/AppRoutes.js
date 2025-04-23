import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Favorite from "pages/Favorite";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
