import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Nav = () => {
  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <nav className="main-nav" onClick={handleBlurOnClick}>
      <nav className="main-nav" onClick={handleBlurOnClick}></nav>
      <img src={`${imageFolderPath}neon-nights.png`} alt="Neon Nights logo"></img>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favourite">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
