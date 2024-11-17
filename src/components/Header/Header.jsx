// imports
// logo, API, toggleswitch
// if a second page is needed, can create an 'About the Dragon Horde'

//export default Header;
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/dragonhorde_logo.png";
import logo1 from "../../assets/dragonhorde_logo1.png";
import logo2 from "../../assets/dragonhorde_logo2.png";
import logo3 from "../../assets/dragonhorde_logo3.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

/*
function Header({}) {
  return <div>Header</div>;
} */

function Header({
  handleRegisterClick,
  handleLoginClick,
  handleAddClick,
  isLoggedIn,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="dragon horde logo big" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {" "}
        {currentDate} , {weatherData.city}
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
                  alt="Terrence Tegegne"
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
          <button
            className="header__registration"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
          <button className="header__login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}
      ;
    </header>
  );
}

/*
function Header({ handleRegisterClick, handleLoginClick }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="header" />
      </Link>
      <Link className="header__link" to="/profile">
        <p className="header__username">Hello</p>
      </Link>
      <div className="header__auth">
        <button className="header_register" onClick={handleRegisterClick}>
          Sign Up
        </button>
        <button className="header__login" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </header>
  );
} */
export default Header;
