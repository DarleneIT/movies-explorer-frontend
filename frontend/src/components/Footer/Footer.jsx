import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className={`footer ${pathname ==='/saved-movies' ? "footer_saved-movies" : ""}`}>
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__credentials">
        <p className="footer__date">© 2023</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">
            <p className="footer__link-name">Яндекс.Практикум</p>
          </a>
          <a href="https://github.com/" target="_blank" className="footer__link">
            <p className="footer__link-name">Github</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;