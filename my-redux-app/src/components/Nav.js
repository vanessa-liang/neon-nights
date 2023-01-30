import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Nav = () => {
  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <nav className="main-nav" onClick={handleBlurOnClick}>
      <nav className="main-nav" onClick={handleBlurOnClick}></nav>

      <ul className="nav-links">
        <NavLink to="/">
          <img
            src={`${imageFolderPath}neon-nights.png`}
            alt="Neon Nights logo"
          ></img>
        </NavLink>

        <li class="home" hidden>
          <NavLink to="/">Home</NavLink>
        </li>
        <li class="fav" hidden>
          <NavLink to="/favourite">Favourites</NavLink>
        </li>
        <li class="about" hidden>
          <NavLink to="/about">About</NavLink>
        </li>
        <img
          class="navsearch"
          src={`${imageFolderPath}headersearch.svg`}
          alt="header search"
          hidden
        ></img>
      </ul>
    </nav>
  );
};

export default Nav;
