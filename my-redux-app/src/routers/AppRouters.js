import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/Home";
import PageAbout from "../pages/About";
import PageSingle from "../pages/Single";
import PageFavourite from "../pages/Favourite";
import PageNotFound from "../pages/Page-not-found";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="nav-wrapper">
        <Nav />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourite" element={<PageFavourite />} />
          <Route path="/single" element={<PageSingle />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
