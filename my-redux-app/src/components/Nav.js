import { NavLink, useNavigate } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const Nav = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let searchInput = event.target[0].value.trim();
    // searchQuery.trim();
    if (searchInput === "") {
      return;
    } else {
      navigate(`/result/${searchInput}`, { state: { searchInput: `${searchInput}` } });
    }
  }

  function handleBlurOnClick(e) {
    e.target.blur();
  }

  return (
    <>
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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Nav;
