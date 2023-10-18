import "./NavUser.css";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const { pathname } = useLocation();

  const showBurgerMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-user">
      <button
        className={`nav-user__menu ${
          pathname !== "/" ? "" : "nav-user__menu_light"
        }`}
        type="button"
        onClick={showBurgerMenu}
      ></button>

      <div className={`nav-user__box ${isOpen ? "nav-user__box_visible" : ""}`}>
        <div className="nav-user__sidebar">
          <div className="nav-user__list">
            <button
              className="nav-user__close"
              type="button"
              onClick={showBurgerMenu}
            ></button>
            <ul className="nav-user__item">

              <li>
                <Link to="/" className="nav-user__link nav-user__link_hide">
                  Главная
                </Link>
              </li>

              <li>
                <NavLink
                  to="/movies"
                  activeclassname="true"
                  className={`nav-user__link ${
                    pathname !== "/" ? "" : "nav-user__link_light"
                  }`}
                >
                  Фильмы
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/saved-movies"
                  activeclassname="true"
                  className={`nav-user__link ${
                    pathname !== "/" ? "" : "nav-user__link_light"
                  }`}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>

            </ul>
          </div>
          <Link
            to="/profile"
            className={`nav-user__account ${
              pathname !== "/" ? "" : "nav-user__account_light"
            }`}
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
