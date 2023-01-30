import { getYear } from "../utilities/getDates";
import { useMediaQuery } from "../globals/mediaSize";
import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Footer = ({ copyright, authors }) => (
  <footer>
    <div class="desktopFooter">
      <p class="copyRight" hidden>
        &copy; Copyright {copyright} {authors}
      </p>

      <img
        class="footerLogo"
        hidden
        src={`${imageFolderPath}neon-nights.png`}
        alt="Neon Nights logo"
      ></img>
    </div>
    <div class="navIcons">
      <NavLink to="/">
        <img src={`${imageFolderPath}home.svg`} alt="Neon Nights logo"></img>
      </NavLink>
      <NavLink to="/favourite">
        <img src={`${imageFolderPath}fav.svg`} alt="Neon Nights logo"></img>
      </NavLink>
      <NavLink to="/about">
        <img src={`${imageFolderPath}about.svg`} alt="Neon Nights logo"></img>
      </NavLink>
      <img src={`${imageFolderPath}search.svg`} alt="Neon Nights logo"></img>
    </div>
  </footer>
);

Footer.defaultProps = {
  authors: "Sam Screpnek, Lily Colby, Tyler Homan, Vanessa Liang",
  copyright: getYear(),
};

export default Footer;
