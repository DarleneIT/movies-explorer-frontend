import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { pathname } = useLocation();
  return (
    <footer
      className={`footer ${
        pathname === "/saved-movies" ? "footer_saved-movies" : ""
      }`}
    >
      <div className="footer__box">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>

        <div className="footer__credentials">
          <p className="footer__date">© 2023</p>

          <ul className="footer__links">
            <li className="footer__link">
              <a
                href="https://practicum.yandex.ru/"
                className="footer__link-name"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://github.com/"
                className="footer__link-name"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
