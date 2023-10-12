import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

import NavGuest from "./NavGuest/NavGuest";
import NavUser from "./NavUser/NavUser";

const Header = ({ isLoggedIn }) => {
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname !== "/" ? "" : "header_dark"}`}>
      <div className="header__box">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      {isLoggedIn ? <NavUser /> : <NavGuest />}
      </div>
    </header>
  );
};

export default Header;
