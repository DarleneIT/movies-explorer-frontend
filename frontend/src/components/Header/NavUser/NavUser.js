import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavUser.css';

function NavUser() {
  const { pathname } = useLocation();
  return (
    <nav className="nav-user">
      <ul className="nav-user__list">
        <li className="nav-user__item">
          <Link to="/movies" className={`nav-user__link ${pathname !== "/" ? "" : "nav-user__link_dark"}`}>Фильмы</Link>
        </li>

        <li className="nav-user__item">
          <Link to="/saved-movies" className={`nav-user__link nav-user__link-thin ${pathname !== "/" ? "" : "nav-user__link_dark"}`}>Сохраненные фильмы</Link>
        </li>
      </ul>

      <Link to="/profile" className={`nav-user__account ${pathname !== "/" ? "" : "nav-user__account_dark"}`}>Аккаунт</Link>
      
    </nav>
  );
};

export default NavUser;