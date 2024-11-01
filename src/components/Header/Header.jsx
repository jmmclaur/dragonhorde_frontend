// imports

//functions

// logo, API, toggleswitch
// if a second page is needed, can create an 'About the Dragon Horde'

//export default Header;

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"; // would be neat to toggle between offensive/defensive spells

function Header({
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
  weatherData,
  dndData,
}) {
  const currentData = new Data().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="header" />
      </Link>
      <p className="header__date-and-location">
        {" "}
        {currentData} , {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__dragon-btn"
          >
            + Add Dragon
          </button>
          <Link className="header__link" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              {currentUser?.avatar ? (
                <img
                  src={currentUser?.avatar}
                  alt="Majera Palae"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser?.name?.charAt(0).toUpperCase() || ""}
                </div>
              )}
            </div>
          </Link>
        </>
      ) : (
        <div className="header__auth">
          <button className="header__register" onClick={handleRegisterClick}>
            Register
          </button>
          <button className="header__login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}
    </header>
  );

  //logic for dnd spell data
  // if certain temperature > certain species appears > suggest spells for offense/defense
}

export default Header;
