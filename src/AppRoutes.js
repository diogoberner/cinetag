import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "components/pages/Home/Home";
import Layout from "components/pages/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
