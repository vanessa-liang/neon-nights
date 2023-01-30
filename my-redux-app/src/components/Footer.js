import {getYear} from '../utilities/getDates';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Footer = ({copyright, authors}) => (
    <footer>
        <p>&copy; Copyright {copyright} {authors}</p>
        <img src={`${imageFolderPath}neon-nights.png`} alt="Neon Nights logo"></img>
    </footer>
);

Footer.defaultProps = {
    authors: "Sam Screpnek, Lily Colby, Tyler Homan, Vanessa Liang",
    copyright: getYear()
}

export default Footer;