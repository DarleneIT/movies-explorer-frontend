import './NavGuest.css';
import { Link } from 'react-router-dom';

function NavAuth() {
  return (
    <nav className="nav-guest">
      <ul className="nav-guest__list">
        <li className="nav-guest__list-item">
          <Link to="/signup" className="nav-guest__link nav-guest__link_type_signup">Регистрация</Link>
        </li>
        <li className="nav-guest__list-item">
          <Link to="/signin" className="nav-guest__link nav-guest__link_signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavAuth;