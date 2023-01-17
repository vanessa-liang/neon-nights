import {getYear} from '../utilities/getDates';

const Footer = ({copyright, authors}) => (
    <footer>
        <p>&copy; {copyright} {authors}</p>
    </footer>
);

Footer.defaultProps = {
    authors: "Lily Colby, Tyler Homan, Vanessa Liang, Sam Screpnek",
    copyright: getYear()
}

export default Footer;