import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Single from "../pages/Single";
import Favourites from "../pages/Favourites";
import PageNotFound from "../pages/Page-not-found";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="nav-wrapper">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/single" element={<Single />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
