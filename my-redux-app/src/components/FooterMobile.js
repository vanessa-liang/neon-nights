import { NavLink, useNavigate } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

const MobileNav = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let searchInput = event.target[0].value.trim();
    // searchQuery.trim();
    if (searchInput === "") {
      return;
    } else {
      navigate(`/result/${searchInput}`, {
        state: { searchInput: `${searchInput}` },
      });
    }
  }

  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <>
      <div className="navIcons">
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
        <div className="boxTwo" hidden>
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Search.."
              name="search"
            />
            {/* <button type="submit"> */}
            <i className="fa fa-search"></i>
            {/* </button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
