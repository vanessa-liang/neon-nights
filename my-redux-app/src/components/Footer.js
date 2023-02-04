import { getYear } from "../utilities/getDates";
import MobileNav from "./FooterMobile";


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
  </footer>
);

Footer.defaultProps = {
  authors: "Sam Screpnek, Lily Colby, Tyler Homan, Vanessa Liang",
  copyright: getYear(),
};

export default Footer;
