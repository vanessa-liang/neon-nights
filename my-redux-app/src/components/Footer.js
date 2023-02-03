import { getYear } from "../utilities/getDates";
import { useMediaQuery } from "../globals/mediaSize";
import { NavLink, useNavigate } from "react-router-dom";
import MobileNav from "./FooterMobile";
// import {handleSubmit} from "../components/Nav"
// import { Nav } from "../component/Nav";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Footer = ({ copyright, authors }) => (
  <footer>
    <div className="desktopFooter">
      <p className="copyRight" hidden>
        &copy; Copyright {copyright} {authors}
      </p>

      <img
        className="footerLogo"
        hidden
        src={`${imageFolderPath}neon-nights.png`}
        alt="Neon Nights logo"
      ></img>
    </div>

    <MobileNav />

    {/* <div className="box" hidden> */}
    {/* <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Search.."
              name="search"
            /> */}
    {/* <button type="submit"> */}
    {/* <i className="fa fa-search"></i> */}
    {/* </button> */}
    {/* </form>
        </div> */}
  </footer>
);

Footer.defaultProps = {
  authors: "Sam Screpnek, Lily Colby, Tyler Homan, Vanessa Liang",
  copyright: getYear(),
};

export default Footer;
