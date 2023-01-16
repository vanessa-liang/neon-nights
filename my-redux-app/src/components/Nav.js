import { NavLink } from "react-router-dom";

const Nav = () => {
  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <nav className="main-na" onClick={handleBlurOnClick}>
      <nav className="main-nav" onClick={handleBlurOnClick}></nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="">Manage User</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
